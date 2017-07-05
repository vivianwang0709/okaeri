+ function ($) {
    'use strict';


    $(document).on('click', '[data-click=toggle]', function (e) {


        var $this = $(this)
        var $target = $($this.data('target'))
        var check = $this.data('check')

        

        if (check==0){
            $target.css('transform','translate3d(-102%, 0, 0)');
            $this.data('check',1)
        }
        else{
            $target.css('transform','translate3d(0, 0, 0)');
            $this.data('check',0)
        }


    })


}(jQuery);
