/*  Die Objekte des "event"-Arrays werden
    anhand eines "for loop" zu sinnvollem
    Output verarbeitet:                    */

function showEvents(data) {
    var events = data.events.event;
    var outPut = "";
    for (var i = 0; i < events.length; i++) {
        outPut += "<div class='panel panel-info text-center'><div class='panel-heading'><h4>";
        outPut += "<a href='" + events[i].url+ "'>" + events[i].title + "</a>";
        outPut += "</h4></div><div class='panel-body'><p>";
        var eventBeginn = events[i].start_time.replace(/[\s:-]/g, "");
        var year = eventBeginn.slice(0, 4);
        var month = eventBeginn.slice(4, 6);
        var monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
        var day = eventBeginn.slice(6, 8);
        var hour = eventBeginn.slice(8, 10);
        var min = eventBeginn.slice(10, 12);
        outPut += "Am " + day + ". " + monthNames[month - 1] + " " + year;
        if (hour === "00") {
            outPut += "<br>";
        } else {
            outPut += " um " + hour + ":" + min  + "<br>";
        }
        if (!events[i].venue_address) {
            outPut += "Für diese Event gibt es keine Adresse. <br>";
        } else {
            outPut += events[i].venue_address + "<br>";
        }
        if (!events[i].description) {
            outPut += "Für dieses Event gibt es keine Beschreibung";
        } else {
            outPut += events[i].description;
        }
        outPut += "</p></div></div>";
    }
    document.getElementById("outPut").innerHTML = outPut;
}
