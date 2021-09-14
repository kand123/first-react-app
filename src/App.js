
import './App.css';
import FilmCard from './components/FilmCard'
import {ThemeProvider} from '@material-ui/core'
import theme from './theme'


function App() {

  return (
    <ThemeProvider theme={theme}>
    <div>
      <h1>Studio Ghibli Films</h1>
      <FilmCard/>

    </div>
    </ThemeProvider>
  );
}

export default App;
