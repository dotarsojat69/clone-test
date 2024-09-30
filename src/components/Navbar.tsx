import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="bg-white flex lg:flex-row flex-row-reverse items-center justify-between top-0 z-20 lg:px-20 fixed w-screen transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-8">
        <div className="text-2xl font-bold">
          <a href="/">
          <img src="images/logo.png" alt="Logo" className="w-16 ml-3 md:ml-16" />
          </a>
        </div>
        <div className="hidden lg:flex space-x-8">
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span className="cursor-pointer text-xl font-generalsans font-semibold">Our Services</span>
            {isServicesOpen && (
              <div className="absolute left-0 mt-2 bg-white p-4 rounded-lg shadow-lg w-[500px] z-50">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 transition">
                    <img src="/images/maintenance2.png" alt="Website Maintenance" className="w-10 h-10" />
                    <div>
                      <h4 className="font-bold font-generalsans">Website Maintenance</h4>
                      <p className="text-sm text-gray-600 font-generalsans">
                        Keep your website running smoothly and securely.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 transition">
                    <img src="/images/website2.png" alt="Website & App Development" className="w-10 h-10" />
                    <div>
                      <h4 className="font-bold font-generalsans">Website & App Development</h4>
                      <p className="text-sm text-gray-600">
                        Transform your online presence with custom solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 transition">
                    <img src="/images/ITsupport2.png" alt="IT Support" className="w-10 h-10" />
                    <div>
                      <h4 className="font-bold font-generalsans">IT Support</h4>
                      <p className="text-sm text-gray-600 font-generalsans">
                        Reliable IT support for your peace of mind.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 transition">
                    <img src="/images/3rdParty2.png" alt="3rd Party AI Solution" className="w-10 h-10" />
                    <div>
                      <h4 className="font-bold font-generalsans">3rd Party AI Solution</h4>
                      <p className="text-sm text-gray-600 font-generalsans">
                        Leverage third-party services for your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a href="#about" className="font-generalsans font-semibold text-xl">
            About Us
          </a>
          <a href="#portofolio" className="font-generalsans font-semibold text-xl">
            Portfolio
          </a>
          <a href="#contact" className="font-generalsans font-semibold text-xl">
            Contact
          </a>
        </div>
      <button className="bg-[#1e293b] text-white rounded-md py-2 px-4 font-medium font-generalsans shadow-custom-drop text-bgbase order-3 lg:block hidden hover:scale-110 transition-all hover:shadow-primary-600 hover:shadow-md">
        Get Started Today!
      </button>
      {/* Hamburger Menu */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 
            8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 
            7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 
            0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4 z-50 transition duration-300">
          <button className="mb-4" onClick={toggleMenu}>
            ✕
          </button>
          <nav className="flex flex-col space-y-4 font-generalsans font-semibold">
            <div className="relative">
              <button onClick={toggleServices} className="hover:text-blue-600">
                Our Services
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 bg-white shadow-lg rounded-md p-4 gap-6 font-semibold">
                  <ul className="space-y-2">
                    <li>Website Maintenance</li>
                    <li>Website & App Development</li>
                    <li>IT Support</li>
                    <li>3rd Party AI Solution</li>
                  </ul>
                </div>
              )}
            </div>
            <a href="#about">About Us</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
            <button className="bg-[#1e293b] text-white px-4 py-2 rounded ml-0 sm:ml-20 font-generalsans">
              Get Started Today!
            </button>
          </nav>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
