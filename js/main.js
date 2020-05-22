// import {$,jQuery} from 'jquery';
// // export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;
// const $ = require( "jquery" )( window );

// import '../node_modules/jquery/dist/jquery.min.js'

// var element = document.getElementById("input");
// element.addEventListener('click', function(ev){
//     alert('ok working');
//     ev.target.classList.toggle('checked');
// })


// function myFunction(){
//     alert('ok working');
//     element.classList.add("mystyle");
// }
// $('.input__control').click(function(){
//     alert('ok working');

// })

// remove all .active classes when clicked anywhere
$(document).on('click',function(){
    setTimeout(function(){
        $('.checked').each(function(i,v){
            // $(this).parents('.input_slot').toggleClass('is-focus');
        
            if($(v).val() == ''&& !$(v).hasClass('focusing')) {
            
            $(v).parent('.text-field').find('label').removeClass('is-focus');
            }
        
        })
    },10)    
    
})
    
    
$('body').on('click', '.input_control .input_slot', function () {

    var self = $(this);

    if (self.find('label').hasClass('is-focus') && self.hasClass('is-focus')) {
        return false;
        self.removeClass('is-focus');
        self.find('label').removeClass('is-focus');
        return false;
    }
    $('.input_control .input_slot').find('label').removeClass('is-focus');
    $('.input_control .input_slot').removeClass('is-focus');
    

    self.toggleClass('is-focus');
    self.find('label').toggleClass('is-focus');
    hide = false;
});

    
    
    
$('input.checked').on('keypress',function(){
    $(this).parent('.text-field').find('label').addClass('is-active');
});



$('.checked').on('focusin',function(){

    $(this).addClass('focusing');
})

$('.checked').on('focusout',function(){

    $(this).removeClass('focusing');
})


    
$(document).on('click',function(){
    $('.checked').each(function(i,v){
        // $(this).parents('.input_slot').toggleClass('is-focus');
    
        if($(v).val() == '') {
        
        $(v).parent('.text-field').find('label').removeClass('is-active');
        }
    
    })

    
})

$('.checkbox').on('click',function(){
    $(this).toggleClass('checked');

})
    
// $(function() {
//     var input = $('.input_control .text-field');
//     input.click(function(){
//         $(this).parent().parent().toggleClass("input_control--is-focused'");
//         $(this).children('label').toggleClass('is-active');
//     })

//     $(document).on("click", function(e) {
//         $('.input_control .text-field').parent().parent().removeClass("input_control--is-focused'");
//         $('.input_control .text-field').children('label').removeClass('is-active');
//     });
//     $(document).on("click", function(e) {
//         if ($(e.target).is('.input_control .text-field') === false) {
//             $('.input_control .text-field').parent().parent().removeClass("input_control--is-focused'");
//             $('.input_control .text-field').children('label').removeClass('is-active');
//         }
//     });
// });