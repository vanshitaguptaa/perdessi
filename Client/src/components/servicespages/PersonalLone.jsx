import React from "react";
import Navbar from "../Navbar";
import Navlinks from "../Navlinks";
import Footer from "../Footer";
import PersonalDetails from "../servicesdetails/Personaldetails";

const HomeLone = () => {
  return (
    <>
      <Navbar />
      <Navlinks />
      <PersonalDetails/>
      <Footer/>
    </>
  );
};

export default HomeLone;
