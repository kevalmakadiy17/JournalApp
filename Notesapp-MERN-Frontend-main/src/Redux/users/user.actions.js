import axios from "axios";
import { BASE_URL } from "../../constants/config";
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./user.types";

// Function to handle user login/authentication
export const getUser = (obj) => async (dispatch) => {
    // Dispatch login loading action to set loading state
    dispatch({ type: LOGIN_USER_LOADING });
    try {
        // Attempt user login by making a POST request
        let data = await axios(BASE_URL + "/user/login", {
            method: "post",
            data: obj
        });
        let { message, token, status } = data.data;

        // Check the status received from the server
        if (status === 1) {
            // Dispatch successful login action with token payload
            dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
        } else {
            // Display an alert with the received error message
            alert(message);
            // Dispatch error action on unsuccessful login
            dispatch({ type: LOGIN_USER_ERROR });
        }
    } catch (error) {
        // Dispatch error action in case of any exceptions
        dispatch({ type: LOGIN_USER_ERROR });
    }
};
