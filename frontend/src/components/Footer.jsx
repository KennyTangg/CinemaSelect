import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white mt-10 py-5 px-8 sm:py-10 lg:px-40 sm:px-20">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          
          {/* Column 1: About */}
          <div >
            <h4 className="font-bold text-lg mb-4">About Us</h4>
            <p className="text-sm">We are an easy-to-use online platform where you can quickly find and book movie tickets for enjoyable theater experience.</p>
          </div>
  
          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li><a className="text-gray-400 hover:text-white hover:cursor-pointer">About</a></li>
              <li><a className="text-gray-400 hover:text-white hover:cursor-pointer">Services</a></li>
              <li><a className="text-gray-400 hover:text-white hover:cursor-pointer">Contact</a></li>
            </ul>
          </div>
  
          {/* Column 3: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <p className="text-sm" >Email: cinema@select.com</p>
            <p className="text-sm" >Phone: (123) 456-7890</p>
          </div>
  
          {/* Column 4: Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-sm">
              <a className="text-gray-400 hover:text-white hover:cursor-pointer">Facebook</a>
              <a className="text-gray-400 hover:text-white hover:cursor-pointer">Twitter</a>
              <a className="text-gray-400 hover:text-white hover:cursor-pointer">Instagram</a>
            </div>
          </div>
  
        </div>
  
        {/* Footer Bottom */}
        <div className="text-center text-gray-400 mt-10 sm:mt-15 text-sm sm:text-base">
          <p>&copy; 2025 CinemaSelect. All rights reserved.</p>
        </div>
      </footer>
    );
  };

export default Footer