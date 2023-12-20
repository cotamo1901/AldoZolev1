import "@fortawesome/fontawesome-free/css/all.css";

export const Footer = () => {
  return (
    <footer className="relative bg-[#ded0c7] text-[#927067] pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              DISPONIBLE EN LAS PLATAFORMAS
            </h4>
            {/* <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we reapond 1-2 business days.
            </h5> */}
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-spotify"></i>
              </button>
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fa-brands fa-deezer"></i>
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-apple"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-youtube"></i>
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fa-brands fa-itunes"></i>
              </button>
            </div>
            
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-10/12 px-4">
                <span className="flex items-center justify-center align-center uppercase text-blueGray-800 text-lg font-semibold mb-2">
                  ¿Quieres apoyar y contribuir a nuestros <br /> procesos y
                  proyectos musicales?
                </span>
                <ul className="list-unstyled ">
                  <li className="text-center ml-auto">
                    <button class="bg-[#ba5f4d] hover:bg-[#cf6f5c] text-white font-bold py-3 px-6 rounded">
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-lg"
                        href="https://www.instagram.com/aldozolev/"
                      >
                        Donar
                      </a>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
