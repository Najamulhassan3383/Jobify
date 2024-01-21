import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info ">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Jobify is a job search engine that helps job seekers find jobs
            posted on thousands of websites.
          </p>
          <Link
            to="/register"
            className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
          >
            Register
          </Link>
          <Link
            to="login"
            className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
          >
            Login / Demo User
          </Link>
        </div>

        <img src={main} alt="main" className=" img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
