import { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/">
            <img src={logo} alt="Logo" className="h-10" />
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
            <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="#techstack" className="text-gray-300 hover:text-white transition-colors">Techstack</a>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                <span className="text-gray-400 font-mono text-normal">{formattedTime}</span>
            </div>
        </div>
      </div>
    </nav>
  );
};
