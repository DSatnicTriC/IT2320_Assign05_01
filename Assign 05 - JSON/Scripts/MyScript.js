function getData() {
    return {
        "refrigerators": [
            {
                "owner": "Daniel",
                "topShelf": [
                    "yogurt",
                    "banana"
                ],
                "bottomShelf": [
                  "marmelade",
                  "casserole"
                ],
                "freezer": [
                  "ice cream",
                  "turkey"
                ]
            },
            {
                "owner": "Corina",
                "topShelf": [
                    "chocolate",
                    "pickles"
                ],
                "bottomShelf": [
                  "potato salad",
                  "beef stew"
                ],
                "freezer": [
                  "ice cream",
                  "frozen yogurt"
                ]
            },
            {
                "owner": "Alex",
                "topShelf": [
                    "deli meats",
                    "spinach"
                ],
                "bottomShelf": [
                  "chicken",
                  "beef casserole"
                ],
                "freezer": [
                  "hot pockets",
                  "motzarella sticks"
                ]
            }
        ]
    }
}

$(document).ready(function () {
    var data = getData();
    for (var i = 0; i < data.refrigerators.length; i++) {
        var text = "<u>" + data.refrigerators[i].owner + "'s fridge </u><br><br>";
        text += "<i>topShelf</i><br><br>"
        text += data.refrigerators[i].topShelf.join("<br>")
        text += "<br><br>"
        text += "<i>bottomShelf</i><br><br>"
        text += data.refrigerators[i].bottomShelf.join("<br>")
        text += "<br><br>"
        text += "<i>freezer</i><br><br>"
        text += data.refrigerators[i].freezer.join("<br>")

        $("#refrigerateurs").append("<table><tr><td>" + text + "</td></tr></table>");
        if (i != data.refrigerators.length - 1) {
            $("#refrigerateurs").append("<br><br>");
        }
    }
});
