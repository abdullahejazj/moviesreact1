import React, { useEffect, useState } from "react";

import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  console.log("data on all pages: ", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const websiteUrl = window.location.hostname;
        console.log("websiteUrl: ", "https://" + websiteUrl + "/");
        const response = await fetch(`https://websitesapi.vercel.app/api/`);
        if (response.ok) {
          const item = await response.json();
          const filteredWebsites = item.filter(
            (website) => website.website_url === "https://" + websiteUrl + "/"
          );
          setData(filteredWebsites[0]);
        } else {
          console.error("Error fetching data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
