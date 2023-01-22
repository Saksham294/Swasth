const User = require('../models/userModel');
const cloudinary = require('cloudinary')
const Doctor = require('../models/doctorModel');


exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, avatar, password,phone } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ success: false, message: "User already exists" });
        }

        const myCloud = await cloudinary.v2.uploader.upload(avatar, {
            folder: "avatars"
        })
        user = await User.create({
            name, email,phone, password, avatar: { public_id: myCloud.public_id, url: myCloud.secure_url }

        })
        res.status(200).json({
            success: true,
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email })
            .select("+password")


        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User does not exist",
            });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password",
            });
        }

        const token = await user.getJWTToken();

        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        res.status(201).cookie("token", token, options).json({
            success: true,
            user,
            token,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};//Route working fine

exports.logoutUser = async (req, res) => {
    try {
        res.cookie("token", "none", {
            expires: new Date(Date.now() + 10 * 1000),
            httpOnly: true
        });
        res.status(200).json({
            success: true,
            message: "Logged out successfully"
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
} //Route working fine

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate(
            ""
        );
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.registerDoctor = async (req, res, next) => {
    try{
        const {name, email, avatar, password, phone,} = req.body;
        let doctor = await Doctor.findOne({email});
        if(doctor){
            return res.status(400).json({success: false, message: "Doctor already exists"});
        }
        const myCloud = await cloudinary.v2.uploader.upload(avatar, {
            folder: "avatars"
        })
        doctor = await Doctor.create({
            name, email, password, avatar: {public_id: myCloud.public_id, url: myCloud.secure_url}, phone
        })
        res.status(200).json({
            success: true,
            doctor
        })
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


exports.loginDoctor = async (req, res) => {
    try {
        const { email, password } = req.body;

        const doctor = await Doctor.findOne ({ email })
            .select("+password")
            if (!doctor) {
                return res.status(400).json({
                    success: false,
                    message: "User does not exist",
                });
            }
    
            const isMatch = await doctor.comparePassword(password);
    
            if (!isMatch) {
                return res.status(400).json({
                    success: false,
                    message: "Incorrect password",
                });
            }
    
            const token = await doctor.getJWTToken();
    
            const options = {
                expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            };
    
            res.status(201).cookie("token", token, options).json({
                success: true,
                doctor,
                token,
            });
        
    }
    catch(error){
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.logoutDoctor = async (req, res) => {
    try {
        res.cookie("token", "none", {
            expires: new Date(Date.now() + 10 * 1000),
            httpOnly: true
        });
        res.status(200).json({
            success: true,
            message: "Logged out successfully"
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

exports.getDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.doctor._id).populate("patients")
        res.status(200).json({
            success: true,
            doctor,
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getMyPatients = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.doctor._id).populate("patients");
//Create patients array with all details

        let patients=[]

        for(let i=0; i<doctor.patients.length; i++){
            let patient = await Patient.findById(doctor.patients[i]._id).populate("name phone")
            patients.push(patient)
        }
        

        res.status(200).json({
            success: true,
            patients,
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

