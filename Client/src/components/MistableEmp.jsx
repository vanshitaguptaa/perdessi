import React, { useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";

const MistableEmp = ({ misdata }) => {
  const misdatacount = misdata.map((e) => {
    return (
      e.carLoanLeadCount +
      e.udyamCertificateLoanLeadCount +
      e.gstLoanLeadCount +
      e.goldLoanLeadCount +
      e.passportLoanLeadCount +
      e.shopActLeadCount +
      e.newCorrectionPanApplicationCount +
      e.homeLoanLeadCount +
      e.personalLoanLeadCount +
      e.mortgageLoanLeadCount +
      e.creditLoanLeadCount +
      e.businessLoanLeadCount
    );
  });

  console.log(misdata);
  console.log(misdatacount);

  const array = misdatacount;
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(sum);

  return (
    <div className="bg-white">
      <div className="my-5 flex items-center">
        <h1 className="text-black px-3 text-xl">
          Download Mis Report for employees:
        </h1>
        <CSVLink
          data={misdata}
          className="bg-slate-600 px-5 py-3 rounded text-white"
        >
          Mis Report
        </CSVLink>
      </div>
      <table className="table-fixed h-32 overflow-y-auto bg-white">
        <thead>
          <tr>
            <th className="w-1/6 px-2 py-2">Emp ID</th>
            <th className="w-1/4 px-2 py-2">Name</th>
            <th className="w-1/4 px-2 py-2">Business Loan</th>
            <th className="w-1/2 px-2 py-2">Credit Card</th>
            <th className="w-1/3 px-2 py-2">Home Loan</th>
            <th className="w-1/4 px-2 py-2">Gold Loan</th>
            <th className="w-1/4 px-2 py-2">Mortgage Loan</th>
            <th className="w-1/4 px-2 py-2">Personal Loan</th>
            {/* <th className="w-1/4 px-2 py-2">Home Loan Balance Transfer</th> */}
            <th className="w-1/4 px-2 py-2">New Correction Pan Application</th>
            <th className="w-1/4 px-2 py-2">Shop Act</th>
            <th className="w-1/4 px-2 py-2">Passport</th>
            <th className="w-1/4 px-2 py-2">Gst Registration Application</th>
            <th className="w-1/4 px-2 py-2">UDYAM Registration</th>
            <th className="w-1/4 px-2 py-2">Car Loan</th>
            {/* <th className="w-1/4 px-2 py-2">Health Insurance</th> */}
            {/* <th className="w-1/4 px-2 py-2">Motor Insurance</th> */}
            <th className="w-1/4 px-2 py-2">Food Lisence</th>
            <th className="w-1/4 px-2 py-2">Grand Total</th>
          </tr>
        </thead>
        <tbody>
          {misdata.map((e, id) => {
            return (
              <tr>
                <td className="border px-1 py-2 text-center"></td>
                <td className="border px-1 py-2 text-center">
                  {e.employeeName}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.businessLoanLeadCount}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.creditLoanLeadCount}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.homeLoanLeadCount}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.goldLoanLeadCount}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.mortgageLoanLeadCount}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.personalLoanLeadCount}
                </td>
                {/* <td className="border px-1 py-2 text-center"></td> */}
                <td className="border px-1 py-2 text-center">
                  {e.newCorrectionPanApplicationCount}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.shopActLeadCount}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.passportLoanLeadCount}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.gstLoanLeadCount}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.udyamCertificateLoanLeadCount}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.carLoanLeadCount}
                </td>
                {/* <td className="border px-1 py-2 text-center"></td>
              <td className="border px-1 py-2 text-center"></td> */}
                <td className="border px-1 py-2 text-center">
                  {e.foodLisenceLoanLeadCount}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.carLoanLeadCount +
                    e.udyamCertificateLoanLeadCount +
                    e.gstLoanLeadCount +
                    e.goldLoanLeadCount +
                    e.passportLoanLeadCount +
                    e.shopActLeadCount +
                    e.newCorrectionPanApplicationCount +
                    e.homeLoanLeadCount +
                    e.personalLoanLeadCount +
                    e.mortgageLoanLeadCount +
                    e.creditLoanLeadCount +
                    e.foodLisenceLoanLeadCount +
                    e.businessLoanLeadCount}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tbody>
          <tr>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            {/* <td className="border-0 px-1 py-2 text-center"></td> */}
            {/* <td className="border-0 px-1 py-2 text-center"></td> */}
            {/* <td className="border-0 px-1 py-2 text-center"></td> */}
            <td className="border-0 px-1 py-2 text-center">Total</td>
            <td className="border-0 px-1 py-2 text-center">{sum}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MistableEmp;
