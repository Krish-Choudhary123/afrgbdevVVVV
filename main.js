// Create a reference for the canvas
canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d")
 var img_width = 300;
 var img_height = 100;

var img_image;

 var img_x = 100;
 var img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
	window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			alphabetkey();
			console.log("alpabet key");
			document.getElementById("d1").innerHTML="You pressed and alphabet key";
		}
		else if((keyPressed >=48 && keyPressed<=57))
		{
			numberkey();
			console.log("numberkey");
			document.getElementById("d1").innerHTML="You pressed a number key";
		}
		else if((keyPressed >=37 && keyPressed<=40))
		{
			arrowkey();
			console.log("arrowkey");
			document.getElementById("d1").innerHTML="You pressed an arrow key";
		}
		else if((keyPressed ==17 || keyPressed==18 || keyPressed==27))
		{
			specialkey();
			console.log("specialkey");
			document.getElementById("d1").innerHTML="You pressed a special key";
		}
		else{
			console.log("Other Key");
			otherkey();
			document.getElementById("d1").innerHTML="Other Key"
		}

		//write a code to check the type of key pressed
		
	}


function alphabetkey()
{
	//upload respective image with the message. 
	img_image="Alpkey.png";
add();
}
function numberkey()
{	
	img_image="numkey.png";
add();
}
function arrowkey()
{
	img_image="Arrkey.png";
add();
}	
function specialkey()
{
	img_image="spkey.png";
add();
}
function otherkey()
{
	img_image="otherkey.png";
add();
}
	
