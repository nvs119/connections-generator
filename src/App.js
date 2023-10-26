import './App.css';
import Grid from './Grid.js';
import GenerateButton from "./Generate.js";

function App() {
  return (
    <div className="App">
      <header className="App-header" justifyContent="right">
        <p>
          here's a randomly generated connections game
        </p>
        <Grid 
        display="flex"
        justifyContent="center" 
        alignItems="center" />
        <GenerateButton />
      </header>
    </div>
  );
}

export default App;
