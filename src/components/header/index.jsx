import { useContext, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import DataContext from "../../context/DataContext";
import Logo from "../logo";

// ----------------------------------------------------------------------

const nav = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Latest Movies",
    path: "/home/catalog/movies",
  },
  {
    name: "Top Movies",
    path: "/home/catalog/top-movies",
  },
  {
    name: "TV Shows",
    path: "/home/catalog/tv-shows",
  },
  {
    name: "About",
    path: "/about",
  },
];

// ----------------------------------------------------------------------

export default function Header() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const mobileRef = useRef(null);
  const data = useContext(DataContext);
  const handleMobile = () => {
    mobileRef.current.classList.toggle("-translate-y-full");
  };

  useEffect(() => {
    if (data) {
      document.title = data.header_title ? data.header_title : "Loading ...."; // Set the document title
    }
  }, [data]);

  return (
    <header
      ref={headerRef}
      className="h-16 px-3 mt-568:px-10 max-w-screen-2xl  bg-black  top-0 z-30 duration-300"
    >
      <div className="flex items-center justify-between">
        <Logo height="h-10" data={data} />

        <div
          ref={mobileRef}
          className="header__moblie transform -translate-y-full mt-568:translate-y-0 duration-300 mt-568:bg-transparent mt-568:pt-0"
        >
          <ul className="text-gray-300 font-semibold uppercase space-y-3 mt-568:space-y-0 mt-568:space-x-10 mt-3">
            {nav.map((item, i) => (
              <li key={i} className="block mt-568:inline">
                <Link
                  onClick={handleMobile}
                  to={item.path}
                  className={`${
                    pathname === item.path
                      ? "text-red-600"
                      : "hover:text-red-600"
                  } duration-300`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div
            onClick={handleMobile}
            className="cursor-pointer text-gray-300 hover:text-red-600 duration-200 block mt-568:hidden absolute top-2 right-2"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </div>
        </div>

        <div
          onClick={handleMobile}
          className="cursor-pointer text-gray-300 hover:text-red-600 duration-200 inline mt-568:hidden mt-2 -mr-1"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
}
