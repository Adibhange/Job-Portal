import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="container">
      <nav className="flex items-center justify-between py-4">
        <Link>
          <img src="/logo.png" alt="Logo" className="h-20" />
        </Link>

        <Button variant="outline">Login</Button>
      </nav>
    </header>
  );
};

export default Header;
