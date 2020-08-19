const mongoose = require('mongoose');

quizWidgetSchema = mongoose.Schema({
    questions: [{
        ref: 'QuestionModel',
        type: mongoose.Schema.Types.ObjectId
    }]
}, {collection: 'question-widgets'});

module.exports = quizWidgetSchema;