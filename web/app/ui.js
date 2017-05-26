ui = {};
ui.showDetails = true;

ui.makeUI = function() {

    $("button").click(function(e) {
        if(e.toElement.name == "dragEnable") {
            jsPlumb.setDraggable(jsPlumb.getSelector(".person"), true)
        }
        if(e.toElement.name == "dragDisable") {
            jsPlumb.setDraggable(jsPlumb.getSelector(".person"), false)
            table.updateLinks();
        }
        if(e.toElement.name == "locSave") {
            table.promptSaveLocations();     
        }
        if(e.toElement.name == "locLoad") {
            table.promptLoadLocations();     
        }
        if(e.toElement.name == "graphToggle") {
            $("#plumbdiv").fadeToggle(500);
        }
        if(e.toElement.name == "graphWeightsToggle") {
            table.toggleWeights();
        }
        if(e.toElement.name == "graphMinWeightsToggle") {
            table.toggleMinWeights();
        }
        if(e.toElement.name == "detailsToggle") {
            ui.toggleDetails();
        }
        $("button").blur();
        $(".queueContents").focus();
    });

}

ui.updateLog = function(pn, nn, d) {
    var txt = "<span class='from'>" + people.data[nn]['firstname'] + "</span> responded after <span class='to'>" + people.data[pn]['firstname'] + "</span>";
    var details = " for " + helpers.humanizeDuration(d) + " at " + moment().format("hh:mm a") + ".";
    console.log(txt + details);
    var logDiv = $("<div class='logentry'></div>");
    logDiv.append($("<span class='who'>" + txt + "</span>"));
    logDiv.append($("<span class='details'>" + details + "</span>"));
    $("#log").append(logDiv);
    updateScroll();
}

function updateScroll(){
    $("#log").animate({ scrollTop: $("#log")[0].scrollHeight}, "slow");
}

ui.toggleDetails = function() {
    ui.showDetails = ! ui.showDetails;

    if(ui.showDetails) {
        $("#log").addClass("hideDetails");
    } else {
        $("#log").removeClass("hideDetails");
    }
}

ui.changeQueueContents = function(t) {
    $(".queueContents").text(t);
}

ui.start = function () {
    ui.makeUI();
}

