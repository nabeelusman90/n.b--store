import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Modern Shop</h3>
            <p className="text-sm">
              Your one-stop destination for premium products and exceptional shopping experience.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home & Living</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
            <div className="mt-4">
              <h5 className="text-white text-sm font-semibold mb-2">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Made By Nabeel Usman.<br />
if want to make your website contant me 03075620090</p>
        </div>
      </div>
    </footer>
  );
};