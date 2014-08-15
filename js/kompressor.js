/*!
* Kompressor v0.0.2 (http://www.getkompressor.com/)
* Copyright 2014-2014 Chipotle Studios
* Author(s): Corbin "Spritsinz" Matschull, Veer Singh and Jeremy Fortunato
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*
* Kompressor is a highly edited version of Twitter's "Bootstrap".
* It has been made to be minimalistic and small.
*
*/


/*
*Catches if jQuery is undefined(or missing) in the webpage.
*/
if(typeof jQuery === 'undefined'){throw new Error('Kompressor\'s JS Library\'s need jQuery!')}



+function($){
	'use strict';


	function endOfTransition(){
		var elem = document.createElement('kompressor');

		var endOfTransitions = 
		{
			WebkitTransition = 'webkitTransitionEnd',
			MozTransition = 'transitionend',
			OTransition = 'oTransitionEnd, otransitionend',
			transition = 'transitionend'
		}
		
		for (var name in endOfTransitions)
		{
			if(elem.style[name] !== undefined){return{ end: endOfTransitions[name] }}
		}
		return false //Used for IE8(Why we have IE8 support I'll never understand.) /(ò.ó)┛彡┻━┻
	}

	$.fn.emulateTransitionEnd = function(duration){
		var called = false
		var $el = this
		$(this).one('bsTransitionEnd', function(){ called = true })
		var callback = function(){ if(!called)$(el).trigger($.support.transition.end) }
		setTimeout(callback,  duration)
		return this
	}

	$(function(){
		$.support.transition = endOfTransitions();

		if(!$.support.transition) return //Checks if transitions are supported and returns value to prevent conflicts

		$.event.special.bsTransitionEnd = 
		{
			bindType: $.support.transition.end,
			delegateType: $.support.transition.end,
			handle: function(e){
				if($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
			}
		}
	})
	
}(jQuery);



+function($){
	'use strict';

	//DEFINE ALERT CLASS
	var dismiss = '[data-dismiss=alert]'
	var Alert = function(elem)
	{
		$(elem).on('click', dismiss, this.close)
	}
	Alert.VERSION = '0.0.2'

	Alert.prototype.close = function(e) {
		var $this = $(this)
		var selector = $this.attr('data-target')

		if(!selector){
			selector = $this.attr('href')
			selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
		}

		var $parent = $(selector)
		if(e) e.preventDefault()

		if(!$parent.length){ $parent = $this.hasClass('alert') ? $this : $this.parent() }

		
	}

}
