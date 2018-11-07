export default class User {
  constructor(id = '-1', name = '', username = '', email = '', phone = ''){
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
  }

  toString = () => {
    return this.name
  }
}
