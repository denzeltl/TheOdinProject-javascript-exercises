const ftoc = function(degree) {
	var deg = (degree - 32) * 5 / 9;
	return Math.round(deg * 10) / 10;
}

const ctof = function(degree) {
	var deg = degree * 9 / 5 + 32;
	return Math.round(deg * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}