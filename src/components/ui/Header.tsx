import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === '/' || pathname === '/home';
  const isAbout = pathname === '/about';
  const isBrainTrust = pathname === '/brain-trust';
  const isFounders = pathname === '/founders';
  const isTeam = pathname === '/team';
  const isCompetitive = pathname === '/competitive-landscape';
  const isInsightsActive = isBrainTrust || isFounders || isTeam || isCompetitive;

  const activeClass = 'bg-[#2A2A2A] border border-gray-500';
  const baseBtn =
    'rounded-lg px-3 py-1.5 flex items-center space-x-2 text-white font-medium text-sm';
  const inactiveHover =
    'hover:bg-[#2A2A2A] hover:border hover:border-gray-500 transition-all duration-200';

  // Close menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const insightsLinks = [
    { to: '/brain-trust', label: 'Brain Trust', active: isBrainTrust },
    { to: '/founders', label: 'Founders', active: isFounders },
    { to: '/team', label: 'Team', active: isTeam },
    { to: '/competitive-landscape', label: 'Competitive Landscape', active: isCompetitive },
  ];

  return (
    <header className="fixed top-0 w-full z-50 p-2 md:pt-6">
      <div className="container mx-auto relative max-w-7xl">
        {/* Left Logo */}
        <Link to="/" className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <img src="/logos/logo-vertical.png" alt="ScholarSpark" className="w-[104px] h-auto" />
        </Link>
        <div className="bg-[#1A1A1A]/80 backdrop-blur-md border border-gray-600/50 rounded-lg p-2 flex items-center justify-center gap-3 w-max mx-auto shadow-lg">
          {/* Home */}
          <Link to="/" className={`${baseBtn} ${isHome ? activeClass : inactiveHover}`}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22V12H15V22"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-white font-medium text-sm">Home</span>
          </Link>

          {/* About */}
          <Link to="/about" className={`${baseBtn} ${isAbout ? activeClass : inactiveHover}`}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9ZM19 21H5V3H13V9H19V21Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>About</span>
          </Link>

          {/* Insights Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`${baseBtn} ${isInsightsActive ? activeClass : inactiveHover} cursor-pointer select-none`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18h6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 22h4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Insights</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {menuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#1A1A1A]/95 backdrop-blur-md border border-gray-600/50 rounded-lg shadow-xl overflow-hidden z-50">
                {insightsLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                      link.active
                        ? 'bg-[#2A2A2A] text-[#8F8EDF]'
                        : 'text-white hover:bg-[#2A2A2A] hover:text-[#8F8EDF]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Preview app */}
          <Link
            to="https://app.scholarspark.ai"
            target="_blank"
            className={`${baseBtn} ${inactiveHover}`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 2V8H20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 13H8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 17H8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 9H9H8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm">Preview app</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
