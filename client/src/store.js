import {configureStore} from '@reduxjs/toolkit' 

import { userReducer,doctorReducer,myPatientsReducer} from './Reducers/userReducer';


const initialState={}
const store=configureStore(
{
reducer:{
    user:userReducer,
   doctor:doctorReducer,
   myPatients:myPatientsReducer
}

})

export default store;