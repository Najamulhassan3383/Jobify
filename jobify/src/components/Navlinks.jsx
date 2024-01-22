import { NavLink } from "react-router-dom";
import links from "./Links";
function Navlinks() {
  return (
    <ul className="mt-12 space-y-8 h-full flex flex-col justify-center items-center ">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="flex items-center justify-center gap-2 text-lg hover:translate-x-2 transform transition-all duration-300 ease-in-out"
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </ul>
  );
}

export default Navlinks;
