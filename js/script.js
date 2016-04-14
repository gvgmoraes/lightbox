$(document).ready(function(){
$('#backgroundBox').hide()

$('#thumbnail').click(function() {
	$('#backgroundBox').show()
	$('#thumbnail').hide()
});

$('#backgroundBox').click(function(){
	$('#backgroundBox').hide()
	$('#thumbnail').show()
	
});

});