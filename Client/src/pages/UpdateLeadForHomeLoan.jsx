import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ClientAdminContext, ClientListContext } from "../Context/ClientList";
import { useState, useEffect } from "react";
import axios from "axios";
import { GrFormEdit } from "react-icons/Gr";


const UpdateLeadForHomeLoan = () => {
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
  const [employeeIdentityCard, setEmployeeIdentityCard] = useState(null);
  const [loanApplication, setLoanApplication] = useState(null);
  const [proofOfIdentity, setProofOfIdentity] = useState(null);
  const [proofOfResidency, setProofOfResidency] = useState(null);
  const [permissionOfConstruction, setPermissionOfConstruction] =
    useState(null);
  const [registeredAgreementForSales, setRegisteredAgreementForSales] =
    useState(null);
  const [allotmentletter, setAllotmentletter] = useState(null);
  const [stampedAgreement, setStampedAgreement] = useState(null);
  const [occupancyCertificate, setOccupancyCertificate] = useState(null);
  const [shareCertification, setShareCertification] = useState(null);
  const [maintainanceBill, setMaintainanceBill] = useState(null);
  const [electricityBill, setElectricityBill] = useState(null);
  const [propertyTaxReceipt, setPropertyTaxReceipt] = useState(null);
  const [paymentMadetoBuilderRecept, setPaymentMadetoBuilderRecept] =
    useState(null);
  const [sixMonthBankStatement, setSixMonthBankStatement] = useState(null);
  const [loanAccountStatement, setLoanAccountStatement] = useState(null);
  const [threeMonthSalarySlip, setThreeMonthSalarySlip] = useState(null);
  const [twoYearOfFormsixteenOrItReturn, setTwoYearOfFormsixteenOrItReturn] =
    useState(null);
  const [businessAddressProof, setBusinessAddressProof] = useState(null);
  const [ThreeYearItReturn, setThreeYearItReturn] = useState(null);
  const [businessLisenceDetail, setBusinessLisenceDetail] = useState(null);
  const [TDScertification, setTDScertification] = useState(null);
  const [certificationOfQualification, setcertificationOfQualification] =
    useState(null);
  const [
    approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed,
    setApprovedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed,
  ] = useState(null);
  const [employeeIdentity, setEmployeeIdentity] = useState(false);
  const [loanApp, setLoanApp] = useState(false);
  const [proofOfId, setProofOfId] = useState(false);
  const [residency, setResidency] = useState(false);
  const [construction, setConstruction] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [allotment, setAllotment] = useState(false);
  const [occupancy, setOccupancy] = useState(false);
  const [share, setShare] = useState(false);
  const [bill, setBill] = useState(false);
  const [electBill, setElectBill] = useState(false);
  const [property, setProperty] = useState(false);
  const [plan, setPlan] = useState(false);
  const [builder, setBuilder] = useState(false);
  const [sixMonth, setSixMonth] = useState(false);
  const [accountStatement, setAccountStatement] = useState(false);
  const [threeMonth, setThreeMonth] = useState(false);
  const [itReturn, setItReturn] = useState(false);
  const [businessAd, setBusinessAd] = useState(false);
  const [yearIt, setYearIt] = useState(false);
  const [lisence, setLisence] = useState(false);
  const [tds, setTDS] = useState(false);
  const [qualification, setQualification] = useState(false);

  useEffect(() => {
    if(role === "admin"){
     setClientData(clientAdminState.clientAdmin.already);
    }else if (clientState.isError === false) {
     setClientData(clientState.clients.clients);
    }
  }, [])

  // const handleLeadForm = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const formData = new FormData();
  //     formData.append("clientId", client);
  //     formData.append("loanAmount", LoanAmount);
  //     // formData.append("serviceId", serviceId);
  //     formData.append("employeeIdentityCard", employeeIdentityCard);
  //     formData.append("loanApplication", loanApplication);
  //     formData.append("proofOfIdentity", proofOfIdentity);
  //     formData.append("proofOfResidency", proofOfResidency);
  //     formData.append("permissionOfConstruction", permissionOfConstruction);
  //     formData.append(
  //       "registeredAgreementForSales",
  //       registeredAgreementForSales
  //     );
  //     formData.append("allotmentletter", allotmentletter);
  //     formData.append("stampedAgreement", stampedAgreement);
  //     formData.append("occupancyCertificate", occupancyCertificate);
  //     formData.append("shareCertification", shareCertification);
  //     formData.append("maintainanceBill", maintainanceBill);
  //     formData.append("electricityBill", electricityBill);
  //     formData.append("propertyTaxReceipt", propertyTaxReceipt);
  //     formData.append("paymentMadetoBuilderRecept", paymentMadetoBuilderRecept);
  //     formData.append("sixMonthBankStatement", sixMonthBankStatement);
  //     formData.append("loanAccountStatement", loanAccountStatement);
  //     formData.append("threeMonthSalarySlip", threeMonthSalarySlip);
  //     formData.append(
  //       "twoYearOfFormsixteenOrItReturn",
  //       twoYearOfFormsixteenOrItReturn
  //     );
  //     formData.append("businessAddressProof", businessAddressProof);
  //     formData.append("ThreeYearItReturn", ThreeYearItReturn);
  //     formData.append("businessLisenceDetail", businessLisenceDetail);
  //     formData.append("TDScertification", TDScertification);
  //     formData.append(
  //       "certificationOfQualification",
  //       certificationOfQualification
  //     );
  //     formData.append(
  //       "approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed",
  //       approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed
  //     );

  //     const leadApiCall = await axios({
  //       method: "post",
  //       url: "http://localhost:5000/api/v1/crm/createleadforhomeloan",
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
              Employee Identity Card*
            </label>
            <p className="cursor-pointer" onClick={()=>setEmployeeIdentity(!employeeIdentity)}><GrFormEdit/></p>
                {employeeIdentity &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setEmployeeIdentityCard(e.target.files[0]);
              }}
            />
                }
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Loan Application*
            </label>
            <p className="cursor-pointer" onClick={()=>setLoanApp(!loanApp)}><GrFormEdit/></p>
                {loanApp &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setLoanApplication(e.target.files[0]);
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
              Proof Of Identity*
            </label>
            <p className="cursor-pointer" onClick={()=>setProofOfId(!proofOfId)}><GrFormEdit/></p>
                {proofOfId &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setProofOfIdentity(e.target.files[0]);
              }}
            />
                }
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Proof Of Residency*
            </label>
            <p className="cursor-pointer" onClick={()=>setResidency(!residency)}><GrFormEdit/></p>
                {residency &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setProofOfResidency(e.target.files[0]);
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
              Permission Of Construction*
            </label>
            <p className="cursor-pointer" onClick={()=>setConstruction(!construction)}><GrFormEdit/></p>
                {construction &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setPermissionOfConstruction(e.target.files[0]);
              }}
            />
                }
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Registered Agreement For Sales*
            </label>
            <p className="cursor-pointer" onClick={()=>setAgreement(!agreement)}><GrFormEdit/></p>
                {agreement &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setRegisteredAgreementForSales(e.target.files[0]);
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
              Allotment Letter*
            </label>
            <p className="cursor-pointer" onClick={()=>setAllotment(!allotment)}><GrFormEdit/></p>
                {allotment &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setAllotmentletter(e.target.files[0]);
              }}
            />
                }
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Stamped Agreement*
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setStampedAgreement(e.target.files[0]);
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
              Occupancy Certificate*
            </label>
            <p className="cursor-pointer" onClick={()=>setOccupancy(!occupancy)}><GrFormEdit/></p>
                {occupancy &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setOccupancyCertificate(e.target.files[0]);
              }}
            />
                }
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Share Certification*
            </label>
            <p className="cursor-pointer" onClick={()=>setShare(!share)}><GrFormEdit/></p>
                {share &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setShareCertification(e.target.files[0]);
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
              Maintainance Bill*
            </label>
            <p className="cursor-pointer" onClick={()=>setBill(!bill)}><GrFormEdit/></p>
                {bill &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setMaintainanceBill(e.target.files[0]);
              }}
            />
                }
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Electricity Bill*
            </label>
            <p className="cursor-pointer" onClick={()=>setElectBill(!electBill)}><GrFormEdit/></p>
                {electBill &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setElectricityBill(e.target.files[0]);
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
              Property Tax Receipt*
            </label>
            <p className="cursor-pointer" onClick={()=>setProperty(!property)}><GrFormEdit/></p>
                {property &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setPropertyTaxReceipt(e.target.files[0]);
              }}
            />
                }
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Approved Plan Copy Registered Development Agreement Of The Builder
              Conveyance Deed*
            </label>
            <p className="cursor-pointer" onClick={()=>setPlan(!plan)}><GrFormEdit/></p>
                {plan &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setApprovedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed(
                  e.target.files[0]
                );
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
              Payment Made To Builder Recept*
            </label>
            <p className="cursor-pointer" onClick={()=>setBuilder(!builder)}><GrFormEdit/></p>
                {builder &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setPaymentMadetoBuilderRecept(e.target.files[0]);
              }}
            />
                }
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Six Month Bank Statement*
            </label>
            <p className="cursor-pointer" onClick={()=>setSixMonth(!sixMonth)}><GrFormEdit/></p>
                {sixMonth &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setSixMonthBankStatement(e.target.files[0]);
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
              Loan AccountStatement*
            </label>
            <p className="cursor-pointer" onClick={()=>setAccountStatement(!accountStatement)}><GrFormEdit/></p>
                {accountStatement &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setLoanAccountStatement(e.target.files[0]);
              }}
            />
                }
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Three Month Salary Slip*
            </label>
            <p className="cursor-pointer" onClick={()=>setThreeMonth(!threeMonth)}><GrFormEdit/></p>
                {threeMonth &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setThreeMonthSalarySlip(e.target.files[0]);
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
              Two Year Of Form sixteen Or It Return*
            </label>
            <p className="cursor-pointer" onClick={()=>setItReturn(!itReturn)}><GrFormEdit/></p>
                {itReturn &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setTwoYearOfFormsixteenOrItReturn(e.target.files[0]);
              }}
            />
                }
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Business Address Proof*
            </label>
            <p className="cursor-pointer" onClick={()=>setBusinessAd(!businessAd)}><GrFormEdit/></p>
                {businessAd &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setBusinessAddressProof(e.target.files[0]);
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
              Three YearIt Return*
            </label>
            <p className="cursor-pointer" onClick={()=>setYearIt(!yearIt)}><GrFormEdit/></p>
                {yearIt &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setThreeYearItReturn(e.target.files[0]);
              }}
            />
                }
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Business Lisence Detail*
            </label>
            <p className="cursor-pointer" onClick={()=>setLisence(!lisence)}><GrFormEdit/></p>
                {lisence &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setBusinessLisenceDetail(e.target.files[0]);
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
              TDS Certification*
            </label>
            <p className="cursor-pointer" onClick={()=>setTDS(!tds)}><GrFormEdit/></p>
                {tds &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setTDScertification(e.target.files[0]);
              }}
            />
                }
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Certification Of Qualification*
            </label>
            <p className="cursor-pointer" onClick={()=>setQualification(!qualification)}><GrFormEdit/></p>
                {qualification &&
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setcertificationOfQualification(e.target.files[0]);
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
};

export default UpdateLeadForHomeLoan;
