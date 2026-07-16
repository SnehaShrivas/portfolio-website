import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = [
        "about",
        "skills",
        "experience",
        "work",
        "education",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 120;
          const height = element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        isScrolled
          ? "bg-[#09061b]/90 backdrop-blur-xl border-b border-[#3b82f6]/20 shadow-[0_8px_35px_rgba(59,130,246,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => handleMenuItemClick("about")}
          className="cursor-pointer select-none"
        >
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-cyan-400">&lt;</span>

            <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-transparent">
              Sneha
            </span>

            <span className="text-purple-500"> / </span>

            <span className="bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Shrivas
            </span>

            <span className="text-cyan-400">&gt;</span>
          </h1>

          <p className="text-[10px] uppercase tracking-[6px] text-cyan-300 ml-1">
            Full Stack Developer
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative text-[16px] font-semibold transition-all duration-300

                ${
                  activeSection === item.id
                    ? "text-cyan-300"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px]
                  bg-gradient-to-r from-cyan-400 to-purple-500
                  transition-all duration-300

                  ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/SnehaShrivas"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-cyan-400/30 bg-[#0f172a]/70 flex items-center justify-center text-gray-300 hover:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all duration-300"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/sneha-shrivas-0068a3323?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-purple-400/30 bg-[#0f172a]/70 flex items-center justify-center text-gray-300 hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-cyan-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mx-5 mb-5 rounded-2xl border border-cyan-400/20 bg-[#09061b]/95 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <ul className="flex flex-col items-center py-6 space-y-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`text-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-cyan-300"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex gap-5 pt-3">
              <a
                href="https://github.com/SnehaShrivas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center text-cyan-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.6)] transition-all"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/sneha-shrivas-0068a3323?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;