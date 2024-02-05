// Variable to store the timeout ID
var inactivityTimeout;

function startInactivityTimer() {
  timeout = setTimeout(logoutDueToInactivity, inactivityTimeout);
}

// Function to reset the inactivity timer on user activity
function resetInactivityTimer() {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(logoutDueToInactivity, 120000); // 120000 milliseconds = 2 minutes
}

function handleUnload() {
  // Clear the inactivity timeout when the user leaves the page
  clearTimeout(timeout);
}

// Event listener to monitor user activity
document.addEventListener("mousemove", resetInactivityTimer);
document.addEventListener("keydown", resetInactivityTimer);
document.addEventListener("click", resetInactivityTimer);

// Add event listener for page unload
window.addEventListener("unload", handleUnload);

 // Your existing functions for login, logout, and forgotpassword

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {
      var displayName = user.displayName; // Get the user's display name from their profile
      if (displayName) {
        // If the user's display name is available, display it in the welcome message
        document.getElementById("user_para").innerHTML = "Welcome, " + displayName;
      } else {
        // If the user's display name is not set, display their email
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User: " + email_id;

        // Reset the inactivity timer when the user is signed in
        resetInactivityTimer();

      }
    }
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "flex";
  }
});

// Monitor user authentication state
firebase.auth().onAuthStateChanged(handleAuthStateChange);

async function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  if (!userEmail || !userPass) {
    window.alert("Please fill in both email and password fields.");
    return;
  }

  // Show loading spinner or disable the login button
  // while the authentication is in progress.

  try {
    await firebase.auth().signInWithEmailAndPassword(userEmail, userPass);
    // User successfully logged in, you can perform further actions if needed.
    document.getElementById("email_field").value = "";
    document.getElementById("password_field").value = "";
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  } finally {
    // Hide loading spinner or enable the login button.
  }
}

function logout() {
  var confirmation = window.confirm("Are you sure you want to sign out?");
  if (confirmation) {
    firebase.auth().signOut().then(function() {
      // Clear user-related data and redirect to the login page.
      clearUserData();
      window.location.href = "recordings.html";
    }).catch(function(error) {
      // Handle any error that occurs during sign-out.
      console.error("Error signing out:", error);
    });
  }
}

function logoutDueToInactivity() {
    firebase.auth().signOut().then(function() {
      // Clear user-related data and redirect to the login page.
      clearUserData();
      window.location.href = "recordings.html";
    }).catch(function(error) {
      // Handle any error that occurs during sign-out.
      console.error("Error signing out:", error);
    });
}

function clearUserData() {
  // Clear any user-specific data stored in the client-side.
  // For example, you can reset state variables or clear local storage.
}

function forgotpassword() {
  var auth = firebase.auth();
  var userEmail = document.getElementById("email_field").value;

  // Validate the email format before proceeding
  if (!isValidEmail(userEmail)) {
    window.alert("Please enter a valid email address.");
    return;
  }

  auth.sendPasswordResetEmail(userEmail).then(function() {
    window.alert('Please check your email for the password reset link. Also, check your spam/junk folder.');
  }).catch(function(error) {
    if (error.code === "auth/user-not-found") {
      window.alert('Email does not exist in the database.');
    } else {
      window.alert('An error occurred. Please try again later.');
    }
  });
}

function isValidEmail(email) {
  // Use a regular expression to validate the email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}