function changeImage(){


var randomNumber = Math.floor(Math.random() *5) +1;
var randomGalaryImage = "images/" + "pic" + randomNumber + ".jpg";
var imageChanger = document.querySelectorAll("img")[0].setAttribute("src", randomGalaryImage);
var music = new Audio("sounds/green.mp3");
music.play();

}
