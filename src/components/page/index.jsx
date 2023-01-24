export default function Page({ title, children }) {
  document.title = `${title} - Afdah Movies`;

  return <>{children}</>;
}
