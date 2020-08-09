import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Locations from './components/Locations/Locations';
import Materials from './components/Materials/Materials';
import Order from './components/Order/Order';
import './App.css';


function App() {
  const [house, makeHouse] = useState({ location: "", materials: [] });

  const addLocation = (location) => {
    makeHouse({ ...house, location })
  }

  const addMaterial = (material) => {
    let newMaterials;
    if (!house.materials.includes(material)) {
      newMaterials = [...house.materials, material];
    } else {
      newMaterials = house.materials.filter(item => item !== material);
    }
    makeHouse({ ...house, materials: newMaterials });
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path="/location">
          <Locations addLocation={addLocation} house={house} />
        </Route>
        <Route path="/materials">
          <Materials addMaterial={addMaterial} house={house} />
        </Route>
        <Route path="/order">
          <Order house={house} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
