function turnOnTheBulb(){
	//定位到img_turnOnTheBulb图片，将该图片元素赋予Element变量
	Element = document.getElementById("img_turnOnTheBulb")
	//匹配变量对应的元素名称（img/pic_bulbon.gif），如果存在"bulbon"则将变量图片更换为"img/pic_bulboff.gif"
	if(Element.src.match("bulbon")){
		Element.src = "../../img/pic_bulboff.gif"
	}
	else{
		Element.src = "../../img/pic_bulbon.gif"
	}
}
