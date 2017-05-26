table = {};
table.linkPixelPerSecond = 1;
table.linkWidthMin = 0.7; 
table.linkWidthMax = 20;
table.linkColor = "#000";
table.responseColor = "#F5A645";
table.showWeights = true;
table.linkWidthNoWeightSpoken = 7;
table.linkColorNoWeight = "rgba(100,100,100,200)";

table.makeJsPlumb = function() {
    jsPlumb.ready(function () {

        jsPlumb.importDefaults({
            PaintStyle: { lineWidth: 40, strokeStyle: "#000" },
            Connector: "Straight",
            ConnectionsDetachable: false,
            Container: "plumbdiv"
        });


        var shapes = jsPlumb.getSelector(".person");
        jsPlumb.draggable(shapes);
        jsPlumb.setDraggable(jsPlumb.getSelector(".person"), false)

        // suspend drawing and initialise.
        jsPlumb.batch(function () {

            // loop through them and connect each one to each other one.
            for (var i = 0; i < shapes.length; i++) {
                for (var j = 0; j < shapes.length; j++) {
                    var personi = shapes[i].id.split("-")[1];
                    var personj = shapes[j].id.split("-")[1];
                    if(personi != personj && personi < personj) {
                        var connection = jsPlumb.connect({
                            source: shapes[i],  // just pass in the current node in the selector for source
                            target: shapes[j],
                            // here we supply a different anchor for source and for target, and we get the element's "data-shape"
                            // attribute to tell us what shape we should use, as well as, optionally, a rotation value.
                            anchor: "Center",
                            endpoint: "Rectangle",
                            cssClass: "link link-" + personi + "-" + personj
                        });
                    }
                }
            }
        });
        $(".link path").each(function() {
            $(this).attr("stroke-width", table.linkWidthMin);
            $(this).attr("stroke-style", table.linkColor);
        });

    });
}



table.makeTable = function() {
    _.forEach(people.getData(), function(v, k) {
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
        personwrapper.attr("id", "person-" + k.toUpperCase());
        personwrapper.addClass("person-" + k.toUpperCase());
        personwrapper.appendTo("#persondiv");
        personwrapper.addClass("draggable");
    });
}

table.toggleWeights = function() {
    table.showWeights = !table.showWeights;
    table.updateLinks();
}

table.toggleMinWeights = function() {
    if(table.linkWidthMin > 0.5) table.linkWidthMin = 0;
    else table.linkWidthMin = 0.7;
    table.updateLinks();
}

table.updateLinks = function(pn, nn, d) {

    console.log(pn, nn, d);
    if(pn < nn) { var responsep1 = pn; var responsep2 = nn; }
    else { var responsep1 = nn; var responsep2 = pn; }

    var maxDur = timekeeper.getMaxLinkDuration();

    // update all durations proportionally.

    _.forEach(people.listOfNames, function(p1) {
        _.forEach(people.listOfNames, function(p2) {
            if(p1 != p2 && p1 < p2) {


                var link = $(".link-" + p1 + "-" + p2 + " path");
                var linkd = timekeeper.getLinkDurationsUni(p1, p2);

                // scale min and max proportionally to min and max
                //
                if(table.showWeights) {
                    var lineWidth = helpers.mapRange([0, maxDur], [table.linkWidthMin, table.linkWidthMax], linkd);
                    link.attr("stroke-width", lineWidth);

                    if(p1 == responsep1 && p2 == responsep2) { 
                        link.attr("stroke", table.responseColor);
                    } else { 
                        link.attr("stroke", table.linkColor);  
                    }

                } else {

                    if(p1 == responsep1 && p2 == responsep2) { 
                        link.attr("stroke", table.responseColor);
                        link.attr("stroke-width", table.linkWidthNoWeightSpoken);
                    } else { 
                        link.attr("stroke", table.linkColor);
                        link.attr("stroke-width", table.linkWidthMin);
                    }
                }


            }
        });
    });
    




}

table.linkDurationToPixel = function(d) {
    return d / 1000 / table.linkPixelPerSecond;
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
    console.log(JSON.stringify(locations));
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

    jsPlumb.repaintEverything();
    table.updateLinks();
}

table.start = function() {
    table.makeAll();
}

table.makeAll = function() {
    table.makeTable();
    table.makeJsPlumb();
}

