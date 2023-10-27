import './App.css';
import Grid from './Grid.js';
import CheckButton from "./Check.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          here's a randomly generated connections game
        </p>
        <Grid 
        display="flex"
        alignItems="center" />
        <CheckButton />
      </header>
    </div>
  );
}

export default App;
