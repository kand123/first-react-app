
import './App.css';
import FilmCard from './pages/FilmCard'
import RatingsButton from './components/RatingsButton'
import {GhibliContextProvider} from './contexts/GhibliContext'
import { Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome'
import MenuBar from './components/MenuBar'
import NotFound from './pages/NotFound'
import FilmDetails from './pages/FilmDetails'

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
      <Route path="/films" exact>
      <h1>Studio Ghibli Films</h1>
      <RatingsButton/>
        <FilmCard/>
        
        </Route>
<Route path="/films/:id" exact>
  {/* <h1>Film Details</h1> */}
  <FilmDetails/>
</Route>
      <Route path="*">
        <NotFound/>
        </Route>
      
      <FilmCard /> 
      </Switch>
      </GhibliContextProvider>


    </div>
   
  );
}

export default App;
