const studentModel = require('../models/student.model.server');
const questionModel = require('../models/question.model.server');
const answerModel = require('../models/answer.model.server');

//Student Collection Methods
const createStudent = (student) => studentModel.create(student);
const dropStudent = () => studentModel.collection.drop();
const findAllStudents = () => studentModel.find();
const findStudentById = (studentId) => studentModel.findById(studentId);
const deleteStudent = (studentId) => studentModel.deleteOne({_id: studentId});

//Question Collection Methods
const createQuestion = (question) => questionModel.create(question);
const dropQuestion = () => questionModel.collection.drop();
const findAllQuestions = () => questionModel.find();
const findQuestionById = (questionId) => questionModel.findById(questionId);
const deleteQuestion = (questionId) => questionModel.deleteOne({_id: questionId});

//Answer Collection Methods
const createAnswer = (answer) => answerModel.create(answer);
const dropAnswer = () => answerModel.collection.drop();
const findAllAnswers = () => answerModel.find(); //.populate('student','firstName').exec();
const findAnswerById = (answerId) => answerModel.findById(answerId);
const findAnswersByStudent = (studentId) => answerModel.find({student : studentId});
const findAnswersByQuestion = (questionId) => answerModel.find({question: questionId});
const deleteAnswer = (id) => answerModel.deleteOne({_id: id});;

//Method for truncating the collections
const truncateDatabase = () =>
        studentModel.collection.drop()
        .then(() => questionModel.collection.drop())
        .then(() => answerModel.collection.drop());

//Method for populating db with required data
const populateDatabase = () =>
    studentModel.create({
        _id: 123,
        username: 'alice',
        password: 'alice',
        firstName: 'Alice',
        lastName: 'Wonderland',
        gradYear: 2020,
        scholarship: 15000
    })
    .then(alice => studentModel.create({
        _id: 234,
        username: 'bob',
        password: 'bob',
        firstName: 'Bob',
        lastName: 'Hope',
        gradYear: 2021,
        scholarship: 12000
    }))
    .then(bob => questionModel.create({
        _id: 321,
        question: 'Is the following schema valid?',
        points: 10,
        questionType: 'TRUE_FALSE',
        trueFalse : {
            isTrue: false
        }
    }))
    .then(schemaValidQuestion => questionModel.create({
        _id: 432,
        question: 'DAO stands for Dynamic Access Object.',
        points: 10,
        questionType: 'TRUE_FALSE',
        trueFalse : {
                isTrue: false
        }
    }))
    .then(daoQuestion => questionModel.create({
        _id: 543,
        question: 'What does JPA stand for?',
        points: 10,
        questionType: 'MULTIPLE_CHOICE',
        multipleChoice : {
            choices: 'Java Persistence API, Java Persisted Application, JavaScript Persistence API, JSON Persistent Associations',
            correct: 1
        }
    }))
    .then(jpaQuestion => questionModel.create({
        _id: 654,
        question: 'What does ORM stand for?',
        points: 10,
        questionType: 'MULTIPLE_CHOICE',
        multipleChoice : {
            choices: 'Object Relational Model, Object Relative Markup, Object Reflexive Model, Object Relational Mapping',
            correct: 4
        }
    }))
    .then(ormQuestion => answerModel.create({
        _id: 123,
        trueFalseAnswer: true,
        student: 123,
        question: 321
    }))
    .then(aliceValidSchemaAnswer => answerModel.create({
        _id: 234,
        trueFalseAnswer: false,
        student: 123,
        question: 432
    }))
    .then(aliceDaoAnswer => answerModel.create({
        _id: 345,
        multipleChoiceAnswer: 1,
        student: 123,
        question: 543
    }))
    .then(aliceJpaAnswer => answerModel.create({
        _id: 456,
        multipleChoiceAnswer: 2,
        student: 123,
        question: 654
    }))
    .then(aliceOrmAnswer => answerModel.create({
        _id: 567,
        trueFalseAnswer: false,
        student: 234,
        question: 321
    }))
    .then(bobValidSchemaAnswer => answerModel.create({
        _id: 678,
        trueFalseAnswer: true,
        student: 234,
        question: 432
    }))
    .then(bobDaoAnswer => answerModel.create({
        _id: 789,
        multipleChoiceAnswer: 3,
        student: 234,
        question: 543
    }))
    .then(bobJpaAnswer => answerModel.create({
        _id: 890,
        multipleChoiceAnswer: 4,
        student: 234,
        question: 654
    }));


module.exports = {
    createStudent,
    dropStudent,
    findAllStudents,
    findStudentById,
    deleteStudent,
    createQuestion,
    dropQuestion,
    findAllQuestions,
    findQuestionById,
    deleteQuestion,
    createAnswer,
    dropAnswer,
    findAllAnswers,
    findAnswerById,
    findAnswersByStudent,
    findAnswersByQuestion,
    deleteAnswer,
    truncateDatabase,
    populateDatabase
}