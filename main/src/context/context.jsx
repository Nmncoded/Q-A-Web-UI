import React, { useReducer, useContext } from 'react';
import { reducer, initialState } from './reducer';

const StateContext = React.createContext();
const DispatchContext = React.createContext();

export function useStateData() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateData must be used within a StateProvider');
  }

  return context;
}

export function useDispatch() {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useDispatch must be used within a StateProvider');
  }

  return context;
}

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};
