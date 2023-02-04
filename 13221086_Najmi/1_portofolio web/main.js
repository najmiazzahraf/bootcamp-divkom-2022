window.onload = function () {
	var icon = document.getElementById("icon");
	icon.onclick = function() {
		document.body.classList.toggle("dark-theme");
		if(document.body.classList.contain("dark-theme")){
			icon.src = "img/brightness.png";
		}else{
			icon.src = "img/moon.png";
		}
	}

}

//Maaf kak, udah ikutin sama persis tapi tetep gk bisa..
let i = 6;
var pictgame = ["img/fgo2.jpg"];

var slidekiri = document.querySelector(".slidekiri");
var slidekanan = document.querySelector(".slidekanan");
var foto = document.querySelector(".pict");

function slideFotoKiri() {
	i = i-1;
	if (i<0) {
		i=2;
	}
	foto.setAttribute('src', photos[i]);	
	}

	function slideFotoKanan() {
	i = i+1;
	if (i>2) {
		i=0;
	}
	foto.setAttribute('src', photos[i]);	
}

//Ini fungsi buat nurunin taskbarnya tapi gk bisa kak, saya udah coba ubah-ubah tetep gk bisa.

//ini fungsi pertama:
var hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
navBar = document.querySelector(".navbar");
navBar.classList.toggle("active");
}

// ini fungsi kedua yg saya coba:
// const hamburger = document.querySelector(".hamburger)");
// 	const navBar = document.querySelector(".nav-bar")
// 	hamburger.addEventListener("click", () => {
//     	navBar.classList.toggle("active");
// })
	
//udah coba pake document.getElementsByClassName tetep gk bisa kak di chrome laptop saya. 
	
