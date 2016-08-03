// format for submit test:
// {
//     title: "Ghost",
//     genre: "Good",
//     description: "Uh",
//     coverPicture: "https://www.google.com",
//     rating: "R"
// }
//
// submit to:
// https://mighty-eyrie-15280.herokuapp.com/films


$('#submit').click(function(){
  var titleOut = $('#titleOut').val();
  console.log(titleOut);
  var genreOut = $('#genreOut').val();
  console.log(genreOut);
  var descriptionOut = $('#descriptionOut').val();
  console.log(descriptionOut);
  var coverPictureOut = $('#coverPicture').val();
  console.log(coverPictureOut);
  var ratingOut = $('#rating').val();
  console.log(ratingOut);
  output = {
    title: titleOut,
    genre: genreOut,
    description: descriptionOut,
    coverPicture: coverPictureOut,
    rating: ratingOut };

    console.log(typeof output);
console.log(output);
  $.post("https://mighty-eyrie-15280.herokuapp.com/films", output)
  .done(function(data){
    console.log(data);
    $('body').append('<h3>' + data.message + '</h3>')
  });
});
