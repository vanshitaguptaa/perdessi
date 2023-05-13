import axios from "axios";
import React, { useState, useEffect } from "react";

const MyleadTable = ({ loandetail }) => {
  const [view, setview] = useState(false);
  const [popupdata, setpopupdata] = useState([]);

  const url =
    "https://i0.wp.com/www.society19.com/wp-content/uploads/2020/04/pinterest__tbhjessica-%E2%98%BC-%E2%98%BE%E2%99%A1.png?w=1024&ssl=1";

  console.log(loandetail);

  // Function for Fetch Data in Pop
  const Fetchpopdata = async (id) => {
    console.log(`Pop is Working for this is ${id}`);
    {/*
    await axios({
      method: "get",
      url: "http://localhost:5000/api/v1/crm/getpersonalloanforemployee",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res.data.savedLeads);
      // setpopupdata(res.data.savedLeads);
    });
  */}
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Serach Box */}
        <div className="flex items-center">
          <div className="flex border border-purple-200 rounded">
            <input
              type="text"
              className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
            />
            <button className="px-4 text-white bg-purple-600 border-l rounded ">
              Search
            </button>
          </div>
        </div>
        {/* Data  */}
        <div className="flex flex-row gap-6">
          {loandetail &&
            loandetail.map((e, id) => {
              return (
                <div key={e._id}>
                  <div className="w-full rounded-2xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-auto">
                    <div className="rounded-t-xl bg-blue-200 border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                      <h4 className="mb-2 text-xl  font-medium leading-tight text-neutral-900 dark:text-neutral-70">
                        {e.service.service_name}
                      </h4>
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Name : {"  "}
                        {e.client.first_name} {e.client.last_name}
                      </h5>
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        city : {"  "}
                        {e.client.city}
                      </h5>
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Email : {"  "}
                        {e.client.email}
                      </h5>
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Phone Number : {"  "}
                        {e.client.phone}
                      </h5>
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Aadhar Number : {"  "}
                        {e.client.aadhar}
                      </h5>
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        PAN Number : {"  "}
                        {e.client.pan}
                      </h5>

                      <button
                        type="button"
                        className="inline-block rounded bg-blue-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={() => {
                          Fetchpopdata(e._id);
                          setview(true);
                        }}
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="inline-block rounded bg-blue-300 mx-4 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="inline-block rounded bg-blue-300 mx-4 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50"></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* LOAN detail POP-UP */}
      {view ? (
        <>
          <div className="bg-gradient-to-br from-violet-600 via-violet-400 to-gray-600 h-11/12 w-11/12 z-20 absolute top-24 left-10 rounded-2xl">
            <div className="grid grid-rows-2 pt-8 pl-10 h-full ">
              <div className="backdrop-blur-md grid gap-24 grid-cols-2">
                <div className="grid gap-4 grid-cols-2">
                  <img className="rounded-xl " src={url} alt="Profile"></img>
                  <div>
                    <h3 className="font-bold text-2xl uppercase"></h3>
                    <p className="font-bold uppercase"> </p>
                    <p className="font-semibold"> </p>
                    <p className="font-semibold">
                      {/* Date of Joining: {change_into_date()} */}
                    </p>
                    <p className="font-semibold">{}</p>
                  </div>
                </div>
                <div className=" pl-3 h-44">
                  {/* <p>Phone: {Profiledata.EmployeeId.MobileNo}</p> */}
                  <p className="font-semibold">Email: {}</p>
                  <p className="font-semibold">
                    {/* Birthday: {change_into_date()} */}
                  </p>
                  <p className="font-semibold">Address: {}</p>
                  <p className="font-semibold">Gender: {}</p>
                  <p className="font-semibold">Aadhar No: {}</p>
                  <p className="font-semibold">Report to: {}</p>
                </div>
              </div>
              <div className="backdrop-blur-md extra-information-div -mt-4 pb-4 grid grid-rows-2 grid-cols-2">
                <div className="">
                  <h5 className="font-bold text-2xl uppercase">
                    Personal information
                  </h5>
                  <div className="grid grid-cols-2">
                    <div>
                      <p className="font-semibold">Nationality:</p>
                      <p className="font-semibold">Religion:</p>
                      <p className="font-semibold">Marital Status:</p>
                    </div>
                    <div className="">
                      <p className="font-semibold">{}</p>
                      <p className="font-semibold">{}</p>
                      <p className="font-semibold">{}</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h5 className="font-bold text-2xl uppercase">
                    Emergency Contacts
                  </h5>
                  <div className="grid grid-cols-2">
                    <div>
                      <p className="font-semibold">Name</p>
                      <p className="font-semibold">Relationship</p>
                      <p className="font-semibold">Phone</p>
                    </div>
                    <div className="">
                      <p className="font-semibold">{}</p>
                      <p className="font-semibold">{}</p>
                      <p className="font-semibold">{}</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h5 className="font-bold text-2xl uppercase">
                    Bank information
                  </h5>
                  <div className="grid grid-cols-2">
                    <div>
                      <p className="font-semibold">Account Holder Name</p>
                      <p className="font-semibold">Bank Account No</p>
                      <p className="font-semibold">IFSC Code</p>
                      <p className="font-semibold">Pan Number</p>
                    </div>
                    <div className="">
                      <p className="font-semibold">{}</p>
                      <p className="font-semibold">{}</p>
                      <p className="font-semibold">{}</p>
                      <p className="font-semibold">{}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setview(false);
                    }}
                    className="rounded-full bg-cyan-300 p-3 text-white font-semibold"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {/* Above Code is for POP_UP */}
    </>
  );
};

export default MyleadTable;
