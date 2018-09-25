/*TE the expression *** denotes a place where code needs to be added or completed.  
STUFF THE HTML FILES WILL NEED
id="zipbutton" for the submit button for the zip code
id="zip" for the inputed zip code form
id="active" this is where the parks with dogs will show up.
id="inactive" this is where the parks with no dogs will show up.
class="parkbutton" this class should be attached to the select button for each park.  
id="dogdaybutton" for the submit button for the user's time and dog info
id="start" for the inputed arrival time form
id="end" for the inputed end time form
id="dogName" for inputed name of dog form
id="dogBreed" for inputed breed of dog breed form
id="dogAge"for inputed age of dog breed form
// --------------------------------------------------------------
OUTLINE OF HOW CODE IS LAID OUT
//Code to collect Zip Code
//Code to pull addresses of nearby parks
//Code to retrieve Active Park Locations
//Code to compare locations on list to Active Park List
	//should exclude ones with less then 15 min on time?
//Code to make Active Park List and present it
//Code to make Inactive Park List and present it
//Code to store the location picked by user.  
	//with links to that parks' Google Map / Google Locations page
//Code to collect data of new user and upload to Firebase
//Code to delete expired users?
//Code to present available dog at active park
//Code to factoids and pics of available dog. 
*/

	//load Jqery stuff
