// Performs a Google image search based on text in #search-term, and places the results in #search-results.
$(document).on('click', '#go-search', function() {
  findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'}) 
}); 
//Does the same thing, but this time the user can just hit enter, instead of clicking the search button
$(document).on('keyup', '#search-term', function() {
  findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'}) 
}); 

//When an image result is clicked, the url is stored in 'url'. Then #workspace is cleared of any existing images. A new img element is then created and the image result in 'url' is loaded into it.
$(document).on('click', '#search-results img', function() {
    var url = $(this).data('url');
    $("#workspace img").remove(); 
    var img = $("<img>").attr('src', url);
    $("#workspace").append(img);
  });

//When text is input into #text, the value is output into #caption.
$(document).on('input', '#text', function() {
    $("#caption").text($(this).val());
});

//When the amount in the 'left' input changes, apply to #caption the value in pixels to the css left attribute. 
$(document).on('change', '#left' , function() {
    $("#caption").css("left", $(this).val() + 'px');
});
//Same as above, but for top
$(document).on('change', '#top', function() {
  $("#caption").css("top", $(this).val() + 'px');
});
//This alters the width of #caption
$(document).on('change', '#width', function() {
  $('#caption').css('width', $(this).val() + 'px');
});
//and the  text size in  #caption
$(document).on('change', '#size', function() {
  $('#caption').css('font-size', $(this).val() + 'px');
});
//This chances the colour of #caption
$(document).on('change', '#colour', function() {
  $('#caption').css('color', $(this).val() );
});
//and this alters the alignment.
$(document).on('change', '#alignment', function() {
  $('#caption').css('text-align', $(this).val() );
});


