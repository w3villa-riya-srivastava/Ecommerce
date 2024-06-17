$('.slider').slick({
    dots: true,
    infinite: true, //if TRUE slides will keep moving and will return to first slide otheriwse it will not move after showing all slides
    speed: 300,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 800,  
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 928,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// FASHION SLIDER
$('.fashion-slider').slick({
  dots: true,
  infinite: true, //if TRUE slides will keep moving and will return to first slide otheriwse it will not move after showing all slides
  speed: 300,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 800,  
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1530,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 928,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});


// BRAND CAROUSEL

$('.brand-slide').slick({
    dots: true,
    infinite: true, //if TRUE slides will keep moving and will return to first slide otheriwse it will not move after showing all slides
    speed: 300,
    slidesToShow: 9, 
    autoplay: true,
    autoplaySpeed: 800, 
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 928,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });


  // LEFT-CAROUSEL SLIDE 

  $('.hero-slide').slick({
    dots: true,
    infinite: true, //if TRUE slides will keep moving and will return to first slide otheriwse it will not move after showing all slides
    speed: 300,
    autoplay: true,
    autoplaySpeed: 800, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 928,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });