import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Navlinks from "../components/Navlinks";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <Navlinks />
      <div>
        <div class="container my-24 px-6 mx-auto">
          <section class="mb-32 text-gray-800">
            <div class="container mx-auto xl:px-32 text-center lg:text-left">
              <div class="grid lg:grid-cols-2 flex items-center">
                <div class="mb-12 lg:mb-0">
                  <div
                    class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                    style={{background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)"
                    }}>
                    <h2 class="text-3xl font-bold mb-6">Let it Surprise You</h2>
                    <p class="text-gray-500 mb-6 pb-2 lg:pb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A soluta corporis voluptate ab error quam dolores
                      doloremque, quae consectetur.
                    </p>

                    <div class="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
                      <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="w-4 h-4 mr-2"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                        Best team
                      </p>

                      <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="w-4 h-4 mr-2"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                        Best quality
                      </p>

                      <p class="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="w-4 h-4 mr-2"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                        Best experience
                      </p>
                    </div>

                    <p class="text-gray-500 mb-0">
                      In ac turpis justo. Vivamus auctor quam vitae odio feugiat
                      pulvinar. Sed semper ligula sed lorem tincidunt dignissim.
                      Nam sed cursus lectus. Proin non rutrum magna. Proin
                      gravida, justo et imperdiet tristique, turpis nisi viverra
                      est, nec posuere ex arcu sit amet erat. Sed a dictum sem.
                      Duis pretium condimentum nulla, ut aliquet erat auctor
                      sed. Aenean facilisis neque id ligula maximus scelerisque.
                      Nunc sed velit rhoncus, interdum dolor at, lacinia lacus.
                      Proin eleifend viverra posuere. Ut commodo risus lacus, ac
                      scelerisque quam aliquam dictum. Etiam dignissim pulvinar
                      eros eget auctor. Quisque congue turpis quis libero
                      ullamcorper imperdiet. Vivamus a orci maximus, dignissim
                      ligula a, congue dui. Morbi et lectus sit amet neque
                      luctus viverra.
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src="https://mdbootstrap.com/img/new/ecommerce/vertical/117.jpg"
                    class="w-full rounded-lg shadow-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800">
            <div className="flex justify-center">
              <div className="text-center max-w-[700px]">
                <p className="uppercase text-blue-600 font-bold mb-6">
                  Features
                </p>
                <h2 className="text-3xl font-bold mb-6">
                  Why is Pardessi Enterprises is so great?
                </h2>
                <p className="text-gray-500 mb-12">
                  Pardessi Enterprises are too easy to use, it provide 24*7
                  support services to its customer.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-12">
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
                    <p className="font-bold mb-1">Support 24/7</p>
                    <p className="text-gray-500">
                      Pellentesque mollis, metus nec fringilla aliquam
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
                    <p className="font-bold mb-1">Tracking</p>
                    <p className="text-gray-500">
                      Magna lacus iaculis elit, quis pharetra varius.
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
                    <p className="font-bold mb-1">Reporting</p>
                    <p className="text-gray-500">
                      Pellentesque varius ex vel consequat quis.
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
                    <p className="font-bold mb-1">Analytics</p>
                    <p className="text-gray-500">
                      Vestibulum gravida iaculis nisl, vel lobortis eros.
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
                    <p className="font-bold mb-1">Huge community</p>
                    <p className="text-gray-500">
                      Praesent vulputate lacus bibendum augue .
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
                    <p className="font-bold mb-1">Easy to use</p>
                    <p className="text-gray-500">
                      Sed mauris ex, imperdiet sit amet nisl ac, ultrices.
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
                    <p className="font-bold mb-1">Frequent updates</p>
                    <p className="text-gray-500">
                      Aenean lectus ex, placerat id tellus in eros.
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
                    <p className="font-bold mb-1">Responsive</p>
                    <p className="text-gray-500">
                      Donec consequat orci quis volutpat imperdiet.
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
