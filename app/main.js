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
	table.start();

	table.loadLocations('{"BJ":{"top":192,"left":581.5},"JJ":{"top":191,"left":348.5},"DBA":{"top":362,"left":206.5},"ZE":{"top":496,"left":313.5},"HM":{"top":539,"left":479.5},"TD":{"top":409,"left":631.5}}'); // TESTING

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


