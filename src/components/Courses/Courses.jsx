import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Courses = () => {
  const { courses } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="courses">
      <Container>
        <div className="course-wrapper">
          <Title title="Relevant Coursework" />
          {courses.map((course) => {
            const { title, info, info2, info3, id } = course;

            return (
              <Row key={id}>
                <Col>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="course-wrapper__text">
                      <h3 className="course-wrapper__text-title">{title || 'Course Title'}</h3>
                      <div>
                        <p> {info || ''}</p>
                        <p className="mb-4">{info2 || ''}</p>

                        <p className="mb-4">{info3 || ''}</p>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Courses;
