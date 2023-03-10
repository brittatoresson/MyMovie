import { Link } from "react-router-dom";
import Heading from "./Heading";

function Header() {
  return (
    <header>
      <Heading></Heading>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}

export default Header;
