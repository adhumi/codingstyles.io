var blink = function(){ 
	if (document.getElementById('cursor').style.visibility=='visible'){ 
		document.getElementById('cursor').style.visibility='hidden'; 
	} else {
		document.getElementById('cursor').style.visibility='visible'; 
   } 
}; 

interval = setInterval(blink, 800);