import { Navbar, Footer } from "components";
import { BrowserRouter as Router } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <Router>
      <Navbar />
      {children}
      <Footer />
    </Router>
  );
};

export default Layout;
