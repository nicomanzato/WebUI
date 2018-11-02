class Movie {
  constructor(name = '', duration = 0, year = 0){
    this.name = name;
    this.duration = duration;
    this.year = year;
  }

  toString = () => {
    return this.name + ", " + this.year + "(" + this.duration + " hs)";
  }
}

export default Movie
