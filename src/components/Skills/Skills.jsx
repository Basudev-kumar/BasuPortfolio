import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "../Skills/skills.css"
import { skillsData } from '../../utils/data'

function Skills() {
    return (
        <>

            <section className='skills section-spacing' id="skills" >

                <Container>
                    <Row>
                        <Col lg={7} md={10} sm={12} className='text-center m-auto'>
                            <h1 className='heading primary-clr'>
                                My Skills
                            </h1>
                            <p className=' mt-3 body_text'>
                                {" "}
                                We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
                            </p>
                        </Col>
                    </Row>

                    {/* update mt-3 to mt-4 */}
                    <Row className='mt-md-5 mt-4'>

                        {skillsData.map((skill, index) => {
                            return (
                                <Col lg={2} md={4} sm={6} key={index}>

                                    <Card className='text-center p-3 border-0'>
                                        <div className='img-container p-4 rounded-4'>
                                            <img src={skill.image} alt={skill.title} className='img-fluid m-auto' />
                                            <h5 className='mt-3 detail-text fw-bold'>
                                                {" "}
                                                {skill.percentage}
                                            </h5>
                                        </div>
                                        <Card.Body >
                                            <h3 className='detail-text primary-clr'>
                                                {" "}
                                                {skill.title}
                                            </h3>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            )
                        })}


                    </Row>




                    {/* <Row className="d-flex flex-nowrap justify-content-center overflow-auto mt-md-5 mt-4">
    {skillsData.map((skill, index) => (
        <Col key={index} className="flex-shrink-0 mx-2" style={{ width: "150px" }}>
            <Card className="text-center p-3 border-0">
                <div className="img-container p-4 rounded-4">
                    <img src={skill.image} alt={skill.title} className="img-fluid" />
                    <h5 className="mt-3 detail-text fw-bold">{skill.percentage}</h5>
                </div>
                <Card.Body>
                    <h3 className="detail-text primary-clr">{skill.title}</h3>
                </Card.Body>
            </Card>
        </Col>
    ))}
</Row> */}



                    <Col md={12} className='mt-4'></Col>

                </Container>
            </section>

        </>
    )
}

export default Skills