
import './App.css';
import FilmCard from './components/FilmCard'
// import {ThemeProvider} from '@material-ui/core'
// import theme from './theme'
import RatingsButton from './components/RatingsButton'
import {GhibliContextProvider} from './contexts/GhibliContext'

function App() {

  return (
   
    <div className="main"> 
      <h1>Studio Ghibli Films</h1>
      <GhibliContextProvider>
      <RatingsButton/>
      <FilmCard />
      </GhibliContextProvider>
    
    </div>
   
  );
}

export default App;
