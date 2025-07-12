// import React from 'react'
// import { Col, Container, Row, FloatingLabel, Form } from 'react-bootstrap'
// import "./contact.css"



// function Contact() {
//   return (
//     <>
    
//         <section className='contact-section section-spacing' id="contact">
//             <Container>
//                 <Row className='align-items-center'>
//                     <Col md={6}>
//                     <div className='contact-form'>
//                         <div className='text-center'>
//                             <h1 className='heading primary-clr mb-3'>
//                                 Let's work Together
//                             </h1>
//                             <p className='body-text'>
//                                 I design and code beautifully simple things and i love what i do. Just simple like that!
//                             </p>
//                         </div>
                    
                    
                

//                         <Row className='mt-4'>
                            
//                             <Col md={6} className='mb-4'>
//                             <FloatingLabel controlId="fname" label="First name">
//                             <Form.Control type="text" placeholder="First Name" />
//                             </FloatingLabel>
//                             </Col>

//                             <Col md={6} className='mb-4'>
//                             <FloatingLabel controlId="lname" label="Last name">
//                             <Form.Control type="text" placeholder="Last Name" />
//                             </FloatingLabel>
//                             </Col>

//                             <Col md={12} className='mb-4'>
//                             <FloatingLabel
//                             controlId="email"
//                             label="Email address"
                            
//                             >
//                             <Form.Control type="email" placeholder="name@example.com" />
//                             </FloatingLabel>
//                             </Col>

//                             <Col md={12} className='mb-4'>
//                             <FloatingLabel controlId="floatingSelect" label="select an option">

//                             <Form.Select aria-label="">
//                                 <option disabled>Choose Service</option>
//                                 <option value="1">Full-Stack Web Development</option>
//                                 <option value="2">Frontend Development</option>
//                                 <option value="3">Backend Development</option>
//                                 <option value="4">Database Design & Optimization</option>
//                             </Form.Select>

//                             </FloatingLabel>
//                             </Col>

//                             <Col md={12} className='mb-4'>
//                             <FloatingLabel controlId="floatingTextarea2" label="Comments">
//                             <Form.Control
//                             as="textarea"
//                             placeholder="Leave a comment here"
//                             style={{ height: '125px' }}
//                             />
//                             </FloatingLabel>
//                             </Col>

//                             <div className='text-start'>
//                                 <button className='primary-btn'>Send Message</button>
//                             </div>

//                         </Row>

//                     </div>

//                     </Col>

//                     <Col md={5} className='offset-md-1 offset-0 mt-4 mt-md-0'>
//                         <div className='d-flex flex-column px-0'>
//                             <ul className='m-0 p-0 contact-information'>
//                                 <li className='d-flex align-items-center justify-content-start mb-4 mt-md-5'>

//                                     <span className='d-flex align-items-center justify-content-center rounded-circle me-3 fs-4 icon-box'>
//                                         <i className='bi bi-telephone'></i>
//                                     </span>

//                                     <span className=''>
//                                         <span className='body-text mb-3 d-block'>Phone
//                                         </span>
//                                         <span className='detail-text mb-3'>+91 XXXXXXXXXX
//                                         </span>
//                                     </span>

//                                 </li>



//                                 <li className='d-flex align-items-center justify-content-start mb-4 mt-md-5'>

//                                     <span className='d-flex align-items-center justify-content-center rounded-circle me-3 fs-4 icon-box'>
//                                         <i className='bi bi-envelope'></i>
//                                     </span>

//                                     <span className=''>
//                                         <span className='body-text mb-3 d-block'>Email
//                                         </span>
//                                         <span className='detail-text mb-3'>vasu264kumar@gmail.com
//                                         </span>
//                                     </span>

//                                 </li>


//                                 <li className='d-flex align-items-center justify-content-start mb-4 mt-md-5'>

//                                     <span className='d-flex align-items-center justify-content-center rounded-circle me-3 fs-4 icon-box'>
//                                         <i className='bi bi-geo-alt'></i>
//                                     </span>

