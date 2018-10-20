export class EventEmitter {
  constructor(){
    this.events = {};
  }

  on(eventName, callback){
    this.events[eventName] = callback;
  }

  emit(eventName){
    this.events[eventName]();
  }

  off(eventName){
    this.events[eventName] = null;
  }
}
