// ----------------------------------------
// Kings Template: JS > Hero JS
// ----------------------------------------


var featureHeight = $(".hero").height();
var featurePosition = $(".hero").position();
var featureTriggerValue = featureHeight + featurePosition.top;
var window_height = window.innerHeight;
var offsetAmount;

function checkFeatureDimensions() {
    featureHeight = $(".hero").height();
    featurePosition = $(".hero").position();
    featureTriggerValue = featureHeight + featurePosition.top;
    window_height = window.innerHeight;
}




// Feature parralax fade effect
var scrollEffect = function (elem) {

    // How high the window is

    if ( window.pageYOffset > (featureTriggerValue - window_height)  ) {

        if(featureTriggerValue > window_height) {
            offsetAmount = window.pageYOffset - (featureTriggerValue - window_height);
        }
        else {
            offsetAmount = window.pageYOffset;
        }

        // Apply styles as user scrolls
        elem.setAttribute(
            "style", "opacity:" + Math.max(0, parseFloat(1-(2/window_height*offsetAmount)).toFixed(2)) + "; -webkit-transform: translateY(" + offsetAmount + "px)"
        );
     }

};

var elem = document.querySelector('.content-inner-wrap');


window.onscroll = function(e) {
    scrollEffect(elem);
};

$( window ).resize(function() {
  checkFeatureDimensions();
});



$(document).ready(function(){

    // Make feature full height
    $(".feature__content-wrap").css("height", $(window).height());
        $(window).bind("resize",function() {
        $(".feature__content-wrap").css("height", $(window).height());
    });

});
