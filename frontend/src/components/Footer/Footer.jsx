import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="foot">
        {/* Left Section */}
        <div className="foot-first">
          <div className="foot1">
            <h2>FASHION</h2>
            <h4>Complete your lifestyle with awesome</h4>
            <h4>By staying healthy from us</h4>
          </div>
          <div className="company">
            <img
              src="https://itcnet.gr/wp-content/uploads/2020/09/Linkedin-logo-on-transparent-Background-PNG--800x800.png"
              alt="LinkedIn"
            />
            <img
              src="http://icons.iconarchive.com/icons/iynque/ios7-style/1024/Twitter-icon.png"
              alt="Twitter"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_(square).png"
              alt="Facebook"
            />
            <img
              className="small"
              src="https://static.vecteezy.com/system/resources/previews/014/440/980/original/email-message-icon-design-in-blue-circle-png.png"
              alt="Email"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="foot-second">
          <div className="foot-content">
            <h3>Company</h3>
            <h4>About</h4>
            <h4>Contact us</h4>
            <h4>Support</h4>
            <h4>Careers</h4>
          </div>
          <div className="foot-content">
            <h3>Quick Link</h3>
            <h4>Share Location</h4>
            <h4>Orders Tracking</h4>
            <h4>Size Guide</h4>
            <h4>FAQs</h4>
          </div>
          <div className="foot-content">
            <h3>Legal</h3>
            <h4>Terms & Conditions</h4>
            <h4>Privacy Policy</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
