import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "#about", isAnchor: true },
  { label: "Skills", path: "#skills", isAnchor: true },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "#contact", isAnchor: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // تغییر استایل Navbar هنگام اسکرول
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // بستن منوی موبایل هنگام تغییر مسیر
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // اسکرول نرم به بخش‌های مختلف
  const handleScrollToSection = (e, id) => {
    if (location.pathname !== "/") return;

    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <Link
        to="/"
        className="navbar-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src="/images/logo.png" alt="Sabira" width="40" height="40" />
        <span>Sabira</span>
      </Link>

      <button
        className="menu-button"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className={`hamburger ${isOpen ? "open" : ""}`} />
      </button>

      <nav aria-label="Main Navigation">
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              {item.isAnchor ? (
                <a
                  href={`/${item.path}`}
                  onClick={(e) => handleScrollToSection(e, item.path)}
                >
                  {item.label}
                </a>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}