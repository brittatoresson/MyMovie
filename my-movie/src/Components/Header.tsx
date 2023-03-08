import { Link } from "react-router-dom";
import Heading from "./Heading";

function Header() {
  return (
    <header>
      <Heading></Heading>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/history">History</Link>
      </nav>
    </header>
  );
}

export default Header;
