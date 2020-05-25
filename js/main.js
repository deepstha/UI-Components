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
            // $(this).parents('.input_slot').toggleClass('is-focused');
        
            if($(v).val() == ''&& !$(v).hasClass('focusing')) {
            
            $(v).parent('.text-field').find('label').removeClass('is-focused');
            }
        
        })
    },10)    
    
})
    
    
$('body').on('click', '.input_control .input_slot', function () {

    var self = $(this);

    if (self.find('label').hasClass('is-focused') && self.hasClass('is-focused')) {
        // return false;
        self.removeClass('is-focused');
        self.find('label').removeClass('is-focused');
        return false;
    }
    $('.input_control .input_slot').find('label').removeClass('is-focused');
    $('.input_control .input_slot').removeClass('is-focused');
    

    self.toggleClass('is-focused');
    self.find('label').toggleClass('is-focused');
    hide = false;
});

//For Select   
$(function () {
    $(".selectbox .selectbox__wrap").on("click", function (e) {
        e.stopPropagation();
        // $('.selectbox .selectbox__wrap').find('.floating-label').removeClass('is-focused');
        $(this).find('.floating-label').toggleClass('is-focused');
        $(this).parent('').toggleClass('is-focused');
        $(this).next().toggleClass('is-active');
        $(this).next('.menu-surface').toggleClass('menu-surface--open');
        $('.selectbox__icon-dropdown').toggleClass('is-focused');
    });

    $(document).on("click", function (e) {
        $('.selectbox .selectbox__wrap .floating-label.is-focused').removeClass('is-focused');
        $('.selectbox .selectbox__wrap').parent('').removeClass('is-focused');
        $('.selectbox .selectbox__wrap').next().removeClass('is-active');
        $('.selectbox .selectbox__wrap').next('.menu-surface').removeClass('menu-surface--open');
        $('.selectbox .selectbox__wrap').find('.floating-label').removeClass('is-focused');
        $('.selectbox__icon-dropdown').removeClass('is-focused');
    });

    $('.selectbox__menu ul li').click(function(e){
        $(this).toggleClass('selected-item');
        e.stopPropagation();
        var index = $(this).index();
        var text = $(this).text();

        $('.selectbox .selectbox__wrap').find('.floating-label').addClass('is-active');
        $('.selectbox .selectbox__wrap').next().removeClass('is-active');
        $('.selectbox .selectbox__wrap').next('.menu-surface').toggleClass('menu-surface--open');
        $('.selectbox__selected-text').text(text);
        $('.selectbox__icon-dropdown').toggleClass('is-focused');

        // var open =  $('.selectbox .selectbox__wrap').next('.menu-surface').hasClass('menu-surface--open');
        // self.find('label').hasClass('is-focused')
        // if($('.selectbox .selectbox__wrap').next('.menu-surface').hasClass('menu-surface--open')){
        //     $('.selectbox__icon-dropdown').css('transform', 'rotate(180deg)' )
        // }
        // else{
        //     $('.selectbox__icon-dropdown').css('transform', 'rotate(0)' )
        // }
        // alert('index is:' + index + ' and text is' + text);

    });
    // var isActive = $('.selectbox__menu ul li').hasClass('selected-item');
    // if(!isActive){
    //     $('.selectbox__menu ul li').addClass("selected-item");
    // }
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

// $('.selectbox .selectbox__wrap').on('focusout',function(){

//     $(this).find('.floating-label').removeClass('is-focused');
// })

// $(document).on("click", function(e) {
//     $('.selectbox .selectbox__wrap').find('.floating-label').removeClass('is-focused');
// });

// var select = $('.selectbox .selectbox__wrap');

// $('.selectbox .selectbox__wrap').on('focusin',function(){

//     $(this).find('.floating-label').addClass('focusing');
// })

// $('.selectbox .selectbox__wrap').on('focusout',function(){

//     $(this).find('.floating-label').removeClass('focusing');

// })

    
$(document).on('click',function(){
    $('.checked').each(function(i,v){
        // $(this).parents('.input_slot').toggleClass('is-focused');
    
        if($(v).val() == '') {
        
        $(v).parent('.text-field').find('label').removeClass('is-active');
        }
    
    })

    
})

//For checkbox
$('.checkbox').on('click',function(){
    $(this).each(function(){
        $(this).toggleClass('checked');
    })

})
    
// $(function() {
//     var input = $('.input_control .text-field');
//     input.click(function(){
//         $(this).parent().parent().toggleClass("input_control--is-focuseded'");
//         $(this).children('label').toggleClass('is-active');
//     })

//     $(document).on("click", function(e) {
//         $('.input_control .text-field').parent().parent().removeClass("input_control--is-focuseded'");
//         $('.input_control .text-field').children('label').removeClass('is-active');
//     });
//     $(document).on("click", function(e) {
//         if ($(e.target).is('.input_control .text-field') === false) {
//             $('.input_control .text-field').parent().parent().removeClass("input_control--is-focuseded'");
//             $('.input_control .text-field').children('label').removeClass('is-active');
//         }
//     });
// });