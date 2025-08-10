const container = document.getElementById('anime-container');

fetch('https://api.jikan.moe/v4/top/anime')
  .then(response => response.json())
  .then(data => {
    data.data.forEach(anime => {
      const card = document.createElement('div');
      card.classList.add('anime-card');

      card.innerHTML = `
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
        <h3>${anime.title}</h3>
        <p>Score: ${anime.score || 'N/A'}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching anime:', error));
