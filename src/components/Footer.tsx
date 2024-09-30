import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Berlangganan:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#1f1e1e] lg:px-28 px-10 text-white pt-20 pb-10 font-generalsans">
      <div className="container mx-auto ">
        <div className="lg:flex lg:justify-between">
          <div className="flex flex-col justify-between">
            <h2 className="text-4xl font-bold mb-1">Let's Grow With CO2 Labs</h2>
            <p className="text-2xl mb-4">Get Exclusive Updates From Us</p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Yourmail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow p-4 rounded-l-full text-gray-900 text-base outline-none"
                required
              />
              <button type="submit" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-r-full font-bold text-sm">
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex xl:ml-0 lg:ml-10 flex-wrap gap-11 lg:mt-0 mt-20">
            <div>
              <h3 className="text-xl font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-base text-gray-400">
                <li>Web Maintenance</li>
                <li>Web & App Development</li>
                <li>IT Service</li>
                <li>3rd Party AI Solution</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">About</h3>
              <ul className="space-y-2 text-base text-gray-400">
                <li>Our Approach</li>
                <li>Our Team</li>
                <li>Our Portfolio</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-base text-gray-400">
                <li className="flex items-center">
                  <span className="mr-2">📞</span> +65-8118-1595
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✉️</span> info@co2labs.com
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📍</span> 100D Pasir Panjang Road
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-lg text-gray-400">
          <p>&copy;2024 CO2 Labs. All Right Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/faq" className="hover:text-white">FAQ</a>
            <a href="/terms" className="hover:text-white">Terms & Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;