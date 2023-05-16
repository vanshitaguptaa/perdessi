import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { TiUserAdd } from "react-icons/ti";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { MdOutlinePadding } from "react-icons/md";
import { RiFolderTransferFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;
  const [role, setrole] = useState("");

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    Role_Fun();
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  // close if the esc key is pressed
  useEffect(() => {
    Role_Fun();
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  // Dividation Between Empolyee and Admin
  const Role_Fun = () => {
    let user_role = localStorage.getItem("role");
    setrole(user_role);
    console.log(role);
  };

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-700 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-white hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient
                  x1="28.538%"
                  y1="20.229%"
                  x2="100%"
                  y2="108.156%"
                  id="logo-a"
                >
                  <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="88.638%"
                  y1="29.267%"
                  x2="22.42%"
                  y2="100%"
                  id="logo-b"
                >
                  <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                  <stop stopColor="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width="32" height="32" rx="16" />
              <path
                d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                fill="#4F46E5"
              />
              <path
                d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                fill="url(#logo-a)"
              />
              <path
                d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                fill="url(#logo-b)"
              />
            </svg>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          <div>
            <ul className="mt-3">
              {/* <SidebarLinkGroup
                activecondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        to="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname === "/" || pathname.includes("dashboard")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current ${
                                  pathname === "/" ||
                                  pathname.includes("dashboard")
                                    ? "text-indigo-500"
                                    : "text-slate-400"
                                }`}
                                d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname === "/" ||
                                  pathname.includes("dashboard")
                                    ? "text-indigo-600"
                                    : "text-slate-600"
                                }`}
                                d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname === "/" ||
                                  pathname.includes("dashboard")
                                    ? "text-indigo-200"
                                    : "text-slate-400"
                                }`}
                                d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Dashboard
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup> */}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MdDashboard className="ml-3 text-white text-2xl" />
                  <span className="m-3 text-slate-200 ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    <Link to="/dashboard">Dashboard</Link>
                  </span>
                </div>
              </div>
              <div className="space-y-8 my-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TiUserAdd className="ml-3 text-white text-2xl" />
                    <span className="m-3 text-slate-200 ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      <Link to="/myprofile">My Profile</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-8 my-5">
                <div>
                  <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
                    <span
                      className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                      aria-hidden="true"
                    >
                      •••
                    </span>
                    <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                      Clients
                    </span>
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TiUserAdd className="ml-3 text-white text-2xl" />
                      <span className="m-3 text-slate-200 ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        <Link to="/addclient">Add Client</Link>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BsFillPeopleFill className="ml-3 text-white text-2xl" />
                      <span className="m-3 text-slate-200 ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        <Link to="/myclient">My Client</Link>
                      </span>
                    </div>
                  </div>
                  {role === "employee" ? (
                    <></>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <BsFillPeopleFill className="ml-3 text-white text-2xl" />
                          <span className="m-3 text-slate-200 ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            <Link to="/allclient">All Client</Link>
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-8 my-5">
                <div>
                  <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
                    <span
                      className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                      aria-hidden="true"
                    >
                      •••
                    </span>
                    <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                      Leads
                    </span>
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MdOutlineLibraryAdd className="ml-3 text-white text-2xl" />
                      <span className="m-3 text-slate-200 ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        <Link to="/addlead">Add Lead</Link>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MdOutlinePadding className="ml-3 text-white text-2xl" />
                      <span className="m-3 text-slate-200 ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        <Link to="/mylead">My Lead</Link>
                      </span>
                    </div>
                  </div>
                  {role === "employee" ? (
                    <></>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <BsFillPeopleFill className="ml-3 text-white text-2xl" />
                          <span className="m-3 text-slate-200 ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            <Link to="/allLead">All Lead</Link>
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {role === "employee" ? (
                <></>
              ) : (
                <>
                  <div className="space-y-8 my-5">
                    <div>
                      <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
                        <span
                          className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                          aria-hidden="true"
                        >
                          •••
                        </span>
                        <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                          Employees
                        </span>
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <BsFillPersonFill className="ml-3 text-white text-2xl" />
                          <span className="m-3 text-slate-200 ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            <Link to="/allemployee">All Employees</Link>
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <BsFillPersonFill className="ml-3 text-white text-2xl" />
                          <span className="m-3 text-slate-200 ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            <Link to="/addemployee">Add Employees</Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </ul>
          </div>

          {/* All employees */}

          {/* More group */}
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-white"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-white" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
