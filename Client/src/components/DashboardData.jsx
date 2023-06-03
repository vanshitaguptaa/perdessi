import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardData = () => {
  const [allLeadData, setAllLeadData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Url, setUrl] = useState("");
  let role = localStorage.getItem("role");
  let tokenData = localStorage.getItem("token");
  let token;
  if (tokenData) {
    token = JSON.parse(tokenData).usertoken;
  }

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    try {
      if (role == "admin") {
        // For admin
        setLoading(true);
        axios({
          method: "get",
          url: "http://localhost:5000/api/v1/crm/getnumberofleadforallserviceadmin",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          if (isMounted) {
            // Check if component is still mounted before updating state
            console.log(res.data.response);
            setLoading(false);
            setAllLeadData(res.data.response);
            if (allLeadData) {
              console.log(allLeadData);
            }
          }
        });
      } else {
        setLoading(true);
        axios({
          method: "get",
          url: "http://localhost:5000/api/v1/crm/getnumberofleadforallservice",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          if (isMounted) {
            // Check if component is still mounted before updating state
            console.log(res.data.response);
            setLoading(false);
            setAllLeadData(res.data.response);
            if (allLeadData) {
              console.log(allLeadData);
            }
          }
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    return () => {
      // Cleanup function to be executed on component unmount
      isMounted = false;
    };
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4">
      {allLeadData && (
        <>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedPersonalLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedBusiessLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Busiess Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedCarLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Car Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedCreditCardDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Credit Card
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedFoodLisenceDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Food Lisence
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedGSTLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              GST Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedGoldLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Gold Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedHomeLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Home Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedMortgageLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Mortgage Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedNewCorrectionPanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              New Correction Pan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedPassportLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Passport Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedShopActDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Shop Act
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedUdyamCertificateDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Udyam Certificate
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardData;
