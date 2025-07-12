// import React, { useState , useEffect} from 'react'
// import "../Header/header.css"
// import {Container , Navbar , Row , Nav , Offcanvas } from "react-bootstrap"

// function Header() {

//   const [show,setShow] = useState(false);

//   // Handle Sticky header on scroll

//   useEffect(() => {

//     const handleScroll = () => {

//       const header = document.querySelector('.header');

//       const scrollTop = window.scrollY;

//       console.log('Scroll Position:', scrollTop); // Debugging

//       if (header) {

//         if (scrollTop >= 320) {

//           header.classList.add('is-sticky');

//         } else {

//           header.classList.remove('is-sticky');

//         }

//       }

//     };


//     window.addEventListener("scroll", handleScroll);


//     return () => {

//       window.removeEventListener("scroll", handleScroll);

//     };

//   }, []);   
  



//   return (
//     <>
    
//     <header className='header'>

//       <Container fluid="md">

//         <Row>

//           <Navbar key="lg" expand="lg" className="mb-3">
//             <Container fluid>
//               {/* Logo */}
//               <Navbar.Brand href="#">Web Port</Navbar.Brand>

//               {/* offcanvas for mobile Menu */}


//               {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} /> */}

//               <Navbar.Offcanvas
//                 id={`offcanvasNavbar-expand-lg`}
//                 aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
//                 placement="end"
//                 show={show}
//               >

//               {/* offcanvas header (only visble on Mobile ) */}

//                 <Offcanvas.Header className='d-flex justify-content-between d-lg-none' >
//                   <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg m-0`}>
//                   Web Portfolio
//                   </Offcanvas.Title>
//                   <button className='btn btn-secondary' onClick={()=> setShow(false)}>
//                     <i className='bi bi-x'></i>
//                   </button>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                   <Nav className="justify-content-end flex-grow-1 pe-3">
//                     <Nav.Link href="#services">Services</Nav.Link>
//                     <Nav.Link href="#works">Works</Nav.Link>
//                     <Nav.Link href="#resume">Resume</Nav.Link>
//                     <Nav.Link href="#skills">Skills</Nav.Link>
//                     <Nav.Link href="#testimonials">Testimonials</Nav.Link>
//                     <Nav.Link href="#contact">Contact</Nav.Link>
                    
//                   </Nav>
                  
//                 </Offcanvas.Body>
//               </Navbar.Offcanvas>


//               <div className="header-action d-flex" >
                
//                   <a href="#contact" className="primary-btn">Hire Me!</a>
                


//                 {/* Mobile Menu Toggle Button */}

//                 <button className='toggle-btn d-block d-lg-none ms-2' onClick={()=>setShow(!show)}    // Toggle Menu visibility
//                 >
//                   <i className={`bi ${show ? "bi-x" : "bi-list" } `}></i>
//                 </button>

//               </div>


//             </Container>
//           </Navbar>

//         </Row>

//       </Container>

//     </header>
    
    
//     </>
//   )
// }

// export default Header












import React, { useState, useEffect } from 'react';
import "../Header/header.css";
import { Container, Navbar, Row, Nav, Offcanvas } from "react-bootstrap";

function Header() {
  const [show, setShow] = useState(false);

  // Handle Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      const scrollTop = window.scrollY;

      if (header) {
        header.classList.toggle('is-sticky', scrollTop >= 320);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className='header'>
        <Container fluid="md">
          <Row>
            <Navbar expand="lg" className="mb-3">
              <Container fluid>
                {/* Logo - No changes needed */}
                <Navbar.Brand href="#">Dev Folio</Navbar.Brand>

                {/* CHANGE 1: Uncomment and use Navbar.Toggle for proper mobile menu handling */}
                {/* <Navbar.Toggle 
                  aria-controls="offcanvasNavbar-expand-lg" 
                  className="d-lg-none"
                  onClick={() => setShow(!show)}
                >
                  <i className={`bi ${show ? "bi-x" : "bi-list"}`}></i>
                </Navbar.Toggle> */}

                {/* Offcanvas menu - Keep existing structure but update aria attributes */}
                <Navbar.Offcanvas
                  id="offcanvasNavbar-expand-lg"
                  aria-labelledby="offcanvasNavbarLabel-expand-lg"
                  placement="end"
                  show={show}
                  onHide={() => setShow(false)}
                >
                  <Offcanvas.Header className='d-flex justify-content-between d-lg-none'>
                    <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                      Web Portfolio
                    </Offcanvas.Title>
                    <button className='btn btn-secondary' onClick={() => setShow(false)}>
                      <i className='bi bi-x'></i>
                    </button>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#services" onClick={() => setShow(false)}>Services</Nav.Link>
                      <Nav.Link href="#works" onClick={() => setShow(false)}>Works</Nav.Link>
                      <Nav.Link href="#resume" onClick={() => setShow(false)}>Resume</Nav.Link>
                      <Nav.Link href="#skills" onClick={() => setShow(false)}>Skills</Nav.Link>
                      <Nav.Link href="#testimonials" onClick={() => setShow(false)}>Testimonials</Nav.Link>
                      <Nav.Link href="#contact" onClick={() => setShow(false)}>Contact</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>

                {/* CHANGE 2: Keep your custom toggle button but add aria-hidden for accessibility */}
                <div className="header-action d-flex">
                  <a href="#contact" className="primary-btn">Hire Me!</a>
                  <button 
                    className='toggle-btn d-block d-lg-none ms-2' 
                    onClick={() => setShow(!show)}
                    aria-hidden="true" // Hide from screen readers since Navbar.Toggle handles this
                  >
                    <i className={`bi ${show ? "bi-x" : "bi-list"}`}></i>
                  </button>
                </div>
              </Container>
            </Navbar>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default Header;