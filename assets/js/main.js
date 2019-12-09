//
$(document).ready(function() {
    $("form").submit(function(e) {

        e.preventDefault();

        const data = {
            body: $("#message").val()
        };

        $.ajax({
            method: "POST",
            url: "https://3tck7cud4e.execute-api.us-west-2.amazonaws.com/prod",
            crossDomain: true,
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
            success: (data, status) => {
                alert("Message sent!");
                console.log({data}, {status});
            }
        });
    });
});