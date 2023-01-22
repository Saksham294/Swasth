const express=require('express')
const router=express.Router()
const {postGeneralFeedback,postWellBeingFeedback,postBeforeTreatmentFeedback,postAfterTreatmentFeedback}=require('../controllers/feedbackController')
const isAuthenticated=require('../middleware/auth')


router.route('/postGeneralFeedback').post(isAuthenticated,postGeneralFeedback)
router.route('/postWellBeingFeedback').post(isAuthenticated,postWellBeingFeedback)
router.route('/postBeforeTreatmentFeedback').post(isAuthenticated,postBeforeTreatmentFeedback)
router.route('/postAfterTreatmentFeedback').post(isAuthenticated,postAfterTreatmentFeedback)


module.exports=router