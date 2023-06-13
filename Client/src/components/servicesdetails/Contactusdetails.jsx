import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


function Contactusdetails() {

  const [state, handleSubmit] = useForm("xoqzbkzd");
  
  if (state.succeeded) {
    return <p>Thanks for joining Sathi EnterPrises!</p>;
  }
  
  return (
    <form action="https://formspree.io/f/xoqzbkzd" onSubmit={handleSubmit} className="container my-24 px-6 mx-auto w-1/3 flex flex-col gap-y-4">
    <input id="email" type="text" name="name" 
        className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
            placeholder="Name"
      />
      {/* <label htmlFor="email">Email Address</label> */}
      <input id="email" type="email" name="email" 
        className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
            placeholder="Email"
      />
       <input id="email" type="text" name="loan-typr" 
        className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
            placeholder="Loan Type"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message"
      className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              rows="3" placeholder="Message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />


      {/* <div class="relative" data-te-dropdown-ref >
                      <div class="relative" data-te-dropdown-position="dropend" name="loan-type">
                        <Menu as="div" className="relative  text-left" name="loan-type">
                          <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset  bg-[#172236]">
                              Choose Loan Type
                              <ChevronDownIcon
                                className="-mr-1 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      Home Loan
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      Business Loan
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      Personal Loan
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      Mortgage Loan
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      Gold Loan
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      Home LoanBalance Transfer
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>  */}

      <button
      className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
       type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};
function App() {
  return <ContactForm />;
}
export default Contactusdetails;

// import React from 'react'
// import emailjs from 'emailjs-com'

// const Contactusdetails = () => {

//   const onSubmit = ()=>{
//     console.log("sdfgjhk")
//     // e.preventdefault();
//         // emailjs.sendForm('service_groutqk','template_girt3tc',e.target,'5E_L_0FHgJy4pwcGv').then((res)=>{
//         //   console.log("done")
//         //   .catxh((err)=>console.log('error hi errod'))
//         // })
//   }

//   return (

// <div action="https://formspree.io/f/xoqzbkzd" METHOD='POST' className="container my-24 px-6 mx-auto">

//   {/* <!-- Section: Design Block --> */}
//   <section className="mb-32 text-center text-gray-800">
//     <div className="max-w-[700px] mx-auto px-3 lg:px-6">
//       <h2 className="text-3xl font-bold mb-12">Contact us</h2>
//       <form>
//         <div className="form-group mb-6">
//           <input type="text" className="form-control block
//             w-full
//             px-3
//             py-1.5
//             text-base
//             font-normal
//             text-gray-700
//             bg-white bg-clip-padding
//             border border-solid border-gray-300
//             rounded
//             transition
//             ease-in-out
//             m-0
//             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
//             name='name'
//             placeholder="Name"/>
//         </div>
//         <div className="form-group mb-6">
//           <input type="email" className="form-control block
//             w-full
//             px-3
//             py-1.5
//             text-base
//             font-normal
//             text-gray-700
//             bg-white bg-clip-padding
//             border border-solid border-gray-300
//             rounded
//             transition
//             ease-in-out
//             m-0
//             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
//             name='user_email'
//             placeholder="Email address"/>
//         </div>
//         <div className="form-group mb-6">
//           <textarea className="
//             form-control
//             block
//             w-full
//             px-3
//             py-1.5
//             text-base
//             font-normal
//             text-gray-700
//             bg-white bg-clip-padding
//             border border-solid border-gray-300
//             rounded
//             transition
//             ease-in-out
//             m-0
//             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
//           " id="exampleFormControlTextarea13" rows="3" placeholder="Message" name='message'></textarea>
//         </div>
//         <div className="form-group form-check text-center mb-6">
//           <input type="checkbox"
//             className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
//             id="exampleCheck87" checked/>
//           <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
//             message</label>
//         </div>
//         <button  className="
//           w-full
//           px-6
//           py-2.5
//           bg-blue-600
//           text-white
//           font-medium
//           text-xs
//           leading-tight
//           uppercase
//           rounded
//           shadow-md
//           hover:bg-blue-700 hover:shadow-lg
//           focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
//           active:bg-blue-800 active:shadow-lg
//           transition
//           duration-150
//           ease-in-out" onClick={onSubmit}>Send</button>
//       </form>
//     </div>
//   </section>

// </div>
//   )
// }

// export default Contactusdetails
