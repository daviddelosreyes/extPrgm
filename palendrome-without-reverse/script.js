function palendrome(string) {
	revString = "";
	i = string.length;
	
	for(var j=i; j>=0;j--){  //reverse string
		revString = revString + string.charAt(j);
	}
	document.getElementById('reversed').value = revString;
	if (revString.toLowerCase()==string.toLowerCase()) {
		document.getElementById('indColor').style.backgroundColor="#55ff00";
		document.getElementById('indicator').innerHTML = " - PALENDROME";
	} else {
		document.getElementById('indColor').style.backgroundColor="#ff2222";
		document.getElementById('indicator').innerHTML = " - NOT A PALENDROME";
	}
}
function clicked(){
	var input = document.getElementById('userWord').value;
		
	if (input.indexOf(" ") != -1) {    //test if contains space
		alert("Please enter one word");
	} else {
		if (input.length > 10){        //test if +10 characters
		alert("Beyond 10 character limit");
		} else {
		palendrome(input);             //call palendrone function
		}
	}
}
