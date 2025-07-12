import React, { useEffect , useRef, useState } from 'react'
import "../Services/services.css"
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { serviceData } from '../../utils/data'
import {hover,motion} from 'framer-motion'

function Services() {

    const [hoverIndex, setHoverIndex] = useState(0)      
    const [itemDimensitions, setItemDimensitions] = useState([])  // store dimensions of each service item

    const parentRef=useRef(null) // Ref for the parent container
    const listItemsRef=useRef([]) // Ref for each service item

    // update dimensions when the components mounts or hoverIndex changes
    useEffect(() => {
        if (parentRef.current) {
          const parentRect = parentRef.current.getBoundingClientRect(); // Get parent container position
      
          const dimensions = listItemsRef.current.map((item) => {
            if (item) {
              const rect = item.getBoundingClientRect();
              return {
                height: rect.height, // Store item height
                left: rect.left - parentRect.left, // Adjust left position relative to parent
                top: rect.top - parentRect.top, // Adjust top position relative to parent
              };
            }
            return null;
          });
      
          setItemDimensitions(dimensions.filter(Boolean)); // Remove null values

        //   setItemDimensitions(dimensions)
        }
      }, [hoverIndex]); // Run effect when hoverIndex changes
      

  return (
    <>
    
    <section className='services light-bg section-spacing' id="services" >

        <Container>
            <Row>
                <Col md='12' className='text-center'>
                    <h1 className='heading primary-clr'>
                        My Quality
                    </h1>
                    <p className='body_text'>
                        We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
                    </p>
                </Col>

                <Col md={12} className='mt-4'>
                {/* Services list */}
                    <div className='position-relative' ref={parentRef}>
                        <ListGroup as="ol" className='rounded-0 border-0'>

                            {serviceData.map((service,index)=>{
                                return (

                            

                            <ListGroup.Item as="li" className={`d-flex flex-lg-row flex-column align-items-center position-relative py-4
                            ${hoverIndex===index? 'current-active':''}
                            `}
                             key={index}
                            ref={(el)=>(listItemsRef.current[index] =el)}
                            onMouseEnter={()=>setHoverIndex(index)}  // set hover index on mouse enter
                            onMouseLeave={()=>setHoverIndex(0)}  // reset hover index on mouse leave
                            >

                                {/* service title */}

                                <div className='flex-grow-2 d-flex align-items-center service-title'>
                                    <span className='detail_text fw-bold me-2 primary-clr'>
                                        0{service.id}
                                    </span>
                                    <h1 className='fw-bold heading ms-2 primary-clr'>
                                        {service.title} 
                                    </h1>
                                </div>

                                {/* service description */}
                                <span className='flex-row-2 service-des body-text'>
                                    {service.description}
                                </span>

                                 {/* hover indicator icon */}

                                 <div className='position-absolute service-link'>
                                    {
                                        hoverIndex===index ? (<i className='bi bi-arrow-up-right h4'></i>):(<i className='bi bi-arrow-down-right h4'></i>)
                                    }
                                    

                                 </div>
                            </ListGroup.Item>


                            )
                            })}

                        </ListGroup>

                        <motion.div
                        className="active-bg wow fadeInUp"
                        date-wow-delay='.6s'
                        initial={{visibility:"hidden" , y:10}}
                        animate={{visibility:"visible" , y:0}}
                        exit={{visibility:"visible" , y:10}}
                        style={{
                            position:'absolute',
                            height:itemDimensitions[hoverIndex]?.height||"100px",
                            left:itemDimensitions[hoverIndex]?.left||0,
                            top:itemDimensitions[hoverIndex]?.top||0,
                            zIndex:1,
                        }}
                        >
                            
                        </motion.div> 

                    </div>
                </Col>
            </Row>
        </Container>

    </section>
    
    
    </>
  )
}

export default Services