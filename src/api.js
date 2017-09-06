import firebase from 'firebase';
import 'firebase/app';
const config = {
  apiKey: "AIzaSyCyxvA8dLtqMAqQGJ-yTHBT1mSMJ2cY1Zk",
  authDomain: "menscave-dev.firebaseapp.com",
  databaseURL: "https://menscave-dev.firebaseio.com",
  projectId: "menscave-dev",
  storageBucket: "gs://menscave-dev.appspot.com/",
  messagingSenderId: "515134572254"
};
const firebaseApp = firebase.initializeApp(config);
const database = firebaseApp.database();
const databaseRef = database.ref();
// const auth = firebase.auth();
const storage = firebase.storage();

export default class API {

  saveArticle(article) {
    const promise = new Promise((resolve, reject) => {
      let articleRef = databaseRef.child('articles').push();
      articleRef.set(article).then(() => {
        resolve();
      });
    });
    return promise;
  }

  uploadImage(file, progress, finish) {
    const d = new Date().getTime().toString();
    const filename = d + file.name;
    const ref = storage.ref('images/' + filename);
    const task = ref.put(file);
    task.on('state_changed',
      progress,
      (err) => {
        console.log(err);
      },
      () => {
        finish(task.snapshot)
      }
    )
  }

  getArticles(category) {
    const promise = new Promise((resolve, reject) => {
      if (category === 'all') {
        databaseRef.child('articles').once('value', snapshot => {
          resolve(snapshot.val());
        });
      } else {
        databaseRef.child('articles').orderByChild('category').equalTo(category).once('value', snapshot => {
          resolve(snapshot.val());
        });
      }
    });
    return promise;
  }

  getSingleArticle(key) {
    const promise = new Promise((resolve, reject) => {
      databaseRef.child(`articles/${key}`).once('value', snapshot => {
        resolve(snapshot.val());
      });
    });
    return promise;
  }
}
