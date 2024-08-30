import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS, LOGOUT } from "./user.types";

// Initial state for user-related data
const initialState = {
    token: null,
    auth: false,
    loading: false,
    error: false
};

// Reducer function to manage user-related state
export default function userReducer(state = initialState, action) {
    const { type, payload } = action;

    // Switch statement to handle different action types
    switch (type) {
        case LOGIN_USER_LOADING: {
            // Set loading state to true when login process begins
            return {
                ...state,
                loading: true
            };
        }
        case LOGIN_USER_SUCCESS: {
            // Set user data on successful login and authentication
            return {
                ...state,
                loading: false,
                error: false,
                token: payload, // Update token
                auth: true // Set authentication to true
            };
        }
        case LOGIN_USER_ERROR: {
            // Handle error state if login fails
            return {
                ...state,
                loading: false,
                error: true
            };
        }
        case LOGOUT: {
            // Reset state to initial values upon logout
            return initialState;
        }
        default: {
            // Return current state for unrecognized action types
            return state;
        }
    }
}
