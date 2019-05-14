$(document).ready(function() {
    $(".expander a.ex").click(function(e){
        e.preventDefault();
        var thisId = $(this).data("switch");

        $(".exPr"+thisId).hide();
        $(".exPo"+thisId).show();

        return false;
    });
});