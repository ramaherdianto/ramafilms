import { Container, Row, Col, Card, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center mb-5">Superhero</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark p-3">
                <Card.Title className="text-center">ANTMAN</Card.Title>
                <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                <Card.Text className="text-left">Last updated 5 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={avengerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark p-3">
                <Card.Title className="text-center">AVENGERS</Card.Title>
                <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                <Card.Text className="text-left">Last updated 5 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={batmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark p-3">
                <Card.Title className="text-center">BATMAN</Card.Title>
                <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                <Card.Text className="text-left">Last updated 5 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={robinhoodImage} alt="Dune Movies" className="images" />
              <div className="bg-dark p-3">
                <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                <Card.Text className="text-left">Last updated 5 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={spidermanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark p-3">
                <Card.Title className="text-center">SPIDERMAN</Card.Title>
                <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                <Card.Text className="text-left">Last updated 5 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark p-3">
                <Card.Title className="text-center">SUPERMAN</Card.Title>
                <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                <Card.Text className="text-left">Last updated 5 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
