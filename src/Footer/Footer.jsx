import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col text-center">
          <p className="text-xl font-semibold mb-4">
            Book your drone shoot with our specialist
          </p>
          <a
            href="https://wa.me/6305531108?text=I%20am%20interested%20in%20booking%20a%20drone%20shoot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
              Book Now
            </button>
          </a>
        </div>
        <div className="grid ">
          <h3 className="text-xl font-semibold mb-2">Office</h3>
          <p>Vill: Jangamreddypally</p>
          <p>Mdl: Ellanthakunta</p>
          <p>Rajanna Sircilla</p>
          <p>Telangana, India</p>
          <p className="email-id">Bhanuchander@gmail.com</p>
          <h4>9866901723</h4>
          <h4>8143901723</h4>
        </div>
        <div className="col">
          <h3 className="text-xl font-semibold mb-2">Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#book">Book now</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="social-links">
            <a
              href="https://www.instagram.com/bgphotographybhanu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Instagram</span>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Facebook</span>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Twitter</span>
              <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>&copy; {new Date().getFullYear()} All rights reserved by BG Photography.</p>
      </div>
    </footer>
  );
};

export default Footer;
