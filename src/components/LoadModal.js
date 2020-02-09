import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { Container, Progress } from 'nes-react';
import { useSelector } from 'react-redux';

export default () => {
  const [open, setOpen] = useState(true);
  const characters = useSelector(state => state.characters);
  const films = useSelector(state => state.films);
  const planets = useSelector(state => state.planets);
  const species = useSelector(state => state.species);
  const starships = useSelector(state => state.starships);
  const vehicles = useSelector(state => state.vehicles);

  useEffect(() => {
    const isLoadingDone = () => {
      return (
        characters.pending === false &&
        films.pending === false &&
        planets.pending === false &&
        species.pending === false &&
        starships.pending === false &&
        vehicles.pending === false
      );
    };
    if (isLoadingDone()) setOpen(false);
  }, [
    characters.pending,
    films.pending,
    planets.pending,
    species.pending,
    starships.pending,
    vehicles.pending
  ]);

  const renderProgress = (state, tag) => {
    const { data, pending } = state;
    if (pending === null) {
      return (
        <div style={{ paddingTop: '10px' }}>
          <div>{`Counting ${tag} in the galaxy...`}</div>
          <Progress value={0} max={100} />
        </div>
      );
    }
    if (pending) {
      return (
        <div style={{ paddingTop: '10px' }}>
          <dvi>{`Counting ${tag} in the galaxy...`}</dvi>
          <Progress value={50} max={100} />
        </div>
      );
    }
    return (
      <div style={{ paddingTop: '10px' }}>
        <div>{`Done! ${Object.keys(data).length} ${tag} found.`}</div>
        <Progress value={100} max={100} primary />
      </div>
    );
  };

  return (
    <Popup
      open={open}
      modal
      closeOnEscape={false}
      closeOnDocumentClick={false}
      lockScroll={false}
    >
      <Container style={{ color: 'black' }}>
        <p>Welcome to the 8 bits Star Wars catalogue!</p>

        <p>Give us a sec while we fetch all the needed data!</p>
        {renderProgress(characters, 'people')}
        {renderProgress(films, 'films')}
        {renderProgress(planets, 'planets')}
        {renderProgress(species, 'species')}
        {renderProgress(starships, 'starships')}
        {renderProgress(vehicles, 'vehicles')}
      </Container>
    </Popup>
  );
};
