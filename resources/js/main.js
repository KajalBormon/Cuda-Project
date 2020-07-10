$(document).ready(function(){
    // sticky menu
    $(".js--services-section").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
        }
        else{
            $("nav").removeClass("sticky");
        }
    });

    // mixitup portfolio
    var mixer = mixitup('.container');
// SMOOTH SCROLL BAR
$("a").on('click',function(event){
    if(this.hast!=""){
        event.preventDefault();
        var hash= this.hash;
        $('html,body').animate({
            scrollTop:$(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
    }
});

});

// Navigation

function openNav(){
   document.getElementById("myNav").style.width="100%"; 
}
function closeNav(){
    document.getElementById("myNav").style.width="0%"; 
 }