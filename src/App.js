import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getCharacters from './actions/getCharacters';

function App() {
  const dispatch = useDispatch();
  dispatch(getCharacters());

  useEffect(() => {}, []);

  return <div className="App" />;
}

export default App;
