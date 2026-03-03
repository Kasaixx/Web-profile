import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headere from "../assets/img/headere.jpg";

export const Banner = () => {
    const [LoopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Desinger", "Mobile App Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = LoopNum % toRotate.length;
        let fullText = toRotate[i];
        let UpdateText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

        setText(UpdateText);

        if (isDeleting){
            setDelta(100)
        }
        
        if (!isDeleting && UpdateText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex-1);
            setDelta(period);
        }else if(isDeleting && UpdateText === '') {
            setIsDeleting(false);
            setLoopNum(prev => prev+1);
            setIndex(1);
            setDelta(300);
        } else {
            setIndex(prevIndex => prevIndex +1)
        }

    }


        return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Profile</span>
                        <h1>{`Sattawat Boonmak`}</h1>
                        <h2 className="typing">
                            <span className="wrap">{text}</span>
                        </h2>
                        <p>I am a Computer Science student with a strong interest in web development and software engineering. Although I am still building my experience, I am highly motivated to learn and improve my technical skills. I am eager to gain hands-on experience through an internship opportunity and contribute to a professional development team.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headere} alt="Headder Img" className="img-fluid"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}