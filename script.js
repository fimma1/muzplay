 const image = document.querySelector('img');
 const title = document.getElementById('title');
 const artist = document.getElementById('artist');
 const music = document.querySelector('audio');
 const prevBtn = document.getElementById('prev');
 const playBtn = document.getElementById('play');
 const nextBtn = document.getElementById('next');

 // Music 
 const songs = [
    {
        name : 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'jacinto Design',
    },
    {
        name : 'jacinto-2',
        displayName: 'Seven ANtion Army ',
        artist: 'jacinto Design',
    },
    {
        name : 'jacinto-3',
        displayName: ' Chill Machine',
        artist: 'jacinto Design',
    },
    {
        name : 'jacinto-4',
        displayName: 'Hello World',
        artist: 'jacinto Design',
    },
    {
        name : 'D.ham',
        displayName: 'Monto Yehowa Dwom',
        artist: 'Diana Hamilton',
    }
 ];

  // check if playing
  let isPlaying = false;

  // paly
  function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
  }

  // pause
  function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace( 'fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
  }

  // paly or pause
  playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
  

  //Update DOM
  function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
  }

  // Current Song
  let songIndex = 0;

  // Prev Song
  function prevSong() {
    songIndex--;
    if (songIndex < 0) {
      songIndex = songs.length -1;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
  }

  //Next song
  function nextSong() {
    songIndex++;
    if (songIndex > songs.length -1 ) {
      songIndex = 0;
   }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
  }

// On load select song
loadSong(songs[songIndex]);


//Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

