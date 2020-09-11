import React, { useState, createContext } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = props => {
    const [dataUser, setDataUser] =  useState([])

  return (
    <RegisterContext.Provider value={[dataUser, setDataUser]}>
      {props.children}
    </RegisterContext.Provider>
  );
};