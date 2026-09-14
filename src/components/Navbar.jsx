import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import pic from "/amlesh.png";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", link: "Home" },
    { id: 2, text: "About", link: "About" },
    { id: 3, text: "Projects", link: "Projects" },
    { id: 4, text: "Skills", link: "Skills" },
     { id: 5, text: "Contact", link: "Contact" },
    { id: 6, text: "Resume", link: "Resume" },
  
  ];

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      backdrop-blur-md
      bg-gradient-to-r
      from-indigo-600
      via-purple-600
      to-pink-600
      shadow-xl
    "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <div className="flex items-center gap-4">

            <img
              src={pic}
              alt="profile"
              className="
              w-14
              h-14
              rounded-full
              border-2
              border-white
              object-cover
              shadow-lg
            "
            />

            <div>

              <h1 className="text-white text-3xl font-bold leading-none">
                Amalesh Kumar
              </h1>

              <p className="text-white/90 font-semibold mt-1">
                Java Backend Developer | Spring Boot Developer
              </p>

            </div>

          </div>

          {/* Desktop Menu */}

          <ul className="hidden md:flex items-center gap-10">

            {navItems.map((item) => (

              <li key={item.id}>

                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-yellow-300 border-b-2 border-yellow-300"
                  className="
                  cursor-pointer
                  text-white
                  text-lg
                  font-medium
                  hover:text-yellow-300
                  transition-all
                  duration-300
                  pb-1
                "
                >
                  {item.text}
                </Link>

              </li>

            ))}

          </ul>

          {/* Mobile Icon */}

          <div
            className="md:hidden text-white cursor-pointer"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <IoCloseSharp size={32} /> : <AiOutlineMenu size={32} />}
          </div>

        </div>
      </div>

      {/* Mobile Menu */}

      {menu && (

        <div
          className="
          md:hidden
          bg-gradient-to-b
          from-indigo-700
          via-purple-700
          to-pink-700
          h-screen
        "
        >

          <ul className="flex flex-col justify-center items-center h-full gap-10">

            {navItems.map((item) => (

              <li key={item.id}>

                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMenu(false)}
                  className="
                  text-white
                  text-3xl
                  font-semibold
                  hover:text-yellow-300
                  transition-all
                  duration-300
                  cursor-pointer
                "
                >
                  {item.text}
                </Link>

              </li>

            ))}

          </ul>

        </div>

      )}
    </nav>
  );
}

export default Navbar;