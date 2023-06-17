import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const viewclick = () => {
  console.log("CLICKED");
};

const handleEdit = async () => {
  console.log("edit");
  const response = await axios
    .patch("http://localhost:5000/api/v1/crm/myclient/:id")
    .catch((error) => console.log("Error: ", error));
  if (response && response.data) {
    console.log(response);
    console.log(response.data);
  }
};

const Tableempolyee = () => {
  const [data, setData] = useState([]);
  const [pan, setPan] = useState();
  const [view, setview] = useState(false);
  const [popupdata, setpopupdata] = useState([]);
  const [authScreen, setAuthScreen] = useState(true);
  const navigate = useNavigate();

  const url =
    "https://i0.wp.com/www.society19.com/wp-content/uploads/2020/04/pinterest__tbhjessica-%E2%98%BC-%E2%98%BE%E2%99%A1.png?w=1024&ssl=1";

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

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/crm/getallemployee").then((res) => {
      console.log(res.data.fetchdata);
      setData(res.data.fetchdata);
    });
  }, []);

  // single data fetch FUNCTION

  const singlefetch = async (id) => {
    await axios({
      method: "get",
      url: `http://localhost:5000/api/v1/crm/getEmpolyeeIDforadmin/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res.data);
      setpopupdata(res.data.fetchdata);
      popupdata ? setview(true) : setview(false);
    });
  };

  const change_into_date = (dte) => {
    const data = new Date(dte);
    const newdate = data.toLocaleDateString();
    // console.log(data.toLocaleDateString());
    return newdate;
  };

  console.log(data);

  return (
    <>
      <table class="table-fixed w-full overflow-y-auto h-32 bg-white">
        <thead>
          <tr>
            <th class="w-1/6 px-4 py-2">#</th>
            <th class="w-1/4 px-4 py-2">Name</th>
            <th class="w-1/4 px-4 py-2">Phone No.</th>
            <th class="w-1/2 px-4 py-2">Email</th>
            <th class="w-1/3 px-4 py-2">Role</th>
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
                <td class="border px-1 py-2 text-center">{e.number}</td>
                <td class="border px-1 py-2 text-center">{e.email}</td>
                <td class="border px-1 py-2 text-center">{e.role}</td>
                <td class="border px-1 py-2 text-center">
                  <button
                    className="bg-blue-500 mx-2 p-2 text-white"
                    onClick={() => {
                      singlefetch(e._id);
                    }}
                  >
                    View
                  </button>
                  <button
                    className="bg-green-500 p-2 text-white"
                    onClick={() => {
                      navigate(`/updateallemployee/${e._id}`);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* detail POP-UP */}
      {view ? (
        <>
          <div className="bg-gradient-to-br from-violet-600 via-violet-400 to-gray-600 h-11/12 w-11/12 z-20 absolute top-24 left-10 rounded-2xl" style={{position:"fixed",left:"450px",top:"230px",width:"60%",height:"500px"}}>
            <div className="pt-8 pl-10 h-fit w-full text-white">
              <div className="backdrop-blur-md grid gap-24 grid-cols-2">
                <div className="grid gap-4 grid-cols-2">
                  <img className="rounded-xl " src={url} alt="Profile"></img>
                  <div>
                    <h3 className="font-bold text-2xl uppercase">
                      {popupdata.first_name} {popupdata.last_name}
                    </h3>
                    <p className="font-bold uppercase">{popupdata.role}</p>
                    <p className="font-semibold">Team: {popupdata.Team}</p>
                    <p className="font-semibold">
                      Date of Joining: {change_into_date(popupdata.joiningdate)}
                    </p>
                    <p className="font-semibold">{popupdata.CompanyName}</p>
                  </div>
                </div>
                <div className=" pl-3 h-44">
                  {/* <p>Phone: {popupdata.EmployeeId.MobileNo}</p> */}
                  <p className="font-semibold">Email: {popupdata.email}</p>
                  <p className="font-semibold">
                    Birthday: {change_into_date(popupdata.dob)}
                  </p>
                  <p className="font-semibold">Address: {popupdata.address}</p>
                  <p className="font-semibold">Gender: {popupdata.gender}</p>
                  <p className="font-semibold">
                    Aadhar No: {popupdata.adharno}
                  </p>
                  <p className="font-semibold">
                    Report to: {popupdata.reportto}
                  </p>
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
                      <p className="font-semibold">{popupdata.nationality}</p>
                      <p className="font-semibold">{popupdata.religion}</p>
                      <p className="font-semibold">{popupdata.martialStatus}</p>
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
                      <p className="font-semibold">
                        {popupdata.emergencyContactName}
                      </p>
                      <p className="font-semibold">
                        {popupdata.emergencyContactRelationship}
                      </p>
                      <p className="font-semibold">
                        {popupdata.EmergencyContactNumber}
                      </p>
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
                      <p className="font-semibold">{popupdata.BankName}</p>
                      <p className="font-semibold">{popupdata.BankAccNo}</p>
                      <p className="font-semibold uppercase">{popupdata.IFSCcode}</p>
                      <p className="font-semibold uppercase">{popupdata.PanNo}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      navigate(`/updateallemployee/${popupdata._id}`);
                    }}
                    className="rounded-full bg-cyan-300 p-3 text-white font-semibold"
                  >
                    Update Profile
                  </button>
                  <button
                    onClick={() => {
                      setview(false);
                    }}
                    className="rounded-full bg-cyan-300 p-3 mx-2 text-white font-semibold"
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

export default Tableempolyee;
