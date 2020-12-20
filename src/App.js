import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} 
from 'react-router-dom';
import React from 'react';
import './App.css';

const HTML = () => <h1>Welcome to the html Course </h1>;
const  CSS = () => <h1>Welcome to the css course</h1>;
const ECMASCRIPT = () => <h1>Welcome to the ecmascript course</h1>;
const NODE = () => <h1>Welcome to the node course</h1>;
const REACT = () => <h1>Welcome to the react course</h1>;
const App = () => (
  
  <Router>
    <div>
    <h2 className = "App-header">Select the course according to your choice</h2>
      <Link to="/" className = "App-link">HTML</Link >{' '}
      <Link to="/css"className = "App-link">CSS</Link>{' '}
      <Link to="/ecmascript"className = "App-link">ECMASCRIPT</Link>{' '}
      <Link to="/node"className = "App-link">NODE</Link>{' '}
      <Link to="/react"className = "App-link">REACT</Link>
      
      <Switch>
        <Route exact path="/" component={HTML} />
        <Route exact path="/css" component={CSS} />
        <Route exact path="/ecmascript" component={ECMASCRIPT} />
        <Route exact path="/node" component={NODE} />
        <Route exact path="/react" component={REACT} />
        
      </Switch>
    </div>
  </Router>
);
export default App;