//                                     <span className=''>
//                                         <span className='body-text mb-3 d-block'>Address 
//                                         </span>
//                                         <span className='detail-text mb-3'>Mohali , <br/>
//                                         Punjab (140301)
//                                         </span>
//                                     </span>

//                                 </li>
//                             </ul>
//                         </div>
//                     </Col>

//                 </Row>
//             </Container>
//         </section>
    
//     </>
//   )
// }

// export default Contact




import React, { useState } from 'react';
import { Col, Container, Row, FloatingLabel, Form, Alert } from 'react-bootstrap';
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Form validation
      if (!formData.email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      const response = await fetch('https://formspree.io/f/xeokyykk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          service: formData.service,
          message: formData.message
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'There was an error sending your message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='contact-section section-spacing' id="contact">
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <div className='contact-form'>
              <div className='text-center'>
                <h1 className='heading primary-clr mb-3'>
                  Let's work Together
                </h1>
                <p className='body-text'>
                  I design and code beautifully simple things and I love what I do.
                </p>
              </div>

              {submitStatus === 'success' && (
                <Alert variant="success" className="mt-3">
                  Thank you! Your message has been sent successfully.
                </Alert>
              )}

              {submitStatus === 'error' && (
                <Alert variant="danger" className="mt-3">
                  {errorMessage}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className='mt-4'>
                  <Col md={6} className='mb-4'>
                    <FloatingLabel controlId="fname" label="First name">
                      <Form.Control 
                        type="text" 
                        placeholder="First Name" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md={6} className='mb-4'>
                    <FloatingLabel controlId="lname" label="Last name">
                      <Form.Control 
                        type="text" 
                        placeholder="Last Name" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md={12} className='mb-4'>
                    <FloatingLabel controlId="email" label="Email address">
                      <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md={12} className='mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Select an option">
                      <Form.Select 
                        aria-label="Select service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Choose Service</option>
                        <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                        <option value="Frontend Development">Frontend Development</option>
                        <option value="Backend Development">Backend Development</option>
                        <option value="Database Design & Optimization">Database Design & Optimization</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>

                  <Col md={12} className='mb-4'>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '125px' }}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </FloatingLabel>
                  </Col>

                  <div className='text-start'>
                    <button 
                      className='primary-btn' 
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </div>
                </Row>
              </Form>
            </div>
          </Col>

          <Col md={5} className='offset-md-1 offset-0 mt-4 mt-md-0'>
            <div className='d-flex flex-column px-0'>
              <ul className='m-0 p-0 contact-information'>
                <li className='d-flex align-items-center justify-content-start mb-4 mt-md-5'>
                  <span className='d-flex align-items-center justify-content-center rounded-circle me-3 fs-4 icon-box'>
                    <i className='bi bi-telephone'></i>
                  </span>
                  <span className=''>
                    <span className='body-text mb-3 d-block'>Phone</span>
                    <span className='detail-text mb-3'>+91 XXXXXXXXXX</span>
                  </span>
                </li>

                <li className='d-flex align-items-center justify-content-start mb-4 mt-md-5'>
                  <span className='d-flex align-items-center justify-content-center rounded-circle me-3 fs-4 icon-box'>
                    <i className='bi bi-envelope'></i>
                  </span>
                  <span className=''>
                    <span className='body-text mb-3 d-block'>Email</span>
                    <span className='detail-text mb-3'>your@gmail.com</span>
                  </span>
                </li>

                <li className='d-flex align-items-center justify-content-start mb-4 mt-md-5'>
                  <span className='d-flex align-items-center justify-content-center rounded-circle me-3 fs-4 icon-box'>
                    <i className='bi bi-geo-alt'></i>
                  </span>
                  <span className=''>
                    <span className='body-text mb-3 d-block'>Address</span>
                    <span className='detail-text mb-3'>Mohali <br/>Punjab (140301)</span>
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;