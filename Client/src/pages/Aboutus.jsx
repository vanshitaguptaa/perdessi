import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Navlinks from "../components/Navlinks";
import { TiTick } from "react-icons/ti";
import {GiFastArrow} from "react-icons/gi"
const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <Navlinks />
      <div>
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800">
            <div className="flex justify-center">
              <div className="text-center max-w-[700px]">
                {/* <p className="uppercase text-blue-600 font-bold mb-6">
                  Features
                </p> */}
                <h2 className="text-3xl font-bold mb-6">Welcome to Sathi</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-x-6 xl:gap-x-12 mx-auto w-1/2">
              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">
                      Sathee is aProfessional Platform for Loan, Insurance and
                      Tax Services. Sathee Aims to connect each and every Indian
                      citizen digitally so that to serve best services.
                      Satheewas established on 18th November 2019.We are
                      constantly growing our technologies to serve better.{" "}
                    </p>
                    {/* <p className="text-gray-500">
                      Pellentesque mollis, metus nec fringilla aliquam
                    </p> */}
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">
                      In view of the lack of the digital facilities, we at
                      Sathee provide various digital services at your doorstep.
                      It function’s as a unique concept of ‘A Consumer Services
                      Mall’ where convenience to citizens is core to the
                      business. Satheepromises to offer a rich bouquet of
                      services to citizens in an online format that is
                      convenient, low cost and citizen friendly. The platform
                      provides various services & products under one roof
                      through a multi modal delivery system of physical centers
                      (Sathee), doorstep services and Mobile based services
                    </p>
                  </div>
                </div>
              </div>
              {/* 
              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">Providing best services to our customer under one roof at affordably rate and within the timeline.</p>
                    
                  </div>
                </div>
              </div> */}
            </div>
          </section>
        </div>

        <div className="container my-24 px-6 mx-auto w-1/2">
          <section className="mb-32 text-gray-800">
            <div className="flex justify-center">
              <div className="text-center max-w-[700px]">
                {/* <p className="uppercase text-blue-600 font-bold mb-6">
                  Features
                </p> */}
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-x-6 xl:gap-x-12 mx-auto">
              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">
                      Our vision at Sathee is to be The Best Digital Services
                      provider.{" "}
                    </p>
                    {/* <p className="text-gray-500">
                      Pellentesque mollis, metus nec fringilla aliquam
                    </p> */}
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">
                      To develop Sathee as a dependable, reliable and ubiquitous
                      IT-enabled network of citizen service points connecting
                      local population with government departments, business
                      establishments, banks and insurance companies with an
                      impact on primary, secondary and tertiary sectors of the
                      country’s economy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">
                      Providing best services to our customer under one roof at
                      affordably rate and within the timeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
