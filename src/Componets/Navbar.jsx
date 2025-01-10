import "../Styles/Navbar.css"; // Optional for custom styling
import Logo from "../assets/images/GHR.png"; // Optional for custom styling

const Navbar = () => {
  return (
    <nav className="mt-2 bg-black font-[Ghr1] bg-opacity-45 z-20 absolute top-0 left-0 right-0 flex items-center justify-between px-4 md:px-8">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-16 h-10 Logo" src={Logo} alt="Logo" />
      </div>
      {/* Navigation Links */}
      <ul className="hidden md:flex nav-links font-[Ghr4] uppercase text-sm md:text-xl space-x-6">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#Theme" className="hover:text-gray-300">Themes</a></li>
        <li><a href="#Contact" className="hover:text-gray-300">Contact</a></li>
        <li><a href="#Team" className="hover:text-gray-300">Team</a></li>
      </ul>
      <button
        id="Btn"
        className="hidden md:block bg-white text-black font-[Ghr4] rounded-md px-6 py-2.5 hover:bg-gray-300"
      >
        <a href="#">Register</a>
      </button>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden pr-5 Menu">
        <button
          className="text-white focus:outline-none"
          onClick={() => {
            const navLinks = document.querySelector(".mobile-menu");
            navLinks.classList.toggle("hidden");
          }}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <ul className="mobile-menu hidden flex-col absolute top-20 left-0 w-full bg-black bg-opacity-45 text-white font-[Ghr4] text-sm space-y-4 px-4 py-4 z-10">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#themes" className="hover:text-gray-300">Themes</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        <li><a href="#team" className="hover:text-gray-300">Team</a></li>
        <li>
          <button
            id="Btn"
            className="bg-white text-black font-[Ghr4] rounded-md py-2 w-full"
          >
            <a href="#">Register</a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
