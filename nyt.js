

let test="";
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "674cf5fcd6b94e8eb2592d96e25f9d15",
    'q': "Austin", //variable from search form
    'begin_date': "20180101", //variable from search form
    'end_date': "20180905",
    'sort': "newest",
    'fl': "web_url,snippet, source,headline",
    'hl': "true"
});


$(document).ready(function () {
    //alert("documentReady");
  $("#searchBtn").on("click", function (event) {
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            console.log(result);
            //alert(results);'
            //test=this.result;
            
           // alert(this.result);
        }).fail(function (err) {
            //alert(err);
            throw err;
        });
     });
  
})
//console.log(test);  