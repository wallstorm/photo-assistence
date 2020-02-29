import axios from "axios";
import { AUTH_SIGN_UP, AUTH_ERROR, AUTH_SIGN_OUT, AUTH_SIGN_IN, PROFILE_GET_DATA } from "./types";

/*
    ActionCreator -> create/return Actions ({}) -> dispatched -> middlewares -> reducers
*/

export const oauthGoogle = data => {
    return async dispatch => {
        console.log("we received", data);
        const res = await axios.post("http://localhost:4000/auth/google/callback", {
            access_token: data
        });

        dispatch({
            type: AUTH_SIGN_UP,
            payload: res.data.token
        })

        console.log("res:", res);
        localStorage.setItem("JWT_TOKEN", res.data.token);
        axios.defaults.headers.common["Authorization"] = res.data.token;
    }
}

export const oauthFacebook = data => {
    return async dispatch => {
        console.log("we received", data);
        const res = await axios.post("http://localhost:4000/users/oauth/Facebook", {
            access_token: data
        });
        
        dispatch({
            type: AUTH_SIGN_UP,
            payload: res.data.token
        })

        console.log("res:", res);
        localStorage.setItem("JWT_TOKEN", res.data.token);
        axios.defaults.headers.common["Authorization"] = res.data.token;
    }
}

export const signIn = data => {
    /*
        Step 1) Use the data and to make HTTP request to our BE and send it along
        Step 2) Take the BE"S response (jwtToken is here now!)
        Step 3) Dispatch user just signed up (with jwtToken)
        Step 4) Save the jwtToken into our localStorage        
    */
   return async dispatch => {
       try {
           console.log("[ActionCreator] signIn called");
           const res = await axios.post("http://localhost:4000/users/signin", data)
           console.log("res", res);

           console.log("[ActionCreator] signIn dispatched an action!");
           dispatch({
               type: AUTH_SIGN_IN,
               payload: res.data.token
           })

           localStorage.setItem("JWT_TOKEN", res.data.token);
           axios.defaults.headers.common["Authorization"] = res.data.token;
       } catch(err) {
           dispatch({
               type: AUTH_ERROR,
               payload: "El email y/o la contraseña no es correcta."
           })
           console.error("err", err);
       }
}
}

export const signUp = data => {
        /*
            Step 1) Use the data and to make HTTP request to our BE and send it along
            Step 2) Take the BE"S response (jwtToken is here now!)
            Step 3) Dispatch user just signed up (with jwtToken)
            Step 4) Save the jwtToken into our localStorage        
        */
       return async dispatch => {
           try {
               console.log("[ActionCreator] signUp called");
               const res = await axios.post("http://localhost:4000/users/signup", data)
               console.log("res", res);

               console.log("[ActionCreator] signUp dispatched an action!");
               dispatch({
                   type: AUTH_SIGN_UP,
                   payload: res.data.token
               })

               localStorage.setItem("JWT_TOKEN", res.data.token);
               axios.defaults.headers.common["Authorization"] = res.data.token;
           } catch(err) {
               dispatch({
                   type: AUTH_ERROR,
                   payload: "Email is already in use"
               })
               console.error("err", err);
           }
    }
}

export const getSecret = () => {
    return async dispatch => {
        try {
            console.log("[ActionCreator] Trying to get BE's secret")
            const res = await axios.get("http://localhost:4000/users/secret")
            console.log("res", res);

            dispatch({
                type: PROFILE_GET_DATA,
                payload: res.data.secret
            })
        } catch(err) {
            console.error("err", err);
        }
    }
}

export const signOut = () => {
    return dispatch => {
        localStorage.removeItem("JWT_TOKEN");
        axios.defaults.headers.common["Authorization"] = "";

        dispatch({
            type: AUTH_SIGN_OUT,
            payload: ""
        })
    }
}