// import React, { useEffect, useRef, useState } from 'react'
// import "../RecentWork/recent-work.css"
// import { Col, Container, Nav, Row } from 'react-bootstrap'
// import { recentWorks, recentWorksCats, serviceData } from '../../utils/data'
// import { motion } from 'framer-motion'

// function RecentWork() {

//     const [activeIndex, setActiveIndex] = useState(0); // Default category
    
//     // when category is clicked , update the active index
//     const handleSelect = (eventKey) => {
//         setActiveIndex(Number(eventKey));
//         // alert(`selected ${eventKey}`)
//     }

//     // show all projects if "All" is selected , otherwise show filtered projects

//     const filteredWorks=activeIndex===0?recentWorks:recentWorks.filter((work)=>work.catId === activeIndex)

//     return (
//         <>

//             {activeIndex}

//             <section className='recent-work section-spacing' id="works" >

//                 <Container>
//                     <Row>
//                         {/* Heading & description */}
//                         <Col md='12' className='text-center'>
//                             <h1 className='heading primary-clr'>
//                                 My Recent Work
//                             </h1>
//                             <p className='body_text'>
//                                 We put your ideas and wishes in the form of a unique web project that inspires you and you customers.
//                             </p>
//                         </Col>

//                         {/* category navigation menu */}
//                         <Col md={12} className='mt-4'>

//                             <div className='position-relative d-flex justify-content-center'>

//                                 <Nav variant="pills" activeKey={activeIndex} onSelect={handleSelect} >
//                                     {recentWorksCats.map((category, index) => {
//                                         return (
//                                             <Nav.Item key={index}>
//                                                 <Nav.Link eventKey={index.toString()}
//                                                 className='detail-text px-md-4 px-3'
//                                                 >
//                                                     {category}
//                                                 </Nav.Link>
//                                             </Nav.Item>
//                                         );
//                                     })}
//                                 </Nav>

//                                 {/* display the project cards based on the selected category */}

//                                 <Row className='mt-1 g-5'>
//                                     {filteredWorks.map((project,index)=>{
//                                         return(
//                                             <Col md={6} sm={12} index={index}>
//                                                 <div className='service-item position-relative p-3 p-md-5 rounded'>
//                                                     {/* project img */}
//                                                     <img src={project.image} className='img-fluid' alt={project.title} />

//                                                     {/* project title and description */}
//                                                     <div className='service-des'>
//                                                         <h1 className='heading text-white fw-bold primary-clr'>{project.title}</h1>
//                                                         <p className='body-detail text-white'>{project.description}</p>
//                                                     </div>
                                                    
//                                                 </div>
//                                             </Col>
//                                         )
//                                     })}
                                    
//                                 </Row>

//                             </div>

//                         </Col>
//                     </Row>
//                 </Container>
//             </section>


//         </>
//     )
// }

// export default RecentWork

















import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Added Button to imports
import { AnimatePresence, motion } from "framer-motion";
import { recentWorks, recentWorksCategories } from '../../utils/data';
import "../RecentWork/recent-work.css";


