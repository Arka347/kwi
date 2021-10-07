
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyATIudDSFza0QRTGBkYviRhR-CXXpACzcg",
      authDomain: "kwitter-e172b.firebaseapp.com",
      projectId: "kwitter-e172b",
      storageBucket: "kwitter-e172b.appspot.com",
      messagingSenderId: "514822933740",
      appId: "1:514822933740:web:391ae8d64307cf678229c9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick = redirectToRoomName(this.id)>" +Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row;
      console.log(firebase_message_id);
      console.log(message_data);
      Name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>"+Name+"<img class='user_tick' src='Tick.png'><</h4>";
      message_with_tag = "<h4 class='message_h4>"+message+"</h4>";
      like_button= "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>";
      span_with_tag ="<span class='glyphicon glyphicon-thumps-up Like:"+like+ "</span></button><hr>";
      row= name_with_tag+message_with_tag +like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addroom(){
      room_name = document.getElementById("room_name").value; 
      firebase.database(). ref("/").child ("room_name").update({
            purpose : "adding room name"
      })
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
 }
import { initializeApp } from "firebase/app";
var firebaseConfig = {
    apiKey: "AIzaSyATIudDSFza0QRTGBkYviRhR-CXXpACzcg",
    authDomain: "kwitter-e172b.firebaseapp.com",
    databaseURL: "https://kwitter-e172b-default-rtdb.firebaseio.com",
    projectId: "kwitter-e172b",
    storageBucket: "kwitter-e172b.appspot.com",
    messagingSenderId: "514822933740",
    appId: "1:514822933740:web:391ae8d64307cf678229c9"
};
    function addUser(){
        user_name = document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
        });
    }
    function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_room.html";
  }
  function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location= "index.html";
        }
          function send(){
                msg = document.getElementById("msg").value;
                firebase.database().ref(room_name).push({
                      name:user_name,
                      message:msg,
                      like:0
                });
                document.getElementById("msg").value= "";
          }
          function updatelike(message_id){
            console.log("clicked on like button -" +message_id);
            button_id = message_id;
            likes = document.getElementById(button_id).value;
            updated_like = Number(likes) +1;
            console.log(updated_like);
            
            firebase.database().ref(room_name).child(message_id).update({
                  like :updated_like
            })
      }
    
