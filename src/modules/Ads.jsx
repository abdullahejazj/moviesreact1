import React, { useContext, useEffect } from "react";

import DataContext from "../context/DataContext";

const Ads = () => {
  const data = useContext(DataContext);

  useEffect(() => {
    if (data && data.show_ads && data.show_ads === true && data.ads_code) {
      // Create a temporary HTML element to hold the ads code
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data.ads_code;

      // Append the ads scripts to the body
      const scripts = tempDiv.getElementsByTagName("script");
      for (let i = 0; i < scripts.length; i++) {
        const script = document.createElement("script");
        script.src = scripts[i].src;
        script.async = true;
        document.body.appendChild(script);
      }
    } else {
      // Remove the ads if show_ads is false or ads_code is not provided
      // You can customize this based on how you want to handle the absence of ads
      const adsContainer = document.getElementById("ads-container");
      if (adsContainer) {
        adsContainer.innerHTML = ""; // Remove any existing ads
      }
    }
  }, [data]);

  return (
    <div id="ads-container">
      {/* Your component content here */}
    </div>
  );
};

export default Ads;
