import { createContext, useEffect, useReducer } from "react";
import { clientReducer } from "../reducer/clientReducer";
import axios from "axios";

export const ClientListContext = createContext();


const ClientListProvider = ({ children }) => {
  const [clientState, dispatch] = useReducer(clientReducer, {
    isLoading: false,
    isError: false,
    clients: [],
  });

  return (
    <ClientListContext.Provider value={{clientState, dispatch}}>
      {children}
    </ClientListContext.Provider>
  );
};

export default ClientListProvider;
