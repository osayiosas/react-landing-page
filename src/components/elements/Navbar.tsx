import { Container } from "../shared/container";

import logo from "../../assets/logo.svg";

const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About Us" },
  { href: "#features", text: "Contact" },
];
export const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className=" w-full flex justify-between gap-6 relative">
          {/* logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img src={logo} alt="logo"  className="w-10 h-10"/>
            </a>
          </div>
          {/* navigation links */}
          <ul className="flex gap-4">
            {navItems.map((item) => (
              <li key={item.text}>
                <a href={item.href} className="text-gray-700 hover:text-gray-900">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
