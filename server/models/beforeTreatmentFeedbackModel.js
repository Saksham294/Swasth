const mongoose=require('mongoose');

const beforeTreatmentFeedbackSchema=new mongoose.Schema({

    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
   anyWeakness:{
         type:String,
            required:true
   },
   fever:{
         type:Boolean,
            required:true
   },
   dizziness:{
        type:Boolean,
        required:true,
   },
    headache:{
        type:Boolean,
        required:true,
    },
   comment:{
    type:String,
   },
   doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
   }
   

})


module.exports=mongoose.model('BeforeTreatmentFeedback',beforeTreatmentFeedbackSchema)