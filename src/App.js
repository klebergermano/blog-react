
import './assets/css/style.css';

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Homepage from './pages/Home';
import Categories from './pages/Categories';
import About from './pages/About';
function App() {
  return (
    <Router>
      <div className="App" id='container'>
        <aside id='bg_menu_lateral'>
          <h1>Menu Lateral</h1>
          <nav>
            <ul>
              <Link to='/'>Home</Link>
              <Link to='/categories'>Categories</Link>
              <Link to='/posts'>Posts</Link>
              <Link to='/contact'>Contact</Link>
            </ul>
          </nav>
        </aside>
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
