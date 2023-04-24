const loadCss = url => {
	var orginCss = document.getElementById("loadcss");
	if (orginCss) {
		orginCss.remove();
	}
	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = url;
	link.id = "loadcss";
	let insertCss = document.getElementById("resetcss");
	insertAfter(link, insertCss);
};

function insertAfter(newElement, targentElement) {
	var parent = targentElement.parentNode;
	if (parent.lastChild == targentElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targentElement.nextSibling);
	}
}

export { loadCss };
