$(document).ready(function() {
    $('a.ex').click(function(e){
        e.preventDefault();
        var thisId = $(this).data('switch');
        $('.exPr'+thisId).hide();
        $('.exPo'+thisId).css('display','inline');
        return false;
    });
});