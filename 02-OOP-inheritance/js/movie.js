import EventEmitter from '/js/eventEmitter.js';
import socialMixin from '/js/socialMixin.js';

class Movie extends EventEmitter{
  constructor(title, year, duration){
    super()
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];

    Object.assign(Movie.prototype, socialMixin);
  }

  play() {
    this.emit("play");
  }

  pause() {
    this.emit("pause");
  }
  resume() {
    this.emit("resume");
  }

  addCast(...cast) {

    for(let i = 0; i < cast.length; i++){
      this.cast.push(cast[i]);
    }
  }
}

export default Movie
