const animationEasing = {
  linear: (t) => t,
  easeIn: (t) => t * t,
  easeOut: (t) => t * (2 - t),
  easeInOut: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
};


const getPosition = function ( elem ) {
  var location = 0;
  if (elem.offsetParent) {
      do {
          location += elem.offsetTop;
          elem = elem.offsetParent;
      } while (elem);
  }
  return location >= 0 ? location : 0;
};

const isElementInView = (element, buffer=0) => {

    const yPos = getPosition(element);
		const topOfWindow = window.scrollY;
		const bottomOfWindow = window.scrollY + window.innerHeight;
		return bottomOfWindow > yPos - buffer && topOfWindow < yPos + element.clientHeight;
}
