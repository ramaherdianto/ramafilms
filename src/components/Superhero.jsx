
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  const superheroMovies = [
    {
      srcGambar: antmanImage,
      movieName: "ANTMAN",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto asperiores doloribus, dolores a vitae laborum?",
    },
    {
      srcGambar: avengerImage,
      movieName: "AVENGERS",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto asperiores doloribus, dolores a vitae laborum?",
    },
    {
      srcGambar: batmanImage,
      movieName: "BATMAN",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto asperiores doloribus, dolores a vitae laborum?",
    },
    {
      srcGambar: robinhoodImage,
      movieName: "ROBIN HOOD",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto asperiores doloribus, dolores a vitae laborum?",
    },
    {
      srcGambar: spidermanImage,
      movieName: "SPIDERMAN",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto asperiores doloribus, dolores a vitae laborum?",
    },
    {
      srcGambar: supermanImage,
      movieName: "SUPERMAN",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto asperiores doloribus, dolores a vitae laborum?",
    },
  ];


  return (
    <div>
      <Container>
        <h1 className="text-center mb-5">Superhero</h1>
        <Row>
          {superheroMovies.map((superheroMovie) => {
            return (
              <Col md={4} className="movieWrapper" id="superhero">
                <Card className="movieImage">
                  <Image src={superheroMovie.srcGambar} alt="Dune Movies" className="images" />
                  <div className="bg-dark p-3">
                    <Card.Title className="text-center">{superheroMovie.movieName}</Card.Title>
                    <Card.Text className="text-left">{superheroMovie.description}</Card.Text>
                    <Card.Text className="text-left">Last updated 5 mins ago</Card.Text>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
