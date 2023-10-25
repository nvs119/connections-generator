import './App.css';
import Grid from './Grid.js';
import GenerateButton from "./Generate.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          here's a randomly generated connections game
        </p>
        <Grid />
        <GenerateButton />
      </header>
    </div>
  );
}

export default App;
