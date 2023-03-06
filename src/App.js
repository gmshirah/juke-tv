import { Grommet } from 'grommet';
import Search from './Search';

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
      <Search />
    </Grommet>
  );
}

export default App;
