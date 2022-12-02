import { ADD_ANSWER, SET_STEP, SET_SUBMIT } from "./action-types";

export function setStep(dispatch,data){
    return dispatch({type: SET_STEP, payload : data})
}

export function addAnswer(dispatch,data){
    return dispatch({type: ADD_ANSWER, payload : data})
}

export function setSubmit(dispatch,data){
    return dispatch({type: SET_SUBMIT, payload : data})
}