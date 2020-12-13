import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyAG74ab94B9N0lf2ya-luoK0P4ATeB9mNo",
    authDomain: "it-step-web-project.firebaseapp.com",
    projectId: "it-step-web-project",
    storageBucket: "it-step-web-project.appspot.com",
    messagingSenderId: "877511649046",
    appId: "1:877511649046:web:aebea800dec8e03b55d237",
    measurementId: "G-Q1NRJZ8C34"
  };


let app = null;
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
    
export default firebase;
