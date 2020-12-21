$(document).ready(function() {
    function switchBackground() {
        var bg = [
            {name: 0, title: 'Freimarkt Bremen'},
            {name: 1, title: 'Quallen im SEA LIFE Centre Aquarium London'},
            {name: 2, title: 'Feier in der WeinGallerie am Schloss Schellenberg, Essen'},
            {name: 3, title: 'Cyberdog Store in Camden Town, London'},
            {name: 4, title: 'Sloane Square Station, London'},
            {name: 5, title: 'National History Museum, London'},
            {name: 6, title: 'Sushi-Laufband im LOOM, Bielefeld'},
            {name: 7, title: 'Karussel im Phantasialand, Köln'},
            {name: 8, title: 'GLOW 2017, Eindhoven'}
        ];
        var i = Math.floor((Math.random() * bg.length));
        $("#background").css('background-image', 'url(/res/bg/'+bg[i].name+'.gif)');
        $("#background-title").html(bg[i].title);

        $('a.ex').click(function(e){
            e.preventDefault();
            var thisId = $(this).data('switch');
            $('.exPr'+thisId).hide();
            $('.exPo'+thisId).css('display','inline');
            return false;
        });
    }
    switchBackground();
    window.setInterval(function() { switchBackground(); },10000);

    $('#background-title').hover(function(){
        $('#background, #container').addClass('clear');
    },function(){
        $('#background, #container').removeClass('clear');
    })

    $('#imprintModal').on('show.bs.modal', function(){
       $('.modal-body','#imprintModal').load('/imprint.html');
    });
});
