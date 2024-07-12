import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import HeaderAwal from "./headerAwal";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation(); // Menggunakan useLocation untuk mendapatkan URL saat ini

  function handleNavbar() {
    setNavOpen(!navOpen);
  }

  return (
    <>
      <HeaderAwal />
      <nav className="relative w-full flex items-center justify-start md:gap-5 p-6 shadow-md">
        {/* hamburger menu start */}
        <button
          type="button"
          className={`p-1 -ml-2 sm:mx-3 md:hidden ${
            navOpen ? "absolute right-0 top-2" : "static"
          }`}
          onClick={handleNavbar}
        >
          {navOpen ? (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        {/* hamburger menu end */}
        <ul
          className={`md:flex md:flex-row md:items-center md:justify-around md:mx-11 lg:mx-16 md:w-[450px] ${
            navOpen
              ? "block flex justify-between flex-col h-[200px] md:h-0"
              : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className={`font-semibold text-base sm:text-lg ${
                location.pathname === "/" ? "text-blue-500" : ""
              }`}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="/indonesia"
              className={`font-semibold text-base sm:text-lg ${
                location.pathname === "/indonesia" ? "text-blue-500" : ""
              }`}
            >
              Indonesia
            </Link>
          </li>
          <li>
            <Link
              to="/dunia"
              className={`font-semibold text-base sm:text-lg ${
                location.pathname === "/dunia" ? "text-blue-500" : ""
              }`}
            >
              Dunia
            </Link>
          </li>
          <li>
            <Link
              to="/viral"
              className={`font-semibold text-base sm:text-lg ${
                location.pathname === "/viral" ? "text-blue-500" : ""
              }`}
            >
              Viral
            </Link>
          </li>
          <li>
            <Link
              to="/media"
              className={`font-semibold text-base sm:text-lg ${
                location.pathname === "/media" ? "text-blue-500" : ""
              }`}
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              to="/tiktok"
              className={`font-semibold text-base sm:text-lg ${
                location.pathname === "/tiktok" ? "text-blue-500" : ""
              }`}
            >
              Tiktok
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
