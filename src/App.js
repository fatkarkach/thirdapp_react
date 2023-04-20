import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import './App.css';
import { Component } from 'react';
import Home from './components/Home'
import About from './components/About'
import Details from './components/Details';
import Profil from './components/Profil';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Alltuto from './components/Alltuto';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <NavLink to="/" activeClassName="active" exact  style={{margin:"20px"}}>Home</NavLink>
          <NavLink to="/about" activeClassName="active" exact style={{margin:"20px"}}>About</NavLink>
          <NavLink to="/details" activeClassName="active" exact style={{margin:"20px"}}>details</NavLink>
          <NavLink to="/details/profil" activeClassName="active" exact style={{margin:"20px"}}>Profil</NavLink>
          <NavLink to="/tutoriels" activeClassName="active" exact style={{margin:"20px"}}>Tutoriel</NavLink>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/details" exact component={Details}/>
            <Route path="/details/profil" exact component={Profil} />
            <Route path="/tutoriels" exact component={Alltuto} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;