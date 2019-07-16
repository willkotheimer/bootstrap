 $(document).ready(function(){

             $('#Login').click(function() {
              $('#loginModal').modal('toggle');
            });

             $('#ordercard').click(function() {
                
              $('#ReservationModal').modal('toggle');
              
            });

            $('#myCarousel').carousel({interval: 2000});

            $('#carouselButton').click(function(){
                if($('#carouselButton').children('span').hasClass('fa-pause')) {
                    $('#myCarousel').carousel('pause');
                     $('#carouselButton').children('span').removeClass('fa-pause');
                     $('#carouselButton').children('span').addClass('fa-play');
                } else {
                    $('#carouselButton').children('span').removeClass('fa-play');
                    $('#carouselButton').children('span').addClass('fa-pause');
                    $('#myCarousel').carousel('cycle');
                }
                
            });

         
        });