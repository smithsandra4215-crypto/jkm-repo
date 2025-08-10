// script.js

// Fetch top anime from the Jikan API
fetch("https://api.jikan.moe/v4/top/anime")
  .then(response => response.json())
  .then(data => {
    const animeList = data.data; // Array of anime objects
    const container = document.getElementById("anime-container");

    animeList.forEach(anime => {
      // Create anime card
      const card = document.createElement("div");
      card.classList.add("anime-card");

      // Add image
      const img = document.createElement("img");
      img.src = anime.images.jpg.image_url;
      img.alt = anime.title;

      // Add title
      const title = document.createElement("h3");
      title.textContent = anime.title;

      // Append to card
      card.appendChild(img);
      card.appendChild(title);

      // Append card to container
      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error fetching anime:", error));
<script src="script.js"></script>
const animeList = document.getElementById("animeList");
const animeData = [
    { title: "Naruto", image: "https://via.placeholder.com/150" },
    { title: "One Piece", image: "https://via.placeholder.com/150" }
];

animeData.forEach(anime => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${anime.title}</h3><img src="${anime.image}" alt="${anime.title}">`;
    animeList.appendChild(div);
});

