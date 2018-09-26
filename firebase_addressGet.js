
let database = firebase.database();
let userLL;
let address;
let count=0;
$(document).ready(function() {


function getAddress(long,lat){
    count+=1;
    let longlat=long+","+lat;
   let url="https://maps.googleapis.com/maps/api/geocode/json";
    url += '?' + $.param({
       'key': "AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI",
       //'address': longlat,
       'latlng':longlat,
       'result_type': "street_address",
       'async': true

    });
    console.log("our url to getAddress "+ url);
   $.ajax({
       url: url,
       method: 'GET',   
       async: true,
   }).done(function (result) {
    console.log(count+ "formatted address---" + result.results[0].formatted_address);
    console.log()
   }).fail(function (err) {
       throw err;
   });

};
//***map function start */
/*
function initMap() {
    var myLatlng = {lat: 30.2432962, lng: -97.9009408 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: myLatlng
    });
    /*
var icon = {
url: "tree.png", // url tree.png for parks
scaledSize: new google.maps.Size(25, 25)// scaled size

};
*/
/*
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Dog Park'
      //icon: icon  
     // scaledSize: new google.maps.Size(10, 10 )
       });
       */

    /*

    map.addListener('center_changed', function() {
      window.setTimeout(function() {
        map.panTo(marker.getPosition());
      }, 3000);
    });
    */
/*
    marker.addListener('click', function() {
      map.setZoom(20);
      map.setCenter(marker.getPosition());
    });
    */
 // }
  

//********************* map gunction end */
/*
var request = {
    placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
    fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
  };
  
  service = new google.maps.places.PlacesService(map);
  service.getDetails(request, callback);
  
  function callback(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMarker(place);
    }
  }
  */

  
  
//******** extract each Place ID from JSON result set START ************/
function call_service(id_request) {
    var i, request;

    for(i in id_request.results) {
        /**
         *https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI&location=30.2915328%2C-97.76883579999999&rtypes=park&rankby=distance&type=park
         */
  
        console.log(i+" This is in call_Service "+ id_request.results[i].place_id);
        console.log(i+" This is in call_Service"+ id_request.results[i].geometry.location.lat);
        console.log(i+" This is in call_Service"+ id_request.results[i].geometry.location.lng);
        console.log(i+" This is in call_Service"+ id_request.results[i].place_id);
        console.log(i+" Park Name is "+ id_request.results[i].name);
        address=getAddress(id_request.results[i].geometry.location.lat,id_request.results[i].geometry.location.lng);     //https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI&location=30.2915328%2C-97.76883579999999&rtypes=park&rankby=distance&type=park;     
         
    }
}

//*****END extract place ID  *****************/

//***** PARK LIST START  *************************/
function parkList (latlong){
    let t;
    let latLngUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
    latLngUrl += '?' + $.param({
       'key': "AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI",
       'location': latlong,//your long/lat go here
       'rtype': "park",
       'rankby': "distance",
       'type:': "park"
       //'name': "park"
    });
    console.log("LAT & LONG URL "+latLngUrl); 
    $.ajax({
        url: latLngUrl,
        method: 'GET',   
        async: true,
    }).done(function (result) {	  
       // console.log("our url to send to places is "+ latLngUrl);
       // console.log("result is ** "+result);
        call_service(result);
       
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


