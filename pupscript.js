/* 
STUFF THE HTML FILES WILL NEED

id="zipbutton" for the submit button for the zip code
id="zip" for the inputed zip code form

id="active" this is where the parks with dogs will show up.

id="inactive" this is where the parks with no dogs will show up.

class="parkbutton" this class should be attached to the select button for each park.  

id="dogdaybutton" for the submit button for the user's time and dog info

id="start" for the inputed arrival time form
id="end" for the inputed end time form
id="dogName" for the name of dog form
id="dogBreed" for the name of dog breed form

*/


	//load Jqery stuff
$(document).ready(function () {

		// Initialize Firebase
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

		// Initial Values
	let zip = "";
	let parkName = "";
	let parkLocation = "";
	let startTime = "";
	let endTime = "";
	let dogName = "";
	let dogBreed = "";

	// --------------------------------------------------------------

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


	// --------------------------------------------------------------

		//Code to collect Zip Code
		// Whenever a user clicks the submit button
	$("#zipbutton").on("click", function (event) {
		event.preventDefault();

		zip = $("#zip").val().trim();
		zip = parseInt(zip);
			console.log("User's zip is " + zip);

		// Save the new data in Firebase. This will cause our "value" callback above to fire and update the UI.
			//not sure if we need to store this in Firebase or not???  
/*		database.ref("/zip").push({
			zip: zip,
		});
*/
	});

	// --------------------------------------------------------------

//Code to pull addresses of nearby parks

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

//Code to compare locations on list to Active Park List
	//should exclude ones with less then 15 min on time?

		// Current Time
	let currentTime = moment();
	let currentTimeM = moment(currentTime).format("HH:mm");
	let currentTimeU = moment(currentTime).format("X");
		console.log("Current M Time: " + currentTimeM);
		console.log("Current U Time: " + currentTimeU);

		// First Time
	startTime = moment(startTime, "hh:mm a")
	startTimeU = moment(startTime, "X")
		console.log("Start Time: " + startTime);

	if (currentTimeU <= endTimeU - 900) {
		console.log("keeper");

	}

//Code to delete expired users?
	else if (currentTimeU > endTimeU - 900) {
//delete object
		console.log("delete");

	}

//Code to make Active Park List and present it
	//with links to that parks' Google Map / Google Locations page

//Code to make Inactive Park List and present it
	//with links to that parks' Google Map / Google Locations page

//Sample array of parks
let parks = ["ChIJ7dYj-ahOW4YR9CpbJzUobp4", "ChIJsfdtb3NJW4YRBKOsEYLvMU8", "ChIJU5lYru03W4YRD0Uk-f1m0zA", "ChIJA8_mGihJW4YRtjhgLrRTGk0", "ChIJ7dYj-ahOW4YR9CpbJzUobp4"];


    	// displayParks function re-renders the HTML to display the list of Parks
    function displayParks() {

//code to create request to google locations.  
/*

1st call: Using a given zipcode, pull latitude and longitude:

https://maps.googleapis.com/maps/api/geocode/json?address=ZIPCODEHERE&key=APIKEY
Example:
https://maps.googleapis.com/maps/api/geocode/json?address=78736&key=AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI

2nd call:
Once Longitude and Latitude are collected, use this call to find parks closest to your location:
https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=LONGITUDE,LATITUDE&rtype=park&key=APIKEY&name=park&rankby=distance
Example:
https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.25208559999999,-97.9483898&rtype=park&key=AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI&name=park&rankby=distance

3rd call:
If a park exists, then collect the places ID. To retrieve a place by ID:
https://maps.googleapis.com/maps/api/place/details/json?key=APIKEY=PLACEID
Example:
https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI&placeid=ChIJsfdtb3NJW4YRBKOsEYLvMU8

        let park = $(this).attr("data-name");

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
*/

		let location = results[i].photos.place_id

		if (location === locationActive) {
// code for Active Parks
		};

		else {

          // Creating a div to hold the park
          let iparkDiv = $("<div class='ipark'>");

          // Storing the name data
          let name = results[i].name;

          // Creating an element to have the name displayed
          let parkName = $("<button>").text(name);

          // Displaying the park name
          iparkDiv.append(parkName);

          // Retrieving the address for the park
          let address = results[i].vicinity;

          // Creating an element to hold the address
          let addressOut = $("<p>").attr(address);

          // Appending the address
          iparkDiv.append(addressOut);

          // Putting the entire park below the previous park
          $("#inactive").append(iparkDiv);

		};

        });

      }



	// --------------------------------------------------------------

