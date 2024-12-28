import logo2 from '../assets/logo2.jpg';
import pic4 from '../assets/pic4.avif';

const About = () => {
  return (
    <main>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gray-100">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight tracking-wide mb-4">
            Welcome to BG Photography!
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed tracking-wide">
            We are passionate storytellers specializing in wedding and pre-wedding
            shoots across the beautiful state of Telangana. With a deep love for
            capturing authentic emotions and cherished moments, we aim to
            transform your special days into timeless visual treasures.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed tracking-wide">
            Let us create a journey of memories that you can relive forever.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-6 md:mt-0 md:w-1/2 ml-14">
          <img
            src={logo2}
            alt="BG Photography Showcase"
            className="max-h-[370px] w-full h-auto rounded-lg shadow-lg transition-all duration-500 ease-in-out hover:grayscale hover:sepia hover:contrast-125 hover:brightness-75"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gray-100">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight tracking-wide mb-4">
            How I Capture Moments
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed tracking-wide">
            I believe that every moment holds a story waiting to be told. My approach
            to photography is rooted in authenticity, capturing emotions as they unfold naturally.
            Whether it&apos;s the quiet elegance of a pre-wedding shoot or the vibrant energy
            of a wedding celebration, I aim to create timeless images that resonate with the soul.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed tracking-wide">
            My style combines natural light, thoughtful composition, and attention to detail,
            ensuring that every photograph reflects the true essence of the moment.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-6 md:mt-0 md:w-1/2 ml-14">
          <img
            src={pic4}
            alt="BG Photography Showcase"
            className="max-h-[370px] w-full h-auto rounded-lg shadow-lg transition-all duration-500 ease-in-out hover:grayscale hover:sepia hover:contrast-125 hover:brightness-75"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
