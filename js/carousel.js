// CAROUSEL
window.addEventListener("load", function(){
    new Glider(document.querySelector(".carousel-list"), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel-indicators',
        arrows: {
            prev: '.carousel-prev',
            next: '.carousel-next'
        },
        responsive: [
            {
              // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '2',
                slidesToScroll: '2',
            }
            },{
              // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
            }
        ]
    });
});

var slider = new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});