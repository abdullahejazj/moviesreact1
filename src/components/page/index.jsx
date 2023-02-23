import Cookies from "js-cookie";

import Ads from "../../modules/Ads";

export default function Page({ title, children }) {
  const websiteTitle = Cookies.get("website");

  document.title = `${title} - ${websiteTitle}`;

  return (
    <>
      <Ads />
      <div> {children}</div>
    </>
  );
}
