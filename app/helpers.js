helpers = {};

helpers.mapRange = function(from, to, s) {
  return to[0] + (s - from[0]) * (to[1] - to[0]) / (from[1] - from[0]);
};

helpers.cloneObj = function(obj) {
    return JSON.parse(JSON.stringify(obj))
}

helpers.humanizeDuration = function(d) {
    var dur = moment.duration(d);
    if(dur._data.hours > 0) { return dur.humanize(); }
    if(dur._data.minutes > 0){   return dur._data.minutes + ' minutes and '   + helpers.humanizeSeconds(dur._.data.seconds);}
    return helpers.humanizeSeconds(dur._data.seconds); 
}

helpers.humanizeSeconds = function(secs) {
    if(secs < 5) { return "a brief moment"; }
    if(secs < 15) { return "a few seconds"; }
    if(secs < 35) { return "about half a minute"; }
    if(secs < 50) { return "about a minute"; }
}
