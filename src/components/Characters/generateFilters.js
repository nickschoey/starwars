const generateFilters = characters =>
  Object.keys(characters).reduce(
    (acc, el) => {
      const character = characters[el];
      const {
        hair_color: hairColor,
        skin_color: skinColor,
        eye_color: eyeColor,
        gender,
        id
      } = character;
      if (!acc.hairColor[hairColor]) {
        acc.hairColor[hairColor] = [];
      }
      acc.hairColor[hairColor].push(id);

      if (!acc.skinColor[skinColor]) {
        acc.skinColor[skinColor] = [];
      }
      acc.skinColor[skinColor].push(id);

      if (!acc.eyeColor[eyeColor]) {
        acc.eyeColor[eyeColor] = [];
      }
      acc.eyeColor[eyeColor].push(id);

      if (!acc.gender[gender]) {
        acc.gender[gender] = [];
      }
      acc.gender[gender].push(id);
      return acc;
    },
    {
      hairColor: {},
      skinColor: {},
      eyeColor: {},
      gender: {}
    }
  );

export default generateFilters;
