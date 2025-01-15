import 'remixicon/fonts/remixicon.css';
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="bg-[#011947] min-h-[50vh] ">
      <footer className="footer bg-black bg-opacity-30  text-white px-3 py-8">
        <div className="footer-container max-w-7xl min-h-[50vh]  mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Logo and About Section */}
          <div className="footer-about text-center md:text-left text-xs md:text-sm">
            <h1 className="font-bold text-xl md:text-3xl mb-4">
              <span className="text-orange-500">GHR </span> HACK
            </h1>
            <p className="leading-relaxed">
              <strong>GHR-HACK</strong>, a groundbreaking hackathon by{" "}
              <strong>GHRCEM JALGAON</strong>, redefines creativity and technology. Join us in the
              pursuit of innovation, transcending traditional hackathons.
            </p>
          </div>

          {/* Useful Links Section */}
          <div className="UseFull font-[Ghr4] footer-links md:text-left md:text-sm">
            <h3 className=" md:text-xl font-bold mb-1">Useful Links</h3>
            <ul className="space-y-0">
              <li>
                <a
                  href="https://www.linkedin.com/company/ghrhack-1-0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-xl md:text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://devfolio.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-grey-500 text-[10px] md:text-sm"
                >
                  Devfolio
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ghrhack_1.0?igsh=MWlkYXdlMG12cXI2aw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-grey-500 text-[10px] md:text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://devfolio.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-grey-500 text-[10px] md:text-sm"
                >
                  Whatsapp
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/R3PeMPGX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-grey-500 text-[10px] md:text-sm"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
          <iframe className='h-50 w-34' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2333.451515661097!2d75.55092737525474!3d20.96213408067061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90e6dda5a2297%3A0xed1012e1b1c57106!2sG%20H%20Raisoni%20Institute%20of%20Engineering%20and%20Business%20Management%20jalgaon!5e1!3m2!1sen!2sin!4v1736179417023!5m2!1sen!2sin"  allowFullscreen=""referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Contact Us Section */}
          <div className="footer-contact text-center md:text-left text-xs md:text-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Us</h3>
            <p className="leading-relaxed">
              Gate No 57, Shirsoli Rd, <br />
              Tambapura, Mohadi, Jalgaon <br />
              Maharashtra 425002
            </p>
            <div className="footer-socials flex justify-center md:justify-start mt-4 space-x-2">
              <a
                href="https://x.com/Mayur_nikumbh07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="hover:text-orange-500"
              >
                <i className="ri-twitter-x-line text-lg md:text-2xl"></i>
              </a>
              <a
                href="https://www.instagram.com/ghrhack_1.0?igsh=MWlkYXdlMG12cXI2aw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-orange-500"
              >
                <i className="ri-instagram-line text-lg md:text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/ghrhack-1-0/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-orange-500"
              >
                <i className="ri-linkedin-box-line text-lg md:text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-[10px] md:text-sm">
          © 2025 GHR HACK. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
