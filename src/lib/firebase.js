  import firebase from 'firebase';
  
  const firebaseConfig = {
    apiKey: "AIzaSyCbqCEDbi6YlKfr1ZQV6UL260_gjEyCyEA",
    authDomain: "rin-firebase-cf66e.firebaseapp.com",
    projectId: "rin-firebase-cf66e",
    storageBucket: "rin-firebase-cf66e.appspot.com",
    messagingSenderId: "394185251671",
    appId: "1:394185251671:web:ef7dc8bd76323088947c12"
  };

  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todo")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todo");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todo").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
};