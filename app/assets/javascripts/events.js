$( document ).ready(function() {

  $("#owl-carousel").owlCarousel({
    items : 4,
    lazyLoad : true,
    navigation : true
  });

	//Some number to count what we are currently showing.
	//Starting at 1 instead of 0 because .length will return a total number, not a number including 0
	var counter = 1;

	//Figure out how many spans are inside the imagestockpile
	var totalNum = $('.imagestockpile span').length;

	//make an array with all the source URLs
	var stringArray = [];

	//for each span inside imagestockpile...
	$('.imagestockpile span').each(function(){
		var a = $(this).html();
		//add it to the array
		stringArray.push(a);
    // $('.click-to-show').css("display","none");
	});

	//get the first image set by default
	$('.display').css("background-image", 'url(' + stringArray[0] + ')');
  console.log(stringArray[0]);

	//now determine what happens if the button is clicked
	$('#next-button').click(function(){
    event.preventDefault();
    console.log("YO!");
		if(counter + 1 > totalNum){
			//reset counter to 1
			counter = 1;
		}
		else{
			//increase counter by 1
			counter++;
		}
    // goal is to send user to a new URL where we are calling show method
    // but asking for next page. We have to pass in data and status. We want
    // to pass 'data' as just the URL of the next URL, then use a jquery selector
    // to grab that data and populate our photo container.

    // .get(url[,data][,success][,dataType]) - data is a plain object sent to the server w/ the request

    $.get('/events.json?' + $.param({page: counter + 1}), function(data, status){
      console.log(data);
      console.log(status);
      // data has the entire information of the page. We only want URL.
    });
    //set the background image property of the display to an element in the array with counter as index
    // click-to-show not working
    $('.click-to-show').css('display', 'block');
    $('.display').css("background-image", 'url(' + stringArray[counter] + ')');
  });
});
