// JavaScript Document

/*POPUP DISPLAY*/

/*popup handler for the about section*/
document.getElementById('button-about').addEventListener('click',function(){
	document.querySelector('.popup').style.display='flex';
	document.getElementById('popup-header').innerHTML = "About me";
	document.getElementById('popup-text').innerHTML = "An adaptable, motivated, and resourceful software developer with a strong work ethic and a passion for Artificial Intelligence and data analytics. An excellent team player who possesses the ability to work on my initiative. Currently looking for a developer opportunities that will allow me to work as part of a professional team of developers where I can get experience and grow up to a senior position within your company.";
	document.getElementById('popup-text').style.textAlign='justify';
});

/*popup handler for the contact section*/
document.getElementById('button-contact').addEventListener('click',function(){
	document.querySelector('.popup').style.display='flex';
	document.getElementById('popup-header').innerHTML = "Contact Information";
	document.getElementById('popup-text').innerHTML = 'You can always reach me at:<br><a href="mailto:ddomingues@ua.pt">ddomingues@ua.pt</a>';
	document.getElementById('popup-text').style.textAlign='center';
});

/*close popup*/
document.querySelector('.close').addEventListener('click',function(){
	document.querySelector('.popup').style.display='none';
});


/*TAB INTEGRATION FOR SMALLER SCREENS*/

/*close tab when an element is clicked*/
var myFunction = function() {
    document.getElementsByClassName('links')[0].classList.toggle('active')
};

/*open/close tab on burger click*/
document.getElementsByClassName('toggle-button')[0].addEventListener('click',myFunction);

/*close tab on pressing a link*/
var elements = document.getElementsByClassName("links");
for (var i = 0; i < elements.length; i++) {
    document.getElementsByClassName("links")[i].addEventListener('click', myFunction, false);
}

/*ROTATING IMAGES*/
var counter = 2;
setInterval(function(){
	document.getElementById("radio" + counter).checked = true;
	switch(counter){
		case 1: document.getElementById("footer-text").innerHTML='"Jealousy"';
			break;
		case 2: document.getElementById("footer-text").innerHTML='"Lost Boy"';
			break;
		case 3: document.getElementById("footer-text").innerHTML='"Duality of men"';
			break;
		case 4: document.getElementById("footer-text").innerHTML='"The Rift"';
			break;
		case 5: document.getElementById("footer-text").innerHTML='"Out with the Old"';
			break;
	}
	counter++;
		if(counter > 5){
			counter=1;
		}
},5000);

function getButton(){
	
	setTimeout(function(){
    if(document.getElementById("radio1").checked){
		document.getElementById("footer-text").innerHTML='"Jelousy"';
		counter = 2;
	}
	if(document.getElementById("radio2").checked){
		document.getElementById("footer-text").innerHTML='"Lost Boy"';
		counter = 3;
	}
	if(document.getElementById("radio3").checked){
		document.getElementById("footer-text").innerHTML='"Duality of men"';
		counter = 4;
	}
	if(document.getElementById("radio4").checked){
		document.getElementById("footer-text").innerHTML='"The Rift"';
		counter = 5;
	}
	if(document.getElementById("radio5").checked){
		document.getElementById("footer-text").innerHTML='"Out with the Old"';
		counter = 1;
	}
	
}, 100);
}



