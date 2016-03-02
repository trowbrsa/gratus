$( document ).ready(function() {

  $("#slider").owlCarousel({
    items : 1,
    lazyLoad : true,
    navigation : true
  });

	var counter = 1;
	var stringArray = [];

// <div class="item"><img class="lazyOwl" src="https://farm2.staticflickr.com/1530/25286052762_c595bce537.jpg"/></div>

  //for each item inside imagestockpile div...
	$('.imagestockpile #slider .item').each(function(){
    // grab just the URL
    var a = $(this).children()[0];
    var b = $(a).data('src');
    // push it into stringArray
		stringArray.push(b);
    console.log("this is the first item in string array" + b);
	});
  //
	// //get the first image set by default
	// $('#slider').css("background-image", 'url(' + stringArray[0] + ')');
  // console.log("this is the first element" + stringArray[0]);

	//now determine what happens if the button is clicked
	$('.owl-next').click(function(){
    // increment click so we can request the image on the next flickr page
		counter++;
    // make a get request that sends the params of the apge we want
    $.get('/events.json?' + $.param({page: counter + 1}), function(data){
      console.log("this is the data after you click" + data);
      // var content = "<div class='item'><img class='lazyOwl' data-src='" + data[0].url + "'></div>";
      var content = '<div class="item"><img class="lazyOwl" src="' + data[0].url + '"/></div>';
      console.log("this is the content" + content);
      $('#slider').data('owlCarousel').addItem(content);
      // $('#slider').data('owlCarousel').addItem("<div><class='item'><imgclass='lazyOwl' data-src='"  +  data[0].url + "'/></div>");
      // ($("<div>").addClass("item").append($("<img class='lazyOwl' data-src='" +  data[0].url + "'/>");
      // update the slider to have a background image of the url in the data object data-src="<%= photo["url"] %>"/></div>
      // $('#slider').append($("<div>").addClass("item").append($("<img class='lazyOwl' data-src='" +  data[0].url + "'/>")));

    });
  });
});
