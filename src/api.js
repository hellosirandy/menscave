import firebase from 'firebase';
import 'firebase/app';
import config from './firebase-config';
const firebaseApp = firebase.initializeApp(config);
const database = firebaseApp.database();
const databaseRef = database.ref();
const auth = firebase.auth();
const storage = firebase.storage();

export default class API {

  saveArticle(article, key=null) {
    const promise = new Promise((resolve, reject) => {
      let articleRef;
      if (key) {
        articleRef = databaseRef.child(`articles/${key}`);
        article.key = key;
      } else {
        articleRef = databaseRef.child('articles').push();
        article.key = articleRef.key;
      }
      articleRef.set(article).then(() => {
        resolve();
      });
    });
    return promise;
  }

  // saveArticle(article, key) {
  //   const promise = new Promise((resolve, reject) => {
  //     let articleRef = databaseRef.child(`articles/${key}`);
  //     delete article.key;
  //     articleRef.set(article).then(() => {
  //       resolve();
  //     });
  //   });
  //   return promise;
  // }

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

  onCommentAddedOrRemoved(articleKey, detach, callback, type) {
    if (detach) {
      databaseRef.child(`comments/${articleKey}/`).off(type);
    } else {
      databaseRef.child(`comments/${articleKey}/`).on(type, snapshot => {
        callback(snapshot.val(), snapshot.key);
      });
    }
  }

  onCommentValueChange(articleKey, commentKey, detach, callback) {
    if (detach) {
      databaseRef.child(`comments/${articleKey}/${commentKey}/`).off('value', snapshot => {
        callback(snapshot.val());
      });
    } else {
      databaseRef.child(`comments/${articleKey}/${commentKey}/`).on('value', snapshot => {
        callback(snapshot.val(), snapshot.key);
      });
    }
  }

  getAllComment(articleKey) {
    const promise = new Promise((resolve, reject) => {
      databaseRef.child(`comments/${articleKey}/`).once('value', snapshot => {
        resolve(snapshot.val());
      });
    });
    return promise;
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

  deleteReply = (articleKey, commentKey) => {
    const promise = new Promise((resolve, reject) => {
      databaseRef.child(`comments/${articleKey}/${commentKey}`).remove().then(() => {
        resolve('comment removed');
      });
    });
    return promise;
  }
}
