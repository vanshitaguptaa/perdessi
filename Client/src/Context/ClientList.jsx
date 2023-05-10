import { createContext, useEffect, useReducer, useState } from "react";
import { clientReducer } from "../reducer/clientReducer";
import axios from "axios";

export const ClientListContext = createContext();

const tokenData = localStorage.getItem("token");
let token = JSON.parse(tokenData).usertoken;

const ClientListProvider = ({ children }) => {
  const [clientState, dispatch] = useReducer(clientReducer, {
    isLoading: false,
    isError: false,
    clients: [],
  });

  const getClientList = async () => {
    dispatch({ type: "Loading" });
    try {
      const savedResponse = await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getclientforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });


      if (savedResponse.status) {
        dispatch({ type: "Success", payload: savedResponse.data });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "Failed" });
    }
  };


  useEffect(() => {
     getClientList();
  }, [])
  
  console.log(clientState)
  return <ClientListContext.Provider value={ clientState }>{children}</ClientListContext.Provider>;
};

export default ClientListProvider;
