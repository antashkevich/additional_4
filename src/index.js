var m,n,p,result;
module.exports = function multiply(first, second) {
	m = Number(first);
	n = Number(second);
	p = m*n;
	result = p.toString();
	return result;
}
