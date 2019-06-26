var number =[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120];
  
var computerNumber = Math.floor(Math.random()*103);

var targetNumber = number[computerNumber];

$("#number-to-guess").text(targetNumber);

var counter = 0;
var winCount = 0;
var lossCount = 0;

 
var numberOptions1 = [1,2,3,4,5,6,7,8,9,10,11,12];
var computerOptions1= Math.floor(Math.random()*13);





  var imageCrystal1 = $("<img>");

 
  imageCrystal1.addClass("crystal-image");

  
  imageCrystal1.attr("src", "assets/images/image 1.jpg");

 
  imageCrystal1.attr("data-crystalvalue",numberOptions1[computerOptions1]);
   

  
  $("#crystals").append(imageCrystal1);

  var numberOptions2 = [1,2,3,4,5,6,7,8,9,10,11,12];
  var computerOptions2= Math.floor(Math.random()*13);

  var imageCrystal2 = $("<img>");

  
  imageCrystal2.addClass("crystal-image");

  
  imageCrystal2.attr("src", "assets/images/image 2.jpg");

  
  imageCrystal2.attr("data-crystalvalue",numberOptions2[computerOptions2]);
   

  
  $("#crystals").append(imageCrystal2);

  var numberOptions3 = [1,2,3,4,5,6,7,8,9,10,11,12];
  var computerOptions3= Math.floor(Math.random()*13);
  var imageCrystal3 = $("<img>");


  imageCrystal3.addClass("crystal-image");

  
  imageCrystal3.attr("src", "assets/images/image 3.jpg");


  imageCrystal3.attr("data-crystalvalue",numberOptions3[computerOptions3]);
   

  
  $("#crystals").append(imageCrystal3);

  var numberOptions4 = [1,2,3,4,5,6,7,8,9,10,11,12];
  var computerOptions4= Math.floor(Math.random()*13);
  var imageCrystal4 = $("<img>");

 
  imageCrystal4.addClass("crystal-image");

  
  imageCrystal4.attr("src", "assets/images/image 4.jpg");

 
  imageCrystal4.attr("data-crystalvalue",numberOptions4[computerOptions4]);
   

  
  $("#crystals").append(imageCrystal4);


  

  $(".crystal-image").on("click", function() {



    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  
    counter += crystalValue;

    $("#total-count").text("New score: " + counter);
    

    if (counter === targetNumber) {
      alert("You win!");
      

      winCount++;

    
    $("#win-count").text(winCount);

    }
  

    else if (counter >= targetNumber) {
      alert("You lose!!");
      

      lossCount++;

    // Change Loss Count HTML
    $("#loss-count").text(lossCount);
    }
  });
