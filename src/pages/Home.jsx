import './Home.css';

import pic2 from "../assets/pic2.avif";
import pic3 from "../assets/pic3.avif";
import photo8 from '../assets/photos/photo8.avif';
import photo9 from '../assets/photos/photo9.avif';
import photo10 from '../assets/photos/photo10.avif';
import photo11 from '../assets/photos/photo11.avif';
import photo12 from '../assets/photos/photo12.avif';
import photo13 from '../assets/photos/photo13.avif';
import photo14 from '../assets/photos/photo14.avif';
import photo15 from '../assets/photos/photo15.avif';
import photo16 from '../assets/photos/photo16.avif';

const Home = () => {
  return (
    <div className='mt-2 '>
   <div className="w-full h-[88vh] relative">
  <img
    src={pic3}
    alt="Pic 3"
    className="w-full h-full object-cover"
  />
  <h2 className="absolute bottom-2 sm:bottom-1 left-1/2 transform -translate-x-1/2 sm:-translate-y-1/2 text-2xl sm:text-3xl font-bold text-center drop-shadow-lg text-white">
    Capturing Life’s Beautiful Moments
  </h2>
</div>


      <h1 className="font-semibold mt-4 text-4xl font-bold text-pink-300">Gallery</h1>
      <div className="image-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        <img src={photo8} alt="Gallery Image" className="image-size"/>
        <img src={photo9} alt="Gallery Image" className="image-size"/>
        <img src={photo10} alt="Gallery Image" className="image-size"/>
        <img src={photo11} alt="Gallery Image" className="image-size"/>
        <img src={photo12} alt="Gallery Image" className="image-size"/>
        <img src={photo13} alt="Gallery Image" className="image-size"/>
        <img src={photo14} alt="Gallery Image" className="image-size"/>
        <img src={photo15} alt="Gallery Image" className="image-size"/>
        <img src={photo16} alt="Gallery Image" className="image-size"/>
      </div>
    </div>
  );
};

export default Home;
