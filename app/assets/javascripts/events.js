$( document ).ready(function() {

  $("#slider").owlCarousel({
    items : 1,
    lazyLoad : true,
    navigation : true
  });

	var counter = 1;
	var stringArray = [];

	//for each span inside imagestockpile...
	$('.imagestockpile #slider').each(function(){
    var a = $(this).children()[0];
    var b = $(a).data('src');
		stringArray.push(b);
	});

	//get the first image set by default
	$('#slider').css("background-image", 'url(' + stringArray[counter] + ')');
  console.log("this is the first element" + stringArray[counter]);

	//now determine what happens if the button is clicked
	$('.owl-next').click(function(){
    event.preventDefault();
		counter++;
    $.get('/events.json?' + $.param({page: counter + 1}), function(data){
      // $('#slider').css("background-image", 'url(' + data[0].url + ')');
      $('#slider').css("background-image", 'url(' + data[0].url + ')');

    });
  });
});
