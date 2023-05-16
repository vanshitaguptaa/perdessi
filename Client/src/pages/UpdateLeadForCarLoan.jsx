import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ClientAdminContext, ClientListContext } from "../Context/ClientList";
import { useState, useEffect } from "react";
import axios from "axios";
import { GrFormEdit } from "react-icons/Gr";

const Car = () => {
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
  const [Selectclient, setSelectClient] = useState("Select a client");
  const [SalariedIdentityProof, setSalariedIdentityProof] = useState(null);
  const [SalariedAddressProof, setSalariedAddressProof] = useState(null);
  const [SalariedAgeProof, setSalariedAgeProof] = useState(null);
  const [SalariedBankStatement, setSalariedBankStatement] = useState(null);
  const [SalariedProofOfIncome, setSalariedProofOfIncome] = useState(null);
  const [
    SalariedSignatureVerificationProof,
    setSalariedSignatureVerificationProof,
  ] = useState(null);
  const [SalariedProformaInvoice, setSalariedProformaInvoice] = useState(null);
  const [SelfEmployedIdentityProof, setSelfEmployedIdentityProof] =
    useState(null);
  const [SelfEmployeeAddressProof, setSelfEmployeeAddressProof] =
    useState(null);
  const [SelfEmployeeAgeProof, setSelfEmployeeAgeProof] = useState(null);
  const [SelfEmployeeBankStatement, setSelfEmployeeBankStatement] =
    useState(null);
  const [SelfEmployeeBusinessOwnership, setSelfEmployeeBusinessOwnership] =
    useState(null);
  const [SelfEmployeeProofOIncome, setSelfEmployeeProofOIncome] =
    useState(null);
  const [
    SelfEmployeeSignatureVerification,
    setSelfEmployeeSignatureVerification,
  ] = useState(null);
  const [SelfEmployeeProformaInvoice, setSelfEmployeeProformaInvoice] =
    useState(null);
  const [selfEmpPreform, setSelfEmpPreform] = useState(true);
  const [selfEmpSignature, setSelfEmpSignature] = useState(true);
  const [selfEmpIncome, setSelfEmpIncome] = useState(true);
  const [selfEmpBns, setSelfEmpBns] = useState(true);
  const [selfEmpBnk, setSelfEmpBnk] = useState(true);
  const [selfEmpAge, setSelfEmpAge] = useState(true);
  const [selfEmpAdd, setSelfEmpAdd] = useState(true);
  const [selfIndentity, setSelfIndentity] = useState(true);
  const [salariedPPffInvoice, setSalariedPPffInvoice] = useState(true);
  const [salariedPSignature, setSalariedSignature] = useState(true);
  const [salariedPIncome, setSalariedIncome] = useState(true);
  const [salariedBnk, setSalariedBnk] = useState(true);
  const [salariedAge, setSalariedAge] = useState(true);
  const [salariedAddPff, setSalariedAddPff] = useState(true);
  const [salaryProofId, setSalaryProofId] = useState(true);

  useEffect(() => {
    if (role === "admin") {
      setClientData(clientAdminState.clientAdmin.already);
    } else if (clientState.isError === false) {
      setClientData(clientState.clients.clients);
    }
  }, []);

  // const handleLeadForm = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const formData = new FormData();
  //     formData.append("clientId", client);
  //     formData.append("Selectclient", Selectclient);
  //     formData.append("loanAmount", LoanAmount);
  //     formData.append("serviceId", serviceID);
  //     formData.append("SalariedIdentityProof", SalariedIdentityProof);
  //     formData.append("SalariedAddressProof", SalariedAddressProof);
  //     formData.append("SalariedAgeProof", SalariedAgeProof);
  //     formData.append("SalariedBankStatement", SalariedBankStatement);
  //     formData.append("SalariedProofOfIncome", SalariedProofOfIncome);
  //     formData.append(
  //       "SalariedSignatureVerificationProof",
  //       SalariedSignatureVerificationProof
  //     );
  //     formData.append("SalariedProformaInvoice", SalariedProformaInvoice);
  //     formData.append("SelfEmployedIdentityProof", SelfEmployedIdentityProof);
  //     formData.append("SelfEmployeeAddressProof", SelfEmployeeAddressProof);
  //     formData.append("SelfEmployeeAgeProof", SelfEmployeeAgeProof);
  //     formData.append("SelfEmployeeBankStatement", SelfEmployeeBankStatement);
  //     formData.append(
  //       "SelfEmployeeBusinessOwnership",
  //       SelfEmployeeBusinessOwnership
  //     );
  //     formData.append("SelfEmployeeProofOIncome", SelfEmployeeProofOIncome);
  //     formData.append(
  //       "SelfEmployeeSignatureVerification",
  //       SelfEmployeeSignatureVerification
  //     );
  //     formData.append(
  //       "SelfEmployeeProformaInvoice",
  //       SelfEmployeeProformaInvoice
  //     );

  //     const leadApiCall = await axios({
  //       method: "post",
  //       url: "http://localhost:5000/api/v1/crm/createleadforcarloan",
  //       data: formData,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     console.log(leadApiCall);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
                  setSelectClient(e.target.value);
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
              //   defaultValue={service}
              readOnly
            />
          </div>
        </div>
        {Selectclient === "Select a client" ? (
          ""
        ) : (
          <div>
            {Selectclient === "Salaried" ? (
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
                      Salaried Identity Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSalaryProofId(!salaryProofId)}
                    >
                      <GrFormEdit />
                    </p>
                    {salaryProofId && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        placeholder="Albuquerque"
                        onChange={(e) => {
                          setSalariedIdentityProof(e.target.files[0]);
                        }}
                      />
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Salaried Address Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSalariedAddPff(!salariedAddPff)}
                    >
                      <GrFormEdit />
                    </p>
                    {salariedAddPff && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        name="residence"
                        placeholder="Albuquerque"
                        onChange={(e) =>
                          setSalariedAddressProof(e.target.files[0])
                        }
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Salaried Age Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSalariedAge(!salariedAge)}
                    >
                      <GrFormEdit />
                    </p>
                    {salariedAge && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        placeholder="Albuquerque"
                        onChange={(e) => {
                          setSalariedAgeProof(e.target.files[0]);
                        }}
                      />
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Salaried Bank Statement*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSalariedBnk(!salariedBnk)}
                    >
                      <GrFormEdit />
                    </p>
                    {salariedBnk && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        placeholder="Albuquerque"
                        onChange={(e) => {
                          setSalariedBankStatement(e.target.files[0]);
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Salaried Proof Of Income*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSalariedIncome(!salariedPIncome)}
                    >
                      <GrFormEdit />
                    </p>
                    {salariedPIncome && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        placeholder="Albuquerque"
                        onChange={(e) => {
                          setSalariedProofOfIncome(e.target.files[0]);
                        }}
                      />
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Salaried Signature Verification Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSalariedSignature(!salariedPSignature)}
                    >
                      <GrFormEdit />
                    </p>
                    {salariedPSignature && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        placeholder="Albuquerque"
                        onChange={(e) => {
                          setSalariedSignatureVerificationProof(
                            e.target.files[0]
                          );
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Salaried Proof income Invoice*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() =>
                        setSalariedPPffInvoice(!salariedPPffInvoice)
                      }
                    >
                      <GrFormEdit />
                    </p>
                    {salariedPPffInvoice && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        placeholder="Albuquerque"
                        onChange={(e) => {
                          setSalariedProformaInvoice(e.target.files[0]);
                        }}
                      />
                    )}
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
                      Self Employed Identity Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfIndentity(!selfIndentity)}
                    >
                      <GrFormEdit />
                    </p>
                    {selfIndentity && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        placeholder="Albuquerque"
                        onChange={(e) => {
                          setSelfEmployedIdentityProof(e.target.files[0]);
                        }}
                      />
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Self Employee Address Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpAdd(!selfEmpAdd)}
                    >
                      <GrFormEdit />
                    </p>
                    {selfEmpAdd && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        name="residence"
                        placeholder="Albuquerque"
                        onChange={(e) =>
                          setSelfEmployeeAddressProof(e.target.files[0])
                        }
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Self Employee Age Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpAge(!selfEmpAge)}
                    >
                      <GrFormEdit />
                    </p>
                    {selfEmpAge && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        placeholder="Albuquerque"
                        onChange={(e) => {
                          setSelfEmployeeAgeProof(e.target.files[0]);
                        }}
                      />
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Self Employee Bank Statement*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpBnk(!selfEmpBnk)}
                    >
                      <GrFormEdit />
                    </p>
                    {selfEmpBnk && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        placeholder="Albuquerque"
                        onChange={(e) => {
                          setSelfEmployeeBankStatement(e.target.files[0]);
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Self Employee Business Ownership*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpBns(!selfEmpBns)}
                    >
                      <GrFormEdit />
                    </p>
                    {selfEmpBns && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        placeholder="Albuquerque"
                        onChange={(e) => {
                          setSelfEmployeeBusinessOwnership(e.target.files[0]);
                        }}
                      />
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Self Employee Proof Of Income*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpIncome(!selfEmpIncome)}
                    >
                      <GrFormEdit />
                    </p>
                    {selfEmpIncome && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        placeholder="Albuquerque"
                        onChange={(e) => {
                          setSelfEmployeeProofOIncome(e.target.files[0]);
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Self Employee Signature Verification*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpSignature(!selfEmpSignature)}
                    >
                      <GrFormEdit />
                    </p>
                    {selfEmpSignature && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        placeholder="Albuquerque"
                        onChange={(e) => {
                          setSelfEmployeeSignatureVerification(
                            e.target.files[0]
                          );
                        }}
                      />
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Self Employee Preform Invoice*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpPreform(!selfEmpPreform)}
                    >
                      <GrFormEdit />
                    </p>
                    {selfEmpPreform && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="file"
                        placeholder="Albuquerque"
                        onChange={(e) => {
                          setSelfEmployeeProformaInvoice(e.target.files[0]);
                        }}
                      />
                    )}
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
  );
};

export default Car;
