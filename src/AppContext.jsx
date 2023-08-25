import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [formDataFromModal, setFormDataFromModal] = useState([
    {
      title: "Offer 1",
      message: "20% off for 30 min consultant",
      description: "Limited offer",
      from: "2023-06-15",
      to: "2023-06-16",
    },
    {
      title: "Offer 2",
      message: "10% off for 1 hour consultant",
      description: "Special discount",
      from: "2023-06-20",
      to: "2023-06-25",
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
