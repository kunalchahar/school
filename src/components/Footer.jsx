import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Springdale Public School</h3>
            <p className="mb-1">123 Education Lane, Cityville, State, ZIP Code</p>
            <p className="mb-1">Phone: +1 (123) 456-7890</p>
            <p className="mb-1">Email: <a href="mailto:info@springdale.edu" className="text-yellow-400 hover:underline">info@springdale.edu</a></p>
          </div>

          <div className="mt-6 md:mt-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="/about-us" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="/academics" className="hover:text-yellow-400">Academics</a></li>
              <li><a href="/admissions" className="hover:text-yellow-400">Admissions</a></li>
              <li><a href="/faculty" className="hover:text-yellow-400">Faculty</a></li>
              <li><a href="/students" className="hover:text-yellow-400">Students</a></li>
              <li><a href="/gallery" className="hover:text-yellow-400">Gallery</a></li>
            </ul>
          </div>

          <div className="mt-6 md:mt-0">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-400">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 py-2 text-center text-sm">
        <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
