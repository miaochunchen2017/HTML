function turnOnTheBulb(){
	Element = document.getElementById("img_turnOnTheBulb")
	if(Element.src.match("bulbon")){
		Element.src = "img/pic_bulboff.gif"
	}
	else{
		Element.src = "img/pic_bulbon.gif"
	}
}
