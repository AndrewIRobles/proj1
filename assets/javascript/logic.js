$(document).ready(function(){
       // initialize firebase

	let config = {
		apiKey: "AIzaSyDv5rZU0ZW_kJohQ6A2c5PVnT91fz1jee0",
		authDomain: "starfleet-patrol.firebaseapp.com",
		databaseURL: "https:starfleet-patrol.firebaseio.com",
		projectId: "starfleet-patrol",
		storageBucket: "starfleet-patrol.appspot.com",
		messagingSenderId: "590431002658"
	};

	firebase.initializeApp(config);

		 //Create a variable to reference the database
  let database = firebase.database();


         //page progression
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
        
        

     let zipAdded = false;
     console.log("zip added? ", zipAdded);

   $("#zipbutton").on("click", function(e) {
     e.preventDefault();
     let zip = $("#zip").val().trim();
     console.log("your zip code: ", zip);

     if(zip !==""){
         zipAdded = true;
         console.log("zip added? ", zipAdded);

         // CALL API IF ZIP CODE HAS BEEN ADDED 
         var APIKey = "166a433c57516f51dfab1f7edaed8413";
         var queryURL = "https:api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&units=imperial&appid=" + APIKey;
         $.ajax({
           url: queryURL,
           method: "GET"
         }).then(function(response) {
             console.log("response object: ", response);
             let temperature = response.main.temp;
             let roundedT = Math.round(temperature);
             $("#temp").prepend("<p>" + roundedT + " &#8457;</p>")

         });  //ENDS fn(response)

     };  //ENDS if statement to check if a zip code has been entered before placing API call
     $("#zip").val("");

   }); 
    }); //ENDS on("click", fn(e))
       // Code to retrieve Active Park Locations

        // At the initial load and subsequent value changes, get a snapshot of the stored data.
         //This function allows you to update your page in real-time when the firebase database changes.
/*     database.ref("/dogday").on("child_added", function (snapshot) {

         Set the variables equal to the stored values.
    parkName = snapshot.val().parkName;
    parkLocation = snapshot.val().parkLocation;
    startTime = snapshot.val().startTime;
    endTime = snapshot.val().endTime;
    dogName = snapshot.val().dogName;
    dogBreed = snapshot.val().dogBreed;
    dogAge = snapshot.val().dogAge;
    }); */



        