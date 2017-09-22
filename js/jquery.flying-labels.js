;(function($){
    var methods = {
        show: function(e){
            var dataFor = $(e.target).attr('name');
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
        hide: function(e){
            var dataFor = $(e.target).attr('name');
            var $placeholder = $("."+config.placeholderClass+"[data-for='"+dataFor+"']");
            var $field = $("[name='"+dataFor+"']");
            if($field.val()==""){
                $placeholder.first().css('animation', config.hideAnimation+' forwards '+config.animationTime/2+'ms');
            }
            
        },
        init: function(obj){
            if(obj[0].tagName==="INPUT" && obj.attr('type')!="password" && obj.attr('type')!="text") return;
            if(obj[0].tagName!=="INPUT" && obj[0].tagName!=="TEXTAREA") return;
            if(typeof obj.attr('placeholder')==="undefined") return;
            if(!obj.parent().hasClass(config.wrapperClass)) obj.wrap("<div class='"+config.wrapperClass+"'/>");
            if(obj.val().trim()!=""){
                $("<div/>", {
                    "class": config.placeholderClass,
                    "data-for": obj.attr('name'),
                    text: obj.attr('placeholder')
                }).insertAfter(obj).fadeIn(config.animationTime);
            }
            obj.bind("keyup.fly", methods.show);
            obj.bind("change.fly keyup.fly keydown.fly", methods.hide);
        }
    }
    var config, defaults = {
        'wrapperClass': 'it-wrapper',
        'placeholderClass': 'placeholder',
        'animationTime': '200',
        'showAnimation': 'slideInUp',
        'hideAnimation': 'zoomOut'
    };
    $.fn.fly = function(options){
        config = $.extend(defaults, options);
        return this.each(function(){    
            methods.init($(this));
        });
    }
})(jQuery);