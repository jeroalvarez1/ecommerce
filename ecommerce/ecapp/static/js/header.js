$(document).ready(function() {
    $(".main-btn").hover(function () {
            $(".list-sections").css({
                "display": "flex",
            });
        }, function () {
            $(".list-sections").css({
                "display": "none",
            });
        }
    );
    $(window).resize(function () { 
        if (actuallyWidth() > 700) {
            $(".list-sections").css({
                "display": "flex",
            });
        } else {
            $(".list-sections").css({
                "display": "none",
            });
        }
    });
    $(".sections").hover(function () {
        console.log("hello word")
            $(".list-sections").css({
                "display": "flex",
            });
            $(".cont-section").css({
                "display": "flex", 
                "flex-direction": "row"
            });
            $(this).css({

            })
            $(this).next().css({
                "display": "flex",
                "flex-direction": "column",
                "background-color": "#2c3e50",
            });
        }, function () {
            
        }
    );

    function actuallyWidth() {
        return $(window).width();
    }
});
  