import Movie from '/js/movie.js';
import Actor from '/js/actor.js';
import Logger from '/js/logger.js';

window.addEventListener('load', function () {

  const movie = new Movie("Pokemon", 1993, 1.5);
  const actor = new Actor("Pikachu", 5);
  const logger = new Logger();

  movie.on("play", () => logger.log("The movie is playing"));
  movie.on("pause", () => logger.log("The movie is paused"));
  movie.on("resume", () => logger.log("The movie resumed playing"));

  movie.play();
  movie.pause();
  movie.resume();

  movie.addCast(actor);

}, false);
