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

    var loadString = '{"AT":{"top":530,"left":193},"CK":{"top":15,"left":135},"CD":{"top":511,"left":90},"DC":{"top":320,"left":447},"DP":{"top":505,"left":435},"IN":{"top":44,"left":423},"JP":{"top":128,"left":78},"MS":{"top":120,"left":451},"NJ":{"top":418,"left":62},"RN":{"top":26,"left":328},"RS":{"top":538,"left":338},"TZ":{"top":324,"left":57},"VL":{"top":232,"left":454},"VW":{"top":409,"left":445},"YK":{"top":223,"left":73},"DT":{"top":20,"left":235}}';

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


