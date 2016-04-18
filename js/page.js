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
                $this = $(this);
                $this.children("a").first().click();
                $this.find("b.fa-chevron-down").attr("class", "fa fa-chevron-up");
            }
                },

            function() {
                if (mq.matches && !isTouchUsed ) {
                    $this = $(this);
                    $this.removeClass("open");
                    $this.find("b.fa-chevron-up").attr("class", "fa fa-chevron-down");
                }
            });



        $("ul.nav li.dropdown").click(function() {
            //change the arrow direction on click
            if(!mq.matches || isTouchUsed) {

                var $this = $(this);
                var $icon = $this.find('b');
                $icon.attr('class', ($icon.hasClass('fa-chevron-up') ? 'fa fa-chevron-down' : 'fa fa-chevron-up'));
                $this.siblings().find('b').attr('class', 'fa fa-chevron-down');
            }
        });

    });
    $("#footerHolder").load("./footer.html");




});

