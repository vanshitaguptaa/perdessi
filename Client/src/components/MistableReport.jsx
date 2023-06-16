import React from "react";

const MistableReport = () => {
  return (
    <table className="table-fixed w-full h-32 overflow-y-auto bg-white">
      <thead>
        <tr>
          <th className="px-2 py-2">All Services</th>
          <th className="px-2 py-2">Count Of Services</th>
          <th className="px-2 py-2">Sum Of Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border  text-center">Business Loan</td>
          <td className="border text-center">56</td>
          <td className="border  text-center">23</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MistableReport;
