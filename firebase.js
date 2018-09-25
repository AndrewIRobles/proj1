

$(document).ready(function() {

let database = firebase.database();
let userLL;

//******** create Map START ************/

//*****create MAP end  *****************/

//***** PARK LIST START  *************************/
function parkList (latlong){
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
    }).done(function (result) {	  
        console.log("our url to send to places is "+ latLngUrl);
        console.log(result);
        //parse results or loop through results and render map      
    }).fail(function (err) {
        throw err;
    });
}

//***** PARK LIST END  *************************/

//Setting up URL for ZIPCODE

    
//ON click, get ZIpCO    
    $("#submit").on("click", function (zip){
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
          // return userLL;
          
   
	});


}); // ENDS doc.ready



//////////////////////////////////////////////////// GOOGLE PLACES API CALL /////////////////////////////////////////////////////////////
// $(document).ready(function () {

//     let key = "AIzaSyDe61mS8pbcKlszRDS-x3rnM92ygstGBi8";
//     let queryURL = "https://maps.googleapis.com/maps/api/geocode/json?" + key + "&address=Bangor,Austin,TX,78758,USA";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {
//         console.log("response object: ", response);
//     });

// }); // ENDS document.ready

    
///////////////////////////////////////////////////////ANOTHER WAY OF TRYING IT //////////////////////////////////////////////////////////
    // var place = "Bangor,Austin,TX,78412, USA";


    // async function userLL(address) {
    //     let key = "AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI";
    //     let queryURL = "https://maps.googleapis.com/maps/api/geocode/json?" + key + "&address=" + address;
    //     let locate = await findGeocode(queryURL);
    //     return locate;
    // };


    // async function findGeocode(queryURL) {
    //     return $.get(queryURL).then(async data => {
    //         let location = data.results[0].geometry.location;
    //         let latitude = data.results[0].geometry.location.lat;
    //         let longitude = data.results[0].geometry.location.lng;
    //         let LL = await new google.maps.LatLng(latitude, longitude);
    //         return(LL);
    //     });

    // }
 
     
///////////////////////////////////////////////////////// WEATHER API CALL //////////////////////////////////////////////////////
// $(document).ready(function() {

//     let zipAdded = false;
//     console.log("zip added? ", zipAdded);

//   $("#submit").on("click", function(e) {
//     e.preventDefault();
//     let zip = $("#zip").val().trim();
//     console.log("your zip code: ", zip);

//     if(zip !==""){
//         zipAdded = true;
//         console.log("zip added? ", zipAdded);

//         // CALL API IF ZIP CODE HAS BEEN ADDED //
//         var APIKey = "166a433c57516f51dfab1f7edaed8413";
//         var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&units=imperial&appid=" + APIKey;
//         $.ajax({
//           url: queryURL,
//           method: "GET"
//         }).then(function(response) {
//             console.log("response object: ", response);
//             let temperature = response.main.temp;
//             let roundedT = Math.round(temperature);
//             $("#temp").prepend("<p>" + roundedT + " &#8457;</p>")

//         }); // ENDS fn(response)

//     }; // ENDS if statement to check if a zip code has been entered before placing API call
//     $("#zip").val("");

//   }); // ENDS on("click", fn(e)) 

// }); // ENDS document.readyfn()


