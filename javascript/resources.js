// ajax request to std's.json to get information from the json file and displaying STD diseases, symptoms, and images.
//@ From the ajax request activity 15
$(document).ready(function () {

    $.ajax({
        type: "get",
        url: "std's.json",

        beforeSend: function () {
            $("#Resources").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            $("#Resources").html("");
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#Resources").append(
                        "<h3>" + value.name + "<h3>" +
                        "<p>" + value.symptoms + "<h3>" +
                        "<img src = " + value.image + ">" +
                        "<br><br>"

                    );
                });
            });
        }
    });

});