const dotenv=require("dotenv")

dotenv.config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


const sendSMS = async (req, body) => {

     client.messages
        .create({
            body: "Hi, you have an appointment Scheduled at",
            from: "+12185273405",
            to: "+918130014849"
        })
        .then(message => console.log(message.sid));
}

module.exports = sendSMS;