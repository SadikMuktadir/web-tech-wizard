import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to="/">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
};

export default Navbar;
