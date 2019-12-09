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

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.fadeIn-slow').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},1000);
            }
        }); 

        /* Check the location of each desired element */
        $('.fadeIn-fast').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
            }
        }); 
    });
});

$(document).ready(function() {
    $('.fadeonload').each( function(i){
        $(this).animate({'opacity':'1'},500);
    }); 
});
