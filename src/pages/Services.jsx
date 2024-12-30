import drone from '../assets/drone video/drone.mp4';
import preWeddingVideo from '../assets/drone video/pre-wedding.mp4'; // Update with the actual path
import weddingImg from '../assets/wedding.jpg'; // Replace with the correct image path
import postWeddingImg from '../assets/post-wedding.jpg'; // Replace with the correct image path
import birthdayImg from '../assets/birthday.jpg'; // Replace with the correct image path
import whatsapp from '../assets/whatsapp.png'

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          We offer a range of professional photography and videography services to capture your special moments.
        </p>
      </div>
      <div className="flex flex-col gap-12 px-6 md:px-16">
        {/* Service 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 h-[300px]">
            <video
              src={drone}
              className="w-full h-full object-cover rounded-lg shadow-md"
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cinematic Videos with Drone</h3>
            <p className="text-gray-600">
              Capture breathtaking aerial views and cinematic moments with our high-quality drone videography services.
            </p>
            <div className='flex flex-row items-center justify-center md:justify-start mt-6 space-x-3'> <h3 className=' text-black text-lg font-semibold '>Book now with one click.   </h3><a href="https://wa.me/9866901723" target='_blank' rel="noopener noreferrer"><img src={whatsapp} alt='image' className="lg:w-10 w-7 hover:scale-110" /></a></div>
          
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 h-[300px]">
            <video
              src={preWeddingVideo}
              className="w-full h-full object-cover rounded-lg shadow-md"
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pre-Wedding Shoot</h3>
            <p className="text-gray-600">
              Celebrate your love story with beautifully themed pre-wedding shoots at stunning locations.
            </p>
            <div className='flex flex-row items-center justify-center md:justify-start mt-6 space-x-3'> <h3 className=' text-black text-lg font-semibold '>Book now with one click.   </h3><a href="https://wa.me/9866901723" target='_blank' rel="noopener noreferrer"><img src={whatsapp} alt='image' className="lg:w-10 w-7 hover:scale-110" /></a></div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={weddingImg}
            alt="Wedding Shoot"
            className="w-full md:w-1/2 h-[300px] object-cover rounded-lg shadow-md"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Wedding Shoot</h3>
            <p className="text-gray-600">
              Capture every magical moment of your big day with our wedding photography services.
            </p>
            <div className='flex flex-row items-center justify-center md:justify-start mt-6 space-x-3'> <h3 className=' text-black text-lg font-semibold '>Book now with one click.   </h3><a href="https://wa.me/9866901723" target='_blank' rel="noopener noreferrer"><img src={whatsapp} alt='image' className="lg:w-10 w-7 hover:scale-110" /></a></div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={postWeddingImg}
            alt="Post-Wedding Shoot"
            className="w-full md:w-1/2 h-[300px] object-cover rounded-lg shadow-md"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Post-Wedding Shoot</h3>
            <p className="text-gray-600">
              Relive your wedding day with intimate post-wedding shoots that reflect your journey together.
            </p>
            <div className='flex flex-row items-center justify-center md:justify-start mt-6 space-x-3'> <h3 className=' text-black text-lg font-semibold '>Book now with one click.   </h3><a href="https://wa.me/9866901723" target='_blank' rel="noopener noreferrer"><img src={whatsapp} alt='image' className="lg:w-10 w-7 hover:scale-110" /></a></div>
          </div>
        </div>

        {/* Service 5 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={birthdayImg}
            alt="Birthday Shoot"
            className="w-full md:w-1/2 h-[300px] object-cover rounded-lg shadow-md"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Birthday Shoot</h3>
            <p className="text-gray-600">
              Make your special day unforgettable with vibrant birthday shoot sessions.
            </p>
              <div className='flex flex-row items-center justify-center md:justify-start mt-6 space-x-3'> <h3 className=' text-black text-lg font-semibold '>Book now with one click.   </h3><a href="https://wa.me/9866901723" target='_blank' rel="noopener noreferrer"><img src={whatsapp} alt='image' className="lg:w-10 w-7 hover:scale-110" /></a></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
