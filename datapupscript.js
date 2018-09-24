
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

/*
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
		for (let j = 0; j <= ***OBJECTOFUSERS*** .length;; j++) {

				//grabs the place_id of the current location 
			let locationPark = ***results[i].photos.place_id***

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
*/
// --------------------------------------------------------------

//Code to store the location picked by user.  
	//RESEARCH THE "UPDATE" NOTATION FOR FIREBASE
	// For anyone still having trouble with firebase, https://firebase.google.com/docs/reference/js/firebase.database.Reference is probably the single most important page in the documentation.  On the right side of the page under `methods`, you'll find all the things you have access to on any database reference.  It's also where you'll find the `.push()` method.
	//Try RETURNS function for comparing place IDs.  

	//Code to collect data of new user and upload to Firebase
$("#dogdaybutton").on("click", function (event) {
		event.preventDefault();

		parkName = $("#parkname").val().trim();
		parkLocation = $("#park_id").val().trim();

		startTime = $("#start").val().trim();
		endTime = $("#end").val().trim();
		dogName = $("#dogName").val().trim();
		dogBreed = $("#dogBreed").val().trim();
		dogAge = $("#dogAge").val().trim();

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
			dogBreed: dogAge
		});

		console.log(data.val());

	// --------------------------------------------------------------

//Code to factoids and pics of available dog. 

		// If any errors are experienced, log them to console.
	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
	});
	});
});









