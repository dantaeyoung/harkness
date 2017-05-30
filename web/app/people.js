people = {};
people.listOfNames = []
people.data = {};

people.loadPeople = function() {

    // TODO: edit this to add names
    var manualList = [
        ["DT", "Dan"],
        ["FT", "Francis"],
        ["RR", "Rachel"],
        ["LW", "Zon"],
        ["TK", "Calvin"],
        ["MH", "Melanie"],
        ["SH", "Sam"],
        ["JV", "James"],
        ["AM", "Alex"],
        ["DH", "David"],
        ["JA", "James"],
        ["RT", "Ruth"],
        ["RD", "Ritwik"],
        ["KSK", "Kira"],
        ["NP", "NewPerson"],
        ["AA", "Addy"],
        ["AS", "Austin"],
        ["MW", "Marty"]
    ] 

    _.each(manualList, function(p) {
        people.data[p[0]] = {};
        people.data[p[0]]['name'] = p[1];
        people.data[p[0]]['firstname'] = p[1].split(" ")[0];
    });

    _.forEach(people.data, function(v, k) {
        people.listOfNames.push(k.toUpperCase());
    });
}

people.getData = function() {
    return people.data;
}

people.start = function() {
    people.loadPeople();
}
