import navbarLogoSm from "../assets/logo-small-notext.svg";
import navbarLogoMd from "../assets/logo-medium.svg";
import navbarLogoLg from "../assets/logo-large.svg";
import searchIcon from "../assets/icon-search.svg";
import hamburgerMenu from "../assets/hamburger-menu.svg";

export const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between">
      <picture>
        <source media="(min-width: 1024px)" srcSet={navbarLogoLg} />
        <source media="(min-width: 768px)" srcSet={navbarLogoMd} />
        <img src={navbarLogoSm} />
      </picture>
      <div className="hidden lg:flex">
        <ul className="flex flex-row items-center gap-6">
          <li className="whitespace-nowrap">About us</li>
          <li className="whitespace-nowrap">Classes</li>
          <li className="whitespace-nowrap">Find your local club</li>
          <li className="ml-2">
            <img src={searchIcon} />
          </li>
        </ul>
      </div>
      <img src={hamburgerMenu} className="flex lg:hidden" />
    </nav>
  );
};