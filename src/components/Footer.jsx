// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: 'https://github.com/Rakesh-Dey-013',
    },
    {
      icon: <SiLeetcode size={20} />,
      url: 'https://leetcode.com/u/CodeNexus_1357/',
    },
    {
      icon: <FaCodepen size={20} />,
      url: 'https://codepen.io/CodeNexus_RD',
    },
    {
      icon: <FaLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/rakeshdey007/',
    },
  ];

  const navLinks = [
    { name: 'Home', path: '/Recipe-Finder/' },
    { name: 'Recipes', path: '/Recipe-Finder/recipes' },
    { name: 'About', path: '/Recipe-Finder/about' },
    { name: 'Contact', path: '/Recipe-Finder/contact' },
  ];

  return (
    <footer className="bg-zinc-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold text-white mb-4"
            >
              <span className="text-amber-500">Recipe</span>
              <span>Finder</span>
            </Link>
            <p className="mb-6">
              Discover delicious recipes from around the world with our intuitive
              platform. Cook like a pro with our easy-to-follow instructions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-amber-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest recipes and cooking
              tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-zinc-800 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-amber-500 w-full"
              />
              <button
                type="submit"
                className="bg-amber-500 text-white px-4 py-2 rounded-r-lg hover:bg-amber-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;