$(document).ready(function () {

		// Initialize Firebase
	let config = {
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

		// Set up variables
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

// --------------------------------------------------------------

//***code to create request to google locations.  

let userLL;

		//Generate key request for Latitude and Longitude
	let url = "https://maps.googleapis.com/maps/api/geocode/json";
	url += '?' + $.param({
	   'key': "AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI",
	   'address': "zip"
	});
	$(document).ready(function () {
	       $.ajax({
	           url: url,
	           method: 'GET',
	       }).done(function (result) {
	           console.log(result);	           
               userLL = this.result.results[0].geometry.location;
               console.log("User lat and long: ", userLL);
              return userLL;

	       }).fail(function (err) {
	           throw err;
	       });
	       return userLL;
	});

    console.log("User lat and long 2: ", userLL);

		// Once Longitude and Latitude are collected, use this call to find parks closest to your location:
		// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=LONGITUDE,LATITUDE&rtype=park&key=APIKEY&name=park&rankby=distance
		// Example:
		// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.25208559999999,-97.9483898&rtype=park&key=AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI&name=park&rankby=distance

		//need to have these in the following format latitude,longitude
	userLL="30.25208559999999,-97.9483898";
		// Once Longitude and Latitude are collected, use this call to find parks closest to your location:
		//***Generate key request for JSON object list of parks
	let latLngUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
	latLngUrl += '?' + $.param({
	   'key': "AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI",
	   		//your long/lat go here
	   'location': userLL,
	   'rtype': "park",
	   'rankby': "distance",
	   'name': "park"
	});

	console.log(latLngUrl);

	$(document).ready(function () {
	   $.ajax({
	       url: latLngUrl,
	       method: 'GET',
	       //we store the retrieved data in an object called "result"
	   }).done(function (parkList) {
				//Code to console log data of nearby parks
	       	console.log(parkList);
//***test data extraction
// research https://codeburst.io/using-javascript-variables-as-object-keys-c191e2458fa3
		    let name = parkList.results[1].geometry.name;
		    console.log("Name of 2nd Park: ", name);

	   }).fail(function (e) {
	       throw e;
	   });

	});
	});


//***Function to make Inactive Park List and present it

	function printInactiveParks (i) {

		console.log("Inactive Place ID: " + parkList.results[i].photos.place_id);
		console.log("Inactive Name: " + parkList.results[i].name);
		console.log("Inactive Address: " + parkList.results[i].vicinity);

      		// Grabbing the name data
      	let name = results[i].name;
		  	// Then dynamically generating buttons for each movie in the array
		  	// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          	// Creating an element to have the name displayed
      	let parkName = $("<button>");
				// Adding a class of movie-btn to our button
			parkName.addClass("parkbutton");
		  	// Adding a data-attribute
		parkName.attr("data-name", name);
		  	// Providing the initial button text
		parkName.text(name);
			//Adding the button to the buttons-view div
  		$("#inactive").append(parkName);

      		// Grabbing the address data
      	let address = results[i].vicinity;
//***with links to that parks' Google Map / Google Locations page
          	// Creating an element to have the name displayed
      	let addressOut = $("<p>");
		  	// Adding a data-attribute
		addressOut.attr("data-address", address);
		  	// Providing the initial button text
		addressOut.text(address);
			//Adding the button to the buttons-view div
  		$("#inactive").append(addressOut);
  			//get the place_id
      	let place_id = results[i].place_id;
		  	// Adding a data-attribute
		place_id.attr("data-ID", place_id);
		$("#inactive").append(place_id);
	};  		


//***with links to that parks' Google Map / Google Locations page??

		//***Function to make Active Park and present it
	function printActivePark (place_id) {

/*
3rd call:
If a park exists, then collect the places ID. To retrieve a place by ID:
https://maps.googleapis.com/maps/api/place/details/json?key=APIKEY=PLACEID
Example:
https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI&placeid=ChIJsfdtb3NJW4YRBKOsEYLvMU8
*/

			//need to have these in the following format - this is example
		place_id = "***ChIJA8_mGihJW4YRtjhgLrRTGk0***";
			//***Generate key request for JSON object list of parks
		let parkIDUrl = "***";
		parkIDUrl += '?' + $.param({
		   'key': " *** ",
		   		//your place_id goes here
		   'location': place_id,
		});
			console.log(parkIDUrl);
		$(document).ready(function () {
		   	$.ajax({
		       url: parkIDUrl,
		       method: 'GET',
		       //***we store the retrieved data in an object called "result"
		   	}).done(function (activePark) {
		   			//***Code to console log data of nearby parks
		       	console.log(activePark);
				    //test data extraction
			    let name = activePark.results[0].geometry.name;
			    console.log("Name of Active Park: ", name);

			   }).fail(function (e) {
			       throw e;
			   });

				console.log("Active Name: " + activePark[0].results.name);
				console.log("Active Address: " + activePark[0].results.vicinity);

		      		// Grabbing the name data
		      	let name = activePark[0].results[i].name;
				  	// Then dynamically generating buttons for each movie in the array
				  	// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
		          	// Creating an element to have the name displayed
		      	let parkName = $("<button>");
					// Adding a class of movie-btn to our button
				parkName.addClass("parkbutton");
				  	// Adding a data-attribute
				parkName.attr("data-name", name);
				  	// Providing the initial button text
				parkName.text(name);
					//Adding the button to the buttons-view div
		  		$("#active").append(parkName);
		      		// Grabbing the address data
		      	let address = activePark[0].results[i].vicinit;
				  	// Then dynamically generating buttons for each movie in the array
				  	// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
		          	// Creating an element to have the name displayed
		      	let addressOut = $("<p>");
//***with links to that parks' Google Map / Google Locations page
				  	// Adding a data-attribute
				addressOut.attr("data-address", address);
				  	// Providing the initial button text
				addressOut.text(address);
					//Adding the button to the buttons-view div
		  		$("#active").append(addressOut);
		  		  	//get the place_id
      			let place_id = results[i].place_id;
		  			// Adding a data-attribute
				place_id.attr("data-ID", place_id);
				$("#active").append(place_id);
		});
	};



// --------------------------------------------------------------

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

		//loop to go through every available park
	for (let i = 0; i <= numberOfParks - 1; i++) {

			//loop to go through every active user
		for (let j = 0; j <= OBJECTOFUSERS.length;; j++) {

				//grabs the place_id of the current location 
			let locationPark = results[i].photos.place_id;

				//if the pulled location and and active location match then this triggers
			if (locationParks === ***[j]parkLocation*** ) {

					//if time hasn't expired on potential customer
				if (currentTimeU <= endTimeU - 900) {
					console.log("ACTIVE");

						//function to print Active parks to the screen 
					printActivePark("locationPark");
				}
					//Code to delete expired users
				else  {
//***delete user object code goes here - see REMOVE function
	Research "Remove"
					console.log("Expired / Delete");
			}
				//if the the current pulled park is inactive then this prints it to the correct div
			else {
					//function to print Inactive parks to the screen 
				printInactiveParks(i);
			};
		};
	}

// --------------------------------------------------------------

//Code to store the location picked by user.  
	//RESEARCH THE "UPDATE" NOTATION FOR FIREBASE
	// For anyone still having trouble with firebase, https://firebase.google.com/docs/reference/js/firebase.database.Reference is probably the single most important page in the documentation.  On the right side of the page under `methods`, you'll find all the things you have access to on any database reference.  It's also where you'll find the `.push()` method.
	//Try RETURNS function for comparing place IDs.  

$(".parkbutton").on("click", function (event) {
		event.preventDefault();

	parkName = "";
	parkLocation = "";
		console.log("Park picked is " + parkName);
		console.log(parkLocation);

		database.ref("/dogday").push({
			parkName: parkName,
			parkLocation: parkLocation,
		});
	});

	const getLocationID = place_id => {
		let queryURL = "***place_id***"
		$.get(queryURL)

			//we store the retrieved data in an object called Response
		.then(response => {
			console.log("Place ID: " + response.results[i].photos.place_id);
			console.log("Name: " + response.results[i].name);
			console.log("Address: " + response.results[i].vicinity);
		});
	}

		//call function
	getLocationID("place_id");

//Code that presents links to that parks' Google Map / Google Locations page

//Code to present available dog and other user end time at active park

		let dogName = ***
			console.log("Waiting Dog" + dogName);
		$(".needfriend").text(dogName + "needs a friend!");

		let endtime = ***
		endtime = moment(endtime, "hh:mm a")
			console.log("end time of other user: " + endtime);
		$(".endtime").text("Will be there till: " + endtime);


	//Code to collect data of new user and upload to Firebase
$("#dogdaybutton").on("click", function (event) {
		event.preventDefault();

		startTime = $("#start").val().trim();
		endTime = $("#end").val().trim();
		dogName = $("#dogName").val().trim();
		dogBreed = $("#dogBreed").val().trim();
		dogAge = $("#dogAge").val().trim();
			console.log(startTime);
			console.log(endTime);
			console.log(dogName);
			console.log(dogBreed);
			console.log(dogAge);

			// Save the new data in Firebase. This will cause our "value" callback above to fire and update the UI.
		database.ref("/dogday").push({
			startTime: startTime,
			endTime: endTime,
			dogName: dogName,
			dogBreed: dogBreed,
			dogBreed: dogAge,
		});
	});

	// --------------------------------------------------------------

//Code to factoids and pics of available dog. 

		// If any errors are experienced, log them to console.
	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
	});

*/
