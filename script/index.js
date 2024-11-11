$(function() {
    $('#Messages').click( function() {
        $('.message-div-content').addClass('message-box-shadow');
    });

    setTimeout(function() {
        $('.message-div-content').removeClass('message-box-shadow');
    }, 3000);
});