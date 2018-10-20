class EventEmitter {
  constructor(){
    this.events = {};
  }

  on(eventName, callback){
    this.events[eventName] = callback;
  }

  emit(eventName){
    try{
      this.events[eventName]();
    } catch(err){
      console.log("nobody is listening for this event");
    }
  }

  off(eventName){
    try{
      this.events[eventName] = null;
    } catch(err){
      console.log("nobody was listening for this event");
    }
  }
}

export default EventEmitter
