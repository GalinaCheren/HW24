const image = document.createElement("img");

const random = Math.round(Math.random() * 8) + 1;

image.src = `images/${random}.png`;
document.body.append(image);
