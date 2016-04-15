/**
 * Created by Dimitar on 4/9/2016.
 */

$(function(){

    var lastSelectedItem = null;

    $("#navbarHolder").load("./navbar.html", function() {
        //navbar is loaded

        var isTouchUsed = false;

        //if touch is used instead of mouse, we don't want to activate the hover event
        $("body").on("touchstart", function() {
           isTouchUsed = true;
        });
        var mq = window.matchMedia( "(min-width: 769px)" );
        $("ul.nav li.dropdown").hover(function() {

                if (mq.matches && !isTouchUsed ) {
                    //simulate click
                    $(this).children("a").first().click();
                    $(this).find("b.fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
                }

            },
            function() {
                if(mq.matches && !isTouchUsed) {
                    $(this).removeClass("open");
                    $(this).find("b.fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
                }
            });

        $("ul.nav li.dropdown").click(function() {
            //change the arrow direction on click
            if(!mq.matches || isTouchUsed) {
                console.log("I am here!");
                if(lastSelectedItem == null) {

                    $(this).find("b.fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
                    lastSelectedItem = $(this).find("b.fa-chevron-up").first();
                }

                else if($(this).find("b.fa").first().hasClass("fa-chevron-up")) {

                    lastSelectedItem = null;
                    $(this).find("b.fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
                }

                else {
                    lastSelectedItem.removeClass("fa-chevron-up").addClass("fa-chevron-down");
                    $(this).find("b.fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
                    lastSelectedItem = $(this).find("b.fa-chevron-up").first();
                }
            }
        });

    });
    $("#footerHolder").load("./footer.html");




});

