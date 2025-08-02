import React from "react";
import { FiFacebook, FiMapPin, FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

       
        <div>
          <h2 className="text-lg font-light tracking-widest uppercase mb-4">
            BluO Amani Vagator – Boutique Hotel Goa
          </h2>
          <img
            src="https://amanivagatorgoa.com/wp-content/uploads/2020/11/Logo.png"
            alt="Amani Logo"
            className="w-40 mb-4"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            BluO Amani Vagator – Boutique Hotel Goa is most eclectic boutique hotel in North Goa offering excellent location, quality accommodation, thoughtful services and varied facilities.
          </p>
        </div>

        
        <div>
          <h2 className="text-lg font-light tracking-widest uppercase mb-4">Address</h2>
          <p className="flex items-start gap-3 text-sm text-gray-300 mb-4 hover:text-gray-500">
            <FiMapPin className="text-yellow-500 mt-1" />
            Near Bharat Petroleum Pump, Anjuna – Vagator, Bardez, Goa
          </p>
          <p className="flex items-start gap-3 text-sm text-gray-300 mb-4 hover:text-gray-500">
            <MdOutlineMail className="text-yellow-500 mt-1" />
            Reservations@amanivagatorgoa.com
          </p>
          <p className="flex items-start gap-3 text-sm text-gray- hover:text-gray-500">
            <FiPhone className="text-yellow-500 mt-1" />
            Mobile: +91 72900 60060
          </p>
        </div>

        
        <div>
          <h2 className="text-lg font-light tracking-widest uppercase mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="border-b border-gray-700 pb-2 hover:text-yellow-500"><a href="/gallery">Gallery</a></li>
            <li className="border-b border-gray-700 pb-2 hover:text-yellow-500"><a href="/contact">Contact</a></li>
            <li className="border-b border-gray-700 pb-2 hover:text-yellow-500"><a href="/packages">Packages</a></li>
            <li className="border-b border-gray-700 pb-2 hover:text-yellow-500"><a href="/tariff">Tariff</a></li>
            <li className="border-b border-gray-700 pb-2 hover:text-yellow-500"><a href="/house-rules">House Rules</a></li>
            <li className="border-b border-gray-700 pb-2 hover:text-yellow-500"><a href="/termsandconditions">Terms and Conditions</a></li>
          </ul>
        </div>

        {/* Column 4: Social Links */}
        <div>
          <h2 className="text-lg font-light tracking-widest uppercase mb-4">Follow</h2>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3 border-b border-gray-700 pb-2 hover:text-yellow-500">
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="Facebook"
                className="w-5 h-5"
              />
              Facebook
            </li>
            <li className="flex items-center gap-3 border-b border-gray-700 pb-2 hover:text-yellow-500">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
                alt="Tripadvisor"
                className="w-5 h-5"
              />
              Tripadvisor
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © 2025 BluO Amani Vagator – All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
