helpers = {};

helpers.mapRange = function(from, to, s) {
  return to[0] + (s - from[0]) * (to[1] - to[0]) / (from[1] - from[0]);
};

helpers.cloneObj = function(obj) {
    return JSON.parse(JSON.stringify(obj))
}
