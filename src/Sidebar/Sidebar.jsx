import Company from "./Company/Company";
import Price from "./Price/Price";
import Contact from "./Contact/Contact";
import "./Sidebar.css";
import logo from "../db/logo.png"


const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          {/* <h1>🛒</h1> */}
          <img src={logo} alt="" />
        </div>
        <Company handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <div>
        <Contact/>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
