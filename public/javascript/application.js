$(document).on('click', '#go-search', function() {
  findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'}) 
}); 

$(document).on('click', '#search-results img', function() {
    var url = $(this).data('url');
    $("#workspace img").remove();
    var img = $("<img>").attr('src', url);
    $("#workspace").append(img);
  });

$(document).on('input', '#text', function() {
    $("#caption").text($(this).val());
});