function RecentWork() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [navItemDimensions, setNavItemDimensions] = useState([]);
    const newItemRef = useRef([]);

    useEffect(() => {
        const itemDimensions = newItemRef.current.map((item) => ({
            top: item?.offsetTop || 0,
            height: item?.offsetHeight || 0,
            width: item?.offsetWidth || 0,
            left: item?.offsetLeft || 0,
        }));
        setNavItemDimensions(itemDimensions);
    }, [activeIndex]);

    const filteredWorks = activeIndex === 0 
        ? recentWorks 
        : recentWorks.filter((work) => work.categoryIds.includes(activeIndex));

    return (
        <section id="works" className="recent-work section-spacing pt-4 pb-4">
            <Container>
                <Row className="mb-5">
                    <Col md={12} className="text-center">
                        <h1 className="heading primary-clr mb-3">My Recent Work</h1>
                        <p className="body-text">
                            We put your ideas and wishes in the form of a unique web project that inspires you and your customers.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className="mb-5">
                        <div className="position-relative d-flex justify-content-center">
                            <div className="py-2 rounded-pill px-3 px-md-5 light-bg">
                                <div className="position-relative d-flex flex-wrap justify-content-center">
                                    {recentWorksCategories.map((category, index) => (
                                        <button
                                            key={category.id}
                                            ref={(el) => (newItemRef.current[index] = el)}
                                            onClick={() => setActiveIndex(category.id)}
                                            className={`btn btn-link text-decoration-none mx-2 px-3 py-2 rounded-pill ${
                                                activeIndex === category.id 
                                                    ? 'text-white ' 
                                                    : 'text-#8750F9 dark:text-white'
                                            }`}
                                        >
                                            {category.name}
                                        </button>
                                    ))}

                                    <motion.div
                                        className="active-bg rounded-pill"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            position: 'absolute',
                                            height: navItemDimensions[activeIndex]?.height || 40,
                                            width: navItemDimensions[activeIndex]?.width || 50,
                                            left: navItemDimensions[activeIndex]?.left || 0,
                                            top: navItemDimensions[activeIndex]?.top || 0,
                                            zIndex: 1,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="g-4">
                    <AnimatePresence>
                        {filteredWorks.map((project) => (
                            <Col md={6} key={project.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="project-card position-relative overflow-hidden rounded">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="img-fluid w-100 project-image"
                                        />
                                        
                                        <div className="project-overlay">
                                            <h3 className="project-title">{project.title}</h3>
                                            <p className="project-description">{project.description}</p>
                                            
                                            {project.technologies && (
                                                <div className="project-technologies mb-3">
                                                    {project.technologies.map((tech) => (
                                                        <span key={tech} className="technology-badge">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                            
                                            <div className="project-links d-flex gap-2">
                                                {project.demoUrl && (
                                                    <Button 
                                                        as="a" 
                                                        href={project.demoUrl} 
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        variant="outline-light"
                                                        className="rounded-pill"
                                                    >
                                                        Live Demo
                                                    </Button>
                                                )}
                                                {project.codeUrl && (
                                                    <Button 
                                                        as="a" 
                                                        href={project.codeUrl} 
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        variant="outline-light"
                                                        className="rounded-pill"
                                                    >
                                                        View Code
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </AnimatePresence>
                </Row>
            </Container>
        </section>
    );
}

export default RecentWork;



















// import React, { useEffect, useRef, useState } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { AnimatePresence, motion } from "framer-motion";
// import { recentWorks, recentWorksCategories } from '../../utils/data';
// import "../RecentWork/recent-work.css";

// function RecentWork() {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [navItemDimensions, setNavItemDimensions] = useState([]);
//     const newItemRef = useRef([]);

//     useEffect(() => {
//         const itemDimensions = newItemRef.current.map((item) => ({
//             top: item?.offsetTop || 0,
//             height: item?.offsetHeight || 0,
//             width: item?.offsetWidth || 0,
//             left: item?.offsetLeft || 0,
//         }));
//         setNavItemDimensions(itemDimensions);
//     }, [activeIndex]);

//     const filteredWorks = activeIndex === 0 
//         ? recentWorks 
//         : recentWorks.filter((work) => work.categoryIds.includes(activeIndex));

//     return (
//         <section id="works" className="recent-work section-spacing py-5">
//             <Container>
//                 <Row className="mb-5">
//                     <Col xs={12} className="text-center">
//                         <h1 className="heading primary-clr mb-3">My Recent Work</h1>
//                         <p className="body-text mx-auto" style={{ maxWidth: '700px' }}>
//                             We put your ideas and wishes in the form of unique web projects that inspire.
//                         </p>
//                     </Col>
//                 </Row>

//                 <Row className="justify-content-center mb-5">
//                     <Col xs={12} className="d-flex justify-content-center">
//                         <div className="position-relative">
//                             <div className="py-2 rounded-pill px-3 px-md-5 light-bg">
//                                 <div className="d-flex flex-wrap justify-content-center position-relative">
//                                     {recentWorksCategories.map((category, index) => (
//                                         <button
//                                             key={category.id}
//                                             ref={(el) => (newItemRef.current[index] = el)}
//                                             onClick={() => setActiveIndex(category.id)}
//                                             className={`btn btn-link text-decoration-none mx-1 mx-md-2 px-3 py-2 rounded-pill ${
//                                                 activeIndex === category.id 
//                                                     ? 'text-white' 
//                                                     : 'text-dark dark:text-white'
//                                             }`}
//                                         >
//                                             {category.name}
//                                         </button>
//                                     ))}
//                                     <motion.div
//                                         className="active-bg rounded-pill"
//                                         initial={{ opacity: 0, y: 10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                         style={{
//                                             position: 'absolute',
//                                             height: navItemDimensions[activeIndex]?.height || 40,
//                                             width: navItemDimensions[activeIndex]?.width || 50,
//                                             left: navItemDimensions[activeIndex]?.left || 0,
//                                             top: navItemDimensions[activeIndex]?.top || 0,
//                                             zIndex: 1,
//                                         }}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>

//                 <Row className="g-4 justify-content-center">
//                     <AnimatePresence>
//                         {filteredWorks.map((project) => (
//                             <Col key={project.id} xs={12} sm={6} lg={4} className="d-flex">
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     exit={{ opacity: 0, y: 20 }}
//                                     transition={{ duration: 0.5 }}
//                                     className="w-100"
//                                 >
//                                     <div className="project-card h-100 d-flex flex-column">
//                                         <div className="position-relative overflow-hidden flex-grow-1">
//                                             <img 
//                                                 src={project.image} 
//                                                 alt={project.title}
//                                                 className="img-fluid w-100 h-100 object-cover"
//                                                 style={{ minHeight: '250px' }}
//                                                 loading="lazy"
//                                             />
//                                             <div className="project-overlay">
//                                                 <h3 className="project-title">{project.title}</h3>
//                                                 <p className="project-description">{project.description}</p>
//                                                 {project.technologies && (
//                                                     <div className="project-technologies mb-3">
//                                                         {project.technologies.map((tech) => (
//                                                             <span key={tech} className="technology-badge">
//                                                                 {tech}
//                                                             </span>
//                                                         ))}
//                                                     </div>
//                                                 )}
//                                                 <div className="project-links d-flex gap-2 flex-wrap">
//                                                     {project.demoUrl && (
//                                                         <Button 
//                                                             as="a" 
//                                                             href={project.demoUrl} 
//                                                             target="_blank"
//                                                             rel="noopener noreferrer"
//                                                             variant="outline-light"
//                                                             className="rounded-pill"
//                                                             size="sm"
//                                                         >
//                                                             Live Demo
//                                                         </Button>
//                                                     )}
//                                                     {project.codeUrl && (
//                                                         <Button 
//                                                             as="a" 
//                                                             href={project.codeUrl} 
//                                                             target="_blank"
//                                                             rel="noopener noreferrer"
//                                                             variant="outline-light"
//                                                             className="rounded-pill"
//                                                             size="sm"
//                                                         >
//                                                             View Code
//                                                         </Button>
//                                                     )}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             </Col>
//                         ))}
//                     </AnimatePresence>
//                 </Row>
//             </Container>
//         </section>
//     );
// }

// export default RecentWork;