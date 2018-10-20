import Movie from '/js/movie.js';
import Actor from '/js/actor.js'

window.addEventListener('load', function () {

  const movie = new Movie("Pokemon", 1993, 1.5);

  console.log(movie);

  const actor = new Actor("Pikachu", 5);

  console.log(actor);

  movie.on("play", () => console.log("The movie is playing"));
  movie.on("pause", () => console.log("The movie is paused"));
  movie.on("resume", () => console.log("The movie resumed playing"));

  movie.play();
  movie.pause();
  movie.resume();
  
}, false);
