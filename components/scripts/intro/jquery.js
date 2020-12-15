$(document).ready(function () {
    var letters = $('h1').text();
    var nHTML = '';

    for (var letter of letters) {
      nHTML += "<span class='intro' aria-hidden='true' style='opacity: 1;'>" + letter + "</span>";
    }
    $('h1').html(nHTML);
  })