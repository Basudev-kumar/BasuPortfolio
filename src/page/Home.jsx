import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import me from "../assets/images/me.jpg"
import me2 from "../assets/images/me2.jpg"
import me3 from "../assets/images/me3.jpg"
import me2_bg_remove from "../assets/images/me2_bg_remove.png"
import profile from "../assets/images/me.png"
import {motion} from "framer-motion"
import Services from '../components/Services/Services'
import RecentWork from '../components/RecentWork/RecentWork'
import Career from '../components/Career/Career'
import Skills from '../components/Skills/Skills'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Contact/Contact'


function Home() {

  const [cursorPos,setCursorPos]=useState({x:0,y:0})

    // Mouse move event listener
  useEffect(()=>{
    const handleMouseMove=(e)=>{
      setCursorPos({x:e.clientX,y:e.clientY})
    }
    window.addEventListener("mousemove",handleMouseMove)
    return (()=>window.removeEventListener("mousemove",handleMouseMove))
  },[])

  return (
    <>

    <main className='position-relative overflow-hidden'>
    
    {/* motion div for sportlight effect */}
      <motion.div 
      className="motion-sportlight"
      animate={{
        left:cursorPos.x -100,
        top:cursorPos.y -100,
      }}
      transition = {{type:"tween",duration : 0.2}}
      />
      

      <section className='hero-section'>
        <Container>
          <Row className='align-items-center row'>

            <div className='intro-text d-none d-md-block'>
              <p className='animate-stroke'> HI</p>
            </div>

            <Col md={6} className='order-2 order-md-1'>
              <div className='hero-des'>
                  <h3 className='heading mb-3 p-1'>
                    I'm Basudev Kumar
                  </h3>

                  {/* <h1 className='main-heading mb-3'>
                    Next-Level Web <br/>
                    Developer
                  </h1> */}

                  <h1 className="main-heading mb-3">
                    Full-Stack <br />
                    Web Engineer
                  </h1>

                  <p className='detail-text mt-4 mt-md-0 p-2'>
                    I take complex user experience problems and simplify them into user-centered solutions that connect billions of people.
                  </p>

                  {/* <p className='detail-text mt-4 mt-md-0 p-2'>
                    I break down complex user experience problem to create integrity focussed solutions that connect billions of people.
                  </p> */}

                  <div className='d-flex mt-3 align-items-center flex-sm-row flex-column'>

                    <button className='secondary-btn ' type='button'>
                      Resume <i className='bi bi-download ms-2'></i>
                    </button>

                    <ul className='d-flex gap-3 m-0 mt-3 mt-sm-0 p-0 ms-sm-3 social-media pb-3 pb-md-0'>

                      <li className='d-block'>
                        <a href="https://x.com" target="_blank">
                          <i className='bi bi-twitter'></i>
                        </a>
                      </li>

                      <li className='d-block'>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className='bi bi-instagram'></i>
                        </a>
                      </li>

                      <li className='d-block'>
                        <a href="https://www.linkedin.com/in/basudev-kumar-573a47219/" target="_blank">
                          <i className='bi bi-linkedin'></i>
                        </a>
                      </li>

                      <li className='d-block'>
                        <a href="https://github.com/Basudev-kumar" target="_blank">
                          <i className='bi bi-github'></i>
                        </a>
                      </li>

                    </ul>

                  </div>

              </div>
            </Col>

            <Col md={6} className='order-1 order-md-2 pb-2 '>
              <div className='hero-img'>
                <img src={profile} alt="image" className='img-fluid m-auto'></img>
              </div>
            </Col>

          </Row>
        </Container>
      </section>


      <section className='activement-section section-spacing pb-5 pt-5'>

        <Container >
          <Row>
            <Col lg={3} md={6} sm={6} xs={6} className='pb-4 pb-lg-0'>
              <div className='activement-item d-flex align-align-items-center flex-column flex-sm-row'>

                <div className='number me-sm-3 me-0 mb-3 mb-sm-0'>
                  <h5>&nbsp;&nbsp;0</h5>
                </div>

                <div className='text'>
                  <p className='detail-text primary-clr'>
                    &nbsp;&nbsp;Years of <br/>&nbsp;&nbsp;Experience
                  </p>
                </div>

              </div>

            </Col>

            <Col lg={3} md={6} sm={6} xs={6}className='pb-4 pb-lg-0'>
              <div className='activement-item d-flex align-align-items-center flex-column flex-sm-row'>

                <div className='number me-sm-3 me-0 mb-3 mb-sm-0'>
                  <h5>10+</h5>
                </div>

                <div className='text'>
                  <p className='detail-text primary-clr'>
                    Project <br/> Completed
                  </p>
                </div>

              </div>

            </Col>

            <Col lg={3} md={6} sm={6} xs={6}className='pb-4 pb-lg-0'>
              <div className='activement-item d-flex align-align-items-center flex-column flex-sm-row'>

                <div className='number me-sm-3 me-0 mb-3 mb-sm-0'>
                  <h5>&nbsp;10+</h5>
                </div>

                <div className='text'>
                  <p className='detail-text primary-clr'>
                    &nbsp;&nbsp;Impress <br/> &nbsp;&nbsp;People
                  </p>
                </div>

              </div>

            </Col>

            <Col lg={3} md={6} sm={6} xs={6}className='pb-4 pb-lg-0'>
              <div className='activement-item d-flex align-align-items-center flex-column flex-sm-row'>

                <div className='number me-sm-3 me-0 mb-3 mb-sm-0'>
                  <h5>0</h5>
                </div>

                <div className='text'>
                  <p className='detail-text primary-clr'>
                    Years of <br/> Experience
                  </p>
                </div>

              </div>

            </Col>

          </Row>
        </Container>

        

      </section>

    </main>

    <Services/>

    <RecentWork/>

    <Career/>

    <Skills/>

    <Testimonials/>

    <Contact/>
    
    </>
  )
}

export default Home