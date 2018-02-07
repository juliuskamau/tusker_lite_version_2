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
   
        $('.thumbnail-gallery').slick({
            centerMode: true,
            dots: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
          });
        
        
    }
};



VIDEOSILIDER = {
    bindVideoSilider: function () {
   
        $(document).ready(function () {
            $('.videossilider').slick({
                dots: false

            });
        });
        
        
    }
};






var onLoad = function () {
    LOADER.bindLoader();
    IMAGECROPPER.bindImageCropper();
    THUMBNAIL.bindThumbnail();
    VIDEOSILIDER.bindVideoSilider();

};


$(document).foundation();
window.onload = onLoad();
