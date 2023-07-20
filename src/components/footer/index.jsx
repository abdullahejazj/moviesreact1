import React from "react";

import Logo from "../logo";
import { Link } from "react-router-dom";

const nav = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Sitemap",
    path: "/sitemap.xml",
    linktype: "external",
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <footer className="bg-black py-4 flex items-center justify-center">
      <Logo height="h-14" />
      <ul className="text-gray-300 font-semibold uppercase space-y-3 mt-568:space-y-0 mt-568:space-x-10 mt-3">
        {nav.map((item, i) => (
          <li key={i} className="block mt-568:inline">
            <Link to={item.path} className={`text-red-600`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div></div>
    </footer>
  );
}
