timekeeper = {};

timekeeper.log = []; // timestamp, stuff
timekeeper.personDurations = {};
timekeeper.linkDurations = {};

timekeeper.currentSpeech = {};
timekeeper.prevSpeech = {};



timekeeper.setCurrentPerson = function(p) {

    prevS = {};
    prevS.name = timekeeper.currentSpeech.name;
    prevS.startedAt = timekeeper.currentSpeech.startedAt;
    prevS.endedAt = new Date();
    prevS.duration = prevS.endedAt - prevS.startedAt;

    if(typeof timekeeper.prevSpeech.name !== "undefined") {
        timekeeper.log.push(prevS);
        timekeeper.updateDurations(prevS.name, p, prevS.duration);
    }

    timekeeper.currentSpeech.name = p;
    timekeeper.currentSpeech.startedAt = new Date();

    timekeeper.prevSpeech = helpers.cloneObj(prevS);
}


timekeeper.updateDurations = function(pn, nn, d) {
    timekeeper.personDurations[nn] += d;

    timekeeper.linkDurations[pn + "-" + nn] += d;

    ui.updateLog(pn, nn, d);
    table.updateLinks(pn, nn, d);
}

timekeeper.getMaxLinkDuration = function() {
    var max = 0;
    _.each(timekeeper.linkDurations, function(v, k) {
        if(v > max) { max = v; }
    });
    return max;
}

timekeeper.getTotalLinkDuration  = function() {
    var sum = 0;
    _.each(timekeeper.linkDurations, function(v, k) {
        sum += v;
    });
    return sum;
}

timekeeper.getLinkDurationsUni = function(p1, p2) {
    return timekeeper.linkDurations[p1 + "-" + p2] + timekeeper.linkDurations[p2 + "-" + p1];
}

timekeeper.start = function() {

    _.forEach(people.getData(), function(v, n) {
        timekeeper.personDurations[n.toUpperCase()] = 0;
        _.forEach(people.getData(), function(v2, n2) {
            if(n != n2) {
                timekeeper.linkDurations[n.toUpperCase() + "-" + n2.toUpperCase()] = 0;
            }
        });
    });

    timekeeper.currentSpeech.name = "" ;
    timekeeper.currentSpeech.startedAt = null;

}
