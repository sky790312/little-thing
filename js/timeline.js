(function(){

	var counting = function() {
		var face = Math.floor((Math.random() * 6) + 1); // random 1~6
		document.getElementById("cube").className = "count" + face;
	};

	var timer = setInterval(counting, 750);
	// from http://codepen.io/pukidepa/pen/ebgHy modfiy

	var radios = document.getElementsByClassName("md-radio");
	for( var i = 0, j = radios.length; i < j; i += 1){
		radios[i].onclick = dealInputRadio;
	}

	function dealInputRadio (){
		if(this.children[0].checked)
			return;
		this.children[0].checked = true;
	}
})();