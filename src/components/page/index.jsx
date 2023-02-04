import Cookies from "js-cookie";

export default function Page({ title, children }) {
  const websiteTitle = Cookies.get("website");

  document.title = `${title} - ${websiteTitle}`;

  return <>{children}</>;
}
