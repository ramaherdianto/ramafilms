import { Container } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";

const Superhero = () => {
   const superheroMovies = [
      {
         srcGambar: antmanImage,
         movieName: "Antman",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto asperiores doloribus, dolores a vitae laborum?",
      },
   ];

   return (
      <div>
         {/* <img src={antmanImage} alt="" srcset="" /> */}
         {superheroMovies.map((superheroMovie) => {
            return (
               <div>
                  <Container>
                     <img src={superheroMovie.srcGambar} alt="" />
                     <h1>{superheroMovie.movieName}</h1>
                     <p>{superheroMovie.description}</p>
                  </Container>
               </div>
            );
         })}
      </div>
   );
};

export default Superhero;
