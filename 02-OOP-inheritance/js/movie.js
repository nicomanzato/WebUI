import { EventEmitter } from './eventEmitter.js';
import { socialMixin } from './socialMixin.js';

export class Movie extends EventEmitter{
  constructor(title, year, duration){
    super()
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];

    Object.assign(Movie.prototype, socialMixin);
  }

  play() {
    this.emit("play", this);
  }

  pause() {
    this.emit("pause", this);
  }
  resume() {
    this.emit("resume", this);
  }

  addCast(...cast) {

    for(let i = 0; i < cast.length; i++){
      this.cast.push(cast[i]);
    }
  }
}
