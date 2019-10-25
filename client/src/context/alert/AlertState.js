import React, { useReducer } from 'react';
import uuid from 'uuid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = [];

  const [state, dispach] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuid.v4();
    dispach({
      type: SET_ALERT,
      payload: {
        msg,
        type,
        id
      }
    });

    setTimeout(() => {
      dispach({ type: REMOVE_ALERT, payload: id });
    }, timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
