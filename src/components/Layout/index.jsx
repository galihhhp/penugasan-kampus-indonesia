import { Navbar } from "components";
import { BrowserRouter as Router } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <Router>
      <Navbar />
      {children}
    </Router>
  );
};

export default Layout;
