+ function ($) {
    'use strict';

    $(document).on('click', '[data-click=toggle]', function (e) {
        
        var $this = $(this)
        var $target = $($this.data('target'))
        var check = $this.data('check');
        //console.log(check)
        if (check==0){
            $('.page').css('opacity','1');
            $target.css('transform','translate3d(-102%, 0, 0)');
            $this.data('check',1)
        }
        else{
            $('.page').css('opacity','0.7');
            $target.css('transform','translate3d(0, 0, 0)');
            $this.data('check',0)
        }


    })

    $(document).on('click', '.page', function (e) {
        var $click = $(".header-click"); 
        var check = $(this).css('opacity');
        console.log(check)
        if (check==0.7){
            $click.css('transform','translate3d(-102%, 0, 0)');
        }
    })


}(jQuery);
