import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyASnHjAM3QNEuZ56dd1sTiKgjw9G-5KKgM',
  authDomain: 'lecture-summarizer-c2375.firebaseapp.com',
  databaseURL: 'https:///lecture-summarizer-c2375.firebaseio.com',
  projectId: 'lecture-summarizer-c2375',
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// // collection references
// const usersCollection = db.collection('users')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
//   usersCollection,
//   postsCollection,
//   commentsCollection,
//   likesCollection
}