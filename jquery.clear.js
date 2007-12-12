/*
 * Clears form fields including radio buttons and check boxes.
 *
 * e.g.
 *  $(':input').clear();
 *  $('form').clear();
 *
 * Copyright (c) Paul Mucur, 2007.
 */
(function($) {
	$.fn.clear = function() {
		return this.each(function() {
			$(this).find(':input').andSelf().val('').removeAttr('checked').removeAttr('selected');
		});
	}
})(jQuery);