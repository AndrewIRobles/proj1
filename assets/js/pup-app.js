
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCReXH7G9fqpAGvccatlqbBf-FW0u0NB7c",
    authDomain: "puppy-b6f53.firebaseapp.com",
    databaseURL: "https://puppy-b6f53.firebaseio.com",
    projectId: "puppy-b6f53",
    storageBucket: "puppy-b6f53.appspot.com",
    messagingSenderId: "75752689696"
  };
  firebase.initializeApp(config);

    // Create a variable to reference the database
let database = firebase.database();

$(document).ready(function(){

    $('#pagetwo').addClass("hide");
    $('#pageone').removeClass("hide");
    $("#page4").addClass("hide");
    $("#page3").addClass("hide");
    
    zipSearch = $("#button-addon2").on('click', function(evt) {
        $('#pageone').addClass("hide");
        $('#pagetwo').removeClass("hide");
    });
    
    console.log(zipSearch);

    puppiedPark = $("#view-park-2").on('click', function(event) {
        $('#pagetwo').addClass("hide");
        $('#page3').removeClass("hide");
    });
     
        
        $("#add-pup-2").on('click', function(e){
            console.log("event click: ", e);
            $('#pagetwo').addClass("hide");
            $("#page3").addClass("hide");
            $("#page4").removeClass("hide");
        
        });
        $("#add-pup-3").on('click', function(e){
            console.log("event click: ", e);
            $('#pagetwo').addClass("hide");
            $("#page3").addClass("hide");
            $("#page4").removeClass("hide");
        
        });
        });
        
        //Code to retrieve Active Park Locations

        // At the initial load and subsequent value changes, get a snapshot of the stored data.
        // This function allows you to update your page in real-time when the firebase database changes.
    database.ref("/dogday").on("child_added", function (snapshot) {

        // Set the variables equal to the stored values.
    parkName = snapshot.val().parkName;
    parkLocation = snapshot.val().parkLocation;
    startTime = snapshot.val().startTime;
    endTime = snapshot.val().endTime;
    dogName = snapshot.val().dogName;
    dogBreed = snapshot.val().dogBreed;
    dogAge = snapshot.val().dogAge;
    });