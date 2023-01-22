import { createReducer} from "@reduxjs/toolkit";


const initialState={}

export const userReducer=createReducer(initialState,{

    loginRequest:(state)=>{
        state.loading=true;
    },
    loginSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true

    },
    loginFailure:(state,action)=>{
        state.loading=false
        state.error=action.payload;
        state.isAuthenticated=false
    },

    registerRequest:(state)=>{
        state.loading=true;
    },
    registerSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true
    },
    registerFailure:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false
        state.error=action.payload;
    },

    loadUserRequest:(state)=>{
        state.loading=true;
    },
    loadUserSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true
    },
    loadUserFailure:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false
        state.error=action.payload;
    },

    logoutUserRequest: (state) => {
        state.loading = true;
      },
      logoutUserSuccess: (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      },
      logoutUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
      },

})


export const doctorReducer=createReducer(initialState,{
    doctorLoginRequest:(state)=>{
        state.loading=true;
    }
    ,
    doctorLoginSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isDocAuthenticated=true
    }
    ,
    doctorLoginFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isDocAuthenticated=false
    }
    ,
    doctorRegisterRequest:(state)=>{
        state.loading=true;
    }
    ,
    doctorRegisterSuccess:(state,action)=>{
        state.loading=false;
        state.doctor=action.payload;
        state.isDocAuthenticated=true
    }
    ,
    doctorRegisterFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isDocAuthenticated=false
    }
    ,
    doctorLoadUserRequest:(state)=>{
        state.loading=true;
    }
    ,
    doctorLoadUserSuccess:(state,action)=>{
        state.loading=false;
        state.doctor=action.payload;
        state.isDocAuthenticated=true
    }
    ,
    doctorLoadUserFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isDocAuthenticated=false
    }
    ,
    doctorLogoutUserRequest:(state)=>{
        state.loading=true;
    }
    ,
    doctorLogoutUserSuccess:(state)=>{
        state.loading=false;
        state.doctor=null;
        state.isDocAuthenticated=false
    }
    ,
    doctorLogoutUserFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isDocAuthenticated=true
    },


    sendSMSRequest:(state)=>{
        state.loading=true;
    }
    ,
    sendSMSSuccess:(state,action)=>{
        state.loading=false;
        state.sms=action.payload;
    }
    ,
    sendSMSFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    }
    ,

   
})
  
export const myPatientsReducer=createReducer(initialState,{
    getMyPatientsRequest:(state)=>{
        state.loading=true;
    }
    ,
    getMyPatientsSuccess:(state,action)=>{
        state.loading=false;
        state.myPatients=action.payload;
    }
    ,
    getMyPatientsFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    }
    ,
})