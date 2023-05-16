import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ClientAdminContext, ClientListContext } from "../Context/ClientList";
import { useState, useEffect } from "react";
import axios from "axios";
import { GrFormEdit } from "react-icons/Gr";


const Food = () => {
    const tokenData = localStorage.getItem("token");
    const token = JSON.parse(tokenData).usertoken;
    const location = useLocation();
    const {
      state: { serviceID },
    } = location;
    const role = localStorage.getItem("role");
    const { clientState } = useContext(ClientListContext);
    const { clientAdminState } = useContext(ClientAdminContext);
    const [clientData, setClientData] = useState("");
    const [LoanAmount, setLoanAmount] = useState("");
    const [client, setClient] = useState("");
    const [NRMOfLisence, setNRMOfLisence] = useState(null);
    const [NewRegistration, setNewRegistration] = useState(null);
    const [ProprietorshipDeclaration, setProprietorshipDeclaration] = useState(null);
    const [CSGWNocNoted, setCSGWNocNoted] = useState(null);
    const [OnlineSaleOfAlcohol, setOnlineSaleOfAlcohol] = useState(null);
    const [AdditionalDocumentForExpoters, setAdditionalDocumentForExpoters] = useState(null);
    const [SampleFoodRecallPlanAndGuide, setSampleFoodRecallPlanAndGuide] = useState(null);
    const [BISLiscense, setBISLiscense] = useState(null);
    const [Repacker, setRepacker] = useState(null);
    const [repackertoggle, setRepackertoggle] = useState(false);
    const [bis, setBIS] = useState(false);
    const [recall, setRecall] = useState(false);
    const [expoters, setExpoters] = useState(false);
    const [alcohol, setAlcohol] = useState(false);
    const [onlinesale, setOnlinesale] = useState(false);
    const [CSGWNoc, setCSGWNoc] = useState(false);
    const [proprietorship, setProprietorship] = useState(false);
    const [newregister, setNewregister] = useState(false);
    const [nrm, setNrm] = useState(false);
  
    useEffect(() => {
      if(role === "admin"){
       setClientData(clientAdminState.clientAdmin.already);
      }else if (clientState.isError === false) {
       setClientData(clientState.clients.clients);
      }
    }, [])
  
    const handleLeadForm = async (e) => {
      e.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append("clientId", client);
        formData.append("loanAmount", LoanAmount);
        formData.append("serviceId", serviceID);
        formData.append("NRMOfLisence", NRMOfLisence);
        formData.append("NewRegistration", NewRegistration);
        formData.append("ProprietorshipDeclaration", ProprietorshipDeclaration);
        formData.append("CSGWNocNoted", CSGWNocNoted);
        formData.append("OnlineSaleOfAlcohol", OnlineSaleOfAlcohol);
        formData.append("AdditionalDocumentForExpoters", AdditionalDocumentForExpoters);
        formData.append("SampleFoodRecallPlanAndGuide", SampleFoodRecallPlanAndGuide);
        formData.append("BISLiscense", BISLiscense);
        formData.append("Repacker", Repacker);

  
        const leadApiCall = await axios({
          method: "post",
          url: "http://localhost:5000/api/v1/crm/createleadforfoodlisence",
          data: formData,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
  
        console.log(leadApiCall);
      } catch (error) {
        console.log(error);
      }
    };
  
    // console.log(loanAmount, client, gender, mobile, DOB, pan, zip);
    return (
      <div className="flex justify-center items-center">
        <form
          onSubmit={(e) => {
            handleLeadForm(e);
          }}
          className="w-full max-w-lg"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Loan Amount*
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                placeholder="Jane"
                onChange={(e) => {
                  setLoanAmount(e.target.value);
                }}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                My Client*
              </label>
              <div className="relative">
                <select
                  className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={(e) => {
                    setClient(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    Select a client
                  </option>
                  {clientData &&
                    clientData.map((client) => {
                      return (
                        <>
                          <option key={client._id} value={client._id}>
                            {client.first_name}
                          </option>
                        </>
                      );
                    })}
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
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Service*
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                // defaultValue={service}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                NRM Of Lisence*
              </label>
              <p className="cursor-pointer" onClick={()=>setNrm(!nrm)}><GrFormEdit/></p>
                {nrm &&
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="file"
                placeholder="Albuquerque"
                onChange={(e) => {
                  setNRMOfLisence(e.target.files[0]);
                }}
              />
                }
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                New Registration*
              </label>
              <p className="cursor-pointer" onClick={()=>setNewregister(!newregister)}><GrFormEdit/></p>
                {newregister &&
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="file"
                placeholder=""
                onChange={(e) => {
                  setNewRegistration(e.target.files[0]);
                }}
              />
                }
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Proprietorship Declaration*
              </label>
              <p className="cursor-pointer" onClick={()=>setProprietorship(!proprietorship)}><GrFormEdit/></p>
                {proprietorship &&
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="file"
                placeholder="Albuquerque"
                onChange={(e) => {
                  setProprietorshipDeclaration(e.target.files[0]);
                }}
              />
                }
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                CSGWNoc Noted*
              </label>
              <p className="cursor-pointer" onClick={()=>setCSGWNoc(!CSGWNoc)}><GrFormEdit/></p>
                {CSGWNoc &&
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="file"
                placeholder=""
                onChange={(e) => {
                  setCSGWNocNoted(e.target.files[0]);
                }}
              />
                }
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Online Sale Of Alcohol*
              </label>
              <p className="cursor-pointer" onClick={()=>setOnlinesale(!onlinesale)}><GrFormEdit/></p>
                {onlinesale &&
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="file"
                placeholder="Albuquerque"
                onChange={(e) => {
                  setOnlineSaleOfAlcohol(e.target.files[0]);
                }}
              />
                }
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Online Sale Of Alcohol*
              </label>
              <p className="cursor-pointer" onClick={()=>setAlcohol(!alcohol)}><GrFormEdit/></p>
                {alcohol &&
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="file"
                placeholder=""
                onChange={(e) => {
                  setOnlineSaleOfAlcohol(e.target.files[0]);
                }}
              />
                }
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Additional Document For Expoters*
              </label>
              <p className="cursor-pointer" onClick={()=>setExpoters(!expoters)}><GrFormEdit/></p>
                {expoters &&
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="file"
                placeholder="Albuquerque"
                onChange={(e) => {
                  setAdditionalDocumentForExpoters(e.target.files[0]);
                }}
              />
                }
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Sample Food Recall Plan And Guide*
              </label>
              <p className="cursor-pointer" onClick={()=>setRecall(!recall)}><GrFormEdit/></p>
                {recall &&
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="file"
                placeholder=""
                onChange={(e) => {
                  setSampleFoodRecallPlanAndGuide(e.target.files[0]);
                }}
              />
                }
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                BIS Liscense*
              </label>
              <p className="cursor-pointer" onClick={()=>setBIS(!bis)}><GrFormEdit/></p>
                {bis &&
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="file"
                placeholder="Albuquerque"
                onChange={(e) => {
                  setBISLiscense(e.target.files[0]);
                }}
              />
                }
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Repacker*
              </label>
              <p className="cursor-pointer" onClick={()=>setRepackertoggle(!repackertoggle)}><GrFormEdit/></p>
                {repackertoggle &&
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="file"
                placeholder=""
                onChange={(e) => {
                  setRepacker(e.target.files[0]);
                }}
              />
                }
            </div>
          </div>
  
          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    );
}

export default Food