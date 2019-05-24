$(document).ready(function() {
    $('a.ext').each(function () {
       $(this).addClass('fa').addClass('fa-external-link');
    });
    $('a.ex').click(function(e){
        e.preventDefault();
        var thisId = $(this).data('switch');
        $('.exPr'+thisId).hide();
        $('.exPo'+thisId).show();
        return false;
    });
});