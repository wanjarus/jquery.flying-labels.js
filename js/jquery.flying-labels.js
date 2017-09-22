;(function($){
    var methods = {
        show: function(dataFor, config){
            var $placeholder = $("."+config.placeholderClass+"[data-for='"+dataFor+"']");
            var $field = $("[name='"+dataFor+"']");
            if($field.val()!=""){
                if($placeholder.first().length==0){
                    $("<div/>", {
                        "class": config.placeholderClass,
                        "data-for": dataFor,
                        text: $field.attr('placeholder')
                    }).insertAfter($field).css('animation', config.showAnimation+' forwards '+config.animationTime+'ms').show();
                }else $placeholder.first().css('animation', config.showAnimation+' forwards '+config.animationTime+'ms').show();
            }  
        },  
        hide: function(dataFor, config){
            var $placeholder = $("."+config.placeholderClass+"[data-for='"+dataFor+"']");
            var $field = $("[name='"+dataFor+"']");
            if($field.val()==""){
                $placeholder.first().css('animation', config.hideAnimation+' forwards '+config.animationTime/2+'ms');
            }
            
        }
    }
    $.fn.fly = function(options){
        var config = $.extend({
            'wrapperClass': 'it-wrapper',
            'placeholderClass': 'placeholder',
            'animationTime': '200',
            'showAnimation': 'slideInUp',
            'hideAnimation': 'zoomOut'
        }, options);
        return this.each(function(){    
            if($(this)[0].tagName==="INPUT" && $(this).attr('type')!="password" && $(this).attr('type')!="text") return;
            if($(this)[0].tagName!=="INPUT" && $(this)[0].tagName!=="TEXTAREA") return;
            if(typeof $(this).attr('placeholder')==="undefined") return;
            if(!$(this).parent().hasClass(config.wrapperClass)) $(this).wrap("<div class='"+config.wrapperClass+"'/>");
            if($(this).val().trim()!=""){
                $("<div/>", {
                    "class": config.placeholderClass,
                    "data-for": $(this).attr('name'),
                    text: $(this).attr('placeholder')
                }).insertAfter($(this)).fadeIn(config.animationTime);
            }
            $(this).bind("keyup.fly", function(){methods.show($(this).attr('name'), config)});
            $(this).bind("change.fly keyup.fly keydown.fly", function(){methods.hide($(this).attr('name'), config)});
        });
    }
})(jQuery);