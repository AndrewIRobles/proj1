/* 

NOTE the expression *** denotes a place where code needs to be added or completed.  

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
  
$(document).ready(function () {

  $('#pagetwo').addClass("hide");
  $('#pageone').removeClass("hide");
  $("#page4").addClass("hide");
  $("#page3").addClass("hide");
  
  zipSearch = $("#zipbutton").on('click', function(e) {
      $('#pageone').addClass("hide");
      $('#pagetwo').removeClass("hide");
  });
  
  console.log(zipSearch);

  puppiedPark = $("#view-park-2").on('click', function(e) {
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
      
		// Set up variables
	let zip = "";
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
	});

// --------------------------------------------------------------

/*
//***code to create request to google locations.  
//***Code to pull addresses of nearby parks

		//this is API Key
	let apiKey = "***";

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

//***we store the retrieved data in an object called "Response"

*/

//Function to make Inactive Park List and present it

	const getLocationZip = zip => {
		let queryURL = "***zip***"
		$.get(queryURL)

			//we store the retrieved data in an object called Response
		.then(response => {

			console.log("Inactive Place ID: " + ***response.results[i].photos.place_id***);
			console.log("Inactive Name: " + ***response.results[i].name***);
			console.log("Inactive Address: " + ***response.results[i].vicinity***);

          // Creating a div to hold the park
          let iparkDiv = $("<div class='ipark'>");

          // Storing the name data
          let name = ***results[i].name***;

          // Creating an element to have the name displayed
          let parkName = $("<button>").text(name);

//*** need to figure out how to embed the "parkbutton" class into the buttons for each location.   

          // Displaying the park name
          iparkDiv.append(parkName);

          // Retrieving the address for the park
          let address = ***results[i].vicinity***;

          // Creating an element to hold the address
          let addressOut = $("<p>").attr(address);

          // Appending the address
          iparkDiv.append(addressOut);

          // Putting the entire park below the previous park
          $("#inactive").append(iparkDiv);

//***with links to that parks' Google Map / Google Locations page??

		});
	}
	
