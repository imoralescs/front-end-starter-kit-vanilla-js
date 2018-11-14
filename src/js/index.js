import '../scss/style.scss'
import { sayAbout } from './about'
/*
class DOM {
    constructor(selector) {
        let elements = document.querySelectorAll(selector);
		this.length = elements.length;
		Object.assign(this, elements);
    }
    
    each(callback) {
        // convert this to Array to use for...of
        for(let el of Array.from(this)) {
            callback.call( el );
        }
		// return this for chaining
		return this;
	}

	addClass(className) {
	    return this.each(function() {
	    	this.classList.add(className);
	    });
	}
	
	removeClass(className) {
		return this.each(function() {
			this.classList.remove(className);
		});
	}
	
	hasClass(className) {
		return this[0].classList.contains(className);
	}
	
	on(event, callback ) {
	    return this.each(function() {
	    	this.addEventListener(event, callback, false);
	    });
	}
}

window.DOM = DOM;
export default DOM ;
*/

console.log('index file')

sayAbout();