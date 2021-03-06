
import './App.css';
import FilmCard from './pages/FilmCard'
// import RatingsButton from './components/RatingsButton'
import {GhibliContextProvider} from './contexts/GhibliContext'
import { Route, Switch} from 'react-router-dom'
import Welcome from './pages/Welcome'
import MenuBar from './components/MenuBar'
import NotFound from './pages/NotFound'
import FilmDetails from './pages/FilmDetails'
import LoginForm from './components/login/LoginForm'
import SignupForm from './components/login/SignupForm'
import NetlifyIdentityContext from 'react-netlify-identity-gotrue'


function App() {
  
  return (
   

    <div className="main"> 
    <NetlifyIdentityContext url='https://mystudioghiblifilms.netlify.app'>
    
    <MenuBar/>
      <GhibliContextProvider>
      
      
    <Switch>
<Route path="/" exact>
  <Welcome/>
  </Route>
  <Route path="/welcome">
    <Welcome/>
    </Route>
      <Route path="/films" exact>
        
      <h1 className="font-link" style={{fontSize:'2rem'}}>Ghibli Films</h1>

     



      {/* <RatingsButton/> */}
        <FilmCard/>
        
        </Route>
<Route path="/films/:id" exact>
  {/* <h1>Film Details</h1> */}
  <FilmDetails/>
</Route>

<Route path="/login">
  <LoginForm/>
  </Route>

  <Route path="/signup">
    <SignupForm/>
    </Route>

      <Route path="*">
        <NotFound/>
        </Route>
      
      <FilmCard /> 
      </Switch>
      </GhibliContextProvider>
</NetlifyIdentityContext>

    </div>
   
  );
}

export default App;
