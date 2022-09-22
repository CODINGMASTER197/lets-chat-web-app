// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCfX6akqSIxlp8RMMtkZzhICj-ILiUItSY",
    authDomain: "let-s-chatt-web-app.firebaseapp.com",
    databaseURL: "https://let-s-chatt-web-app-default-rtdb.firebaseio.com",
    projectId: "let-s-chatt-web-app",
    storageBucket: "let-s-chatt-web-app.appspot.com",
    messagingSenderId: "147808185477",
    appId: "1:147808185477:web:abe0916e58044556320dec"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



