
import './assets/css/style.css';

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import MainNavAside from './_includes/MainNavAside';
import Homepage from './pages/Homepage';
import Categories from './pages/Categories';
import About from './pages/About';
function App() {
  return (
    <Router>
      <div className="App" id='container'>
      <MainNavAside/>
        <div id='content'>
          <header className="App-header">
          </header>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
          </Switch>
          <footer>
Footer
</footer>
        </div>


  
      </div>
    </Router>
  );
}

export default App;
