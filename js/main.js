jQuery(document).ready(function(){

	function launch_confirm(){
		var msg = window.prompt("Write your name", "Name");
		jQuery('.site-title').text(msg).promise().done(function(){
			jQuery('.site-title').animate({
				"color":"#aaa",
				"font-size": "32px"
			}, 1000);
		})
	}

	setTimeout(function(){
		launch_confirm();
	},1000);

});
// I changed

