const mongoose=require('mongoose');

const feedbackSchema=new mongoose.Schema({

    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    polite:{
        type:Boolean,
        required:true,
    },
    satisfied:{
        type:Boolean,
        required:true,
    },
    scaleOfSatisfaction:{
        type:Number,
        required:true,
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
    },
    comments:{
        type:String,
        required:true,
    },

})


module.exports=mongoose.model('Feedback',feedbackSchema)