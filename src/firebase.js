import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyCwOXjL5rUgcmLUILNwCcVO10to-Ur1R1w",
  authDomain: "replay-movie-3a746.firebaseapp.com",
  databaseURL: "https://replay-movie-3a746.firebaseio.com",
  projectId: "replay-movie-3a746",
  storageBucket: "replay-movie-3a746.appspot.com",
  messagingSenderId: "597077338167"
};

firebase.initializeApp(config);
export default firebase;
