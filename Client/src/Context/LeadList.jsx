import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { leadReducer } from "../reducer/leadReducer";

export const LeadListContext = createContext();

const tokenData = localStorage.getItem("token");
let token = JSON.parse(tokenData).usertoken;

console.log(token)

const LeadListProvider = ({ children }) => {
  const [leadState, dispatch] = useReducer(leadReducer, {
    isLoading: false,
    isError: false,
    leads: [],
  });

  const getLeadsforEmployee = async () => {
    dispatch({ type: "Loading" });
    try {
      const savedLeads = await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/mylead",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (savedLeads.status) {
        dispatch({ type: "Data", payload: savedLeads.data });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "Failed" });
    }
  };

  useEffect(() => {
    getLeadsforEmployee();
  }, [])
  
  console.log(leadState)
  return <LeadListContext.Provider value={leadState}>{children}</LeadListContext.Provider>;
};

export default LeadListProvider;
