$(document).ready(function () {
    $.get("views", function (settings) {
        currentIndex = 0;
        console.log(settings["views"]);
        $('#displayFrame').attr('src', settings['views'][currentIndex]);


        setInterval(function () {
            nextIndex = (currentIndex + 1) % settings.views.length;
            currentIndex = nextIndex;
            $.get("views", function (settings) {
                currentView = settings.views[nextIndex];
                $('#displayFrame').fadeOut('slow', function () {
                    $(this).attr('src', currentView);
                    $(this).fadeIn('slow');
                });
            });

        }, settings.renderDuration);
    });
});