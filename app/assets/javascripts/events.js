$( document ).ready(function() {

	var counter = 1;
	var stringArray = [];

	$('.imagestockpile #slider .item').each(function(){
    var a = $(this).children()[0];
    var b = $(a).data('src');
		stringArray.push(b);
    console.log("this is the first item in string array" + b);
	});

	$('.next').click(function(){
		counter++;
    console.log("next clicked");
    $.get('/events.json?' + $.param({page: counter + 1}), function(data){
      console.log("this is the data after you click", data);

      var content = '<div class="carousel-item"><img src="' + data[0].url + '"/></div>';

      $(".carousel .carousel-item:last").after(content);

      $(".carousel").carousel("update");

    });
  });
});
