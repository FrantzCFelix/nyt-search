
//var apikey = '&api-key=nkS7AyI0rtvD8AvA3cjFh4QiFmdLiA2I';
var URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=nkS7AyI0rtvD8AvA3cjFh4QiFmdLiA2I&q=';


// $('#test-button').on('click', function() {
// if($(""))
var searchTerm = 'obama' ;//$("#search-input").val();
//var numOfRecords = $("#number-input").val();
var startYear = '19900101'; //$("#start-year-input").val();
var endYear = '20160101';//$("#end-year-input").val();

if (startYear !== "") {
    startYear = "&begin_date=" + startYear;
}

if (endYear !== "") {
    endYear = "&end_date=" + endYear;
}


var queryURL = URL + searchTerm + startYear + endYear;
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    console.log(response);
});
     // });
     



    //   http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Obama&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M

    //   http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Obama&begin_date=20040101&end_date=20060101&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M
