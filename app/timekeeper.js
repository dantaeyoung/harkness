timekeeper = {};

timekeeper.log = []; // timestamp, stuff
timekeeper.personDurations = {};
timekeeper.linkDurations = {};

timekeeper.currentSpeech = {};
timekeeper.prevSpeech = {};

function cloneObj(obj) {
    return JSON.parse(JSON.stringify(obj))
}

timekeeper.setCurrentPerson = function(p) {

    prevS = {};
    prevS.name = timekeeper.currentSpeech.name;
    prevS.startedAt = timekeeper.currentSpeech.startedAt;
    prevS.endedAt = new Date();
    prevS.duration = prevS.endedAt - prevS.startedAt;
    if(prevS.duration < 10000000) {
        timekeeper.log.push(prevS);
        console.log(prevS);

        timekeeper.updateDurations(timekeeper.prevSpeech.name, prevS.name, prevS.duration);
    }

    timekeeper.currentSpeech.name = p;
    timekeeper.currentSpeech.startedAt = new Date();

    timekeeper.prevSpeech = prevS;
}


timekeeper.updateDurations = function(ppn, pn, d) {
    timekeeper.personDurations[pn] += d;
    timekeeper.linkDurations[ppn + "-" + pn] += d;

    table.updateDurations(ppn, pn, d);
}

timekeeper.start = function() {

    _.forEach(people, function(v, n) {
        timekeeper.personDurations[n.toUpperCase()] = 0;
        _.forEach(people, function(v2, n2) {
            if(n != n2 && v2 < v) {
                timekeeper.linkDurations[n.toUpperCase() + "-" + n2.toUpperCase()] = 0;
            }
        });
    });

    timekeeper.currentSpeech.name = "" ;
    timekeeper.currentSpeech.startedAt = null;

}
