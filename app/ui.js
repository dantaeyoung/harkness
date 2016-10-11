ui = {};


ui.makeUI = function() {

    $("button").click(function(e) {
        if(e.toElement.name == "dragEnable") {
//            $(".draggable").draggable("enable");
        }
        if(e.toElement.name == "dragDisable") {
 //           $(".draggable").draggable("disable");
        }
        if(e.toElement.name == "locSave") {
            table.promptSaveLocations();     
        }
        if(e.toElement.name == "locLoad") {
            table.promptLoadLocations();     
        }
    });

}


ui.changeQueueContents = function(t) {
    $(".queueContents").text(t);
}

ui.start = function () {
    ui.makeUI();
}

