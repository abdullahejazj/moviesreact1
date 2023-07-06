import React, { useContext } from "react";

import Footer from "../../components/footer";
import Header from "../../components/header";
import DataContext from "../../context/DataContext";

const About = () => {
  const data = useContext(DataContext);

  return (
    <>
      <Header />
      {data?.ads_code}
      <p className="text-center text-2xl">About Us</p>
      <div>{data?.about_content}</div>
      <Footer />
    </>
  );
};

export default About;
