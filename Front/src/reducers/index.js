import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import profile from "./profile";

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    profile: profile
});