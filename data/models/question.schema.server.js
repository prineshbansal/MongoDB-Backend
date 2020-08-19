const mongoose = require('mongoose');

const trueOrFalseSchema = require('./true-false.schema.server');
const multipleChoiceSchema = require('./multiple-choice.schema.server');

const questionSchema = mongoose.Schema({
    _id: Number,
    question: String,
    points: Number,
    questionType: {type: String, enum: ['MULTIPLE_CHOICE', 'TRUE_FALSE']},
    multipleChoice: multipleChoiceSchema,
    trueFalse: trueOrFalseSchema
}, {collection : 'questions'});

module.exports = questionSchema;