//Code to store the location picked by user.  

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


//Code that presents links to that parks' Google Map / Google Locations page

//Code to present available dog and other user end time at active park

		let dogName = ________________
			console.log("Waiting Dog" + dogName);
		$(".needfriend").text(dogName + "needs a friend!");

		let endtime = ________________
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

		// --------------------------------------------------------------
		// Calculate the minutes until arrival using hardcore math



		// First Time
		launchTime = moment(launchTime, "HH:mm")
		console.log(launchTime);

		//convert start time to unix time
		let launchTimeM = moment(launchTime).format("HH:mm");
		let launchTimeU = moment(launchTime).format("X");
		console.log("Launch M Time: " + launchTimeM);
		console.log("Launch U Time: " + launchTimeU);

		if (launchTimeU < currentTimeU) {
			console.log("SHIP ALREADY LAUNCHED!");

			// Difference between the times
			let timeDiff = moment().diff(moment(launchTime));
			//console.log(timeDiff);
			console.log("*How Long Ago U: " + moment(timeDiff).format("X"));
			// Calculate the minutes till arrival: take the current time in unix subtract the lauch time 
			let timeDiffU = currentTimeU - launchTimeU;
			console.log("*How Long Ago U check: " + timeDiffU);

			//convert duration to unix time
			duration = parseInt(duration);
			console.log(duration);
			let durationU = duration * 60
			console.log(durationU);
			let durationUcheck = moment(durationU, 'X').format("m");
			console.log("Duration check U: " + durationUcheck);

			let durationMJS = duration * 60000
			console.log(durationMJS);
			let durationMJScheck = moment(durationMJS).format("m");
			console.log("Duration check MJS: " + durationUcheck);

			// find the modulus between the difference and the frequency.
			let remainderTime = timeDiff % durationMJS;
			let remainderTimeU = timeDiffU % durationU;
			console.log("Remainder Time: " + remainderTime);
			console.log("Remainder U Time: " + remainderTimeU);

			//figure out ETA
			eta = durationMJS - remainderTime;
			//let etaU = durationU - remainderTimeU;
			etaM = moment(new Date(eta)).format("m");
			//let etaMU = etaU / 60;
			//etaMU = Math.round(etaMU);
			console.log("ETA: " + etaM);
			//console.log("ETA U: " + etaMU);

			// To calculate the arrival time, add the eta to the current time
			nextArrival = moment().add(eta);
			//nextArrivalU = moment().add(etaU);
			nextArrivalM = moment(nextArrival).format("HH:mm")
			console.log(nextArrivalM);

		}

		else {
			console.log("SHIP NOT LAUNCHED YET!");

			nextArrivalM = moment(launchTime).format("HH:mm");
			console.log("*Will Launch on: " + nextArrivalM);

			eta = currentTimeU - launchTimeU;
			etaM = -1 * eta / 60;
			etaM = Math.round(etaM);
			console.log("*How Long to wait: " + etaM);

		};

		//console.log(starship);
		//console.log(registery);
		//console.log(starbase);
		//console.log(duration);
		//console.log(nextArrivalM);
		//console.log("*How Long to wait: " + etaM);

		let tableHtml = $("<tr>");
		let shipHtml = $("<td>").text("USS " + snapshot.val().starship);
		let registeryHtml = $("<td>").text("NCC-1" + snapshot.val().registery);
		let starbaseHtml = $("<td>").text(snapshot.val().starbase);
		let durationHtml = $("<td>").text(snapshot.val().duration + " Minutes");
		let nextArrivalHtml = $("<td>").text(nextArrivalM);
		let etaHtml = $("<td>").text(etaM + " Minutes");

		tableHtml.append(shipHtml).append(registeryHtml).append(starbaseHtml).append(durationHtml).append(nextArrivalHtml).append(etaHtml);

		$("#fleet").append(tableHtml);

		// If any errors are experienced, log them to console.
	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
	});

	$("#reset").on("click", function (event) {
		event.preventDefault();

		let audioElement = document.createElement("audio");
		audioElement.setAttribute("src", "assets/sound/restart.mp3");
		audioElement.play();

		setTimeout(function () {

			window.location.reload(false);


		}, 3000);


	});

});








