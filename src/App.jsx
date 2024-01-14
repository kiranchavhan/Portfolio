import './App.css';
// import Checkpoint from './milestone/checkpoint';
// import Typewriter from "typewriter-effect";
import Landing from './Landing/Landing'
function App() {
  return (
    <div className="App">
      {/* <Checkpoint title={"HighSchool Education"} description={"I did my High school from APS kirkee"}/>
      <Typewriter
            className="description"
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter.changeDelay(50).typeString("Software Engineer").start();
            }}
          /> */}
          <Landing/>
    </div>
  );
}

export default App;
