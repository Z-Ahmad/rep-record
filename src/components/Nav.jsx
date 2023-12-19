import LoginButton from "./LoginButton";
import { ReactComponent as Logo } from "../icons/logo.svg";

const Nav = () => {
  return (
    <nav className="text-white w-screen px-4">
      <div className="flex justify-between">
        <div className="-m-4">
          <Logo className="h-20 w-20 md:h-36 md:w-36" /> 
        </div>
        <div className="">
          <LoginButton />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
