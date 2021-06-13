import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Champions from "./pages/Champions";
import SingleChampion from "./pages/SingleChampion";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddChamps from "./pages/AddChamps";
import RegistrationAdmin from "./pages/RegistrationAdmin";
import ChampionCrud from "./pages/ChampionCrud";

function App() {
  return (
      <>
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Champions/" component={Champions} />
              <Route exact path="/Champions/:slug" component={SingleChampion} />
              <Route exact path="/AddChamps/" component={AddChamps} />
              <Route exact path="/RegistrationAdmin/" component={RegistrationAdmin} />
              <Route exact path="/ChampionCrud/" component={ChampionCrud} />
              <Route exact path="/Contact/" component={Contact} />
              <Route component={Error} />
            </Switch>
      </>
  )
}

export default App;
