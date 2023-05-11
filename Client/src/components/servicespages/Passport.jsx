import React from "react";
import Navbar from "../Navbar";
import Navlinks from "../Navlinks";
import Footer from "../Footer";
import Passportdetails from "../servicesdetails/Passportdetails";

const Passport = () => {
  return (
    <>
      <Navbar />
      <Navlinks />
      <Passportdetails/>
      <Footer/>
    </>
  );
};

export default Passport;
