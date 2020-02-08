import React, { useState } from 'react';
import { Container, TextInput } from 'nes-react';

const CharacterFilters = () => {
  const [state, setstate] = useState();
  return (
    <Container style={{ flexGrow: 0.2, margin: '0px 100px' }}>
      <TextInput
        label="Name"
        placeholder="Search by Name"
        value={state}
        onChange={e => setstate(e.target.value)}
      />
    </Container>
  );
};

export default CharacterFilters;
