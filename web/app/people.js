people = {};
people.listOfNames = []
people.data = {};

people.loadPeople = function() {

    var manualList = [
        ["AT", "Andrew Tinari"],
        ["CK", "Chad Paul Karty"],
        ["CD", "Clara Celeste Dobiesz Dykstra"],
        ["DC", "Dexter Callender"],
        ["DP", "Dongfang Pang"],
        ["IN", "Isabel Narea"],
        ["JP", "Julie Pedtke"],
        ["MS", "Miranda Shugars"],
        ["NJ", "Nishant Jacob"],
        ["RN", "Rachel Ka-Yen Ng"],
        ["RS", "Ray Santay"],
        ["TZ", "Taylor Zanke"],
        ["VL", "Valerie Lechene"],
        ["VW", "Violet Whitney"],
        ["YK", "Yassi Kazemzadeh"],
        ["DT", "Dan Taeyoung"]
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
