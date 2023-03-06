import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "16px",
      height: "18px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Grommet>
  );
}

export default App;
