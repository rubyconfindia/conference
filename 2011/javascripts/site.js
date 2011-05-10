;
(function($) {
  $(document).ready(function() {

    var selectedContributor = undefined;
    var contributorDetailsSlider = $('#contributorDetailsSlider .slider_content');  
    var contributorDetailsClose = $('#contributorDetailsSlider .holder .close');

    $('li.contributor').each(function(index,contributor){

        $(contributor).bind('click',function(){

            var self = $(this);

            if(selectedContributor === undefined){
                self.addClass('selected');
                self.find('.toggleImage').addClass('leftArrow');
                contributorDetailsSlider.append(self.find('.details').clone().show()).animate({ width: 'toggle'});
                contributorDetailsSlider.addClass('open');
                contributorDetailsClose.show('slow');
            }

            if(selectedContributor  !== undefined && selectedContributor[0] != self[0]){
                selectedContributor.removeClass('selected');
                selectedContributor.find('.toggleImage').removeClass('leftArrow');

                self.addClass('selected');
                self.find('.toggleImage').addClass('leftArrow');

                contributorDetailsSlider.empty();
                if(contributorDetailsSlider.hasClass('open')){
                    contributorDetailsSlider.append(self.find('.details').clone().show());
                }
                else{
                    contributorDetailsSlider.append(self.find('.details').clone().show()).animate({width: 'toggle'});
                    contributorDetailsSlider.addClass('open')
                    contributorDetailsClose.show('slow');
                }
            }

            if(selectedContributor  !== undefined && selectedContributor[0] === self[0]){

                contributorDetailsSlider.animate({width: 'toggle'});
                if(contributorDetailsSlider.hasClass('open')){
                    contributorDetailsSlider.removeClass('open');
                    contributorDetailsClose.hide();
                    self.find('.toggleImage').removeClass('leftArrow');
                    self.removeClass('selected');
                }
                else{
                    contributorDetailsSlider.addClass('open');
                    contributorDetailsClose.show('slow');
                    self.find('.toggleImage').addClass('leftArrow');
                    self.addClass('selected');
                }
            }

            selectedContributor = self;

        });
        

        $(contributor).bind('mouseover',function(){
            var self = $(this);
            self.find('.toggleImage').addClass('rightArrow');
            self.addClass('highlighted');

        });

        $(contributor).bind('mouseout',function(){
            var self = $(this);
            self.find('.toggleImage').removeClass('rightArrow');
            self.removeClass('highlighted');
        });

    });


    contributorDetailsClose.click(function(){
        contributorDetailsSlider.animate({width: 'toggle'});
        selectedContributor.removeClass('highlighted');
        selectedContributor.find('.toggleImage').removeClass('leftArrow');
        selectedContributor.removeClass('selected');
        contributorDetailsSlider.removeClass('open');
        contributorDetailsClose.hide();
        
    });

  });
})(jQuery);

