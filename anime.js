function anime(element, prop, duration, callback) {
	// clear timer
	clearInterval(element.timer);

	element.timer = setInterval(function() {
		for (var attr in prop) {

			// get current style
			var current;
			if (attr === "transform") {
				if (getStyle(element, attr) === 'none') {
					current = "matrix(1,0,0,1,0,0)";
				} else {
					current = getStyle(element, attr);
				}
			} else {
				current = Number(getStyle(element, attr).replace(/[a-zA-Z\(\)]*/gi, ""));
			}

			// calculate speed
			if (attr !== 'transform') {
				var target = Number(prop[attr].replace(/[a-zA-Z\(\)]*/gi, ""));
				if (attr === "opacity") {
					speed = (target * 100 - current * 100) / duration * 20;
					speed = speed > 0 ? Math.ceil(speed) / 100 : Math.floor(speed) / 100;
				} else {
					speed = (target - current) / duration * 20;
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				}
			}

			// see if it should stop
			if (current !== target) {
				current += speed;
				current = getStyle(element, attr).replace(/^\d*\.?\d*/gi, current);
				element.style[attr] = current;
			} else {
				clearInterval(element.timer);
				if (callback) {
					callback();
				}
			}
		}
	}, 20);
}

function getStyle(element, attr) {
	if (element.currentStyle) {
		return element.currentStyle[attr];
	} else {
		return getComputedStyle(element, false)[attr];
	}
}

// turn radian to degree
function deg(rad) {
	return rad * 180 / Math.PI;
}

// turn degree to radian
function rad(deg) {
	return deg * Math.PI / 180;
}

function cos(rad) {
	return Math.cos(rad);
}

function sin(rad) {
	return Math.cos(rad);
}

function tan(rad) {
	return Math.tan(rad);
}