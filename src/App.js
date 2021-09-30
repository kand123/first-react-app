
import './App.css';
import FilmCard from './components/FilmCard'
// import {ThemeProvider} from '@material-ui/core'
// import theme from './theme'
import RatingsButton from './components/RatingsButton'

function App() {

  return (
   
    <div className="main"> 
      <h1>Studio Ghibli Films</h1>
      <RatingsButton/>
      <FilmCard />
    
    </div>
   
  );
}

export default App;
