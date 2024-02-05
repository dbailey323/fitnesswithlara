 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBW0knZeKW3vDoepXBc8tixxT6Y6qm9XQ8",
    authDomain: "fitnesswithlara-3e11d.firebaseapp.com",
    databaseURL: "https://fitnesswithlara-3e11d-default-rtdb.firebaseio.com",
    projectId: "fitnesswithlara-3e11d",
    storageBucket: "fitnesswithlara-3e11d.appspot.com",
    messagingSenderId: "103698128111",
    appId: "1:103698128111:web:e55b8525dfd98d632f8f1a",
    measurementId: "G-LRRTMJLRXX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //ref contactInfo
  let contactInfo = firebase.database().ref("messages");

//listen for submit
document.querySelector(".contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

// Get input values
let firstName = document.querySelector(".firstName").value;
let lastName = document.querySelector(".lastName").value;
let email = document.querySelector(".email").value;
let phone = document.querySelector(".phone").value;
let message = document.querySelector(".message").value;

saveContactInfo(firstName, lastName, email, phone, message);

document.querySelector(".contactForm").reset();

document.querySelector(".alert").style.display = "block";
setTimeout(function(){
  document.querySelector(".alert").style.display = "none";
  },5000);
}

//save info to firebase
function saveContactInfo(firstName, lastName, email, phone, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    firstName:firstName,
    lastName:lastName,
    email:email,
    phone:phone,
    message:message
  })
}