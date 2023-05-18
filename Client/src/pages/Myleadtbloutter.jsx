import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
import FilterButton from "../partials/actions/FilterButton";
import Datepicker from "../partials/actions/Datepicker";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";
import Banner from "../partials/Banner";
import Innerdashborad from "./Innerdashborad";
import MyleadTable from "./MyleadTable";
import axios from "axios";

function Myleadtbloutter() {
  const navigate = useNavigate();
  const [authScreen, setAuthScreen] = useState(true);
  const { service } = useParams();
  const [loandetail, setloandetail] = useState([]);
  const [number, setnumber] = useState("");

  //   *********__________Login Token Expiry__________***********
  let tokenData = localStorage.getItem("token");
  let tokenExpiry;
  let token;
  if (tokenData) {
    // tokenExpiry = JSON.parse(tokenData).expiry;
    tokenExpiry = new Date(JSON.parse(tokenData).expiry);
    token = JSON.parse(tokenData).usertoken;
  }
  let currentDate = new Date();


  const FetchLoaddetail = async (service) => {
    if (service === "personal loan") {
      // console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getpersonalloanforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Business Loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getbusinessloanforemployee`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Mortgage  Loan") {
      // console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getmortgageloanforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Home  Loan") {
      // console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/gethomeloanforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Home Loan Balance Transfer") {
      // console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/gethomeloanforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Gold Loan") {
      // console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getgoldloanforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Credit Card") {
      // console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getcreditcardforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "New Correction Pan application") {
      // console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getnewcorrectionpanapplicationforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Shop Act") {
      // console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getshopactforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Passport") {
      // console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getpassportforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "GST registration application") {
      // console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getGSTRegistrationforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "UDYAM Registration") {
      // console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getudyamcertificateforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Car Loan") {
      // console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getcarloanforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Food Lisence") {
      // console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getfoodlisenceoremployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
  };

  // searching __
  const Searchbynum = async () => {
    if (service === "personal loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getpersonalloanbymobile?mobileNo=${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        } else {
          console.log(res.data.message);
          setloandetail(res.data.message);
        }
      });
    }
    if (service === "Business Loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getbusinessloanbymobile?mobileNo=${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        } else {
          console.log(res.data.message);
          setloandetail(res.data.message);
        }
      });
    }
    if (service === "Mortgage  Loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getmortgageloanbymobile?mobileNo=${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        } else {
          console.log(res.data.message);
          setloandetail(res.data.message);
        }
      });
    }
    if (service === "Home  Loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/gethomeloanbymobile?mobileNo=${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        } else {
          console.log(res.data.message);
          setloandetail(res.data.message);
        }
      });
    }
    if (service === "Home Loan Balance Transfer") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/gethomeloanbymobile?mobileNo=${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        } else {
          console.log(res.data.message);
          setloandetail(res.data.message);
        }
      });
    }
    if (service === "Gold Loan") {
      try {
        axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getgoldloanbymobile?mobileNo=${number}`,
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
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getcreditcardloanbymobile?mobileNo=${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        } else {
          console.log(res.data.message);
          setloandetail(res.data.message);
        }
      });
    }
    if (service === "New Correction Pan application") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getnewcorrectionpanapplicationbymobile?mobileNo=${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        } else {
          console.log(res.data.message);
          setloandetail(res.data.message);
        }
      });
    }
    if (service === "Shop Act") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getshopactbymobile?mobileNo=${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        } else {
          console.log(res.data.message);
          setloandetail(res.data.message);
        }
      });
    }
    if (service === "passport") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getpassportbymobile?mobileNo=${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        } else {
          console.log(res.data.message);
          setloandetail(res.data.message);
        }
      });
    }
    if (service === "GST registration application") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getgstregistrationbymobile?mobileNo=${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        } else {
          console.log(res.data.message);
          setloandetail(res.data.message);
        }
      });
    }
    if (service === "UDYAM Registration") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getudyamcertificatebymobile?mobileNo=${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        } else {
          console.log(res.data.message);
          setloandetail(res.data.message);
        }
      });
    }
    if (service === "Car Loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getcarloanbymobile?mobileNo=${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        } else {
          console.log(res.data.message);
          setloandetail(res.data.message);
        }
      });
    }
    if (service === "Food Lisence") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getfoodlisencebymobilenumber?mobileNo=${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        } else {
          console.log(res.data.message);
          setloandetail(res.data.message);
        }
      });
    }
  };

  const length = loandetail;
  console.log(loandetail);
  // console.log(typeof loandetail);

  useEffect(() => {
    console.log(service);
    if (!tokenData) {
      navigate("/login");
    } else {
      if (currentDate > tokenExpiry) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      FetchLoaddetail(service);
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
            <WelcomeBanner />

            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="flex flex-col w-full gap-6">
                {/* Serach Box */}
                <div className="flex items-center">
                  <div className="flex border border-purple-200 rounded">
                    <input
                      type="text"
                      className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Search By Number"
                      onChange={(e) => {
                        setnumber(e.target.value);
                      }}
                    />
                    <button
                      className="px-4 text-white bg-purple-600 border-l rounded "
                      onClick={() => {
                        Searchbynum();
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <MyleadTable loandetail={loandetail} length={length} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Myleadtbloutter;
