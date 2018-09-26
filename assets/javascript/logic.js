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

        $("#submit").on('click', function(e){
            e.preventDefault();
            console.log("event click: ", e);
            $('#page4').addClass("hide");
            $('#page3').removeClass("hide");

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

    function parkList (latlong){
		//Generate key request for JSON object list of parks
    let latLngUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
    latLngUrl += '?' + $.param({
       'key': "AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI",
       'location': latlong,//your long/lat go here
       'rtype': "park",
       'rankby': "distance",
       'name': "park"
    }); 

    $.ajax({
        url: latLngUrl,
        method: 'GET',   
        async: true,
            //we store the retrieved data in an object called "result"
    }).done(function (result) {	  
        console.log("our url to send to places is "+ latLngUrl);
        	//Code to console log data of nearby parks
        console.log(result);

            //grab and console log out name of park #2 as a test
		let name = result.results[1].name;
    		console.log(name);
    		//grab and console log out Place ID of park #2 as a test
    	place_id = result.results[1].place_id;
    		console.log(place_id);
    		 //grab and console log out Address of park #2 as a test
    	address = result.results[1].vicinity;
    		console.log(address);

		let i=2;
		console.log("Inactive Place ID: " + result.results[i].place_id);
		printInactiveParks(i, result);

    		//Input Park List into Firebase so we can access it easier??  
		database.ref("/parks").set({
			parkListObject: result
		});

//***parse results or loop through results and render map      

    }).fail(function (err) {
        throw err;
    });
}
    
    // --------------------------------------------------------------
//***Function to make Inactive Park List and present it

function printInactiveParks (i, result) {

    //report which the index number of the current park
console.log("Park Index #: " + i);

//***grab and console log out Place ID of park
//  	place_id = result.results[i].place_id;
    // console.log("Inactive Place ID: " + place_id);

//***grab and console log out name of park
for (var j=0; j<5; j++) { 
  name = result.results[j].name;
          console.log("Inactive Place ID: " + result.results[j].name);
      // Then dynamically generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      // Creating an element to have the name displayed
  let parkName = $("<button>");
        // Adding a class of movie-btn to our button
    parkName.addClass("parkbutton");
    parkName.addClass("btn");
      // Adding a data-attribute
parkName.attr("data-name", name);
      // Providing the initial button text
parkName.text(name);
    //Adding the button to the buttons-view div
  $("#inactive").append(parkName);

//***grab and console log out Place ID of park
  let place_id = result.results[j].place_id;
      console.log(place_id);
      // Adding a data-attribute
parkName.attr("data-ID", place_id);
}




//adding pup info
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
};


// --------------------------------------------------------------
	//code to get current time so that users with less then 15 min on the clock will be excluded
		// Current Time
	let currentTime = moment();
	let currentTimeM = moment(currentTime).format("HH:mm a");
	let currentTimeU = moment(currentTime).format("X");
		console.log("Current M Time: " + currentTimeM);
		console.log("Current U Time: " + currentTimeU);

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
        $("#zipbutton").on("click", function (zip){
            zip.preventDefault(); 
            let zipInput = $("#zip").val().trim();

            let url = "https://maps.googleapis.com/maps/api/geocode/json";
            url += '?' + $.param({
               'key': "AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI",
               'address': zipInput,
               'async': true
        
            });
	       $.ajax({
	           url: url,
               method: 'GET',   
               async: true,
	       }).done(function (result) {
               userLL = result.results[0].geometry.location.lat+","+result.results[0].geometry.location.lng;
               parkList(userLL);
      

	       }).fail(function (err) {
	           throw err;


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

        });
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



