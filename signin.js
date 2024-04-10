let button = document.querySelector('.button');
let buttonText = document.querySelector('.tick');

const tickMark = "<svg width=\"20\" height=\"18\" viewBox=\"0 0 17 15\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M6 14L1 9l2.2-2.2L6 9l7.8-7.8L15 3\"/></svg>";

buttonText.innerHTML = "Submit";

button.addEventListener('click', function() {
  if (buttonText.innerHTML !== "Submit") {
    buttonText.innerHTML = "Submit";
  } else if (buttonText.innerHTML === "Submit") {
    buttonText.innerHTML = tickMark;
  }
  this.classList.toggle('button__circle');
});

// Firebase

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAeZeQWmUr8Q6RkSwZhplQPG8-uKTLmvV8",
    authDomain: "iotagrosense.firebaseapp.com",
    projectId: "iotagrosense",
    storageBucket: "iotagrosense.appspot.com",
    messagingSenderId: "273077172049",
    appId: "1:273077172049:web:7e905c7a24c833679d4570",
    measurementId: "G-VRXQB6PDTF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//Variables
const auth=firebase.auth()
const database=firebase.database()

//Function register
function register(){
  
}