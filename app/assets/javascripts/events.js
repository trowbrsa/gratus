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

      var content = '<div class="carousel-item"><img src="' + data[0].url + '"/><div class="photo-title"><h3>' + data[0].title + '</h3></div></div>';

      $(".carousel .carousel-item:last").after(content);

      $(document).trigger("update.carousel");
    });
  });

	$("#add_img_gratitude").click(function() {
		$.ajax({
			method: "POST",
			url: "/gratitudes/",
			data: {gratitude: {img_url: $(".carousel-active img").attr("src")}, description: $(".photo-title").attr("h3")}
		})
		$(this).text("Gratitude Added!");
		$(this).attr('class', 'btn btn-success center-block');
	});

	$(".next").click(function(){
		$("#add_img_gratitude").attr('class', 'btn btn-default center-block');
		$("#add_img_gratitude").text('Add this as a gratitude');
	})

	$(".prev").click(function(){
		$("#add_img_gratitude").attr('class', 'btn btn-default center-block');
		$("#add_img_gratitude").text('Add this as a gratitude');
	})
});
