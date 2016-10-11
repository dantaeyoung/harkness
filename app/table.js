table = {};


table.makeJsPlumb = function() {
    jsPlumb.ready(function () {

        var instance = jsPlumb.getInstance({
            PaintStyle: { lineWidth: 3, strokeStyle: "#ffa500", "dashstyle": "2 4" },
            Endpoint: [ "Dot", { radius: 5 } ],
            EndpointStyle: { fillStyle: "#ffa500" },
            Container: "persondiv"
        });

        var shapes = jsPlumb.getSelector(".person");
        // make everything draggable
        instance.draggable(shapes);

        // suspend drawing and initialise.
        instance.batch(function () {

            // loop through them and connect each one to each other one.
            for (var i = 0; i < shapes.length; i++) {
                for (var j = i + 1; j < shapes.length; j++) {
                    instance.connect({
                        source: shapes[i],  // just pass in the current node in the selector for source
                        target: shapes[j],
                        // here we supply a different anchor for source and for target, and we get the element's "data-shape"
                        // attribute to tell us what shape we should use, as well as, optionally, a rotation value.
                        anchor: "Center",
                        endpoint: "Rectangle"
                    });
                }
            }
        });

    });
}













table.makeTable = function() {
    _.forEach(people, function(v, k) {
        var personwrapper = $("<div class='person'></div>");
        var person = $("<div class='person-inner'></div>");

        var initials = $("<div class='initials'></div>");
        initials.html(k.toUpperCase());

        var firstname = $("<div class='firstname'></div>");
        firstname.html(k);
        firstname.html(v['name'].split(" ")[0]);

        initials.appendTo(person);
        firstname.appendTo(person);

        person.appendTo(personwrapper);

        personwrapper.attr("name", k.toUpperCase());
        personwrapper.addClass("person-" + k.toUpperCase());
        personwrapper.appendTo("#persondiv");
        personwrapper.addClass("draggable");
    });
}

table.updateDurations = function(ppn, pn, d) {
    console.log(pn + " spoke to " + ppn + " for " + (d / 1000) + " seconds");
    // VISUALIZATIONS HAPPEN HERE
}

table.promptSaveLocations = function() {

    var locations = {};

    $(".person").each(function(k, v) {
        var pl = $(v).offset();
        var name = $(v).attr("name");
        locations[name] = pl;
    });

    // pickle
    alert(JSON.stringify(locations));
}

table.promptLoadLocations = function() {
    var locstr = prompt("input Location String?");
    table.loadLocations(locstr);
}

table.loadLocations = function(locstr) {
    locations = JSON.parse(locstr);
    console.log(locations);

    _.forEach(locations, function(v, k) {
       $(".person-" + k).offset(v);
    });
}

table.start = function() {
    table.makeTable();
    table.makeJsPlumb();
}

