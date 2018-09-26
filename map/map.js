var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.2672, lng: -97.7431},
    zoom: 8
  });
}


//---------------------------------------------------------------------------------- PARK LIST Function START  --------------------------------------------------------------------//

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

  //----------------------------------------Code to collect Zip Code whenever a user clicks the submit button----------------------------------------------------------------//
  $("#zipbutton").on("click", function(zip) {
    zip.preventDefault();
    let zipInput = $("#zip").val().trim();

    //code to create request to google locations and Generate key request for Latitude and Longitude
    let url = "https://maps.googleapis.com/maps/api/geocode/json";
    url += "?" +
      $.param({
        key: "AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI",
        address: zipInput,
        async: true
      });
    $.ajax({
      url: url,
      method: "GET",
      async: true
    }).done(function(result) {
        userLL = result.results[0].geometry.location.lat + "," + result.results[0].geometry.location.lng;
        console.log("User lat and long: ", userLL);

       // Once Longitude and Latitude are collected, use this function (from above) to find parks closest to your location:
        parkList(userLL);

      }).fail(function(err) {
        throw err;
      }); // ENDS fn(err)


  }); // ENDS zip button on click fn
