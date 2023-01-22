import axios from 'axios'


export const loginUser=(email,password)=>async (dispatch )=>{
    try {

        dispatch({
            type:"loginRequest"
        })

        const {data}=await axios.post("/api/login",{email,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        
        dispatch({
            type:"loginSuccess",
            payload:data.user,
        })
        
    } catch (error) {

        dispatch({
            type:"loginFailure",
            payload: error.response.data.message,
        })
    }
}
export const registerUser = (name, email, password,avatar,phone) => async (dispatch) => {
    try {
      dispatch({
        type: "registerRequest",
      });

      const { data } = await axios.post(
        "/api/register",
        { name, email, password,avatar,phone },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "registerSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "registerFailure",
        payload: error.response.data.message,
      });
    }
  };

export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "loadUserRequest",
      });
  
      const { data } = await axios.get("/api/myProfile");
  
      dispatch({
        type: "loadUserSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "loadUserFailure",
        payload: error.response.data.message,
      });
    }
  };

export const logoutUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "logoutUserRequest",
      });
  
      await axios.get("/api/logout");
  
      dispatch({
        type: "logoutUserSuccess",

      });
    } catch (error) {
      dispatch({
        type: "logoutUserFailure",
        payload: error.response.data.message,
      });
    }
  };

export const registerDoctor = (name, email, password,avatar,phone) => async (dispatch) => {
    try {
      dispatch({
        type: "doctorRegisterRequest",
      });

      const { data } = await axios.post(
        "/api/register/doctor",
        { name
        , email
        , password
        ,avatar
        ,phone
      },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      dispatch({
        type: "doctorRegisterSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "doctorRegisterFailure",
        payload: error.response.data.message,
      });
    }
  };

export const loginDoctor = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "doctorLoginRequest",
      });

      const { data } = await axios.post(
        "/api/login/doctor",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "doctorLoginSuccess",
        payload: data.user,
      });
    } catch (error) {
      console.log(error)
      dispatch({
        type: "doctorLoginFailure",
        payload: error.response.data.message,
      });
    }
  }

export const loadDoctor = () => async (dispatch) => {
    try {
      dispatch({
        type: "doctorLoadUserRequest",
      });
  
      const { data } = await axios.get("/api/myDocProfile");
  
      dispatch({
        type: "doctorLoadUserSuccess",
        payload: data.doctor,
      });
    } catch (error) {
      dispatch({
        type: "doctorLoadUserFailure",
        payload: error.response.data.message,
      });
    }
  }

export const logoutDoctor = () => async (dispatch) => {
    try {
      dispatch({
        type: "doctorLogoutUserRequest",
      });
  
      await axios.get("/api/logout/doctor");
  
      dispatch({
        type: "doctorLogoutUserSuccess",

      });
    } catch (error) {
      dispatch({
        type: "doctorLogoutUserFailure",
        payload: error.response.data.message,
      });
    }
  }

export const sendSMS = (req,body)=>async (dispatch) => {
    try {
      dispatch({
        type: "sendSMSRequest",
      });
  
      const { data } = await axios.get(`/api/sendSMS` );
  
      dispatch({
        type: "sendSMSSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "sendSMSFailure",
        payload: error.response.data.message,
      });
    }
  }


export const getMyPatients=()=>async (dispatch)=>{
    try {
        dispatch({
            type:"getMyPatientsRequest"
        })

        const {data}=await axios.get("/api/getMyPatients")
        console.log(data)
        dispatch({
            type:"getMyPatientsSuccess",
            payload:data.patients
        })
    } catch (error) {
        dispatch({
            type:"getMyPatientsFailure",
            payload:error.response.data.message
        })
    }
}
