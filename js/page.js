/**
 * Created by Dimitar on 4/9/2016.
 */
$(function(){
    var mq = window.matchMedia( "(min-width: 979px)" );
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

    $("ul.nav li.dropdown").click(function() {
        if($(this).find("b.fa").hasClass("fa-chevron-up")) {
            $(this).find("b.fa").removeClass("fa-chevron-up").addClass("fa-chevron-up");
        }
    });
});