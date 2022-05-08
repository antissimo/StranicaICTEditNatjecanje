var broj_slike = 0; 			
var slike = [];
var vrijeme = 1500;	
slike=[ "slike/rimac/rimac_za_ss.jpeg","slike/rimac/rimac_za_ss2.jpeg","slike/rimac/rimac_za_ss3.jpeg","slike/rimac/rimac_za_ss4.jpeg"]
function changeImg(){
    document.slide.src = slike[broj_slike];
	if( broj_slike < slike.length - 1){
        broj_slike++; 
	} else {
		broj_slike= 0;
	}
	setTimeout("changeImg()", vrijeme);
}
window.onload=changeImg;


