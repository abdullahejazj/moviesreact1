import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";

// ----------------------------------------------------------------------

export default function Logo({ height, data }) {
  return (
    <div>
      <Link to="/home" className="flex  items-center gap-2 ">
        <p className="text-3xl font-bold text-red-600 pt-4 ">
          {data?.website_title}
        </p>
      </Link>
    </div>
  );
}
