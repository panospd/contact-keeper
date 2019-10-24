import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactcontext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from "../types";
import { domainToASCII } from "url";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Panos Anas",
        email: "panos@domain.com",
        phone: "111-111-1111",
        type: "personal"
      },
      {
        id: 2,
        name: "Amalia Anas",
        email: "amalia@domain.com",
        phone: "222-222-2222",
        type: "personal"
      },
      {
        id: 1,
        name: "Popi Anas",
        email: "popi@domain.com",
        phone: "333-333-3333",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
