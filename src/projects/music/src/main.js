const gallery = document.getElementById('music-gallery');

songs.forEach(({ title, artist, album, year, genre, cover, audio  }) => {
    const musicCard = document.createElement('div');
    musicCard.className = 'music-gallery__item';
    musicCard.innerHTML = `
        <img src="${cover}" alt="${title} cover" class="music-gallery__cover">
        <h3 class="music-gallery__title">${title}</h3>
        <p class="music-gallery__artist">Artist: ${artist}</p>
        <p class="music-gallery__album">Album: ${album}</p>
        <p class="music-gallery__year">Year: ${year}</p>
        <p class="music-gallery__genre">Genre: ${genre}</p>
        <audio controls class="music-gallery__audio">
            <source src="${audio}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>  
  `;
    gallery.appendChild(musicCard);
});

