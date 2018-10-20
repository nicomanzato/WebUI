import EventEmitter from '/js/eventEmitter.js';

class Movie extends EventEmitter{
  constructor(title, year, duration){
    super()
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }

  play() {
    console.log(this.title + " is playing");
    this.emit("play");
  }

  pause() {
    console.log(this.title + " is paused");
    this.emit("pause");
  }
  resume() {
    console.log(this.title + " resumed playing");
    this.emit("resume");
  }

}

export default Movie
