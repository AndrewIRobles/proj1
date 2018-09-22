//function initMap() {
  //  let queryURL="https://maps.googleapis.com/maps/api/geocode/json?address=78736&key=AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI";
  //  var myLatlng = {lat: 30.2432962, lng: -97.9009408};
  //  var map = new google.maps.Map(document.getElementById('map'), {
  //    zoom: 13,
  //    center: myLatlng
  //  });
  //  $.get(queryURL).then(function (response) {
 // let buttonResults = response.data;
//  console.log("Button Results: ", buttonResults)
//    });

   // var marker = new google.maps.Marker({
   //   position: myLatlng,
   //   map: map,
   //   title: 'Dog Park'
  //  });

    

    //map.addListener('center_changed', function() {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
     // window.setTimeout(function() {
     //   map.panTo(marker.getPosition());
   //   }, 3000);
  //  });
//
 //   marker.addListener('click', function() {
   //   map.setZoom(20);
   //   map.setCenter(marker.getPosition());
  //  });
  //}

//This Code will return the Latitude and Longitide
/*
let test="";
let zipUrl = "https://maps.googleapis.com/maps/api/geocode/json";
zipUrl += '?' + $.param({
    'key': "AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI",
    'address': "78736"
});
*/
/*
$(document).ready(function () {
        $.ajax({
            url: zipUrl,
            method: 'GET',
        }).done(function (result) {
            console.log(result);

        }).fail(function (err) {
            throw err;
        });  
})
*/


//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.25208559999999,-97.9483898&rtype=park&key=AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI&name=park&rankby=distance

let longlat="30.25208559999999,-97.9483898";//need to have these in the folloinwg format latitude,longitude
let latLngUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
latLngUrl += '?' + $.param({
    'key': "AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI",
    'location': longlat,//your long/lat go here 
    'rtype': "park",
    'rankby': "distance",
    'name': "park"
});
console.log(latLngUrl);


$(document).ready(function () {
    $.ajax({
        url: latLngUrl,
        method: 'GET',
    }).done(function (result) {
        console.log(result);

    }).fail(function (e) {
        throw e;
    });  
})
/*

this is the returneed object for longlat

https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAjOzz5XzUwhDvQ7JNpCTWs1v4dqfDbtZI&location=30.25208559999999%2C-97.9483898&rtype=park&rankby=distance&name=park
map.js:78 {html_attributions: Array(0), next_page_token: "CqQCHgEAAHy_bfTV6WDSUfjK1UA048rfhjTTSbZtqS_z5KYaGX…VsASJPjcM9nUvzZ23Q7xoU7O85ITk0G0TFI4oI0v9ldZQgAzw", results: Array(20), status: "OK"}html_attributions: []next_page_token: "CqQCHgEAAHy_bfTV6WDSUfjK1UA048rfhjTTSbZtqS_z5KYaGXiQuKaDZ0gNvzgPFNDUycqYQyJg49_GyqjCqqvSTdfG6n8fUq92OpWZtjxZhkgBuSgV1NkCfMaLMqBAHKPmNePVAm6wZnac9MtF3j28XA8BAPSbSDNsdFG7is164_1iPAQFGSswBpUlKVaUhLqyJY0tTH5rn9VjFMRmr1_7s65ZWJ_0OyAdcTFjKCgisfNiry2wZaQQaBUEFZyBAes8mOfRP9wgBbMmJ9F1aQTFiLIRA_hDuWM69WQ6_5Bjsi9z8yvU2B18RZFNTs2auztQ-0SKKkxiVcy3c0pG1PXLrU_gqAcbV6o33AUcMw6nMF4wwy9LRT6hOa7dHPMkTsAd6FkC8hIQ5rVsASJPjcM9nUvzZ23Q7xoU7O85ITk0G0TFI4oI0v9ldZQgAzw"results: Array(20)0: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "efb9829974eaaba6ab513b096a3a9d5afd7eccd1", name: "Windmill Run Park", opening_hours: {…}, …}1: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "c2076c9873637621e716aa7adf69c7622ed2cb2c", name: "Lewis Mountain Ranch Neighborhood Park", opening_hours: {…}, …}2: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "92b7c25618fa864727098b5a8f50a56a66cb5919", name: "Bee Cave Sculpture Park", opening_hours: {…}, …}3: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "520dc24d5b7af643e3ab88f8fca37626d633c2cd", name: "Park at Longmont and Littleton", opening_hours: {…}, …}4: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "fa28a45b6b337611f28dced670fe73919739ee78", name: "City Of Bee Cave Central Park", opening_hours: {…}, …}5: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "a2ab264e998d04804e5ed3ee9d66e90da795d977", name: "Trinity Hills Park", opening_hours: {…}, …}6: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "3bbeee6ee4d27d8b3aea1a23a53b23660aa9c946", name: "Convict Hill Quarry Park", opening_hours: {…}, …}7: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "61852333870c77e7651382fe6b56561a118fdfe1", name: "Legend Oaks Park", opening_hours: {…}, …}8: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "d3ba84a416c9d779098e8fa8decc5e5b932f7bcf", name: "Legend Oaks Neighborhood Park", opening_hours: {…}, …}9: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "5abea5f10d0f446c23b8588155c3c6b88aaa2662", name: "Hielscher Tract Greenbelt", opening_hours: {…}, …}10: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "3435d89d03f07ee0813bb1e4cc13d6ac135faca4", name: "Circle C Ranch Metropolitan Park on Slaughter Creek", opening_hours: {…}, …}11: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "e50f1fc8e514e9ce8d6f0758c98c2e75b54901e0", name: "Mary Quinlan Park", opening_hours: {…}, …}12: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "18e2540560f00197d6bc42474ea5af214b7f8863", name: "Falconhead West Primitive Park", opening_hours: {…}, …}13: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "94479021aa4817ab6151bc18fa5548362548e69c", name: "Latta Branch Greenbelt", opening_hours: {…}, …}14: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "16fa59d2ca39e9253e7880fe8f52255d39dae1dc", name: "Dick Nichols District Park", opening_hours: {…}, …}15: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "fce163859ea77885e5352e901c9a6cab537826c5", name: "Western Oaks Park and Play", photos: Array(1), …}16: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "db8d99006fb34f6cc22644aa879a546c033f3976", name: "Sendera Mesa Neighborhood Park", opening_hours: {…}, …}17: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "505f6b109fe5bdde8f43556c45e0ad79dee53f16", name: "Veloway Park", opening_hours: {…}, …}18: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "7f6b9f31b015dde262eb23524ddd3fd85c84b4d7", name: "Oakhill Neighborhood Park", opening_hours: {…}, …}19: {geometry: {…}, icon: "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png", id: "aad9ee88c2ddecbae2df71d57446ebb9afa8d96b", name: "Selma Hughes Park", opening_hours: {…}, …}length: 20__proto__: Array(0)status: "OK"__proto__: Object
*/
//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=LONGITUDE,LATITUDE&rtype=park&key=APIKEY&name=park&rankby=distance