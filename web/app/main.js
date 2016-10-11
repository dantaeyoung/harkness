var getUrlValue = function(VarSearch){
    var SearchString = window.location.search.substring(1);
    var VariableArray = SearchString.split('&');
    for(var i = 0; i < VariableArray.length; i++){
        var KeyValuePair = VariableArray[i].split('=');
        if(KeyValuePair[0] === VarSearch){
            return KeyValuePair[1];
        }
    }
}


$(function() {

	var converter = new showdown.Converter();
	$(".markdown").each(function(i) {
		$(this).html(converter.makeHtml($(this).html()));
	});

   // make UI
	ui.start();

   // load people and make table
	people.start();

	table.start();

    var loadString = '{"AT":{"top":523,"left":129},"CK":{"top":37,"left":88},"CD":{"top":488,"left":59},"DC":{"top":338,"left":415},"DP":{"top":525,"left":337},"IN":{"top":9,"left":199},"JP":{"top":87,"left":34},"MS":{"top":144,"left":390},"NJ":{"top":387,"left":30},"RN":{"top":57,"left":356},"RS":{"top":544,"left":231},"TZ":{"top":280,"left":-3},"VL":{"top":244,"left":406},"VW":{"top":427,"left":388},"YK":{"top":188,"left":22},"DT":{"top":21,"left":284}}';

	table.loadLocations(loadString);

   // detect keypresses and change current status
	detect.start();

   // currently speaking representation circle
	timekeeper.start();

   // global table


  $( function() {
//    $( ".draggable" ).draggable();
	// TODO: toggle draggable
  } );


});


