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

	storage.start();
// load people and make table
	people.start();

	table.start();

    var loadString = '{"DT":{"top":556,"left":82},"FT":{"top":460,"left":29},"RR":{"top":311,"left":1},"LW":{"top":202,"left":13},"TK":{"top":118,"left":34},"MH":{"top":40,"left":117},"SH":{"top":14,"left":220},"JV":{"top":49,"left":384},"AM":{"top":116,"left":477},"DH":{"top":29,"left":307},"JA":{"top":215,"left":536},"RT":{"top":305,"left":545},"RD":{"top":395,"left":518},"KSK":{"top":526,"left":451},"NP":{"top":25,"left":562},"AA":{"top":568,"left":370},"AS":{"top":591,"left":282},"MW":{"top":590,"left":185}}';

	table.loadLocations(loadString);

   // detect keypresses and change current status
	detect.start();

   // currently speaking representation circle
	timekeeper.start();

   // global table


  $( function() {
  } );


});


