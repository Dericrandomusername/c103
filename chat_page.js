const firebaseConfig = {
  apiKey: "AIzaSyD-NDOrpKPfYpyl3eAEkV3UQvbjeOZ0sF4",
  authDomain: "chatapp-fd9f9.firebaseapp.com",
  databaseURL: "https://chatapp-fd9f9-default-rtdb.firebaseio.com",
  projectId: "chatapp-fd9f9",
  storageBucket: "chatapp-fd9f9.appspot.com",
  messagingSenderId: "855919143012",
  appId: "1:855919143012:web:1d692deca6c15944595771"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
  window.location="index.html";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose")
  { firebase_message_id = childKey; message_data = childData;} }); }); } getData();

  function send(){
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value="";
   }