import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav class="navbar">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link to={"/contact"}>Connect</Link>
          </li>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
