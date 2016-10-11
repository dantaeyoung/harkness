ui = {};


ui.makeUI = function() {

    $("button").click(function(e) {
        if(e.toElement.name == "dragEnable") {
            $(".person").each(function() {
                jsPlumb.setDraggable(this, true);
            });
        }
        if(e.toElement.name == "dragDisable") {
            $(".person").each(function() {
                jsPlumb.setDraggable(this, false);
            });
           
        }
        if(e.toElement.name == "locSave") {
            table.promptSaveLocations();     
        }
        if(e.toElement.name == "locLoad") {
            table.promptLoadLocations();     
        }
    });

}

ui.updateLog = function(pn, nn, d) {
    var txt = people.data[nn]['name'] + " responded to " + people.data[pn]['name'] + " for " + (d/1000) + " seconds.";
    console.log(txt);
    var logDiv = $("<div></div>").text(txt);
    $("#log").append(logDiv);
}


ui.changeQueueContents = function(t) {
    $(".queueContents").text(t);
}

ui.start = function () {
    ui.makeUI();
}

