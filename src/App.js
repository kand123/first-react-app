
import './App.css';
import FilmCard from './pages/FilmCard'
import RatingsButton from './components/RatingsButton'
import {GhibliContextProvider} from './contexts/GhibliContext'
// import { Route, Switch, Redirect } from 'react-router-dom'
// import Welcome from './pages/Welcome'

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
