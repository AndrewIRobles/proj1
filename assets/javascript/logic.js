$(document).ready(function(){
	let config = {
		apiKey: "AIzaSyDv5rZU0ZW_kJohQ6A2c5PVnT91fz1jee0",
		authDomain: "starfleet-patrol.firebaseapp.com",
		databaseURL: "https://starfleet-patrol.firebaseio.com",
		projectId: "starfleet-patrol",
		storageBucket: "starfleet-patrol.appspot.com",
		messagingSenderId: "590431002658"
	};

	firebase.initializeApp(config);

		// Create a variable to reference the database
  let database = firebase.database();


/* 
    $('#pagetwo').addClass("hide");
    $('#pageone').removeClass("hide");
    $("#page4").addClass("hide");
    $("#page3").addClass("hide");
    
    $("#zipbutton").on('click', function(e) {
        console.log("event click: ", e);
        $('#pageone').addClass("hide");
        $('#pagetwo').removeClass("hide");
    });

     $("#view-park-2").on('click', function(e) {
         console.log("event click: ", e);
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
        }); */
        
        //Code to retrieve Active Park Locations

        // At the initial load and subsequent value changes, get a snapshot of the stored data.
        // This function allows you to update your page in real-time when the firebase database changes.
/*     database.ref("/dogday").on("child_added", function (snapshot) {

        // Set the variables equal to the stored values.
    parkName = snapshot.val().parkName;
    parkLocation = snapshot.val().parkLocation;
    startTime = snapshot.val().startTime;
    endTime = snapshot.val().endTime;
    dogName = snapshot.val().dogName;
    dogBreed = snapshot.val().dogBreed;
    dogAge = snapshot.val().dogAge;
    }); */



        $('#pagetwo').addClass("hide");
        $('#pageone').removeClass("hide");
        $('#page3').addClass("hide");
        
        zipSearch = $("#zipbutton").on('click', function(evt) {
            $('#pageone').addClass("hide");
            $('#pagetwo').removeClass("hide");
        });
        
        console.log(zipSearch);
        })
        