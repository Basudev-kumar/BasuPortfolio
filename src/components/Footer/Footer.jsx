// import React from 'react'
// import "../Footer/footer.css"

// function Footer() {
//   return (
//     <>
    
//       <footer className='py-4 footer'>
//         <ul className='nav justify-content-center border-bottom pb-3 my-3'>
          
//           <li className='nav-item'>
//             <a href="#services" className='nav-link px-2 border-text'>Services</a>
//           </li>

//           <li className='nav-item'>
//             <a href="#works" className='nav-link px-2 border-text'>Work</a>
//           </li>

//           <li className='nav-item'>
//             <a href="#resume" className='nav-link px-2 border-text'>Resume</a>
//           </li>

//           <li className='nav-item'>
//             <a href="#skills" className='nav-link px-2 border-text'>Skills</a>
//           </li>

//           <li className='nav-item'>
//             <a href="#testimonials" className='nav-link px-2 border-text'>Testimonials</a>
//           </li>

//           <li className='nav-item'>
//             <a href="#contact" className='nav-link px-2 border-text'>Contact</a>
//           </li>
          
//         </ul>

//         <p className='text-center body-text mb-0'>@2025 Web Port</p>
//       </footer>
    
//     </>
//   )
// }

// export default Footer










import React from 'react';
import "../Footer/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-links">
          <ul className='nav justify-content-center'>
            <li className='nav-item'>
              <button 
                onClick={() => scrollToSection('services')} 
                className='nav-link'
              >
                Services
              </button>
            </li>
            <li className='nav-item'>
              <button 
                onClick={() => scrollToSection('works')} 
                className='nav-link'
              >
                Works
              </button>
            </li>
            <li className='nav-item'>
              <button 
                onClick={() => scrollToSection('resume')} 
                className='nav-link'
              >
                Resume
              </button>
            </li>
            <li className='nav-item'>
              <button 
                onClick={() => scrollToSection('skills')} 
                className='nav-link'
              >
                Skills
              </button>
            </li>
            <li className='nav-item'>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className='nav-link'
              >
                Testimonials
              </button>
            </li>
            <li className='nav-item'>
              <button 
                onClick={() => scrollToSection('contact')} 
                className='nav-link'
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <a href="https://github.com/Basudev-kumar" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/basudev-kumar-573a47219/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="mailto:example@example.com">
            <i className="bi bi-envelope"></i>
          </a>
        </div>

        <div className="footer-copyright">
          <p>© {currentYear} Web Port. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;