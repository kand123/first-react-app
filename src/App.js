
import './App.css';
import FilmCard from './pages/FilmCard'
import RatingsButton from './components/RatingsButton'
import {GhibliContextProvider} from './contexts/GhibliContext'
import { Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome'
import MenuBar from './components/MenuBar'

function App() {

  return (
   

    <div className="main"> 
    <MenuBar/>
      
      <GhibliContextProvider>
        
      
    <Switch>
<Route path="/" exact>
  <Redirect to="/welcome" />
  </Route>
  <Route path="/welcome">
    <Welcome/>
    </Route>
      <Route path="/films">
      <h1>Studio Ghibli Films</h1>
      <RatingsButton/>
        <FilmCard/>
        
        </Route>
      <Route path="*">
        <h1>Page Not Found</h1>
        </Route>
      
      <FilmCard /> 
      </Switch>
      </GhibliContextProvider>


    </div>
   
  );
}

export default App;
