import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "white" }}>
      <Link to="/" style={{ margin: "0 10px", color: "white" }}>Home</Link>
      <Link to="/About" style={{ margin: "0 10px", color: "white" }}>About</Link>
      <Link to="/Services" style={{ margin: "0 10px", color: "white" }}>Services</Link>
      <Link to="/Contact" style={{ margin: "0 10px", color: "white" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
