import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardData = () => {
  const [allLeadData, setAllLeadData] = useState([]);
  const [loading, setLoading] = useState(false);
  let tokenData = localStorage.getItem("token");
  let token;
  if (tokenData) {
    token = JSON.parse(tokenData).usertoken;
  }

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    try {
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
          console.log(res);
          setLoading(false);
          setAllLeadData(res.data.response);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    return () => {
      // Cleanup function to be executed on component unmount
      isMounted = false;
    };
  }, [loading]);

  return (
    <div className="grid grid-cols-5 gap-4">
      {allLeadData && (
        <>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">50</h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">50</h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">50</h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">50</h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">50</h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">50</h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">50</h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">50</h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">50</h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">50</h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">50</h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">50</h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">50</h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardData;
