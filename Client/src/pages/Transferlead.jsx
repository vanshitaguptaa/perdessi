import React, { useEffect, useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import { useNavigate } from "react-router-dom";

const Transferlead = () => {
  const navigate = useNavigate();
  const [authScreen, setAuthScreen] = useState(true);
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
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Select From Staff</option>
                      <option>Akash Perdessi</option>
                      <option>Chinmai Manseta</option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Select From Staff</option>
                      <option>Akash Perdessi</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                      <option>Chinmai Manseta</option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Select Staff</option>
                      <option>Akash Perdessi</option>
                      <option>Chinmai Manseta</option>
                    </select>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-slate-500 text-white px-4 py-2 rounded mt-5 shadow-lg shadow-white-500/50 p-5"
              >
                Lead Transfer
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Transferlead;
