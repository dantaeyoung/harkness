detect = {};

detect.currentQueue = "";

detect.setQueue = function(s) {
    $(".person").removeClass("highlight");
    detect.currentQueue = s.toUpperCase();
    ui.changeQueueContents(detect.currentQueue);
}

detect.startDetection = function() {
    $(".person").dblclick(function(e) {
        var clickedIN = $(e.target.closest(".person")).attr("name");
        detect.setCurrentPersonByIn(clickedIN);
        detect.setQueue("");
    });

    $(document).keyup(function(e) {
         if (e.keyCode == 27) { // escape key maps to keycode `27`
            detect.setQueue("");
            $(".person").removeClass("highlight");
        }
         if (e.keyCode == 8) { //backspace
            detect.setQueue(detect.currentQueue.slice(0, -1));
         }
    });

    $(document).keypress(function(data) {
        if(data.key == "Enter") {
            detect.processQueue();
        } else {
/*
            if(data.altKey) { detect.currentQueue += "|ALT|"; }
            if(data.ctrlKey) { detect.currentQueue += "|CTRL|"; }
            if(data.metaKey) { detect.currentQueue += "|META|"; }
            if(data.shiftKey) { detect.currentQueue += "|SHIFT|"; } 
*/
            if(data.key) {  detect.setQueue(detect.currentQueue + data.key); }
        }

        try {
            detect.highlightPerson($(".person-" + detect.currentQueue));
        } catch (e) {
        }
        
    });
}

detect.highlightPerson = function(p) {
    $(".person").removeClass("highlight");
    p.addClass("highlight");
}

detect.setCurrentPersonByIn = function(s) {
    $(".person").removeClass("speaking");
    $(".person-" + s).addClass("speaking");
    timekeeper.setCurrentPerson(s);
}

detect.processQueue = function() {
    try {
        var thisP = $(".person-" + detect.currentQueue);
        if(thisP.hasClass("person")) {
            detect.setCurrentPersonByIn(detect.currentQueue);
        }
    } catch (e) {
        console.log("no such person!");
    }
    detect.setQueue("");
}

detect.start = function() {
    detect.startDetection();
}
