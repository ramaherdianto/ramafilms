import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container>
        <Row>
          <Col>
            <div className="content-jumbotron">
              <h1>
                Nonton Gratis <br /> Gak Pake Karcis
              </h1>
              <Button className="btn btn-dark mt-4">Lihat Film</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
