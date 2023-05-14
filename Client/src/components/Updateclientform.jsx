import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    first_name: yup.string().min(2).required(),
    // age: yup.number().positive().integer().required(),
    last_name: yup.string().required(),
    middlename: yup.string().optional(),
    city: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().min(10).required(),
    aadhar: yup.number().min(12).required(),
    pan: yup.string().min(10).required(),
    gst: yup.string().min(6).required(),
    zip: yup.number().min(6).required(),
    state: yup.string().required(),
  })
  .required();

const Updateclientform = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const {id}= useParams();
  const [popupdata, setpopupdata] = useState([]);
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


  const singlefetch = async (id) => {
    await axios({
      method: "get",
      url: `http://localhost:5000/api/v1/crm/getclientbyid?clientId=${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
    //   console.log(res.data.response);
      setpopupdata(res.data.response);

    });
  };

  useEffect(() => {
    if (!tokenData) {
      navigate("/login");
    } else {
      if (currentDate > tokenExpiry) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      singlefetch(id)
      setTimeout(() => {
        setAuthScreen(false);
      }, 500);
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/myclient/${id}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response) {
        navigate("/myclient")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="w-full mt-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap mx-3 mb-6 justify-center items-center">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              
              defaultValue={popupdata.first_name}
              {...register("first_name")}
            />
            <small className="text-red-600">{errors.first_name?.message}</small>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Middle Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              
              defaultValue={popupdata.middle_name}
              {...register("middlename")}
            />
            <small className="text-red-600">{errors.middlename?.message}</small>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              
              defaultValue={popupdata.last_name}
              {...register("last_name")}
            />
            <small className="text-red-600">{errors.last_name?.message}</small>
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6 justify-center items-center">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="email"
              placeholder=""
              
              defaultValue={popupdata.email}
              {...register("email")}
            />
            <small className="text-red-600">{errors.email?.message}</small>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Mobile Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder=""
              
              defaultValue={popupdata.phone}
              {...register("phone")}
            />
            <small className="text-red-600">{errors.phone?.message}</small>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              PAN Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white uppercase"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={popupdata.pan}
              {...register("pan")}
            />
            <small className="text-red-600">{errors.pan?.message}</small>
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6 justify-center items-center">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Aadhar Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder=""
              
              defaultValue={popupdata.aadhar}
              {...register("aadhar")}
            />
            <small className="text-red-600">{errors.aadhar?.message}</small>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              GST Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              
              defaultValue={popupdata.gst}
              {...register("gst")}
            />
            <small className="text-red-600">{errors.gst?.message}</small>
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder=""
              
              defaultValue={popupdata.city}
              {...register("city")}
            />
            <small className="text-red-600">{errors.city?.message}</small>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <div className="relative">
              <select
                name=""
                {...register("state")}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="grid-state"
              >
                <option value={popupdata.state}>{popupdata.state}</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {errors.state && (
              <small className="text-red-600">{errors.state.message}</small>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="number"
              placeholder=""
              
              defaultValue={popupdata.zip}
              {...register("zip")}
            />
            <small className="text-red-600">{errors.zip?.message}</small>
          </div>
        </div>
        <div className="flex justify-end mr-6 mt-5">
          {/* <button className="rounded-none bg-blue-600 text-white p-3" type="submit">Add Client</button> */}
          <input
            type="submit"
            className="rounded-none bg-blue-600 text-white p-3 cursor-pointer"
          />
        </div>
      </form>
    </>
  );
};

export default Updateclientform;
