const mongoose=require('mongoose');

const wellBeingFeedbackSchema=new mongoose.Schema({

    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    optimistic:{
        type:Boolean,
        required:true,
    },
    useful:{
        type:Boolean,
        required:true,
    },
    relaxed:{
        type:Boolean,
        required:true,
    },
    feelingGood:{
        type:Boolean,
        required:true,
    },
    feelingConfident:{
        type:Boolean,
        required:true,
    },
    feelingLoved:{
        type:Boolean,
        required:true,
    },
    feelingCheerful:{
        type:Boolean,
        required:true,
    }
    ,
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    }

})


module.exports=mongoose.model('WellBeingFeedback',wellBeingFeedbackSchema)