import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { HomeBanner } from "../../components/banner";
import Footer from "../../components/footer";
import Header from "../../components/header";
import style from "./style.css";

const IndexPage = () => {
  const [websiteDetails, setWebsiteDetails] = useState([]);
  const [currentWebsite, setCurrentWebsite] = useState({});

  const currentUrl = document.URL;
  const websiteTitle = Cookies.get("website");
  
  document.title = websiteTitle;
  useEffect(() => {
    axios
      .get("http://moviesapi.local/wp-json/jet-cct/movies_websites")
      .then(function (response) {
        // handle success
        setWebsiteDetails(response.data);
      });
  }, []);

  const getOnlyArray = () => {
    // this will return only item which match the provided id
    return setCurrentWebsite(
      websiteDetails.filter((s) => s.website_url === currentUrl)
    );
  };

  useEffect(() => {
    getOnlyArray();
  }, [websiteDetails]);

  currentWebsite.length === 1 &&
    Cookies.set("website", currentWebsite[0].website_title, { expires: 20000 });

  return (
    <>
      <Header />
      <HomeBanner />
      {currentWebsite.length === 1 && (
        <div className="flex flex-col justify-center items-center px-20  pt-6 pb-20 bg-black text-white">
          <Link
            to="/home"
            className="px-3 mt-350:px-2 py-2 mt-414:px-4 mt-414:py-3 inline-flex items-center bg-blue-600 btn__primary mt-350:space-x-3 rounded shadow-lg overflow-hidden"
          >
            <svg
              className="hidden mt-350:block fill-current text-gray-300"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
            </svg>
            <span className="pt-0.5">
              Visit {currentWebsite[0].website_title} and Watch Unlimited Movies
              and Tv Shows
            </span>
          </Link>

          <div
            dangerouslySetInnerHTML={{
              __html: currentWebsite[0].website_content,
            }}
          />
        </div>
      )}
      <Footer />
    </>
  );
};

export default IndexPage;
