const Feedback = require('../models/feedbackModel');
const User = require('../models/userModel');
const WellBeingFeedback = require('../models/wellBeingFeedbackModel');
const BeforeTreatmentFeedback = require('../models/beforeTreatmentFeedbackModel');
const AfterTreatmentFeedback = require('../models/afterTreatmentFeedbackModel');


exports.postGeneralFeedback = async (req, res) => {
    try {
        const { polite, satisfied, scaleOfSatisfaction, comments } = req.body;
        const user = await User.findById(req.user._id)
        const feedback = await Feedback.create({
         polite, satisfied, scaleOfSatisfaction, comments
        })
        user.feedbacks.unshift(feedback._id)
        await user.save()
        res.status(200).json({
            success: true,
            feedback
        })

    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false,
            error: error.message
        })
    }
}

exports.postWellBeingFeedback = async (req, res) => {
    try {
        const { optimistic, useful, relaxed, feelingGood, feelingConfident, feelingLoved, feelingCheerful } = req.body;

        const user = await User.findById(req.user.id)
        const feedback = await WellBeingFeedback.create({
            optimistic, useful, relaxed, feelingGood, feelingConfident, feelingLoved, feelingCheerful
        })
        user.wellBeingFeedbacks.unshift(feedback._id)
        await user.save()
        res.status(200).json({
            success: true,
            feedback
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

exports.postBeforeTreatmentFeedback = async (req, res) => {
    try {
        const { anyWeakness, fever, dizziness, headache, comment } = req.body
        const user = await User.findById(req.user.id)
        const feedback = await BeforeTreatmentFeedback.create({
            anyWeakness, fever, dizziness, headache, comment
        })

        user.beforeTreatmentFeedback.unshift(feedback._id)
        await user.save()
        res.status(200).json({
            success: true,
            feedback
        })

    } catch (error) {
        res.status(200).json({
            success: false,
            error: error.message
        })
    }
}


exports.postAfterTreatmentFeedback = async (req, res) => {
    try {
        const { disease, anyWeakness, fever, dizziness, sideEffects, satisfiedWithTreatment, comments } = req.body;
        const user = await User.findById(req.user.id)
        const feedback = await AfterTreatmentFeedback.create({
            disease, anyWeakness, fever, dizziness, sideEffects, satisfiedWithTreatment, comments
        })
        user.afterTreatmentFeedback.unshift(feedback._id)
        await user.save()
        res.status(200).json({
            success: true,
            feedback
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}







/*
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
    }
*/


