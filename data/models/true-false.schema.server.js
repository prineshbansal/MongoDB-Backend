const mongoose = require('mongoose');

const trueOrFalseSchema = mongoose.Schema({
    isTrue: Boolean
});

module.exports = trueOrFalseSchema;