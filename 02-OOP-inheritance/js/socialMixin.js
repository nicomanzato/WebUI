const socialMixin = {
  
  share(friendName) {
    console.log(friendName + " shared " + this.title);
  },

  like(friendName) {
    console.log(friendName + " liked " + this.title);
  }
}
export default socialMixin
