(function(){

	var counting = function() {
		var face = Math.floor((Math.random() * 6) + 1); // random 1~6
		document.getElementById("cube").className = "count" + face;
	};

	var timer = setInterval(counting, 750);
	// from http://codepen.io/pukidepa/pen/ebgHy modfiy
})();