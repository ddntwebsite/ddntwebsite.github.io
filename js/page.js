/**
 * Created by Dimitar on 4/9/2016.
 */

$(function(){

    $("#navbarHolder").load("./navbar.html", function() {
        //navbar is loaded

        var mq = window.matchMedia( "(min-width: 769px)" );
        $("ul.nav li.dropdown").hover(function() {

                if (mq.matches) {
                    //simulate click
                    $(this).children("a").first().click();
                    $(this).find("b.fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
                }

            },
            function() {
                if(mq.matches) {
                    $(this).removeClass("open");
                    $(this).find("b.fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
                }
            });

    });
    $("#footerHolder").load("./footer.html");



    $("ul.nav li.dropdown").click(function() {

    });
});

