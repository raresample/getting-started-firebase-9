import { createStore } from 'vuex'

import { db } from '../firebase/config'

import { 
  collection,
  getDocs
} from "firebase/firestore"

// collection reference
const colRef = collection(db, 'books')

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let books = []
    snapshot.docs.forEach((doc) => {
      // so doc.data() gets the data properties EXCEPT the id
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })

const store = createStore({})


export default store



// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })