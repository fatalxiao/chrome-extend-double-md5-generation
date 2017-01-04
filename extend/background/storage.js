/**
 * source text
 */
var Source = {
	get() {
		return localStorage.getItem('source') || '';
	},
	set(source) {
		localStorage.setItem('source', source);
	}
};

/**
 * result text
 */
var Result = {
	get() {
		return localStorage.getItem('result') || '';
	},
	set(result) {
		localStorage.setItem('result', result);
	}
};