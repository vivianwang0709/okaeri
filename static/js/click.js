+function ($) {
    'use strict';
    var Nav = function (element, options) {
        this.$element      = $(element)
        this.$page         = $('.page')
        this.check         = 0
        this.$page.on('click', $.proxy(this.close, this))
    }


    Nav.prototype.open = function (){
        this.$page.css('opacity','0.7');
        this.check = 1;
        this.$element.css('transform','translate3d(0, 0, 0)');
    }
    Nav.prototype.close = function (){
        this.check = 0;
        this.$page.css('opacity','1');
        this.$element.css('transform','translate3d(-102%, 0, 0)');
    }

    function Plugin(option) {
        var $this = $(this)
        var data = $this.data('bs.nav')
        if (!data) $this.data('bs.nav', (data = new Nav(this, option)))

        if (data.check == 0) data.open();
        
    }

    function getTargetFromTrigger($trigger) {
        var target = $trigger.attr('data-target')
        return $(target)
    }

    $(document).on('click', '[data-click=toggle]', function (e) {
        var $this = $(this)
        var option = $this.data();
        var $target = getTargetFromTrigger($this)
        Plugin.call($target, option)
    })

}(jQuery);