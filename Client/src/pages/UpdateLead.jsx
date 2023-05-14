import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import { ClientListContext } from "../Context/ClientList";
import { useState, useEffect } from "react";
import axios from "axios";

const UpdateLead = () => {
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;
  const location = useLocation();
  const {
    state: { serviceId, service },
  } = location;
  const { clients, isError } = useContext(ClientListContext);
  const [clientData, setClientData] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [client, setClient] = useState("Select a client");
  // const [zip, setZip] = useState("");
  const [SalariedProofOfIdentity, setIndentity] = useState(null);
  const [SalariedTwoPassportPhoto, setPassport] = useState(null);
  const [SelfEmployeedProofofIdentity, setSEIndentity] = useState(null);
  const [SalariedProofOfResidence, setResidence] = useState(null);
  const [SelfEmployeedProofofResidence, setseResidence] = useState(null);
  const [SelfEmployeedIncomeProof, setIncome] = useState(null);
  const [SalariedThreeMonthsBankStatement, setBankStatement] = useState(null);
  // const [sixbankStatement, setSixBankStatement] = useState(null);
  const [employment, setEmployment] = useState("");
  const [SalariedThreeMonthSalarySlip, setThreesalaryslip] = useState(null);
  const [SelfEmployeedSixMonthBankStatement, setSeSixBankStatement] =
    useState(null);
  const [SelfEmployeedProofofContinuityofBusiness, setBusiness] =
    useState(null);
  const [SelfEmployeedOfficeAddressProof, setAddressproof] = useState(null);
  const [popupdata, setpopupdata] = useState([]);

 const { id, serviceName } = useParams();
 
  const Fetchpopdata = async (id, serviceName) => {
    console.log(`Pop is Working for this is ${id}`);

    if (serviceName === "personal loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getpersonalloanbyuid?personalLoanId=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "Mortgage  Loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getmortgageloanbyid?mortgageLoanId=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "Business Loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getmortgageloanbyid?mortgageLoanId=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "Home  Loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/gethomeloanbyid?homeleadID=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "Business Loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getbusinessloanbyid?businessLoanId=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "Mortgage  Loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getmortgageloanbyid?mortgageLoanId=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "Home  Loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/gethomeloanbyid?homeleadID=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "Gold Loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getgoldloanbyid?goldLoanId=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "Credit Card") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getcreditcardbyid?creditCardId=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "New Correction Pan application") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getnewcorrectionpanapplication?newCorrectionPanApplicationId=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "Shop Act") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getshopactbyid?shopActId=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "passport") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getpassportbyid?passportById=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "GST registration application") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getGSTregistrationbyid?GSTRegistrationId=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "UDYAM Registration") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getudyamcertificatebyid?UdyamCertificateId=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "Car Loan") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getcarloanbyid?carLoanId=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    if (serviceName === "Food Lisence") {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getfoodlisencebyid?foodlisenceById=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setpopupdata(res.data.response);
      });
    }
    popupdata ? setview(true) : setview(false);
  };


  useEffect(() => {
    Fetchpopdata(id, serviceName);
    if (isError === false) {
      setClientData(clients.clients);
    }
  }, []);

  const handleLeadForm = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("serviceId", serviceId);
      formData.append("clientId", client);
      formData.append("loanAmount", LoanAmount);
      formData.append("SalariedProofOfIdentity", SalariedProofOfIdentity);
      formData.append("SalariedProofOfResidence", SalariedProofOfResidence);
      formData.append(
        "SalariedThreeMonthsBankStatement",
        SalariedThreeMonthsBankStatement
      );
      formData.append(
        "SalariedThreeMonthSalarySlip",
        SalariedThreeMonthSalarySlip
      );
      formData.append("SalariedTwoPassportPhoto", SalariedTwoPassportPhoto);
      formData.append(
        "SelfEmployeedProofofIdentity",
        SelfEmployeedProofofIdentity
      );
      formData.append(
        "SelfEmployeedProofofResidence",
        SelfEmployeedProofofResidence
      );
      formData.append("SelfEmployeedIncomeProof", SelfEmployeedIncomeProof);
      formData.append(
        "SelfEmployeedSixMonthBankStatement",
        SelfEmployeedSixMonthBankStatement
      );
      formData.append(
        "SelfEmployeedOfficeAddressProof",
        SelfEmployeedOfficeAddressProof
      );
      formData.append(
        "SelfEmployeedProofofContinuityofBusiness",
        SelfEmployeedProofofContinuityofBusiness
      );
      
    //   const leadApiCall = await axios({
    //     method: "post",
    //     url: "http://localhost:5000/api/v1/crm/createleadforPersonalloan",
    //     data: formData,
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

      console.log(leadApiCall);
    } catch (error) {
      console.log(error);
    }
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };

  // console.log(loanAmount, client, gender, mobile, DOB, pan, zip);
  if (serviceName === "personal loan"){
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
              placeholder=""
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
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Client Type*
            </label>
            <div className="relative">
              <select
                className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => {
                  setEmployment(e.target.value);
                }}
              >
                <option value="Select a client" selected>
                  Select a client
                </option>
                <option key="" value="Salaried">
                  Salaried
                </option>
                <option key="" value="Self Employed">
                  Self Employed
                </option>
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
              defaultValue={service}
              readOnly
            />
          </div>
        </div>
        {employment === "Select a client" ? (
          ""
        ) : (
          <div>
            {employment === "Salaried" ? (
              <div>
                <h3 className="my-5 block uppercase tracking-wide text-gray-700 text-xl underline font-bold">
                  Salaried
                </h3>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Proof Of Indentity*
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setIndentity(e.target.files[0]);
                      }}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Proof Of Residence*
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      name="residence"
                      placeholder="Albuquerque"
                      onChange={(e) => setResidence(e.target.files[0])}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Three Months Bank Statement*
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setBankStatement(e.target.files[0]);
                      }}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Three Month Salary Slip*
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setThreesalaryslip(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Two Passport Photo*
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setPassport(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="my-5 block uppercase tracking-wide text-gray-700 text-xl underline font-bold">
                  Self Employeed
                </h3>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Proof Of Indentity*
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setSEIndentity(e.target.files[0]);
                      }}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Proof Of Residence*
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      name="residence"
                      placeholder="Albuquerque"
                      onChange={(e) => setseResidence(e.target.files[0])}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Income Proof*
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setIncome(e.target.files[0]);
                      }}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Six Month Bank Statement*
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setSeSixBankStatement(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Office Address Proof*
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setAddressproof(e.target.files[0]);
                      }}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Proof Of Continuity Of Business*
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setBusiness(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

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
  )
}
};

export default UpdateLead   ;
