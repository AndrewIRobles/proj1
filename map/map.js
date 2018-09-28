// NOTE the expression *** denotes a place where code needs to be added or completed.  
// STUFF THE HTML FILES WILL NEED
// class="zipdiv" class that shows or hides the zip code input at appropriate time
// class="listdiv" class that shows or hides the lists of parks at appropriate time
// class="userdiv" class that shows or hides the add user input forms
// id="zipbutton" for the submit button for the zip code
// id="zip" for the inputed zip code form
// id="mapdiv" ID where map will go.   
// id="active" this is where the parks with dogs will show up.
// id="inactive" this is where the parks with no dogs will show up.
// class="parkbutton" this class should be attached to the select button for each park.  
// id="dogdaybutton" for the submit button for the user's time and dog info
// id="startH" for the inputed arrival time Hours form
// id="startM" for the inputed arrival time Minutes form
// id="endH" for the inputed end time Hours form
// id="endM" for the inputed end time Minutes form
// id="dogName" for inputed name of dog form
// id="dogBreed" for inputed breed of dog breed form
// id="dogAge"for inputed age of dog breed form
// // --------------------------------------------------------------
// OUTLINE OF HOW CODE IS LAID OUT
//Initialize Firebase
//set up variables
//Code to collect Zip Code
//Code to converts zip to Latitude and Longitude
    // Calls function to convert that to Park List
//function to retrieve a list of parks
//function to print an Inactive Park to html
//Code to retrieve Active Park Locations
//Code to retrieve current date and time
//Code to compare Park List to Active Park List
    //should exclude ones with less then 15 min on time?
//function to print an Active Park to html
//Code to store the location picked by user.  
    //with links to that parks' Google Map / Google Locations page
//Code to collect data of new user and upload to Firebase
//Code to delete expired users?
//Code to present available dog at active park
//Code to factoids and pics of available dog. 

    //load Jqery stuff
//$(document).ready(function () {
    markerArray = []; 
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
// --------------------------------------------------------------
        //switch things on and off
    $(".zipdiv").show();
    $(".listdiv").hide();
    $(".userdiv").hide();
        // Set up variables
    let zip = "";
    let numberOfParks = 10;
    let name = "";
    let response = "";
    let parkName = "";
    let parkLocation = "";
    let startTime = "";
    let endTime = "";
    let dogName = "";
    let dogBreed = "";
//--CODE TO TAKE ZIP AND FIND LAT AND LONG AND TRIGGER SUBEQUENT STUFF-------/
        //Setting up URL for ZIPCODE
        //Code to collect Zip Code whenever a user clicks the submit button  
    $("#zipbutton").on("click", function (zip){
            zip.preventDefault(); 
            let zipInput = $("#zip").val().trim();
                //code to create request to google locations and Generate key request for Latitude and Longitude
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
                    //Latitude and Longitude results!
                userLL = result.results[0].geometry.location.lat+","+result.results[0].geometry.location.lng;
               console.log("User lat and long: ",userLL)
            $(".zipdiv").hide();
            $(".listdiv").show();
                    // Once Longitude and Latitude are collected, use this function (from above) to find parks closest to your location:
                parkList(userLL);
           }).fail(function (err) {
               throw err;
           });
          // return userLL;
         
    });
//------------- PARK LIST Function START  --------------------------/
        // Once Longitude and Latitude are collected, use this function to find parks closest to your location:
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
        loopAllParks(result);
            //Input Park List into Firebase so we can access it easier??  
        database.ref("/parks").set({
            parkListObject: result
        });
//***parse results or loop through results and render map      
    }).fail(function (err) {
        throw err;
    });
}
//----- PARK LIST END  -----------------------------/
//---------Quick and Dirty Loop for printing 
    function loopAllParks (result) {
            //loop to go through every available park
        for (let i = 0; i <= numberOfParks - 1; i++) {
            printInactiveParks(i, result);
        };
    };
//------Function to make Inactive Park List and present it-------
    function printInactiveParks (i, result) {
            //report which the index number of the current park
        console.log("Park Index #: " + i);
            //grab and console log out name of park
        name = result.results[i].name;
            console.log("Inactive Park Name: " + result.results[i].name);
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
            //grab and console log out Place ID of park
        let selectedParkObj = JSON.stringify(result.results[i]);
            console.log("Below is Park Object"); 
            //console.log(selectedParkObj);
            //Adding a data-attribute with the place ID.  
        parkName.attr("data-id", selectedParkObj);
            //test to see if it works
        //let value = $(parkName).attr("data-id")
            //console.log("Retrieved Place ID " + value)
            //grab and console log out Place ID of park
        let placeLL = result.results[i].geometry.location;
            console.log("Inactive Park Latitude/Longitude below");
            console.log(placeLL);
            //Adding a data-attribute with the place ID.  
        parkName.attr("data-ll", placeLL);
            //test to see if it works
            valuell = $(parkName).attr("data-ll");
            console.log(valuell);
            //Grabbing and console logging the address data
        let address = result.results[i].vicinity;
            console.log("Inactive Park Address: " + address);
            // Creating an element to have the name displayed
        let addressOut = $("<p>");
            // Adding a data-attribute
        addressOut.attr("data-address", address);
            // Providing the initial button text
        addressOut.text(address);
            //Adding the button to the buttons-view div
        $("#inactive").append(addressOut);
            //Code to store the location picked by user.  
        $(".parkbutton").on("click", function(e){
            event.preventDefault();
            $(".userdiv").show();
            $(".listdiv").hide();
            showMap();

/*

//***grab park info for submissionf
            parkName = parkName;
                console.log("Park picked is " + parkName);
            parkLocation = parkLocation;
            parkLatLong = ;
*/
            console.log("park button info: ", e.currentTarget.dataset.id);
            
            let selectedParkLL = JSON.parse(e.currentTarget.dataset.id);
            markerArray.push(selectedParkLL);
            createMarker(markerArray);
        });
//----------------------------------------------------------------
/*
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
*/ 
//Code that presents links to that parks' Google Map / Google Locations page
//***with links to that parks' Google Map / Google Locations page??
    }; //close for print inactive parks
        //Initialize Map
        function showMap(){
    let map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 30.2672, lng: -97.7431},
        zoom: 8,
        disableDefaultUI: true,
      });
    }; // ENDS initMap
  }; // ENDS showMap


        //Code to present choosen park on map.  
    function createMarker(){
      // $("#map").attr("id", "width: 50%");
      // $("#map").attr("id", "height: 50%");
      console.log("markerarray", markerArray[0])
      for (i=0; i<markerArray.length; i++){
        let marker = new google.maps.Marker({
          position: markerArray[i].geometry.location,
          map: map,
          title: markerArray[i].name
        });
      }
    }
// -----Code to get current time --------------------------------
        // Current Time
    // let currentTime = moment();
    // let currentTimeM = moment(currentTime).format("MM DD hh:mm a");
    // let currentTimeU = moment(currentTime).format("X");
    //     console.log("Current Time: " + currentTimeM);
    //     console.log("Current Unix Time (sec): " + currentTimeU);
//   }); // ENDS doc.ready
