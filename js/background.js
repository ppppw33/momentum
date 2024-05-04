const img = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImages = img[Math.floor(Math.random() * img.length)];
const bgImg = document.createElement("img");
bgImg.id = "bg";
bgImg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('img/${chosenImages}')`;
document.body.appendChild(bgImg);
