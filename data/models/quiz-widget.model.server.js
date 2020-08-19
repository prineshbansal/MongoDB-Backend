const mongoose = require('mongoose');
const quizWidgetSchema = require('./quiz-widget.schema.server');
const quizWidgetModel = mongoose.model('QuizWidgetModel', quizSchema);
module.exports = quizWidgetModel;