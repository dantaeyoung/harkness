storage = {};

storage.meetingName = "testMeeting1";

storage.storeLog = function(prevS) {
    var objs = JSON.stringify(prevS);
    console.log("let's store" + objs);
    storage.sendAjax(objs);
}

storage.sendAjax = function(data) {
	$.get(
        "//vps.provolot.com/manila_api/add_comment?meetingname=" + storage.meetingName + "?comment=" + encodeURIComponent(data),
        function(data) {
            console.log("Response: " + data);
        }
    );
}


storage.start = function() {
    
}
