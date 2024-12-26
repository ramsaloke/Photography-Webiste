
// import logo from '../assets/logo2.jpg';
const Navbar = () => {
  return (
    <div className=" fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-gray-800 text-white z-50 shadow-md">
      {/* logo section */}
      <div className="text-2xl font-semibold flex items-center h-10">
      <h2  className="w-20 h-14 transition-transform duration-300 hover:scale-110 font-bold">BG <br></br><span className="text-orange-500">PhotoGraphy</span></h2>
       
      </div>
      {/* Navigation Links */}
      <div >
      <ul className="flex justify-center space-x-12 p-4">
        <li>
          <a href="#home" className="hover:text-gray-200">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-200">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-200">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-200">
            Contact
          </a>
        </li>
        <li>
          <a href="#book" className="hover:text-gray-200">
            Book Now
          </a>
        </li>
      </ul>
    </div>
    </div>
   
  );
};

export default Navbar;

{/* <div className="mt-16">
  {/* Content below the navbar */} 

