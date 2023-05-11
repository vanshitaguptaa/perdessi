import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

// Import pages
import Dashboard from "./pages/Dashboard";
import AddClient from "./pages/AddClient";
import Addleads from "./pages/Addleads";
import Mylead from "./pages/Mylead";
import Myclient from "./pages/Myclients";
import Transferlead from "./pages/Transferlead";
import Allemployees from "./pages/Allemployees";
import Services from "./pages/Services";
import Leadform from "./pages/Leadform";
import Myprofile from "./pages/Myprofile";
import Login from "./pages/Login";
import Addemployee from "./pages/Addemployee";
import Home from "./pages/Home";
import HomeLone from "./components/servicespages/HomeLone";
import BusinessLone from "./components/servicespages/BusinessLone";
import PersonalLoan from "./components/servicespages/PersonalLone";
import MortageLoan from "./components/servicespages/MortageLone";
import GoldLoan from "./components/servicespages/GoldLoan";
import Balancetransfer from "./components/servicespages/BalanceTransfer";
import Creditcard from "./components/servicespages/CreditCard";
import Passport from "./components/servicespages/Passport";
import PanApplication from "./components/servicespages/PanApplication";
import PFwithdrawal from "./components/servicespages/PFwithdrawal";
import GSTregForm from "./components/servicespages/GSTRegForm";
import UdyamCertificate from "./components/servicespages/UdyamCertificate";
import Foodlicense from "./components/servicespages/Foodlicense";
import Aboutus from "../src/pages/Aboutus";
import Contactus from "../src/pages/Contactus";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);
  // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/addclient" element={<AddClient />} />
        <Route exact path="/addlead" element={<Addleads />} />
        <Route exact path="/mylead" element={<Mylead />} />
        <Route exact path="/myclient" element={<Myclient />} />
        <Route exact path="/transferlead" element={<Transferlead />} />
        <Route exact path="/allemployee" element={<Allemployees />} />
        <Route exact path="/leadform" element={<Leadform />} />
        <Route exact path="/myprofile" element={<Myprofile />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/addemployee" element={<Addemployee />} />
        <Route exact path="/homeloan" element={<HomeLone />} />
        <Route exact path="/businessloan" element={<BusinessLone />} />
        <Route exact path="/personalloan" element={<PersonalLoan />} />
        <Route exact path="/mortageloan" element={<MortageLoan />} />
        <Route exact path="/goldloan" element={<GoldLoan />} />
        <Route exact path="/homeloanbalancetransfer" element={<Balancetransfer />}/>
        <Route exact path="/creditcard" element={<Creditcard />}/>
        <Route exact path="/passport" element={<Passport />}/>
        <Route exact path="/panapplication" element={<PanApplication />}/>
        <Route exact path="/pfwithdrawal" element={<PFwithdrawal />}/>
        <Route exact path="/gstregistration" element={<GSTregForm />}/>
        <Route exact path="/udyamcertificate" element={<UdyamCertificate />}/>
        <Route exact path="/foodlicense" element={<Foodlicense/>}/>
        <Route exact path="/aboutus" element={<Aboutus/>}/>
        <Route exact path="/contactus" element={<Contactus/>}/>
      </Routes>
    </>
  );
}

export default App;