//***Function to make Active Park List and present it

	const getLocationID = place_id => {
		let queryURL = "***place_id***"
		$.get(queryURL)

			//we store the retrieved data in an object called Response
		.then(idResponse => {

			console.log("Active Place ID: " + ***idResponse.results.photos.place_id***);
			console.log("Active Name: " + ***idResponse.results.name***);
			console.log("Active Address: " + ***idResponse.results.vicinity***);

          // Creating a div to hold the park
          let aparkDiv = $("<div class='apark'>");

          // Storing the name data
          let name = ***idResponse.results.name***;

          // Creating an element to have the name displayed
          let parkName = $("<button>").text(name);

//*** need to figure out how to embed the "parkbutton" class into the buttons for each location.   

          // Displaying the park name
          aparkDiv.append(parkName);

          // Retrieving the address for the park
          let address = ***idResponse.results[i].vicinity***;

          // Creating an element to hold the address
          let addressOut = $("<p>").attr(address);

          // Appending the address
          aparkDiv.append(addressOut);

          // Putting the entire park below the previous park
          $("#active").append(aparkDiv);

//***with links to that parks' Google Map / Google Locations page

	};

// --------------------------------------------------------------

//TEST FILE OF LOCATIONS TO CHECK OTHER CODING...

response = 
{
   "results" : [
         "geometry" : {
            "location" : {
               "lat" : 30.2010375,
               "lng" : -97.8872519
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 30.20238732989272,
                  "lng" : -97.88590207010728
               },
               "southwest" : {
                  "lat" : 30.19968767010728,
                  "lng" : -97.88860172989273
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
         "id" : "3435d89d03f07ee0813bb1e4cc13d6ac135faca4",
         "name" : "Circle C Ranch Metropolitan Park on Slaughter Creek",
         "opening_hours" : {
            "open_now" : true
         },
         "photos" : [
            {
               "height" : 2988,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/104798857500405536211/photos\"\u003eA Google User\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAB_ntWVkRtDarCyY_CeBrQF0vTeH_9DonpcBxne9GTDEnjYIwkHDgfZbswjsq-Z_nAB3mX7_bql739v_X3xDYVTd20RhiOs9NaSBoEVmVeMLuhkTjUj1wp38Fsp5jm_U1EhCWE3R8ZjmBN_qvIgF-U8XAGhTGJSXGCK0k_MnvRUJakw1sVYN7uA",
               "width" : 5312
            }
         ],
         "place_id" : "ChIJ7dYj-ahOW4YR9CpbJzUobp4",
         "plus_code" : {
            "compound_code" : "6427+C3 Austin, Texas",
            "global_code" : "86246427+C3"
         },
         "rating" : 4.5,
         "reference" : "ChIJ7dYj-ahOW4YR9CpbJzUobp4",
         "scope" : "GOOGLE",
         "types" : [ "park", "point_of_interest", "establishment" ],
         "vicinity" : "6301 W Slaughter Ln, Austin"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 30.2373311,
               "lng" : -97.8915186
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 30.23878472989272,
                  "lng" : -97.89046517010729
               },
               "southwest" : {
                  "lat" : 30.23608507010727,
                  "lng" : -97.89316482989273
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
         "id" : "efb9829974eaaba6ab513b096a3a9d5afd7eccd1",
         "name" : "Windmill Run Park",
         "opening_hours" : {
            "open_now" : false
         },
         "photos" : [
            {
               "height" : 2988,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/103884111252669464414/photos\"\u003eJeff Crockett\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAqky4mbtn1tQnisw2kfMnY0rRptpBbe-9E4vvjV9_Bd6S_SK_i4h0zkfdPPzV6PV55JC2u47Oy3872_ta9cmG6BmaPdq7MRkNN2IbgQYjOXwtCIYcZxKtlMmlrAFWGWg_EhB5hSkc8jCw8e-MxLD6AI4xGhTB7JcPtReHDWIaatbgUQPygutqFw",
               "width" : 5312
            }
         ],
         "place_id" : "ChIJsfdtb3NJW4YRBKOsEYLvMU8",
         "plus_code" : {
            "compound_code" : "64P5+W9 Austin, Texas",
            "global_code" : "862464P5+W9"
         },
         "rating" : 4.7,
         "reference" : "ChIJsfdtb3NJW4YRBKOsEYLvMU8",
         "scope" : "GOOGLE",
         "types" : [ "park", "point_of_interest", "establishment" ],
         "vicinity" : "8100 Kirkham Dr, Austin"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 30.3064174,
               "lng" : -97.947198
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 30.30776722989272,
                  "lng" : -97.9458481701073
               },
               "southwest" : {
                  "lat" : 30.30506757010728,
                  "lng" : -97.94854782989273
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
         "id" : "92b7c25618fa864727098b5a8f50a56a66cb5919",
         "name" : "Bee Cave Sculpture Park",
         "opening_hours" : {
            "open_now" : true
         },
         "photos" : [
            {
               "height" : 3024,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/100157140472726497814/photos\"\u003eCendy Prator\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAmqKsn2ytD32jiw7Hop1GjEhWhgu23lYx39zpGF_PRF5xiIWwBnDg_uRfwBgOiOc5mxmDAJQal8jiH4zvjqkc8NjZdKA_GceIocSphz5RvOeHVvVDdFmpm9_Le43h8S4_EhCfH2o286-scmuIX1d5qJB2GhTHlzev0n4JA2FBtcBwLA2Q1qWEIQ",
               "width" : 4032
            }
         ],
         "place_id" : "ChIJU5lYru03W4YRD0Uk-f1m0zA",
         "plus_code" : {
            "compound_code" : "8343+H4 Bee Cave, Texas",
            "global_code" : "86248343+H4"
         },
         "rating" : 4.5,
         "reference" : "ChIJU5lYru03W4YRD0Uk-f1m0zA",
         "scope" : "GOOGLE",
         "types" : [ "park", "point_of_interest", "establishment" ],
         "vicinity" : "13333 TX-71, Bee Cave"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 30.2080046,
               "lng" : -97.91376
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 30.20909632989272,
                  "lng" : -97.91244847010728
               },
               "southwest" : {
                  "lat" : 30.20639667010728,
                  "lng" : -97.91514812989273
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
         "id" : "c2076c9873637621e716aa7adf69c7622ed2cb2c",
         "name" : "Lewis Mountain Ranch Neighborhood Park",
         "opening_hours" : {
            "open_now" : true
         },
         "place_id" : "ChIJA8_mGihJW4YRtjhgLrRTGk0",
         "plus_code" : {
            "compound_code" : "635P+6F Lewis Mountain Ranch, Texas",
            "global_code" : "8624635P+6F"
         },
         "rating" : 5,
         "reference" : "ChIJA8_mGihJW4YRtjhgLrRTGk0",
         "scope" : "GOOGLE",
         "types" : [ "park", "point_of_interest", "establishment" ],
         "vicinity" : "8206 Lewis Mountain Dr, Austin"
      }

}

response1 = JSON.parse(response); 
		console.log("Place ID: " + response[0].photos.place_id);
		console.log("Name: " + response[0].name);
		console.log("Address: " + response[0].vicinity);


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

//Code to compare locations on list to Active Park List

		// Start Time
	startTime = moment(startTime, "hh:mm a")
	startTimeU = moment(startTime, "X")
		console.log("Start Time: " + startTime);

		// End Time
	endTime = moment(endTime, "hh:mm a")
	endTimeU = moment(endTime, "X")
		console.log("End Time: " + endTime);

		//loop to go through every available park
	for (let i = 4; i >= 0; i--) {

			//loop to go through every active user
		for (let j = ***OBJECTOFUSERS*** .length - 1; j >= 0; j--) {

				//grabs the place_id of the current location 
			let locationParks = ***results[i].photos.place_id***

				//if the pulled location and and active location match then this triggers
			if (locationParks === ***[j]parkLocation*** ) {

					//if time hasn't expired on potential customer
				if (currentTimeU <= endTimeU - 900) {
					console.log("ACTIVE");

						//function to print Active parks to the screen 
					getLocationID("parkLocation");
				}
					//Code to delete expired users
				else  {
//***delete user object code goes here
					console.log("Expired / Delete");
			}
				//if the the current pulled park is inactive then this prints it to the correct div
			else {
					//function to print Inactive parks to the screen 
				getLocationZip("Zip");
			};
		};
	}

// --------------------------------------------------------------

//Code to store the location picked by user.  
	//RESEARCH THE UPDATE NOTATION FOR FIREBASE

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
		let queryURL = "____________place_id__________"
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


		// If any errors are experienced, log them to console.
	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
	});

*/








