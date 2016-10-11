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

	table.loadLocations('{"BJ":{"top":144,"left":561},"JJ":{"top":146,"left":284},"DBA":{"top":348,"left":150},"ZE":{"top":567,"left":280},"HM":{"top":555,"left":526},"TD":{"top":355,"left":623}}'); // TESTING

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


