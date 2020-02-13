import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StickyContainer } from 'react-sticky';

import Character from './components/Characters/Character';
import Hero from './components/Hero';
import Planets from './components/Planets';
import Films from './components/Films';
import Characters from './components/Characters';
import LoadModal from './components/LoadModal';
import Planet from './components/Planets/Planet';
import Film from './components/Films/Film';
import Github from './components/common/Github';
import useLoadStatus from './helper/useLoadStatus';
import useSwapi from './helper/useSwapi';

const App = () => {
  const dataLoaded = useLoadStatus();
  useSwapi();

  return (
    <Router>
      {!dataLoaded.success ? (
        <LoadModal />
      ) : (
        <StickyContainer>
          <Hero />
          <Github />

          <Switch>
            <Route exact path="/">
              <Characters />
            </Route>
            <Route exact path="/planets">
              <Planets />
            </Route>
            <Route exact path="/films">
              <Films />
            </Route>
            <Route path="/character/:id">
              <Character />
            </Route>
            <Route path="/planet/:id">
              <Planet />
            </Route>
            <Route path="/film/:id">
              <Film />
            </Route>
          </Switch>
        </StickyContainer>
      )}
    </Router>
  );
};

export default App;
