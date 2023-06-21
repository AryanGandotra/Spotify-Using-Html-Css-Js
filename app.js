const recently_played_songs = document.querySelector(".recently_played_songs");
const recently_played_songs2 = document.querySelectorAll(
  ".recently_played_songs"
)[1];

async function readJSON1() {
  try {
    const response = await fetch("Json/recently_played.json");

    if (!response.ok) {
      throw new Error("Unable to fetch JSON file.");
    }

    const json = await response.json();
    // Process the JSON data
    for (let i = 0; i < json.length; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      recently_played_songs.appendChild(card);
      let card_image = document.createElement("img");
      card_image.classList.add("card_image");
      card_image.src = json[i].image;
      let song_name = document.createElement("span");
      song_name.classList.add("song_name");
      song_name.innerHTML = json[i].song_name;
      let artist_name = document.createElement("span");
      artist_name.classList.add("artist_name");
      artist_name.innerHTML = json[i].song_artist;
      let play = document.createElement("img");
      play.classList.add("play");
      play.src = "images/Spotify-Play-Button.png";
      card.appendChild(card_image);
      card.appendChild(song_name);
      card.appendChild(artist_name);
      card.appendChild(play);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function readJSON2() {
  try {
    const response = await fetch("Json/popular_albums.json");

    if (!response.ok) {
      throw new Error("Unable to fetch JSON file.");
    }

    const json = await response.json();
    // Process the JSON data
    for (let i = 0; i < json.length; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      recently_played_songs2.appendChild(card);
      let card_image = document.createElement("img");
      card_image.classList.add("card_image");
      card_image.src = json[i].image;
      let song_name = document.createElement("span");
      song_name.classList.add("song_name");
      song_name.innerHTML = json[i].song_name;
      let artist_name = document.createElement("span");
      artist_name.classList.add("artist_name");
      artist_name.innerHTML = json[i].song_artist;
      let play = document.createElement("img");
      play.classList.add("play");
      play.src = "images/Spotify-Play-Button.png";
      card.appendChild(card_image);
      card.appendChild(song_name);
      card.appendChild(artist_name);
      card.appendChild(play);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

readJSON1();
readJSON2();

const heart = document.querySelector(".heart");

heart.addEventListener("click", function () {
  if (heart.classList.contains("fa-regular")) {
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid");
  } else {
    heart.classList.remove("fa-solid");
    heart.classList.add("fa-regular");
  }
});

const play = document.querySelector(".playBtn");

play.addEventListener("click", function () {
  if (play.classList.contains("fa-circle-play")) {
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-pause-circle");
  } else {
    play.classList.remove("fa-pause-circle");
    play.classList.add("fa-circle-play");
  }
});

const sound = document.querySelector(".sound");

sound.addEventListener("click", function () {
  if (sound.classList.contains("fa-volume-up")) {
    sound.classList.remove("fa-volume-up");
    sound.classList.add("fa-volume-mute");
  } else {
    sound.classList.remove("fa-volume-mute");
    sound.classList.add("fa-volume-up");
  }
});
