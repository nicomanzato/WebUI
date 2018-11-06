import React from 'react';

export default class Post {
  constructor(id = '-1', title = "No Title", userId = "no UserId", body = "No Body"){
    this.id = id,
    this.title = title,
    this.userId = userId,
    this.body = body
  }

  toString = () => {
    return this.title
  }
}
