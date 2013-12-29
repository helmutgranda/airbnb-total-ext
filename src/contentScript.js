
function checkPrice() {
	console.log ( $("#service_fee").text() );
	console.log ( $("#service_fee").text() );
	service_fee = Number($("#service_fee").text().replace(/[^0-9\.]+/g,""));
	subtotal = Number($("#subtotal").text().replace(/[^0-9\.]+/g,""));
	$("#show_more_subtotal_info").append("<br /><strong>Total fee $" + (service_fee + subtotal) + "</strong>").fadeIn("slow");
}

$(function() {
    setTimeout(checkPrice, 1000)
});
