$(document).ready(function(){
  $.get('https://api.themoviedb.org/3/movie/now_playing?api_key=b2c319d64cba3280f7ee6977b9a470e0', function(data){
  })
  .then(function(data){
    console.log(data.results);
    $('#moviesNow').append(
      '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"></div>');
      var exspand = 'true';
      var classCallapsed = '';
      var collapse = "collapse in";
      var numWord = "one";
    for ( i = 0; i < 5; i++ ) {
      if( i > 0 ) {
        exspand = "false";
        classCallapsed = 'class="collapsed"';
        collapse = "collapse";
        if ( i === 1 ) { numWord = "two"; };
        if ( i === 2 ) { numWord = "three"; };
        if ( i === 3 ) { numWord = "four"; };
        if ( i === 4 ) { numWord = "five"; };
      };
        $('.panel-group').append(
          '<div class="panel panel-default">' +
            '<div class="panel-heading" role="tab" id="heading' + numWord + '">' +
              '<h4 class="panel-title">' +
                '<a ' + classCallapsed + 'role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + numWord + '" aria-expanded="' + exspand +'" aria-controls="collapse'+ numWord + '">' +
                  data.results[i].original_title +
                '</a>' +
              '</h4>' +
            '</div>' +
            '<div id="heading'+ numWord + '" class="panel-collapse ' + collapse + '" role="tabpanel" aria-labelledby="heading' + numWord + '">' +
              '<div class="panel-body">' +
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.' +
              '</div>' +
            '</div>' +
          '</div>');
    }
    //experimantal area to activate accordion
    $('#panel-title').on('click', function(){
      console.log('im clicked');
      $('.panel-title a').attr('aria-expanded', 'false');
      $(this).attr('aria-expanded', 'true');
    });
    // $('.headingone').on('click', function(){
    //     $('.collapse').collapse()
    // })

    // todo !----------========> Need to add the following funtion, see BS Docs
    // $('#myCollapsible').collapse({
    //   toggle: false
    // })

    // "<div class='moviesNowPlaying'>" +
    //   "<h3>" + data.results[i].original_title + "<h3>"
    // + "</div>");
  });
});
