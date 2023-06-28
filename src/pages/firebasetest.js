import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import db from "../firebase/firebase";

const YourComponent = () => {
  const [data, setData] = useState([]);
  console.log("data=>>>>>>>>: ", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "yourCollectiontest"),
          where("website_url", "==", "https://putlockermovies.fun/") // Replace "409" with the desired ID
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const item = querySnapshot.docs[0].data();
          setData(item);
          console.log("item: ", item);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
