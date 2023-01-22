const mongoose = require('mongoose');

const afterTreatmentFeedbackSchema = new mongoose.Schema({

    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    disease: {
        type: String,
        required: true
    },
    anyWeakness: {
        type: String,
        required: true
    },
    fever: {
        type: Boolean,
        required: true
    },
    dizziness: {
        type: Boolean,
        required: true,
    },
    sideEffects:{
        type:String,
    },
    satisfiedWithTreatment: {
        type: Boolean,
        required: true,
    },

    comments:{
        type:String,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    }

})


module.exports = mongoose.model('AfterTreatmentFeedback', afterTreatmentFeedbackSchema)