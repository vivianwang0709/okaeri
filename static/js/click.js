+function ($) {
    'use strict';
    var Nav = function (element, options) {
        this.$element      = $(element)
        this.$page         = $('.page')
        this.check         = 0
        this.page          = 0
        this.$page.on('click', $.proxy(this.close, this))
    }

    Nav.prototype.open = function (){
        this.$page.css('opacity','0.7');
        this.$element.css('transform','translate3d(0, 0, 0)');
        this.check = 1;
    }

    Nav.prototype.close = function (e){
        if (this.check==0) return
        this.$page.css('opacity','1');
        this.$element.css('transform','translate3d(-102%, 0, 0)');
        this.check = 0;
        
        var $node = $(e.target)
        var pnode = $(e.target).parent()
        if ($(pnode).hasClass("header-button") || $node.hasClass("header-icon")) this.page = 1
    }

    function Plugin(option) {
        var $this = $(this)
        var data = $this.data('bs.nav')
        if (!data) $this.data('bs.nav', (data = new Nav(this, option)))
        if (data && data.page == 0) data.open();
        if (data.page ==1) data.page = 0;
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