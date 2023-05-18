import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import { useLocation, useNavigate, useParams } from "react-router-dom";


const Transferlead = () => {
  const navigate = useNavigate();
  const [authScreen, setAuthScreen] = useState(true);
  const location = useLocation();
  const {
    state: { serviceID, number, employee, empolyeeID },
  } = location;

  let role = localStorage.getItem("role");
  let tokenData = localStorage.getItem("token");
  let tokenExpiry;
  let token;
  if (tokenData) {
    // tokenExpiry = JSON.parse(tokenData).expiry;
    tokenExpiry = new Date(JSON.parse(tokenData).expiry);
    token = JSON.parse(tokenData).usertoken;
  }
  let currentDate = new Date();

  useEffect(() => {
    if (!tokenData) {
      navigate("/login");
    } else {
      if (role === "employee") {
        navigate("/login");
      }
      fetchdata();
      if (currentDate > tokenExpiry) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      setTimeout(() => {
        setAuthScreen(false);
      }, 500);
    }
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { service } = useParams();
  const [loandetail, setloandetail] = useState([]);

  // searching __
  const fetchdata = async () => {
    await axios({
      method: "get",
      url: `http://localhost:5000/api/v1/crm/getallemployee`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res.data.fetchdata);
      setloandetail(res.data.fetchdata);
      console.log(loandetail);
    });
  };

  const onSubmit = async (data) => {
    if (service === "personal loan") {
      await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
          console.log(res.data);
      });
    }
    if (service === "Business Loan") {
      await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
          console.log(res.data);
      });
    }
    if (service === "Mortgage  Loan") {
      await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
          console.log(res.data);
      });
    }
    if (service === "Home  Loan") {
      await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
          console.log(res.data);
      });
    }
    if (service === "Home Loan Balance Transfer") {
      await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
          console.log(res.data);
      });
    }
    if (service === "Gold Loan") {
      try {
        axios({
          method: "patch",
          url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
          data: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          if (res.data.status) {
            console.log(res);
            console.log(res.data.response);
            setloandetail(res.data.response);
          } else {
            console.log(res.data.message);
            setloandetail(res.data.message);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    if (service === "Credit Card") {
      await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
          console.log(res.data);
      });
    }
    if (service === "New Correction Pan application") {
      await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
          console.log(res.data);
      });
    }
    if (service === "Shop Act") {
      await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
          console.log(res.data);
      });
    }
    if (service === "passport") {
      await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
          console.log(res.data);
      });
    }
    if (service === "GST registration application") {
      await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
          console.log(res.data);
      });
    }
    if (service === "UDYAM Registration") {
      await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
          console.log(res.data);
      });
    }
    if (service === "Car Loan") {
      await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
          console.log(res.data);
      });
    }
    if (service === "Food Lisence") {
      await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/transferhomelead?leadId=${serviceID}?employeeId=${empolyeeID}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
          console.log(res.data);
      });
    }
  };

  if (authScreen) {
    return (
      <div className="lds-roller-container">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* <WelcomeBanner /> */}

            <div className="rounded shadow-lg shadow-white-500/50 p-5 bg-white">
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full">
                  <div className="mt-2">
                    <h3>Client numer:</h3>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option> {number}</option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <div className="mt-2">
                    <h3>empolyee name:</h3>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>{employee}</option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <form
                    className="w-full mt-12"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="flex flex-wrap mx-3 mb-2">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-state"
                        >
                          Transfer To :
                        </label>
                        <div className="relative">
                          <select
                            name=""
                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            id="grid-state"
                          >
                            {loandetail.map((e) => {
                              return(
                              <option value={`${e._id}`}>
                                {e.first_name}{" "} {e.last_name}
                              </option>
                              )
                            })}
                          </select>                                             
                        </div>
                      </div>
                      <input
                        type="submit"
                        className="rounded-none bg-blue-600 text-white p-3 cursor-pointer"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Transferlead;
