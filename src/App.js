import "./App.css";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
import Superhero from "./components/Superhero";
import "./style/Page.css";
function App() {
  return (
    <div>
      <div className="myBg border">
        <NavigationBar />
        <Intro />
      </div>

      <div className="section-Superhero" id="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
