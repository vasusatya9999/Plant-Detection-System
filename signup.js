// let button = document.querySelector('.button');
// let buttonText = document.querySelector('.tick');

// const tickMark = "<svg width=\"20\" height=\"18\" viewBox=\"0 0 17 15\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M6 14L1 9l2.2-2.2L6 9l7.8-7.8L15 3\"/></svg>";

// buttonText.innerHTML = "Submit";

// button.addEventListener('click', function() {
//   if (buttonText.innerHTML !== "Submit") {
//     buttonText.innerHTML = "Submit";
//   } else if (buttonText.innerHTML === "Submit") {
//     buttonText.innerHTML = tickMark;
//   }
//   this.classList.toggle('button__circle');
// });

// Firebase

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyAeZeQWmUr8Q6RkSwZhplQPG8-uKTLmvV8",
//     authDomain: "iotagrosense.firebaseapp.com",
//     projectId: "iotagrosense",
//     storageBucket: "iotagrosense.appspot.com",
//     messagingSenderId: "273077172049",
//     appId: "1:273077172049:web:7e905c7a24c833679d4570",
//     measurementId: "G-VRXQB6PDTF"
//   };

// // Initialize Firebase
 
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
// import { database } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyAeZeQWmUr8Q6RkSwZhplQPG8-uKTLmvV8",
//   authDomain: "iotagrosense.firebaseapp.com",
//   projectId: "iotagrosense",
//   storageBucket: "iotagrosense.appspot.com",
//   messagingSenderId: "273077172049",
//   appId: "1:273077172049:web:7e905c7a24c833679d4570",
//   measurementId: "G-VRXQB6PDTF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth();
// //Variabl
// const database=firebase.database()

// //Function register
// function register(){
//   name=document.getElementById('name').value
//   email=document.getElementById('email').value
//   phone=document.getElementById('phone').value
//   password=document.getElementById('password').value
//   cpassword=document.getElementById('cpassword').value

//   if(validate_email(email)==false || validate_password(password)==false || confirm_password(password,cpassword)){
//     alert("Email or Password is Incorrect !!");
//     return
//   }


//   //Auth
//   auth.createUserWithEmailAndPassword(email,password)
//   .then(function(){

//     var user=auth.currentUser

//     //Add  to firebase
//     var database_ref=database.ref()

//     //Create user
//      var user_data={
//       name:name,
//       email:email,
//       phone:phone,
//       password:password,
//       last_login: Date.now()

      
//      }
//      database_re.child('users/'+user.uid).set(user_data)

//      alert("User created")
//   })
//   .catch(function(error){
//     var error_code=error.code
//     var error_message=error.message
//     alert(error_message)
//   })

// }

// function validate_email(email){
//   expression=/^[^@]+@\w+(\.\w+)+\w$/
//   if(expression.test(email)==true){
//     return true
//   }
//   else{
//     return false
//   }

// }

// function validate_password(password){
//   if (password<6 && password==null && password==""){
//     return false
//   }
//   else{
//     return true
//   }
// }

// function confirm_password(password,cpassword){
//   if(password==cpassword){
//     return true
//   }
//   else{
//     return false
//   }
// }
