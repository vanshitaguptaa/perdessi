import React from "react";

const Businessdetails = () => {
  return (
    <div className="container mx-auto px-5 my-5">
   <div className="container mx-auto px-5 my-5">
      <div className="my-3">
      <img class="w-6/12 mx-80" src="https://poonawallafincorp.com/pfca/assets/blog_banner/blog_banner-1651296902.jpg"/> <br/>
        <h1 className="font-extrabold">
        The following documents are required along with your Business Loan application:
        </h1><br/>
        {/* <ul class="list-disc leading-loose">
          <li>Employer Identity Card</li>
          <li>
            Loan Application: Completed loan application form duly filled in
            affixed with 3 Passport size photographs
          </li>
          <li>
            Proof of Identity (Any one): PAN/ Passport/ Driver’s License/ Voter
            ID card
          </li>
          <li>
            Proof of Residence/ Address (Any one): Recent copy of Telephone
            Bill/ Electricity Bill/Water Bill/ Piped Gas Bill or copy of
            Passport/ Driving License/ Aadhar Card
          </li>
        </ul> */}
      </div>
      <div className="my-3">
      <h2 className="font-extrabold">1.	PAN Card – For Company/Firm/Individual</h2><br/>
        <h2 className="font-extrabold">2.	A copy of any of the following documents as identity proof:</h2>
        <ul class="list-disc leading-loose mx-20">
          <li>Aadhar Card</li>
          <li>
           Passport
          </li>
          <li>Voter's ID Card</li>
          <li>
          	PAN Card
          </li>
          <li>
          Driving License
          </li>
          
        </ul>
      </div>
      <div className="my-3">
        <h2 className="font-extrabold">3.	A copy of any of the following documents as address proof:</h2>
        <ul class="list-disc leading-loose mx-20">
        <li>Aadhar Card</li>
          <li>
           Passport
          </li>
          <li>Voter's ID Card</li>
          <li>
          Driving License
          </li>
        </ul>
      </div>
      <div className="my-3">
        <h2 className="font-extrabold">
        	4. Bank statement of the previous 6 months
        </h2>
        {/* <ul class="list-disc leading-loose">
          <li>Salary Slip or Salary Certificate of last 3 months</li>
          <li>
            Copy of Form 16 for last 2 years or copy of IT Returns for last 2
            financial years, acknowledged by IT Dept.
          </li>
        </ul> */}
      </div>
      <div className="my-3">
        <h2 className="font-extrabold">
        	5. Latest ITR along with computation of income, Balance Sheet and Profit & Loss account for the previous 2 years, after being CA Certified/Audited
        </h2><br/>
        <h2 className="font-extrabold">6. Proof of continuation (ITR/Trade license/Establishment/Sales Tax Certificate)</h2>


        {/* <ul class="list-disc leading-loose">
          <li>Business address proof</li>
          <li>IT returns for last 3 years</li>
          <li>Balance Sheet & Profit & Loss A/c for last 3 years</li>
          <li>Business License Details(or equivalent)</li>
          <li>TDS Certificate (Form 16A, if applicable)</li>
          <li>
            Certificate of qualification (for C.A./ Doctor and other
            professionals)
          </li>
        </ul> */}
      </div>
    </div>
    </div>
  );
};

export default Businessdetails;
