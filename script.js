
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

      card.addEventListener("click", () => {
        document.getElementById("modal-img").src = anime.images.jpg.image_url;
        document.getElementById("modal-title").textContent = anime.title;
        document.getElementById("modal-synopsis").textContent = anime.synopsis || "No synopsis available.";
        document.getElementById("modal-episodes").textContent = anime.episodes || "Unknown";
        document.getElementById("modal-rating").textContent = anime.score || "N/A";

        const trailerContainer = document.getElementById("modal-trailer-container");
        const trailerFrame = document.getElementById("modal-trailer");

        if (anime.trailer && anime.trailer.embed_url) {
          trailerContainer.style.display = "block";
          trailerFrame.src = anime.trailer.embed_url;
        } else {
          trailerContainer.style.display = "none";
          trailerFrame.src = "";
        }

        document.getElementById("anime-modal").style.display = "block";
      });

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error fetching anime:", error));

// Close modal
document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("anime-modal").style.display = "none";
  document.getElementById("modal-trailer").src = ""; // stop trailer
});

window.addEventListener("click", (event) => {
  if (event.target === document.getElementById("anime-modal")) {
    document.getElementById("anime-modal").style.display = "none";
    document.getElementById("modal-trailer").src = ""; // stop trailer
  }
});

