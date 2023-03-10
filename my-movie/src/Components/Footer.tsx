import { Link } from "react-router-dom";
import Heading from "./Heading";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">
            {" "}
            <Heading></Heading>
          </Link>
        </li>
        <li>
          {" "}
          <a
            href="https://github.com/brittatoresson/MyMovie/tree/main"
            target="_blank"
          >
            {" "}
            B.Toresson
          </a>
        </li>
        <li>2023-03-10</li>
      </ul>
    </footer>
  );
}

export default Footer;
