//var apikey = '&api-key=nkS7AyI0rtvD8AvA3cjFh4QiFmdLiA2I';
var URL =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=nkS7AyI0rtvD8AvA3cjFh4QiFmdLiA2I&q=';

$('#submit-button').on('click', function() {
  var searchTerm = $('#search-input').val();
  var numOfRecords = $('#number-input').val();
  var startYear = $('#start-year-input').val();
  var endYear = $('#end-year-input').val();

  if (numOfRecords === '') {
    numOfRecords = 10;
  } else if (numOfRecords > 10) {
    numOfRecords = 10;
  }

  if (startYear !== '') {
    startYear = '&begin_date=' + startYear + '0101';
  }

  if (endYear !== '') {
    endYear = '&end_date=' + endYear + '0101';
  }

  var queryURL = URL + searchTerm + startYear + endYear;
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    $('#articles-div').empty();
    renderArticles(response, numOfRecords);
  });
});

function renderArticles(response, numOfRecords) {
  for (var i = 0; i < numOfRecords; ++i) {
    var newDiv = $('<div>');
    var newArticle = $('<a>');
    newArticle.text(response.response.docs[i].headline.main);
    newArticle.attr({
      href: response.response.docs[i].web_url,
      target: '_blank'
    });
    newDiv.append(newArticle);
    $('#articles-div').append(newDiv);
  }
}

//   http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Obama&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M

//   http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Obama&begin_date=20040101&end_date=20060101&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M
