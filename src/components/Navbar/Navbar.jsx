import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#050414]/60 backdrop-blur-md shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-16 flex justify-between items-center py-4 text-white">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-semibold cursor-pointer select-none">
          <span className="text-[#8245ec]">&lt;</span>
          <span>Shariful</span>
          <span className="text-[#8245ec]">/</span>
          <span>Islam</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors duration-200 hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-5">
          <a
            href="https://github.com/shariful8523"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec] text-gray-300 transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/shariful8523"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec] text-gray-300 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#050414]/90 backdrop-blur-md w-full py-5 absolute left-0 top-[70px]">
          <ul className="flex flex-col items-center space-y-5 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-5 pt-3">
              <a
                href="https://github.com/shariful8523"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8245ec] text-gray-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shariful8523"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8245ec] text-gray-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
