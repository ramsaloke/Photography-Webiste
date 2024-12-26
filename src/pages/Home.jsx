import './Home.css';

import pic2 from "../assets/pic2.avif";
import pic3 from "../assets/pic3.avif";
import photo8 from '../assets/photos/photo8.avif'
import photo9 from '../assets/photos/photo9.avif'
import photo10 from '../assets/photos/photo10.avif'
import photo11 from '../assets/photos/photo11.avif'
import photo12 from '../assets/photos/photo12.avif'
import photo13 from '../assets/photos/photo13.avif'
import photo14 from '../assets/photos/photo14.avif'
import photo15 from '../assets/photos/photo15.avif'
import photo16 from '../assets/photos/photo16.avif'





const Home = () => {
  return (
    <div className='mt-6'>
    <div className="flex relative">
    <div className="w-1/2 h-[60vh] relative">
      <img
        src={pic2}
        alt="Pic 2"
        className="w-full h-full object-cover "
      />
      <h2 className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-3xl font-bold text-center drop-shadow-lg text-pink-400">
        Photography at Its Finest
      </h2>
    </div>
    
    <div className="w-1/2 h-[60vh] relative">
      <img
        src={pic3}
        alt="Pic 3"
        className="w-full h-full object-cover"
      />
      <h2 className="absolute bottom-1 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold text-center drop-shadow-lg ">
        Capturing Life’s Beautiful Moments
      </h2>
 
    </div>
  </div>
  <h1 className="font-semibold mt-4 text-4xl font-bold text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-[length:200%]">Gallery</h1>
  <div className="image-container flex flex-wrap justify-evenly gap-8 mt-4">
    
      
      <img src={photo8} alt="" className="image-size"/>
      <img src={photo9} alt="" className="image-size"/>
      <img src={photo10} alt="" className="image-size"/>
      <img src={photo11} alt="" className="image-size"/>
      <img src={photo12} alt="" className="image-size"/>
      <img src={photo13} alt="" className="image-size"/>
      <img src={photo14} alt="" className="image-size"/>
      <img src={photo15}alt="" className="image-size"/>
      <img src={photo16}alt="" className="image-size"/>


    </div>
  </div>
  
  
  );
};

export default Home;
