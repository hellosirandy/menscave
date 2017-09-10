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
const auth = firebase.auth();
const storage = firebase.storage();

export default class API {

  createArticle(article, key=null) {
    const promise = new Promise((resolve, reject) => {
      let articleRef = key ? databaseRef.child(`articles/${key}`) : databaseRef.child('articles').push();
      delete article.key;
      articleRef.set(article).then(() => {
        resolve();
      });
    });
    return promise;
  }

  saveArticle(article, key) {
    const promise = new Promise((resolve, reject) => {
      let articleRef = databaseRef.child(`articles/${key}`);
      delete article.key;
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
        if (snapshot.val()) {
          resolve(snapshot.val());
        } else {
          reject('Aritcle doesn\'t exist.');
        }
      });
    });
    return promise;
  }

  removeArticle(key) {
    const promise = new Promise((resolve, reject) => {
      databaseRef.child(`articles/${key}`).remove().then(_ => {
        resolve('article removed');
      });
    });
    return promise;
  }

  createUser(email, password) {
    const promise = new Promise((resolve, reject) => {
      auth.createUserWithEmailAndPassword('jpn721@hotmail.com', 'Alan0302').then(user => {
        resolve(user);
      }).catch(res => {
        reject(`failed to create user ${email}`);
      });
    });
    return promise;
  }

  signOut() {
    auth.signOut();
  }

  signIn(email, password) {
    const promise = new Promise((resolve, reject) => {
      auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => {
        reject(err);
      });
    });
    return promise;
  }

  onAuthStateChanged(callback) {
    return auth.onAuthStateChanged(user => callback(user));
  }

  leaveComment(comment, articleKey) {
    const promise = new Promise((resolve, reject) => {
      const newCommentRef = databaseRef.child(`comments/${articleKey}`).push();
      newCommentRef.set(comment).then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      })
    });
    return promise;
  }

  onCommentAdded(articleKey, detach, callback) {
    if (detach) {
      databaseRef.child(`comments/${articleKey}/`).off('child_added', snapshot => {
        callback(snapshot.val());
      });
    } else {
      databaseRef.child(`comments/${articleKey}/`).on('child_added', snapshot => {
        callback(snapshot.val(), snapshot.key);
      });
    }
  }

  replyComment(reply, articleKey, commentKey) {
    const promise = new Promise((resolve, reject) => {
      databaseRef.child(`comments/${articleKey}/${commentKey}/`).update({reply: reply}).then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      })
    });
    return promise;

  }
}
