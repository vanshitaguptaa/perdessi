import axios from "axios";
import React, { useState, useEffect } from "react";


const MyleadTable = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [fname, setFname] = useState();
  const [Lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [pan, setPan] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/crm/getallclient").then((res) => {
      console.log(res.data.already);
      setData(res.data.already);
      // setId(res.data.already._id)
    });
  }, []);

  const viewclick = () => {
    console.log("CLICKED");
  };
  
  console.log(data);
  // console.log(id)

  return (
    <table class="table-fixed w-full overflow-y-auto h-32 bg-white">
      <thead>
        <tr>
          <th class="w-1/6 px-4 py-2">Clint ID</th>
          <th class="w-1/4 px-4 py-2">Name</th>
          <th class="w-1/4 px-4 py-2">Phone No.</th>
          <th class="w-1/2 px-4 py-2">Email</th>
          <th class="w-1/3 px-4 py-2">PAN Number</th>
          <th class="w-1/3 px-4 py-2">ADHAR Number</th>
          <th class="w-1/3 px-4 py-2">Service</th>
          <th class="w-1/4 px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e, id) => {
          return (
            <tr>
              <td class="border px-1 py-2 text-center">{id + 1}</td>
              <td class="border px-1 py-2 text-center">
                {e.first_name || e.firstName} {e.last_name || e.lastname}
              </td>
              <td class="border px-1 py-2 text-center">
                {e.phone}
              </td>
              <td class="border px-1 py-2 text-center">
                {e.email}
              </td>
              <td class="border px-1 py-2 text-center">
                {e.pan}
              </td>
              <td class="border px-1 py-2 text-center">
                {e.adhar}
              </td>
              <td class="border px-1 py-2 text-center">
                {e.service}
              </td>
              <td class="border px-1 py-2 text-center">{e.pan}</td>
              <td class="border px-1 py-2 text-center">
                <button
                  className="bg-blue-500 mx-2 p-2 text-white"
                  onClick={viewclick}
                >
                  View
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MyleadTable;
