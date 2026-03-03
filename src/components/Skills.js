import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import github from '../assets/img/github.png';
import react from "../assets/img/React-icon.svg.png";
import mongoDB from "../assets/img/mongodb.png";
import Nodejpg from "../assets/img/Node.js_logo.svg.webp";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max:400, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max:3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max:1024, min:464},
            items: 2
        },
        mobile: {
            breakpoint: { max:464, min:0},
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p></p>{/*ใส่คำอธิบายตรงสกิล*/}
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h3>Intermediate</h3>
                            </div>
                            <div className="item">
                                <img src={Nodejpg} alt="Image" />
                                <h3>Intermediate</h3>
                            </div>
                            <div className="item">
                                <img src={github} alt="Image" />
                                <h3>Beginner</h3>
                            </div>
                            <div className="item">
                                <img src={mongoDB} alt="Image" />
                                <h3>Beginner</h3>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}