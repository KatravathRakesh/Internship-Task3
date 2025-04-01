const images = [
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg"
];
let index = 0;
function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("carouselImage").src = images[index];
}
function prevImage() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("carouselImage").src = images[index];
}

async function fetchJoke() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await response.json();
    document.getElementById("joke").textContent = data.joke;
}

