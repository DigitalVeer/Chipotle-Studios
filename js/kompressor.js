/*!
* Kompressor v0.0.2 (http://www.getkompressor.com/)
* Copyright 2014-2014 Chipotle Studios
* Author(s): Corbin "Spritsinz" Matschull, Veer Singh and Jeremy Fortunato
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
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

	
}
