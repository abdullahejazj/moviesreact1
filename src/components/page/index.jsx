import Cookies from "js-cookie";
import { useContext, useEffect, useRef } from "react";

import Ads from "../../modules/Ads";
import Header from "../header";
import DataContext from "../../context/DataContext";

export default function Page({ title, children }) {
  const data = useContext(DataContext);
  const websiteTitle = Cookies.get("website");

  document.title = `${title} - ${
    data.header_title ? data.header_title : "Loading ...."
  }`;

  return (
    <>
      <Header />
      <Ads />
      <div> {children}</div>
    </>
  );
}
