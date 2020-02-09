const loadImage = (id, setImage) => {
  //  eslint-disable-line
  import(`../assets/${id}.png`)
    .then(image => {
      setImage(image.default);
    })
    .catch(() => {
      import(`../assets/1.png`).then(image => {
        setImage(image.default);
      });
    });
};

export default loadImage;
