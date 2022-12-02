import { SET_STEP } from "./action-types";

export const initialState = {
  step : 1,
};

export const reducer = (initialState, {type,payload}) => {
  switch (type) {
    case SET_STEP :
      return {
        ...initialState,
        step : payload,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
