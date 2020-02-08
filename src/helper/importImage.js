const loadImage = (id, setImage) => {
  if (id < 5) {
    //  eslint-disable-line
    import(`../assets/${id}.png`).then(image => {
      setImage(image.default);
    });
  } else {
    import(`../assets/1.png`).then(image => {
      setImage(image.default);
    });
  }
};

export default loadImage;
