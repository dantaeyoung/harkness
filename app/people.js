people = {};
people.listOfNames = []
people.data = {};

people.loadPeople = function() {

    //placeholder
    people.data['BJ'] = {};
    people.data['BJ']['name'] = "Brow Jemmerwoman";

    people.data['JJ'] = {};
    people.data['JJ']['name'] = "Jeannie Jack";

    people.data['DBA'] = {};
    people.data['DBA']['name'] = "Daria Buckly Adams";

    people.data['ZE'] = {};
    people.data['ZE']['name'] = "Zena Eeno";

    people.data['HM'] = {};
    people.data['HM']['name'] = "Hellanie Moss";

    people.data['TD'] = {};
    people.data['TD']['name'] = "Tan Daybun";

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
