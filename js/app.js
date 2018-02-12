 LOADER = {
    bindLoader: function () {
   
        $(document).ready(function() {
            
             // Fakes the loading setting a timeout
               setTimeout(function() {
                   $('body').addClass('loaded');
               }, 4000);
            
           });
        
    }
};




IMAGECROPPER = {
    bindImageCropper: function () {
   
        $(document).ready(function () {
            if ($(".imgLiquidFill").length) {
                $(".imgLiquidFill").imgLiquid({ fill: true });
            }
            if ($(".imgLiquidNoFill").length) {
                $(".imgLiquidNoFill").imgLiquid({ fill: false });
            }
        });
        
        
    }
};

THUMBNAIL = {
    bindThumbnail: function () {
   
      //  $(".thumbnail-gallery").slick({
        //    dots: true,
        //    infinite: true,
         //   slidesToShow: 3,
          //  slidesToScroll: 3,
          //  autoplay:true,
           // arrows:false,
           // autoplaySpeed:1500
        //  });


        $('.thumbnail-gallery').slick({
        dots: true,
        infinite: true,
         slidesToShow: 3,
          slidesToScroll: 3,
          autoplay:true,
           arrows:false,
           autoplaySpeed:1500,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                    dots: true,
                     slidesToShow: 2,
                      slidesToScroll: 2,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });


        
        
    }
};



VIDEOSILIDER = {
    bindVideoSilider: function () {
   
        $(document).ready(function () {
            $('.videossilider').slick({
                dots: false,
               autoplay:true,
                autoplay:true


            });
        });
        
        
    }
};

DATEPICKER = {
    bindDatePicker: function () {
   
        $(function() {
            $( "#date" ).datepicker({
              showOn: "both", 
              buttonText: "<a>Calendar</a>" 

              
            });
          });
      
        
        
    }
};

ACTIVELINKS = {
    bindActiveLinks: function () {
   
        $(document).ready(function(){
            $('ul li a').click(function(){
              $('li a').removeClass("active");
              $(this).addClass("active");
          });
          });
        
    }
};



var onLoad = function () {
    LOADER.bindLoader();
    IMAGECROPPER.bindImageCropper();
    THUMBNAIL.bindThumbnail();
    VIDEOSILIDER.bindVideoSilider();
    DATEPICKER.bindDatePicker();
    ACTIVELINKS.bindActiveLinks()

};


$(document).foundation();
window.onload = onLoad();
