function camelize(str) {
	return str.replace(/-(\w)/g, function (strMatch, newStr) {
		return newStr.toUpperCase();
	});
}

export function getStyle(el, property) {
	if (!el || !el.style || !property) {
		return;
	}
	let value = el.style[camelize(property)];
	let css = null;
	if (!value) {
		if (document.defaultView && document.defaultView.getComputedStyle) {
			css = document.defaultView.getComputedStyle(el, null);
			value = css ? css.getPropertyValue(property) : null;
		}
	}
	return value;
}

function checkBgColor(el) {
	let value = getStyle(el, "background-color");
	let hasColor = !!value;
	if (value === "transparent" || value === "rgba(0, 0, 0, 0)") {
		hasColor = false;
	} else if (getStyle(el, "display") === "none" || getStyle(el, "visivility" === "hidden")) {
		hasColor = false;
	} else if (getStyle(el, "opacity") === "0") {
		hasColor = false;
	}
	return hasColor;
}

export function getBackground(el) {
	if (checkBgColor(el)) {
		return getStyle(el, "background-color");
	} else if (el != document.documentElement) {
		return getBackground(el.parentNode);
	}
	return "";
}