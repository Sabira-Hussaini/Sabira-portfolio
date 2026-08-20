import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* بخش معرفی و لوگو */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Sabira<span>.</span>
          </Link>
          <p className="footer-bio">
            Frontend developer focused on building modern, interactive, and
            user-friendly web applications.
          </p>
        </div>

        {/* لینک‌های ناوبری سریع */}
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-links">
            <a
              href="https://github.com/Sabira-Hussaini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/sabira-hussaini-frontend"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:sabirahussaini09@gmail.com"
              aria-label="Send Email"
            >
              Email ✉
            </a>
          </div>
        </div>

      </div>

      {/* بخش کپی‌رایت */}
      <div className="footer-bottom">
        <p>© {currentYear} Sabira Hussaini. All rights reserved.</p>
        <a href="#skills" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}