var number;

var computerNumber;

var targetNumber;

$("#number-to-guess").text(targetNumber);

var counter;
var winCount = 0;
var lossCount = 0;
var crystalValue;






var reset = function () {

  counter = 0;
  number = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];

  computerNumber = Math.floor(Math.random() * 103);

  targetNumber = number[computerNumber];

  $("#number-to-guess").text(targetNumber);

  $("#total-count").text(counter);

  $("#imagecrystal1").attr('data-crystalvalue', numberOptions[Math.floor(Math.random() * 13)]);
  $("#imagecrystal2").attr('data-crystalvalue', numberOptions[Math.floor(Math.random() * 13)]);
  $("#imagecrystal3").attr('data-crystalvalue', numberOptions[Math.floor(Math.random() * 13)]);
  $("#imagecrystal4").attr('data-crystalvalue', numberOptions[Math.floor(Math.random() * 13)]);
}

var imageCrystal1 = $("<img>");
var imageCrystal2 = $("<img>");
var imageCrystal3 = $("<img>");
var imageCrystal4 = $("<img>");

var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];
var computerOptions1 = Math.floor(Math.random() * 13);
var computerOptions2 = Math.floor(Math.random() * 13);
var computerOptions3 = Math.floor(Math.random() * 13);
var computerOptions4 = Math.floor(Math.random() * 13);


imageCrystal1.addClass("crystal-image");


imageCrystal1.attr("src", "assets/images/image 1.jpg");
imageCrystal1.attr("id", "imagecrystal1")



imageCrystal1.attr("data-crystalvalue", numberOptions[computerOptions1]);

$("#crystals").append(imageCrystal1);

imageCrystal2.addClass("crystal-image");


imageCrystal2.attr("src", "assets/images/image 2.jpg");


imageCrystal2.attr("id", "imagecrystal2")



imageCrystal2.attr("data-crystalvalue",numberOptions[computerOptions2]);
$("#crystals").append(imageCrystal2);



imageCrystal3.addClass("crystal-image");


imageCrystal3.attr("src", "assets/images/image 3.jpg");


imageCrystal3.attr("id", "imagecrystal3")



imageCrystal3.attr("data-crystalvalue",numberOptions[computerOptions3]);
$("#crystals").append(imageCrystal3);


imageCrystal4.addClass("crystal-image");


imageCrystal4.attr("src", "assets/images/image 4.jpg");


imageCrystal4.attr("id", "imagecrystal4")

imageCrystal4.attr("data-crystalvalue", numberOptions[computerOptions4]);
$("#crystals").append(imageCrystal4);








$(".crystal-image").on("click", function () {



  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  counter += crystalValue;

  $("#total-count").text(counter);


  if (counter === targetNumber) {
    alert("You win!");


    winCount++;


    $("#win-count").text(winCount);

    reset();

  }


  else if (counter >= targetNumber) {

    reset();
    alert("You lose!!");


    lossCount++;


    $("#loss-count").text(lossCount);
    reset();


  }
});


window.onload = function () {
  reset();


}