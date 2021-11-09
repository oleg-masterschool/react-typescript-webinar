import React, { useState, useEffect } from "react";
import './app.css';
import { creatures } from './api/data.json';
import { Link, Route, Switch } from "react-router-dom";
import { Home } from './components/Home';
import { List } from "./components/List";
import { Creature } from './components/Creature';
import {ICreature} from "./types/ICreature";

function fetchStudents() {
  return Promise.resolve({ success: true, data: creatures });
}

function App() {
  const [creatures, setCreatures] = useState<ICreature | any[]>([]);
  // const [creatures, setCreatures] = useState([]);

  useEffect(() => {
      fetchStudents().then(res => setCreatures(res.data));
  }, []);

  return (
      <div className="App">
        <nav>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/creatures-list">Creatures</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/creatures-list/:creatureId">
            <Creature creatures={creatures}/>
          </Route>
          <Route path="/creatures-list">
            <List creatures={creatures}/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
  );
}

export { App };


export default App;
