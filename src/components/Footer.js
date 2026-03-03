import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <h4>Sattawat Boonmak</h4>
            <p>Frontend Developer | React | Node.js</p>
          </Col>

          <Col md={6} className="text-md-end">

            <p className="mt-3">© 2026 Sattawat Boonmak</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};