import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Login from './Login';
import Gallery from './Gallery';
import Register from './Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={gal}/>
          <Route path="/Home" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Gallery" component={Gallery}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
        </Switch>
      </div>
   </Router>
  );
}

const gal= () =>(
  <div>
    <h1>Gallery</h1>
  </div>
)

export default App;
