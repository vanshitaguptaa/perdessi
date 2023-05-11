import React from "react";
import Navbar from "../Navbar";
import Navlinks from "../Navlinks";
import Footer from "../Footer";
import Creditcarddetails from "../servicesdetails/Creditcarddetails";

const CreditCard = () => {
  return (
    <>
      <Navbar />
      <Navlinks />
      <Creditcarddetails/>
      <Footer/>
    </>
  );
};

export default CreditCard;
