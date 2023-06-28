import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import db from "../firebase/firebase";
import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  console.log("data: on all pages ", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "yourCollectiontest"),
          where("website_url", "==", "https://putlockermovies.fun/")
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const item = querySnapshot.docs[0].data();
          setData(item);
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
