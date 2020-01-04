
      var apikey = 'nkS7AyI0rtvD8AvA3cjFh4QiFmdLiA2I';
      var URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=';
      $('#test-button').on('click', function() {
        var queryURL = URL + $('#test-search').val() + '&api-key=' + apikey;
        $.ajax({
          url: queryURL,
          method: 'GET'
        }).then(function(response) {
          console.log(response);
        });
      });
      //   https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
    //   http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Obama&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M

    //   http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Obama&begin_date=20040101&end_date=20060101&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M
      