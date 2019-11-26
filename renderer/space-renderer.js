'use strict'

window.$ = window.jQuery = require('jquery');
require("bootstrap")
require("./js/common.js")
require("jquery.nicescroll")
$("#btnMenu").on("click", function(){
    $(".side-menu").slideToggle();
});

// $(".main-body").niceScroll({ cursorcolor: "#b3b3b3 ", cursorwidth: "6px", cursorborderradius: "5px", cursorborder: "1px solid transparent", touchbehavior: true, 
//         preventmultitouchscrolling: true,
//         enablekeyboard: true});
                           
                          