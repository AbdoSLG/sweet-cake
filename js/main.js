//              owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})