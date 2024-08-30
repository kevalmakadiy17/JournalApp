import axios from "axios"
import { BASE_URL } from "../../constants/config"
import { store } from "../store"
import { LOGOUT } from "../users/user.types"
import { CREATE_NOTES_ERROR, CREATE_NOTES_LOADING, CREATE_NOTES_SUCCESS, DELETE_NOTES_ERROR, DELETE_NOTES_LOADING, DELETE_NOTES_SUCCESS, GET_NOTES_ERROR, GET_NOTES_LOADING, GET_NOTES_SUCCESS, UPDATE_NOTES_ERROR, UPDATE_NOTES_LOADING, UPDATE_NOTES_SUCCESS } 
from "./note.types"

// Action to fetch notes from the server

export const getNotes=()=>async(dispatch)=>{
    const {token} = store.getState().userReducer
    // Dispatch action to set loading state while fetching notes
    dispatch({type:GET_NOTES_LOADING})
    try {
        // Fetch notes from the server using a GET request
        const res= await axios(BASE_URL+"/note",{
            method:"get",
            headers:{
                Authorization:token
            }
        })

        const {status,message,data} = res.data
        console.log(message)
        // Check the status received from the server
        if(status===1){
        // Dispatch action with fetched notes data on success
        dispatch({type:GET_NOTES_SUCCESS,payload:data})
        // Dispatch logout action if status is 2 (indicating authentication issue)
        }else if(status===2){
            // Dispatch error action if status indicates an error
            dispatch({type:LOGOUT})
        }else{
            // Dispatch error action if status indicates an error
            dispatch({type:GET_NOTES_ERROR})

        }

    } catch (error) {
        // Dispatch error action in case of any exceptions
        dispatch({type:GET_NOTES_ERROR})

    }



}

// Action to create a new note
export const createNotes=(obj)=>async(dispatch)=>{
    const {token} = store.getState().userReducer

    // Dispatch action to set loading state while creating a note
    dispatch({type:CREATE_NOTES_LOADING})
    try {
        // Attempt to create a new note using a POST request
        const res= await axios(BASE_URL+"/note/create",{
            method:"post",
            data:obj,
            headers:{
                Authorization:token
            }
        })

        const {status,message} = res.data
        // Check the status received from the server
        console.log(message)
        if(status===1){
        // Dispatch action on successful note creation
        dispatch({type:CREATE_NOTES_SUCCESS})
        // Fetch updated notes after creating a note
        dispatch(getNotes())
        }else if(status===2){
            // Dispatch logout action if status is 2 (indicating authentication issue)
            dispatch({type:LOGOUT})
        }else{
            // Dispatch error action if status indicates an error
            dispatch({type:CREATE_NOTES_ERROR})

        }

    } catch (error) {
        // Dispatch error action in case of any exceptions
        dispatch({type:CREATE_NOTES_ERROR})

    }



}

// Action to delete a note
export const deleteNotes=(id)=>async(dispatch)=>{
    const {token} = store.getState().userReducer

    dispatch({type:DELETE_NOTES_LOADING})
    try {
        
        const res= await axios(BASE_URL+"/note/",{
            method:"delete",
            headers:{
                Authorization:token,
                id:id
            }
        })

        const {status,message} = res.data
        console.log(message)
        if(status===1){
            
        dispatch({type:DELETE_NOTES_SUCCESS})
        dispatch(getNotes())

        }else if(status===2){
            dispatch({type:LOGOUT})
        }else{
            dispatch({type:DELETE_NOTES_ERROR})

        }

    } catch (error) {
        dispatch({type:DELETE_NOTES_ERROR})

    }



}


// Action to update a note
export const updateNotes=(id,obj)=>async(dispatch)=>{
    const {token} = store.getState().userReducer

    dispatch({type:UPDATE_NOTES_LOADING})
    try {
        
        const res= await axios(BASE_URL+"/note",{
            method:"patch",
            data:obj,
            headers:{
                Authorization:token,
                id:id
            }
        })

        const {status,message} = res.data
        console.log(message)
        if(status===1){
            
        dispatch({type:UPDATE_NOTES_SUCCESS})
        dispatch(getNotes())

        }else if(status===2){
            dispatch({type:LOGOUT})
        }else{
            dispatch({type:UPDATE_NOTES_ERROR})

        }

    } catch (error) {
        dispatch({type:UPDATE_NOTES_ERROR})

    }



}