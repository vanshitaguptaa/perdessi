import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Business",
    uv: 400,
    amt: 500
  },
  {
    name: "Home",
    uv: 300,
    amt: 500
  },
  {
    name: "Personal",
    uv: 110,
    amt: 500
  },
  {
    name: "Mortgage",
    uv: 278,
    amt: 500
  },
  {
    name: "Credit card",
    uv: 189,
    amt: 500
  },
  {
    name: "Car",
    uv: 200,
    amt: 500
  },
  {
    name: "Used Car",
    uv: 200,
    amt: 500
  },
  {
    name: "Passport",
    uv: 200,
    amt: 500
  },
  {
    name: "Shop",
    uv: 200,
    amt: 500
  },
  {
    name: "GST",
    uv: 200,
    amt: 500
  },
  {
    name: "Home Insurance",
    uv: 200,
    amt: 500
  },
  {
    name: "Food Liscence",
    uv: 200,
    amt: 500
  },
  {
    name: "Motor Insurance",
    uv: 200,
   
    amt: 500
  },
  {
    name: "Udhyam Registration",
    uv: 200,
    amt: 500
  },
  {
    name: "NCPA",
    uv: 200,
    amt: 500
  },
  {
    name: "HLBT",
    uv: 200,
    amt: 500
  },
  {
    name: "Gold Loan",
    uv: 349,
    amt: 500
  }
];

const AllleadGraph = () => {
    return (
        <div  style={{width:"100%", height:"400px"}}>
        <ResponsiveContainer>
        <BarChart
          // width={2500}
          // height={600}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" style={{fontSize:"10px"}} />
          <YAxis datakey="amt" style={{fontSize:"10px"}}/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="uv" fill="#1c78b6"  barSize={20} />
        </BarChart>
        </ResponsiveContainer>
        </div>
      );
}

export default AllleadGraph