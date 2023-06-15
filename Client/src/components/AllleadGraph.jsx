import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const AllleadGraph = ({ employee }) => {
  const [authScreen, setAuthScreen] = useState(true);
  const [dataval, setDataVal] = useState();
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
  // const data = [
  //   {
  //     name: 'Page A',
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: 'Page C',
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: 'Page D',
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: 'Page E',
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: 'Page F',
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: 'Page G',
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  const data = [
    {
      name: "Business",
      uv: dataval ? dataval.businessLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Home",
      uv: dataval ? dataval.homeLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Personal",
      uv: dataval ? dataval.personalLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Mortgage",
      uv: dataval ? dataval.mortgageLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Credit card",
      uv: dataval ? dataval.creditLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Car",
      uv: dataval ? dataval.carLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Used Car",
      uv: dataval ? dataval.businessLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Passport",
      uv: dataval ? dataval.passportLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Shop",
      uv: dataval ? dataval.shopActLeadCount : 0,
      amt: 500,
    },
    {
      name: "GST",
      uv: dataval ? dataval.gstLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Home Insurance",
      uv: dataval ? dataval.businessLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Food Liscence",
      uv: dataval ? dataval.foodLisenceLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Motor Insurance",
      uv: dataval ? dataval.businessLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Udhyam Registration",
      uv: dataval ? dataval.udyamCertificateLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "NCPA",
      uv: dataval ? dataval.newCorrectionPanApplicationCount : 0,
      amt: 500,
    },
    {
      name: "HLBT",
      uv: dataval ? dataval.businessLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Gold Loan",
      uv: dataval ? dataval.goldLoanLeadCount : 0,
      amt: 500,
    },
  ];

  useEffect(() => {
    (async function() {
    if(employee){
  await axios({
      method: "get",
      url: `http://localhost:5000/api/v1/crm/getemployeenumberoflead?currentUserId=${employee}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res.data);
      setDataVal(res.data);
    });
  }
})();
  }, [employee]);

  console.log(dataval);
 
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer>
        <BarChart
          // width={2500}
          // height={600}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" style={{ fontSize: "10px" }} />
          <YAxis datakey="amt" style={{ fontSize: "10px" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#1c78b6" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AllleadGraph;
