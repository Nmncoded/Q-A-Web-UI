import { ADD_ANSWER, SET_STEP, SET_SUBMIT } from "./action-types";

const questionsData = [
    {
        id:1,
        question : '#1. How many hearts does an octopus have?',
        options : [3,4,2,1],
        correctAnswerId : 0,
        answersByUserId : undefined,
    },
    {
        id:2,
        question : '#2. How many dots appear on a pair of dice?',
        options : [42,41,44,43],
        correctAnswerId : 0,
        answersByUserId : undefined,
    },
    {
        id:3,
        question : '#3. Which is the only body part that is fully grown from birth?',
        options : ['Lips','Ear','Nose','Eyes'],
        correctAnswerId : 3,
        answersByUserId : undefined,
    },
]; 

export const initialState = {
  step : 1,
  questionsData,
  isSubmitted : false
};

export const reducer = (initialState, {type,payload}) => {
  switch (type) {
    case SET_STEP :
      return {
        ...initialState,
        step : payload,
      };
      case ADD_ANSWER :
      return {
        ...initialState,
        questionsData : payload,
      };
      case SET_SUBMIT :
      return {
        ...initialState,
        isSubmitted : payload,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
