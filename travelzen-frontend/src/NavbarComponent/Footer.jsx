// // import { Link } from "react-router-dom";
// // import "./footer.css";

// // const Footer = () => {
// //   return (
// //     <footer className="text-center text-lg-start bg-white text-dark">
// //       <div className="container p-4 pb-0">
// //         <div className="row">
// //           {/* Company Information */}
// //           <div className="col-lg-4 col-md-6 mb-4">
// //             <h5 className="text-uppercase fw-bold">Tours & Travels System</h5>
// //             <p>
// //               Explore the world with ease! Our Tour and Travel management system ensures a seamless and unforgettable travel experience.
// //             </p>
// //           </div>

// //           {/* Quick Links */}
// //           <div className="col-lg-2 col-md-6 mb-4">
// //             <h5 className="text-uppercase fw-bold">Quick Links</h5>
// //             <ul className="list-unstyled">
// //               <li>
// //                 <Link to="/about" className="text-dark text-decoration-none">
// //                   About Us
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/destinations" className="text-dark text-decoration-none">
// //                   Destinations
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/packages" className="text-dark text-decoration-none">
// //                   Packages
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/contact" className="text-dark text-decoration-none">
// //                   Contact Us
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Contact Us */}
// //           <div className="col-lg-2 col-md-6 mb-4">
// //             <h5 className="text-uppercase fw-bold">Contact</h5>
// //             <ul className="list-unstyled">
// //               <li>
// //                 <a href="tel:+1234567890" className="text-dark text-decoration-none">
// //                   +1 234 567 890
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="mailto:support@travelzen.com" className="text-dark text-decoration-none">
// //                   support@travelzen.com
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="/contact" className="text-dark text-decoration-none">
// //                   Live Chat
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Careers */}
// //           <div className="col-lg-2 col-md-6 mb-4">
// //             <h5 className="text-uppercase fw-bold">Careers</h5>
// //             <ul className="list-unstyled">
// //               <li>
// //                 <Link to="/careers" className="text-dark text-decoration-none">
// //                   Job Openings
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/internships" className="text-dark text-decoration-none">
// //                   Internships
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Social Media */}
// //           <div className="col-lg-2 col-md-6 mb-4">
// //             <h5 className="text-uppercase fw-bold">Follow Us</h5>
// //             <div className="d-flex gap-3 justify-content-center">
// //               <a href="#" className="text-dark fs-5">
// //                 <i className="fab fa-facebook"></i>
// //               </a>
// //               <a href="#" className="text-dark fs-5">
// //                 <i className="fab fa-instagram"></i>
// //               </a>
// //               <a href="#" className="text-dark fs-5">
// //                 <i className="fab fa-twitter"></i>
// //               </a>
// //               <a href="#" className="text-dark fs-5">
// //                 <i className="fab fa-youtube"></i>
// //               </a>
// //             </div>
// //           </div>
// //         </div>

// //         <hr className="mb-4" />

// //         {/* Login Section */}
// //         <div className="text-center">
// //           <span className="me-2">Ready to explore?</span>
// //           <Link to="/user/login">
// //             <button className="btn btn-dark btn-rounded">Log in</button>
// //           </Link>
// //         </div>

// //         <hr className="mb-4" />

// //         {/* Copyright */}
// //         <div className="text-center py-3">
// //           © {new Date().getFullYear()} Copyright: 
// //           <a className="text-dark fw-bold ms-1" href="#">
// //             travelzen.com
// //           </a>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;



// import { Link } from "react-router-dom";
// import "./footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer text-center text-lg-start bg-dark text-light py-5">
//       <div className="container">
//         <div className="row">
//           {/* Company Information */}
//           <div className="col-lg-4 col-md-6 mb-4">
//             <h5 className="fw-bold text-uppercase">Tours & Travels System</h5>
//             <p className="text-muted">
//               Explore the world with ease! Our Tour and Travel management system ensures a seamless and unforgettable travel experience.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="col-lg-2 col-md-6 mb-4">
//             <h5 className="fw-bold text-uppercase">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li><Link to="/about" className="footer-link">About Us</Link></li>
//               <li><Link to="/destinations" className="footer-link">Destinations</Link></li>
//               <li><Link to="/packages" className="footer-link">Packages</Link></li>
//               <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div className="col-lg-2 col-md-6 mb-4">
//             <h5 className="fw-bold text-uppercase">Contact</h5>
//             <ul className="list-unstyled">
//               <li><a href="tel:+1234567890" className="footer-link">+1 234 567 890</a></li>
//               <li><a href="mailto:support@travelzen.com" className="footer-link">support@travelzen.com</a></li>
//               <li><Link to="/contact" className="footer-link">Live Chat</Link></li>
//             </ul>
//           </div>

//           {/* Careers */}
//           <div className="col-lg-2 col-md-6 mb-4">
//             <h5 className="fw-bold text-uppercase">Careers</h5>
//             <ul className="list-unstyled">
//               <li><Link to="/careers" className="footer-link">Job Openings</Link></li>
//               <li><Link to="/internships" className="footer-link">Internships</Link></li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div className="col-lg-2 col-md-6 mb-4">
//             <h5 className="fw-bold text-uppercase">Follow Us</h5>
//             <div className="d-flex justify-content-center gap-3">
//               <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
//               <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
//               <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
//               <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
//             </div>
//           </div>
//         </div>

//         <hr className="footer-divider" />

//         {/* Login Section */}
//         <div className="text-center my-3">
//           <span className="me-2">Ready to explore?</span>
//           <Link to="/user/login">
//             <button className="btn btn-outline-light btn-rounded px-4">Log in</button>
//           </Link>
//         </div>

//         <hr className="footer-divider" />

//         {/* Copyright */}
//         <div className="text-center pt-3">
//           © {new Date().getFullYear()} Copyright:
//           <a className="footer-link fw-bold ms-1" href="#"> travelzen.com</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start bg-dark text-light py-5">
      <div className="container footer-content">
        {/* Company Information */}
        <div className="footer-section">
          <h4>TravelZen</h4>
          <p>
            Explore the world with ease! Our Tour and Travel management system ensures a seamless and unforgettable travel experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+1234567890">+1 234 567 890</a></li>
            <li><a href="mailto:support@travelzen.com">support@travelzen.com</a></li>
            <li><Link to="/contact">Live Chat</Link></li>
          </ul>
        </div>

        {/* Careers */}
        <div className="footer-section">
          <h4>Careers</h4>
          <ul>
            <li><Link to="/careers">Job Openings</Link></li>
            <li><Link to="/internships">Internships</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="d-flex gap-3">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Ready to explore?</span>
        <Link to="/user/login">
          <button className="btn btn-light btn-rounded px-4">Log in</button>
        </Link>
        <p>© {new Date().getFullYear()} travelzen.com</p>
      </div>
    </footer>
  );
};

export default Footer;


