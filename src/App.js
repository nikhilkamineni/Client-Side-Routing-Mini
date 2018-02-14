import React from 'react';
import './App.css';
// import Navigation from './components/Navigation';
// import { Home, About, Contact} from './components';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="navlink--active" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="navlink--active">About</NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="navlink--active">Products</NavLink>
        </li>
        <li>
          <NavLink to="/greet" activeClassName="navlink--active">Greeter</NavLink>
        </li>
      </ul>

      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/greet/:first/:last" component={Greeter} />
    </div>
  </Router>
)

function Home() {
  return (
    <div>
      <h1>Home Component</h1>
      <p>This is the Home Component</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Component</h1>
      <p>This is the About Component</p>
    </div>
  );
 }

function Products() {
  return (
    <div>
      <h1>Product Component</h1>
      <ul>
        <li>
          <p>This is the Movies Component</p>
          <NavLink to="/products/movies">Movies</NavLink>
        </li>
        <li>
          <p>This is the Music Component</p>
          <NavLink to="/products/music">Music</NavLink>
        </li>
      </ul>
      <Route path="products/movies" component={Movies} />
      <Route path="products/music" component={Music} />
    </div>
  );
 }

 function Movies() {
  return (
    <div>
      <h1>About Component</h1>
      <p>This is the About Component</p>
    </div>
  );
 }

function Music() {
  return (
    <div>
      <h1>About Component</h1>
      <p>This is the About Component</p>
    </div>
  );
 }

 function Greeter(props) {
   console.log('greeter props', props);
   return (
     <div>
       <h3>Hello {props.match.params.first} {props.match.params.last}</h3>
     </div>
   );
 }

export default App;
