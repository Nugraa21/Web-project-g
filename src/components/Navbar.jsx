import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Portofolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname === "/") {
        const sections = navItems
          .map((item) => {
            const section = document.querySelector(item.href);
            if (section) {
              return {
                id: item.href.replace("#", ""),
                offset: section.offsetTop - 150,
                height: section.offsetHeight,
              };
            }
            return null;
          })
          .filter(Boolean);

        const currentPosition = window.scrollY;

        const active = sections.find(
          (section) =>
            currentPosition >= section.offset &&
            currentPosition < section.offset + section.height
        );

        setActiveSection(active ? active.id : "Home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navigateAndScroll = (e, href) => {
    e.preventDefault();

    const sectionId = href.replace("#", "");
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const section = document.querySelector(href);
      if (section) {
        const top = section.offsetTop - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const section = document.querySelector(`#${location.state.scrollTo}`);
      if (section) {
        const top = section.offsetTop - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }
      navigate("/", { state: null, replace: true });
    }
  }, [location, navigate]);

  const navbarStyles = {
    Home: {
      bg: scrolled || isOpen ? "bg-white shadow-lg shadow-pink-200/50" : "bg-white/90 backdrop-blur-md",
      logo: "text-pink-600 hover:text-yellow-400",
      link: "text-gray-700 hover:text-pink-500",
      linkActive: "text-pink-600 font-semibold",
      underline: "bg-pink-500",
      mobileBg: "bg-pink-50 bg-gradient-to-b from-pink-50 to-pink-100",
      mobileLink: "text-gray-700 hover:text-pink-500 hover:bg-pink-100/30",
      mobileLinkActive: "text-pink-600 bg-pink-100/50",
      button: "text-pink-600 hover:text-yellow-400 hover:bg-pink-100",
    },
    About: {
      bg: scrolled || isOpen ? "bg-white shadow-lg shadow-yellow-200/50" : "bg-white/90 backdrop-blur-md",
      logo: "text-yellow-500 hover:text-pink-400",
      link: "text-gray-700 hover:text-yellow-400",
      linkActive: "text-yellow-500 font-semibold",
      underline: "bg-yellow-400",
      mobileBg: "bg-yellow-50 bg-gradient-to-b from-yellow-50 to-yellow-100",
      mobileLink: "text-gray-700 hover:text-yellow-400 hover:bg-yellow-100/30",
      mobileLinkActive: "text-yellow-500 bg-yellow-100/50",
      button: "text-yellow-500 hover:text-pink-400 hover:bg-yellow-100",
    },
    Portofolio: {
      bg: scrolled || isOpen ? "bg-white shadow-lg shadow-pink-200/50" : "bg-white/90 backdrop-blur-md",
      logo: "text-pink-600 hover:text-yellow-400",
      link: "text-gray-700 hover:text-pink-500",
      linkActive: "text-pink-600 font-semibold",
      underline: "bg-pink-500",
      mobileBg: "bg-pink-50 bg-gradient-to-b from-pink-50 to-pink-100",
      mobileLink: "text-gray-700 hover:text-pink-500 hover:bg-pink-100/30",
      mobileLinkActive: "text-pink-600 bg-pink-100/50",
      button: "text-pink-600 hover:text-yellow-400 hover:bg-pink-100",
    },
    contact: {
      bg: scrolled || isOpen ? "bg-white shadow-lg shadow-yellow-200/50" : "bg-white/90 backdrop-blur-md",
      logo: "text-yellow-500 hover:text-pink-400",
      link: "text-gray-700 hover:text-yellow-400",
      linkActive: "text-yellow-500 font-semibold",
      underline: "bg-yellow-400",
      mobileBg: "bg-yellow-50 bg-gradient-to-b from-yellow-50 to-yellow-100",
      mobileLink: "text-gray-700 hover:text-yellow-400 hover:bg-yellow-100/30",
      mobileLinkActive: "text-yellow-500 bg-yellow-100/50",
      button: "text-yellow-500 hover:text-pink-400 hover:bg-yellow-100",
    },
  };

  const currentStyles = navbarStyles[activeSection] || navbarStyles.Home;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${currentStyles.bg}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={(e) => navigateAndScroll(e, "#Home")}
              className={`text-3xl font-bold ${currentStyles.logo} transition-colors duration-300 tracking-wide`}
            >
              "Gema.
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={location.pathname === "/" ? item.href : "/"}
                onClick={(e) => navigateAndScroll(e, item.href)}
                className={`group relative px-2 py-2 text-sm font-semibold ${currentStyles.link} ${
                  activeSection === item.href.substring(1) && location.pathname === "/"
                    ? currentStyles.linkActive
                    : ""
                } transition-colors duration-300`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 ${currentStyles.underline} transform origin-left transition-transform duration-300 ${
                    activeSection === item.href.substring(1) && location.pathname === "/"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen(!isOpen)}
              className={`${currentStyles.button} transition-colors duration-300 p-2 rounded-full`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 ${currentStyles.mobileBg} transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ top: "64px" }}
      >
        <div className="flex flex-col h-full pt-8">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              to={location.pathname === "/" ? item.href : "/"}
              onClick={(e) => navigateAndScroll(e, item.href)}
              className={`px-6 py-4 text-lg font-semibold ${currentStyles.mobileLink} ${
                activeSection === item.href.substring(1) && location.pathname === "/"
                  ? currentStyles.mobileLinkActive
                  : ""
              } transition-all duration-300 border-b border-pink-200/50`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: isOpen ? "translateX(0)" : "translateX(50px)",
                opacity: isOpen ? 1 : 0,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;