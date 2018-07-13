(function($){
    $.navajax = function(options) {

        var settings = $.extend({
            method: 'POST',
            url: '',
            data: {},
            debug_mode: false
        }, options||{} );

        var navajax_debug = function(msg) {
            if (settings.debug_mode)
                console.debug("[navajax debug] " + msg);
        };

        $.ajax({
            method: settings.method,
            url: settings.url,
            data: settings.data,
            success: function (data, textStatus, xhr) {
                navajax_debug(data);
                navajax_debug(textStatus);
                navajax_debug(xhr);
            },
            error: function (xhr, textStatus, error) {
                navajax_debug(xhr);
                navajax_debug(textStatus);
                navajax_debug(error);
            }
        });
    }
})(jQuery);