var number =[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120]
  
var computerNumber = Math.floor(Math.random()*103);

var targetNumber = number[computerNumber];

$("#number-to-guess").text(targetNumber);

var counter = 0;


var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];
var computerOptions= Math.floor(Math.random()*13);





  var imageCrystal1 = $("<img>");

 
  imageCrystal1.addClass("crystal-image1");

  
  imageCrystal1.attr("src", "assets/images/image 1.jpg");

 
  imageCrystal1.attr("data-crystalvalue1",numberOptions[computerOptions]);
   

  
  $("#crystals").append(imageCrystal1);

  var imageCrystal2 = $("<img>");

  
  imageCrystal2.addClass("crystal-image2");

  
  imageCrystal2.attr("src", "assets/images/image 2.jpg");

  
  imageCrystal2.attr("data-crystalvalue2",numberOptions[computerOptions]);
   

  
  $("#crystals").append(imageCrystal2);


  var imageCrystal3 = $("<img>");


  imageCrystal3.addClass("crystal-image3");

  
  imageCrystal3.attr("src", "assets/images/image 3.jpg");


  imageCrystal3.attr("data-crystalvalue3",numberOptions[computerOptions]);
   

  
  $("#crystals").append(imageCrystal3);


  var imageCrystal4 = $("<img>");

 
  imageCrystal4.addClass("crystal-image4");

  
  imageCrystal4.attr("src", "assets/images/image 4.jpg");

 
  imageCrystal4.attr("data-crystalvalue4",numberOptions[computerOptions]);
   

  
  $("#crystals").append(imageCrystal4);

$(".crystal-image1").on("click", function() {

 

  var crystalValue1 = ($(this).attr("data-crystalvalue1"));
  crystalValue1 = parseInt(crystalValue1);

  counter += crystalValue1;

  
  alert("New score: " + counter);});

  $(".crystal-image2").on("click", function() {

 

    var crystalValue2 = ($(this).attr("data-crystalvalue2"));
    crystalValue2 = parseInt(crystalValue2);
  
    counter += crystalValue2;
  
    
    alert("New score: " + counter);});

    $(".crystal-image3").on("click", function() {

 

      var crystalValue3 = ($(this).attr("data-crystalvalue3"));
      crystalValue3 = parseInt(crystalValue3);
    
      counter += crystalValue3;
    
      
      alert("New score: " + counter);

      $(".crystal-image4").on("click", function() {

 

        var crystalValue4 = ($(this).attr("data-crystalvalue4"));
        crystalValue4 = parseInt(crystalValue4);
      
        counter += crystalValue4;
      
        
        alert("New score: " + counter)});

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }


    })
