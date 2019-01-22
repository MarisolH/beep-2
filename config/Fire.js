import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCbvHoEdXBTIX4VNGa2UHgdObBzIqHpruw",
    authDomain: "beep-react.firebaseapp.com",
    databaseURL: "https://beep-react.firebaseio.com",
    projectId: "beep-react",
    storageBucket: "beep-react.appspot.com",
    messagingSenderId: "495500401691"
  };
  const fire = firebase.initializeApp(config);

  export default fire;