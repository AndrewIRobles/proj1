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

        //set up variables
        let zip = "";
	let numberOfParks = 5;
	let response = "";
	let parkName = "";
	let parkLocation = "";
	let startTime = "";
	let endTime = "";
	let dogName = "";
    let dogBreed = "";
    
    // --------------------------------------------------------------

    $("#dogdaybutton").on("click", function (event) {
		event.preventDefault();

		let parkName = $("#parkname").val().trim();
		let parkLocation = $("#park_id").val().trim();
		let startTime = $("#start").val().trim();
		let endTime = $("#end").val().trim();
		let dogName = $("#dogName").val().trim();
		let dogBreed = $("#dogBreed").val().trim();
		let dogAge = $("#dogAge").val().trim();

			console.log("Park picked is " + parkName);
			console.log("Start Location ID is " + parkLocation);
			console.log("Start Time is " + startTime);
			console.log("Start Time is " + endTime);
			console.log("Dog Name is " + dogName);
			console.log("Dog Breed is " + dogBreed);
			console.log("Dog Age is " + dogAge);

			// Save the new data in Firebase. This will cause our "value" callback above to fire and update the UI.
		database.ref("/dogday").push({
			parkName: parkName,
			parkLocation: parkLocation,
			startTime: startTime,
			endTime: endTime,
			dogName: dogName,
			dogBreed: dogBreed,
			dogAge: dogAge
		});

		console.log(data.val());

	});
	// --------------------------------------------------------------
		//Code to retrieve Active Park Locations
		// At the initial load and subsequent value changes, get a snapshot of the stored data.
		// This function allows you to update your page in real-time when the firebase database changes.
        database.ref("/dogday").on("child_added", function (snapshot) {

			// Set the variables equal to the stored values.
		parkNameD = snapshot.val().parkName;
		parkLocationD = snapshot.val().parkLocation;
		startTimeD = snapshot.val().startTime;
		endTimeD = snapshot.val().endTime;
		dogNameD = snapshot.val().dogName;
		dogBreedD = snapshot.val().dogBreed;
		dogAgeD = snapshot.val().dogAge;

		console.log("Park picked is D " + parkNameD);
		console.log("Start Location ID is D " + parkLocationD);
		console.log("Start Time is D " + startTimeD);
		console.log("Start Time is D " + endTimeD);
		console.log("Dog Name is D " + dogNameD);
		console.log("Dog Breed is D " + dogBreedD);
		console.log("Dog Age is D " + dogAgeD);

	});
});


// --------------------------------------------------------------
	//code to get current time so that users with less then 15 min on the clock will be excluded
		// Current Time
	let currentTime = moment();
	let currentTimeM = moment(currentTime).format("HH:mm a");
	let currentTimeU = moment(currentTime).format("X");
		console.log("Current M Time: " + currentTimeM);
		console.log("Current U Time: " + currentTimeU);
//***Code to compare locations on list to Active Park List
		// Start Time
	startTime = moment(startTime, "hh:mm a")
	startTimeU = moment(startTime, "X")
		console.log("Start Time: " + startTime);
		// End Time
	endTime = moment(endTime, "hh:mm a")
	endTimeU = moment(endTime, "X")
		console.log("End Time: " + endTime);


		//Code to collect Zip Code
		// Whenever a user clicks the submit button
	$("#zipbutton").on("click", function (event) {
		event.preventDefault();
		zip = $("#zip").val().trim();
		zip = parseInt(zip);
			console.log("User's zip is " + zip);

//*** temp zip to see if program runs.  Delete this to use form zip
zip = 78736;

    });
    
    
        
    
        
    //WEATHER    

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
     //ENDS on("click", fn(e))
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



        