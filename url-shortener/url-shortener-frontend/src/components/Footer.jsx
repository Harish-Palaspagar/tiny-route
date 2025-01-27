import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white py-8 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-6">
        {/* Branding Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-extrabold mb-2 text-white">TinyRoute</h2>
          <p className="text-lg text-gray-200">Simplifying URL shortening for efficient sharing</p>
        </div>

        {/* Copyright */}
        <p className="mt-6 lg:mt-0 text-gray-200 text-sm text-center lg:text-left">
          &copy; 2024 TinyRoute. All rights reserved.
        </p>

        {/* Social Icons Section */}
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a
            href="#"
            className="hover:text-gray-200 transform transition-transform duration-200 hover:scale-110"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transform transition-transform duration-200 hover:scale-110"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transform transition-transform duration-200 hover:scale-110"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transform transition-transform duration-200 hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
