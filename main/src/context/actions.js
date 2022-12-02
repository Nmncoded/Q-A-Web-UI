import { SET_STEP } from "./action-types";

export function setStep(dispatch,data){
    return dispatch({type: SET_STEP, payload : data})
}