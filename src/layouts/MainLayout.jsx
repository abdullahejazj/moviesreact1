import { Outlet } from "react-router-dom";

// components
import Footer from "../components/footer";
import Header from "../components/header";
import ScrollIndicator from "../components/scroll-indicator";
import ScrollUp from "../components/scroll-to-top";

// ----------------------------------------------------------------------

const MainLayout = () => {
  return (
    <div style={{ backgroundColor: "#262626" }}>
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative min-h-screen">
          <Header />
          <Outlet />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
