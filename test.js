require('./data/db')();
const univDao = require('./data/daos/university.dao.server');
const assert = require('assert');

// Methods for testing Initial Counts
const testStudentInitialCount = () =>
    univDao.findAllStudents().then(students => assert(students.length === 2));

const testQuestionsInitialCount = () =>
    univDao.findAllQuestions().then(questions => assert(questions.length === 4));

const testAnswersInitialCount = () =>
    univDao.findAllAnswers().then(answers => assert(answers.length === 8));

//Methods for testing delete methods
const testDeleteAnswer = () =>
    univDao.deleteAnswer(890)
    .then(() => univDao.findAllAnswers().then(answers => assert(answers.length === 7)))
    .then(() => univDao.findAnswersByStudent(234).then(answers => assert(answers.length === 3)));


const testDeleteQuestions = () =>
    univDao.deleteQuestion(321)
    .then(() => univDao.findAllQuestions().then(questions => assert(questions.length === 3)))

const testDeleteStudent = () =>
    univDao.deleteStudent(234)
    .then(() => univDao.findAllStudents().then(students => assert(students.length === 1)));

//Performing test suite operations
univDao.truncateDatabase()
    .then(() => univDao.populateDatabase())
    .then(() => testStudentInitialCount())
    .then(() => testQuestionsInitialCount())
    .then(() => testAnswersInitialCount())
    .then(() => testDeleteAnswer())
    .then(() => testDeleteQuestions())
    .then(() => testDeleteStudent());