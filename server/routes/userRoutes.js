const express = require("express")
const router = express.Router()
const { registerUser, loginUser, logoutUser, getUser, registerDoctor, loginDoctor, logoutDoctor, getDoctor, getMyPatients } = require("../controllers/userController")
const isAuthenticated = require("../middleware/auth")
const isDocAuthenticated = require("../middleware/docAuth")
const sendSMS = require("../middleware/twilio")



router.route("/register").post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)
router.route("/myProfile").get(isAuthenticated, getUser)
router.route('/sendSMS').get(sendSMS)
router.route('/myDocProfile').get(isDocAuthenticated, getDoctor)
router.route('/register/doctor').post(registerDoctor)
router.route('/login/doctor').post(loginDoctor)
router.route('/logout/doctor').get(logoutDoctor)
router.route('/getMyPatients').get(isDocAuthenticated, getMyPatients)



module.exports = router