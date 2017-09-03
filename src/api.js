import firebase from 'firebase';
import 'firebase/app';

export default class API {
  config = {
    apiKey: "AIzaSyCyxvA8dLtqMAqQGJ-yTHBT1mSMJ2cY1Zk",
    authDomain: "menscave-dev.firebaseapp.com",
    databaseURL: "https://menscave-dev.firebaseio.com",
    projectId: "menscave-dev",
    storageBucket: "",
    messagingSenderId: "515134572254"
  };
  firebaseApp;
  database;
  databaseRef;
  auth;
  storage;
  constructor() {
    this.firebaseApp = firebase.initializeApp(this.config);
    this.database = this.firebaseApp.database();
    this.databaseRef = this.database.ref();
    this.auth = firebase.auth();
    this.storage = firebase.storage();
  }

  saveArticle(data) {
    const promise = new Promise((resolve, reject) => {
      let articleRef = this.databaseRef.child('articles').push();
      articleRef.set(data).then(() => {
        resolve();
      });
    });
    return promise;
  }
}
