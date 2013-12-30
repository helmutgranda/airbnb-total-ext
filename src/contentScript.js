function updatePrice() {
	if ( $("#total_fee").length == 0) {
		$("#show_more_subtotal_info").append("<div id='total_fee'></div>");
	}
	service_fee = Number($("#service_fee").text().replace(/[^0-9\.]+/g,""));
	subtotal = Number($("#subtotal").text().replace(/[^0-9\.]+/g,""));
	grand_total = service_fee + subtotal
	number_of_guests = $("#number_of_guests").val();
	html = "Total fee $" + precise_round(grand_total, 2);
	if (number_of_guests > 1){
		html += "<br />Price per guest: $" + ( precise_round (grand_total/number_of_guests,2) );
	}
	$("#total_fee").html("<strong>"+ html + "</strong>");
}

var target = document.querySelector('#subtotal');

var observer = new MutationObserver(function(mutations) {
  	mutations.forEach(function(mutation) {
    updatePrice();
  });    
});

var config = { attributes: true, childList: true, characterData: true, attributeOldValue: true, characterDataOldValue: true, subtree:true };
 
if (target) {
	observer.observe(target, config);
}

$( "#number_of_guests" ).change(function() {
  updatePrice();
});

function precise_round(num,decimals){
return Math.round(num*Math.pow(10,decimals))/Math.pow(10,decimals);
}
