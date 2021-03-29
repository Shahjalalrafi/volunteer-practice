import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Component/Home';
import AddEvent from './Component/AddEvent';
import DashBoard from './Component/DashBoard';

function App() {
  return (
    <div className="App">

      <Router>
        <nav>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/addevent"><li>AddEvent</li></Link>
            <Link to="/dashboard"><li>Dashboard</li></Link>
          </ul>
        </nav>
        <Switch>

          

          <Route path="/addevent">
            <AddEvent />
          </Route>

          <Route path="/dashboard">
            <DashBoard />
          </Route>

          <Route path='/'>
            <Home />
          </Route>

          <Route path="*">
              <h4>page not found</h4>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
