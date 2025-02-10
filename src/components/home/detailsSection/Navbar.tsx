import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/shadcn/mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      </div>
      <div className="">
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default Navbar;
