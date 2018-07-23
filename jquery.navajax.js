(function($){
    $.fn.navajax = function(url, options, successFn) {

        var settings = $.extend({
            method: 'GET',
            type: 'html',
            data: {},
            append: true,
            object: $(this),
            selector: undefined,

            debug_mode: false
        }, options||{} );

        var navalog = function(msg) {
            if (settings.debug_mode)
                console.log("[navajax] " + msg);
        };
        var navadebug = function(msg) {
            if (settings.debug_mode)
                console.error("[navajax] " + msg);
        };

        navalog("Request called to " + url);
        $.ajax({
            method: settings.method,
            url: url,
            data: settings.data,
            success: function (data, textStatus, xhr) {
                navalog("Request success");
                navalog("Content: " + data);
                var domData = $.parseHTML(data);
                if (settings.append) {
                    $(domData).css('display', 'none');
                    settings.object.append(domData);
                    $(domData).fadeIn();
                }
                if (successFn)
                    successFn(domData);
            },
            error: function (xhr, textStatus, error) {
                navadebug("Request failure");
                navadebug(xhr);
                navadebug(textStatus);
                navadebug(error);
            }
        });
    }
})(jQuery);