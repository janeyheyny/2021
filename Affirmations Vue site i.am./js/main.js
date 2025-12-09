
var colours = [ "#FFC0AD", "#FCCB78", "#9DDCC7", "#B0DB96" ,"#ADD2F8" ,"#FFB1B8" ,"#E0ABE4" ];

var arrowBtn = document.querySelector("button");

var colourBlock = document.querySelector(".colour_block")

var affirmationText = document.getElementById("affirmation-text")

var affirmations = [ "My mind is calm", "I am prepared to succeed", "I will make the most of new opportunities", "I stand up for what I believe in" ,"I am peacefully allowing my life to unfold" ,"I appreciate my physical body" ,"I enjoy the variety of life","I take good care of myself", "I am in control of my reactions" ];


arrowBtn.addEventListener("click", function(){
    colourBlock.style.backgroundColor = colours[ Math.round( Math.random() * 7 ) ]
    affirmationText.innerHTML = affirmations[ Math.round( Math.random() * 9)]
});








