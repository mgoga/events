(function() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.status);
            var myArr = JSON.parse(xhr.responseText);

            var outPut = "";
            for (var i = 0; i < myArr.events.length; i++) {
                outPut += "<div class='panel panel-primary'><div class='panel-heading'><h3>";
                outPut += myArr.events[i].title;
                outPut += "</h3></div><div class='panel-body'><p>";
                outPut += myArr.events[i].start_time + ". " + myArr.events[i].venue_address + ". " + myArr.events[i].description;
                outPut += "</p></div></div>";
            }
            document.getElementById("outPut").innerHTML = outPut;
        }
    };

    xhr.open("GET", "http://api.eventful.com/json/events/search?l=Königs+Wusterhausen&sort_order=date&app_key=55qhXBTHtvfkSLsv", true);
    xhr.send();
})();
