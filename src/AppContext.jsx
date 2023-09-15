import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [formDataFromModal, setFormDataFromModal] = useState([
    {
      title: "20% off for 30 min consultant",
      message: "Get a 20% discount on a one-hour consultation between June 15 and June 16.",
      description: "Validity Upto",
      from: "2023-06-15",
      to: "2023-06-16",
    },
    {
      title: "20% off for 30 min consultant",
      message: "Get a 20% discount on a one-hour consultation between June 15 and June 16.",
      description: "Validity Upto",
      from: "2023-06-15",
      to: "2023-06-16",
    },
  ]);

  const [hello ,setHello] = useState(false)

  useEffect(()=>{
    console.log(formDataFromModal)
    
  },[hello])

  return (
    <AppContext.Provider
      value={{
        showModal,
        setShowModal,
        formDataFromModal,
        setFormDataFromModal,
        hello,
        setHello,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
