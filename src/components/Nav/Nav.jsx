import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Fingerprint } from "lucide-react";

function Nav() {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav>
      <ul className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <li>
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Fingerprint className="h-6 w-6" />
            <span className="sr-only">My Auth</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
