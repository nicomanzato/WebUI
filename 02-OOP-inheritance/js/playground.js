import { Movie } from './movie.js';
import { Actor } from './actor.js';
import { Logger } from './logger.js';

window.addEventListener('load', function () {

  const movie = new Movie("Pokemon The Movie", 1993, 1.5);
  const actor = new Actor("Pikachu", 5);
  const logger = new Logger();

  movie.on("play", () => logger.log("The movie is playing"));
  movie.on("play", () => logger.log("Now you can have multiple callbacks to a single event"));
  movie.on("pause", () => logger.log("The movie is paused"));
  movie.on("resume", () => logger.log("The movie resumed playing"));

  movie.play();
  movie.pause();
  movie.resume();

  movie.addCast(actor);

  movie.like("Nic");
  movie.share("Nic");

}, false);
