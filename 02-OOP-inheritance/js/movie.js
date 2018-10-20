import { EventEmitter } from 'EventEmitter.js';

export class Movie extends EventEmitter{
  constructor(title, year, duration){
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  play() {
    console.log(this.title + " is playing");
  }

  pause() {
    console.log(this.title + " is paused");
  }
  resume() {
    console.log(this.title + " resumed playing");
  }
}
