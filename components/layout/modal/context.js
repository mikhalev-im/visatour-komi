import React, { createContext, useState, useContext } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  return (
    <ModalContext.Provider value={useState("CLOSED")}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
