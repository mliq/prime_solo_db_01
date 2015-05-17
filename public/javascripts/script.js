$(document).ready(function () {
    console.log('hi');

    $.ajax({
        url: '/users/list',
        method: 'get',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            processData(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        },
        complete: function (jqXHR, textStatus) {
            console.log("getData() Ajax Get Complete:", textStatus);
        }
    });

    function processData(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var html = "<div class='row well col-xs-12 col-sm-6 col-md-3'>Username: " + data[i].username
                + "<br>First Name: " + data[i].firstname
                + "<br>Last Name: " + data[i].lastname
                + "<br>E-mail: " + data[i].email
                + "</div>";
            $('.userlist').append(html);
        }
    }
});