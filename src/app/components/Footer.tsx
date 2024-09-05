import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-around items-center space-y-4 lg:space-y-0">
        
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold">Scopio</h3>
          <div className="mt-2 flex space-x-2">
            <a href="#" className="text-pink-500 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-pink-500 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-pink-500 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-2 items-center lg:items-start">
          <button className="hover:text-pink-500">Book a Demo</button>
          <button className="hover:text-pink-500">Support</button>
          <button className="hover:text-pink-500">Full-Field Scans</button>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="text-pink-500 hover:text-white flex items-center space-x-2">
            <i className="fab fa-facebook-f"></i> <span>Facebook</span>
          </div>
          <div className="text-pink-500 hover:text-white flex items-center space-x-2">
            <i className="fab fa-twitter"></i> <span>Twitter</span>
          </div>
          <div className="text-pink-500 hover:text-white flex items-center space-x-2">
            <i className="fab fa-linkedin-in"></i> <span>LinkedIn</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
