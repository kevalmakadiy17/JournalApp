// Importing action type constants related to note operations
import {
    CREATE_NOTES_ERROR,
    CREATE_NOTES_LOADING,
    CREATE_NOTES_SUCCESS,
    DELETE_NOTES_ERROR,
    DELETE_NOTES_LOADING,
    DELETE_NOTES_SUCCESS,
    GET_NOTES_ERROR,
    GET_NOTES_LOADING,
    GET_NOTES_SUCCESS,
    UPDATE_NOTES_ERROR,
    UPDATE_NOTES_LOADING,
    UPDATE_NOTES_SUCCESS
} from "./note.types";

// Initial state for the note-related state slice in Redux store
let initialState = {
    loading: false,
    error: false,
    data: []
};

// Reducer function to manage state changes for note-related actions
export const noteReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        // Cases for handling different loading states for fetching, creating, updating, and deleting notes
        case GET_NOTES_LOADING:
        case CREATE_NOTES_LOADING:
        case UPDATE_NOTES_LOADING:
        case DELETE_NOTES_LOADING:
            return {
                ...state,
                loading: true
            };

        // Cases for handling success states for fetching, creating, updating, and deleting notes
        case GET_NOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: payload // Updating notes data with received payload (list of notes)
            };
        case CREATE_NOTES_SUCCESS:
        case UPDATE_NOTES_SUCCESS:
        case DELETE_NOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false
            };

        // Cases for handling error states for fetching, creating, updating, and deleting notes
        case GET_NOTES_ERROR:
        case CREATE_NOTES_ERROR:
        case UPDATE_NOTES_ERROR:
        case DELETE_NOTES_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };

        // Default case for returning the current state when the action type doesn't match any cases
        default:
            return state;
    }
};
