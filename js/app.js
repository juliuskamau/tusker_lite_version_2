
   LOADER = {
    bindLoader: function () {
   
        $(document).ready(function() {
            
             // Fakes the loading setting a timeout
               setTimeout(function() {
                   $('body').addClass('loaded');
               }, 3500);
            
           });
        
    }
};


ACTIVECLASS = {

    bindClassActive: function () {
        $(function(){
            $('ul li ').click(function(){
                $('ul li a.active').removeClass('active');
                $(this).addClass('active');
            });
        });
        
    }
};











var onLoad = function () {
    LOADER.bindLoader();
    ACTIVECLASS.bindClassActive();
 
};


$(document).foundation();
window.onload = onLoad();
