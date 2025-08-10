fetch("https://api.jikan.moe/v4/top/anime")
  .then(response => response.json())
  .then(data => {
    const animeList = data.data;
    const container = document.getElementById("anime-container");

    animeList.forEach(anime => {
      const card = document.createElement("div");
      card.classList.add("anime-card");

      const img = document.createElement("img");
      img.src = anime.images.jpg.image_url;
      img.alt = anime.title;

      const title = document.createElement("h3");
      title.textContent = anime.title;

      card.appendChild(img);
      card.appendChild(title);
      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error fetching anime:", error));


