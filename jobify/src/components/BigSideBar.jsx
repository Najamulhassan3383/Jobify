import Logo from "./Logo.jsx";
import Navlinks from "./Navlinks.jsx";

function BigSideBar() {
  return (
    <div className=" h-screen flex-col justify-between border-e bg-white p-6 hidden lg:flex">
      <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg">
          <Logo />
        </span>

        <Navlinks />
      </div>
    </div>
  );
}

export default BigSideBar;
