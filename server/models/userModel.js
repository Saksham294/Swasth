const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv")

dotenv.config()

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
    avatar: {
        public_id: String,
        url: String,
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: [true, "Email already exists"],
    },

    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    phone: {
        type: String,
        required: [true, "Please enter a phone number"],
        unique: [true, "Phone number already exists"],  
    },

    password: {
        type: String,
        required: [true, "Please enter a password"],

    },
    feedbacks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feedback"
    }],
    wellBeingFeedbacks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "WellBeingFeedback"
    }],

    beforeTreatmentFeedback: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BeforeTreatmentFeedback"
    }],

    afterTreatmentFeedback: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "AfterTreatmentFeedback"
    }]
})


userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }

    next()
})



userSchema.methods.getJWTToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWTKEY,
        { expiresIn: "5d" })
}
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model("User", userSchema)