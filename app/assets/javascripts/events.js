$( document ).ready(function() {

	var counter = 3;
	var stringArray = [];

	$('.imagestockpile #slider .item').each(function(){
    var a = $(this).children()[0];
    var b = $(a).data('src');
		stringArray.push(b);
	});

	$('.carousel').on("beforegoto.carousel", function(){
		counter++;
    $.get('/events.json?' + $.param({page: counter + 1}), function(data){
      console.log("this is the data after you click", data);

      var content = '<div class="carousel-item"><img src="' + data[0].url + '"/></div>';

      $(".carousel .carousel-item:last").after(content);

      $(document).trigger("update.carousel");
    });
  });

	$("#add_img_gratitude").click(function() {
		// var imgUrl = $(".carousel-active").html().slice(10)
		$.ajax({
			method: "POST",
			url: "/gratitudes/",
			data: {gratitude: {img_url: $(".carousel-active img").attr("src")}}
		})
		.done(function() {
			console.log("image added as gratitude");
		})
		.fail(function() {
			console.log("image not saved to db");
		})
	});
});
