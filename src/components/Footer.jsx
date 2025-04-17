const Footer = () => {
    return (
      <footer className="bg-black text-white px-6 py-10 text-sm ">
        {/* Logo */}
        <div className="max-w-7xl mx-auto text-start mb-8">
          <h1 className="text-white font-bold text-2xl">Vervent</h1>
        </div>
  
        {/* Sections */}
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-5 text-gray-300">
          <div>
            <h4 className="text-white font-semibold mb-2">Protection Plans</h4>
            <ul className="space-y-1">
              <li>Mobile Protection</li>
              <li>iPhone Protection</li>
              <li>Samsung Phone Protection</li>
              <li>Mobile Protection Features</li>
              <li>Mobile Protection FAQs</li>
              <li>Vervent Home+</li>
              <li>Vervent Home+ Features</li>
              <li>Vervent Home+ FAQs</li>
              <li>Vervent Appliance+</li>
              <li>Vervent Complete Protect</li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-white font-semibold mb-2">Repair Services</h4>
            <ul className="space-y-1">
              <li>Cracked Screen Repair</li>
              <li>Tech Repair</li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-white font-semibold mb-2">Tech Help</h4>
            <ul className="space-y-1">
              <li>Tech Tips</li>
              <li>Start or Track a Claim</li>
              <li>How to File a Claim</li>
              <li>Mobile App Center</li>
              <li>Tech Help</li>
              <li>Tech Service Features</li>
              <li>Tech Expert Stories</li>
              <li>Tech Help FAQs</li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-white font-semibold mb-2">Extended Warranties</h4>
            <ul className="space-y-1">
              <li>Warranty Features</li>
              <li>Warranty FAQs</li>
              <li>TV and Home Theater</li>
              <li>Laptop and Computer</li>
              <li>Home Appliances</li>
              <li>Electronics</li>
              <li>Tablet and eReader</li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-white font-semibold mb-2">About Vervent</h4>
            <ul className="space-y-1">
              <li>About Vervent</li>
              <li>Leadership</li>
              <li>Corporate Responsibility</li>
              <li>Partnerships</li>
              <li>Recognition and Reviews</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Life at Vervent</li>
              <li>Contact Vervent</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 max-w-7xl mx-auto text-gray-400 text-sm flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <span>Terms of Use</span>
            <span>Vervent Privacy Notice</span>
            <span>Cookie Preferences</span>
            <span>© Vervent 2025</span>
          </div>
  
          {/* Social & Certifications */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Fake icons for demo – replace with real ones or <FontAwesomeIcon /> */}
            <img src="/images/truste.png" alt="Truste" className="h-6" />
            <img src="/images/bbb.png" alt="BBB" className="h-6" />
            <div className="flex gap-3 text-white">
              <i className="fab fa-instagram" />
              <i className="fab fa-x-twitter" />
              <i className="fab fa-facebook" />
              <i className="fab fa-youtube" />
              <i className="fab fa-linkedin" />
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  