import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-pink-900">
          Portofolio
        </h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 fixed md:static left-1/2 -translate-x-1/2 
        md:-translate-x-0 -top-10 opacity-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 
        rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 ${
          active ? "top-0 opacity-100" : "-top-10 opacity-0"
        }`}
      >
        <li>
          <Link to="/" className="sm:text-lg text-base text-pink-900 font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile" className="sm:text-lg text-base text-pink-900 font-medium">
            About
          </Link>
        </li>
        <li>
          <Link to="/portofolio" className="sm:text-lg text-base text-pink-900 font-medium">
            Portofolio
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;