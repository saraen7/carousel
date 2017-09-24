//when the "skip" button is clicked, the src should move one forward in the array and the score is recorded as zero
//when a number is selected from the dropdown, the carousel goes to the next image and score is recorded
//when the "back" button is clicked, the src should move one back in the array
//when the last image is arrived at, the total score should be displayed on the screen and the skip button should stop working

//need event listeners
$(document).ready(function(){

var images = ["images/food1.jpg","images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg","images/food8.jpg"]; //the image array

//Image Scores
var image1 = 0;
var image2 = 0;
var image3 = 0;
var image4 = 0;
var image5 = 0;
var image6 = 0;
var image7 = 0;
var image8 = 0;


//Clicking on the skip button moves to the next image in queue and sets the score for the previous image to 0.
  $("#skip").on("click",function(){
    if($("#image-to-vote-on").hasClass("image1")){
    $("#image-to-vote-on").attr("src",images[1]).addClass("image2").removeClass("image1");
    image1 = 0;
  } else if($("#image-to-vote-on").hasClass("image2")){
    $("#image-to-vote-on").attr("src",images[2]).addClass("image3").removeClass("image2");
    image2 = 0;
  } else if($("#image-to-vote-on").hasClass("image3")){
    $("#image-to-vote-on").attr("src",images[3]).addClass("image4").removeClass("image3");
    image3 = 0;
  } else if($("#image-to-vote-on").hasClass("image4")){
    $("#image-to-vote-on").attr("src",images[4]).addClass("image5").removeClass("image4");
    image4 = 0;
  } else if($("#image-to-vote-on").hasClass("image5")){
    $("#image-to-vote-on").attr("src",images[5]).addClass("image6").removeClass("image5");
    image5 = 0;
  } else if($("#image-to-vote-on").hasClass("image6")){
    $("#image-to-vote-on").attr("src",images[6]).addClass("image7").removeClass("image6");
    image6 = 0;
  } else if($("#image-to-vote-on").hasClass("image7")){
    $("#image-to-vote-on").attr("src",images[7]).addClass("image8").removeClass("image7");
    image7 = 0;
  } else {
    image8 = 0;
    var imageScore = parseFloat(Math.round(((image1 + image2 + image3 + image4 + image5 + image6 + image7 + image8) / 8) * 100) / 100).toFixed(2);
    $(".announcement").append("You have reached the end. Total deliciousness score was: " + imageScore);
  }
  });

  //Clicking on the back button moves to the previous image in queue.
    $("#back").on("click",function(){
      if($("#image-to-vote-on").hasClass("image8")){
      $("#image-to-vote-on").attr("src",images[6]).addClass("image7").removeClass("image8");
    } else if($("#image-to-vote-on").hasClass("image7")){
      $("#image-to-vote-on").attr("src",images[5]).addClass("image6").removeClass("image7");
    } else if($("#image-to-vote-on").hasClass("image6")){
      $("#image-to-vote-on").attr("src",images[4]).addClass("image5").removeClass("image6");
    } else if($("#image-to-vote-on").hasClass("image5")){
      $("#image-to-vote-on").attr("src",images[3]).addClass("image4").removeClass("image5");
    } else if($("#image-to-vote-on").hasClass("image4")){
      $("#image-to-vote-on").attr("src",images[2]).addClass("image3").removeClass("image4");
    } else if($("#image-to-vote-on").hasClass("image3")){
      $("#image-to-vote-on").attr("src",images[1]).addClass("image2").removeClass("image3");
    } else {
      $("#image-to-vote-on").attr("src",images[0]).addClass("image1").removeClass("image2");
    }
    });

//Assigning points
$("#your-vote").on("change", function() {
  var value = $(this).val();
  if($("#image-to-vote-on").hasClass("image1")){
  $("#image-to-vote-on").attr("src",images[1]).addClass("image2").removeClass("image1");
  image1 = value;
  var imageScore = parseFloat(Math.round(((image1 + image2 + image3 + image4 + image5 + image6 + image7 + image8) / 8) * 100) / 100).toFixed(2);
  alert("value is: " + value + ", image1 is: " +image1 + " and total is " + imageScore); //ALERT
} else if($("#image-to-vote-on").hasClass("image2")){
  $("#image-to-vote-on").attr("src",images[2]).addClass("image3").removeClass("image2");
  image2 = value;
} else if($("#image-to-vote-on").hasClass("image3")){
  $("#image-to-vote-on").attr("src",images[3]).addClass("image4").removeClass("image3");
  image3 = value;
} else if($("#image-to-vote-on").hasClass("image4")){
  $("#image-to-vote-on").attr("src",images[4]).addClass("image5").removeClass("image4");
  image4 = value;
} else if($("#image-to-vote-on").hasClass("image5")){
  $("#image-to-vote-on").attr("src",images[5]).addClass("image6").removeClass("image5");
  image5 = value;
} else if($("#image-to-vote-on").hasClass("image6")){
  $("#image-to-vote-on").attr("src",images[6]).addClass("image7").removeClass("image6");
  image6 = value;
} else if($("#image-to-vote-on").hasClass("image7")){
  $("#image-to-vote-on").attr("src",images[7]).addClass("image8").removeClass("image7");
  image7 = value;
} else {
  image8 = value;
  var imageScore = ((parseFloat(image1) + parseFloat(image2) + parseFloat(image3) + parseFloat(image4) + parseFloat(image5) + parseFloat(image6) + parseFloat(image7) + parseFloat(image8)) / 8).toFixed(2);
  $(".announcement").append("You have reached the end. Total deliciousness score was: " + imageScore);
  alert("score = " + imageScore);
}
});

})

//current issues 1) reseting the value to blank  2) getting the imageScore to total correctly
//https://stackoverflow.com/questions/16913094/reset-select-value-to-default
