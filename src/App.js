import './App.css';
import Grid from './Grid.js';

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
      </header>
    </div>
  );
}

export default App;
