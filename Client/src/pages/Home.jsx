import React from 'react'
import Navbar from '../components/Navbar'
import Navlinks from '../components/Navlinks'
import Banner from '../components/Banner'
import CustomerFeedback from '../components/servicespages/CustomerFeedback'
import Footer from '../components/Footer'
import Process from '../components/Process'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Navlinks/>
        <Banner/>
        <Process/>
        <CustomerFeedback/>
        <Newsletter/>
        <Footer/>
    </>
  )
}

export default Home