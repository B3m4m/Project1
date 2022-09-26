const header = document.querySelector("header");
const h1 = document.querySelector("h1");
let image = true;
let title = true;

const changeImage = () => {
  image = !~image;
  title = !title;
  header.style.backgroundImage = image
    ? "url(bundle-of-balloons.jpg)"
    : "url(OIP.jpg)";
  h1.textContent = title ? "Balony" : "Balony1";
};
header.addEventListener("click", changeImage);
