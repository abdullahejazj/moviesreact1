import { Helmet } from "react-helmet";

import Router from "./routes";

const App = () => {
  return (
    <>
      <Helmet>
        <script
          data-cfasync="false"
          src="//d2kd9y1bp4zc6.cloudfront.net/?bydkd=949007"
        ></script>
      </Helmet>
      <Router />
    </>
  );
};

export default App;
