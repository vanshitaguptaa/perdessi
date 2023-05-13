import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';


// Import pages
import Dashboard from './pages/Dashboard';
import AddClient from './pages/AddClient';
import Addleads from './pages/Addleads';
import Mylead from './pages/Mylead';
import Myclient from './pages/Myclients';
import Transferlead from './pages/Transferlead';
import Allemployees from './pages/Allemployees';
import Services from './pages/Services';
import Leadform from './pages/Leadform';
import Myprofile from './pages/Myprofile';
import Login from './pages/Login';
import Addemployee from './pages/Addemployee';
import Home from './pages/Home';
import Personal from './components/formdata/Personal';
import PersonalLoan from './components/formdashborad/PersonalLoan';
import BusinessLoan from './components/formdashborad/BusinessLoan';
import MortgageLoan from './components/formdashborad/MortgageLoan';
import CreditCardLoan from './components/formdashborad/CreditCardLoan';
import GoldLoan from './components/formdashborad/GoldLoan';
import HomeLoan from './components/formdashborad/HomeLoan';
import Updateempolyee from './pages/Updateempolyee';
import Carloan from './components/formdashborad/Carloan';
import GstApplication from './components/formdashborad/GstApplication';
import PassportSchema from './components/formdashborad/PassportSchema';
import UdyamCertificate from './components/formdashborad/UdyamCertificate';

// import HomeLone from './components/servicespages/HomeLone';
// import BusinessLone from './components/servicespages/BusinessLone';
// import HomeloneForm from './components/HomeloneForm';
// import HomeleadData from './components/formlead/HomeleadData';
// import BusinessleadData from './components/formlead/BusinessleadData';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); 
  // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/addclient" element={<AddClient />} />
        <Route exact path="/addlead" element={<Addleads/>} />
        <Route exact path="/mylead" element={<Mylead />} />
        <Route exact path="/myclient" element={<Myclient />} />
        <Route exact path="/transferlead" element={<Transferlead />} />
        <Route exact path="/allemployee" element={<Allemployees />} />
        <Route exact path="/leadform" element={<Leadform />} />
        <Route exact path="/myprofile" element={<Myprofile />} />
        <Route exact path="/update" element={<Updateempolyee />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/addemployee" element={<Addemployee/>} />
        <Route exact path="/Personal Loan" element={<PersonalLoan/>} />
        <Route exact path="/Business Loan" element={<BusinessLoan/>} />
        <Route exact path="/Mortgage  Loan" element={<MortgageLoan/>} />
        <Route exact path="/Credit Card" element={<CreditCardLoan/>} />
        <Route exact path="/Gold Loan" element={<GoldLoan/>} />
        <Route exact path="/Home  Loan" element={<HomeLoan/>} />
        <Route exact path="/car Loan" element={<Carloan/>} />
        <Route exact path="/GST registration application" element={<GstApplication/>} />
        <Route exact path="/Passport" element={<PassportSchema/>} />
        <Route exact path="/UDYAM Registration" element={<UdyamCertificate/>} />
        {/* <Route exact path="/homeloan" element={<HomeLone/>} />
        <Route exact path="/businessloan" element={<BusinessLone/>} />
        <Route exact path="/homelead" element={<HomeloneForm/>} />
        <Route exact path="/homelonelead" element={<HomeleadData/>} />
        <Route exact path="/businesslonelead" element={<BusinessleadData/>} /> */}

      </Routes>
    </>
  );
}

export default App;
