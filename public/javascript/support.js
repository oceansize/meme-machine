//Check with google to see what the hell this means.
google.load("search", "1");
//The following block is responsible for the image search.
function findImagesOnGoogle(options) {  
  $(options.container).empty();//empties #container
  $(options.container).append($("<p>").text("Searching..."));//puts 'searching text in #container in case of delays'

  var imageSearch = new google.search.ImageSearch();//Informs google that we are about to perform an image search.
  imageSearch.setSearchCompleteCallback(this, function() {
    google.search.Search.getBranding('branding');
    $(options.container).empty();//Makes sure #container is empty, and ready to receive results
    for (var i = 0; i < imageSearch.results.length; i++) {
      var result = imageSearch.results[i];      
      var img = $("<img>");//create new img tag for each search result.
      img.attr('src', result.tbUrl);
      img.data('url', result.url);
      img.appendTo(options.container);
    }
  }, null);
  imageSearch.setResultSetSize(8);//This specifies how many results we want returned. In this case, 8 - which is the per-page max according to Google's restrictions
  imageSearch.execute(options.keywords);//This refers to the search terms in  #search-term
}
//====================================================================
//Anytime the page is modified via the inputs, the url is modified. The term 'Hash' seems to be particular to javascript
//====================================================================

//Saves parameters to URL
function saveParametersToHash() {
  $('input, select').change(function() {
    var hash = {};
    hash.caption = $("#text").val();
    hash.size = $('#size').val();
    hash.left = $('#left').val();
    hash.top = $('#top').val();
    hash.width = $('#width').val();
    hash.colour = $('#colour').val();
    hash.align = $('#align').val();
    hash.url = $('#workspace img').attr("src");
    hash.keyword = $('#search-term').val();
    window.location.hash = escape(JSON.stringify(hash));
    updateTweetButton();
  });  
}

//Loads parameters from URL
function loadParametersFromHash() {  
  try {
    var hash = JSON.parse(unescape(window.location.hash).replace('#', ''));
    $('#text').val(hash.caption);
    $('#size').val(hash.size);
    $('#left').val(hash.left);
    $('#top').val(hash.top);
    $('#width').val(hash.width);
    $('#colour').val(hash.colour);
    $('#align').val(hash.align);
    $('input, select').trigger('change');
    $('#workspace').append($('<img>').attr("src", hash.url));
    $('#search-term').val(hash.keyword);
  } catch (err) {}
}

// function updateTweetButton() {    
//   if (typeof twttr == 'undefined') {
//     return;
//   }
//   $('#twitter').empty();
//   var a = $('<a>')
//             // .attr("data-url", window.location.href)
//             .attr("href", "https://twitter.com/share")
//             .addClass("twitter-share-button")
//             .attr("data-text", "I built Motivational Posters page @makersacademy today!")
//             .append($("Tweet"));
//   a.appendTo('#twitter');
//   twttr.widgets.load();
// }

$(function() {
  loadParametersFromHash();
  saveParametersToHash();  
  $('#text').trigger("input");
})