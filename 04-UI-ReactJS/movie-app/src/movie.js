class Movie {
  constructor(name, duration, year){
    this.name = name;
    this.duration = duration;
    this.year = year;
  }

  toString = () => {
    return this.name + ", " + this.year + "(" + this.duration + " hs)";
  }
}

export default Movie
