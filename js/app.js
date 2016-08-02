
$(document).ready(function(){
  
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoPlay:  4000,  
    slideSpeed : 1000,
    singleItem:true,
    navigation: true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        1000:{
            items:5
        }
    }
})
});