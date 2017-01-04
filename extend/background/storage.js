/**
 * 原文
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
 * 双重 MD5 码
 */
var Result = {
	get() {
		return localStorage.getItem('result') || '';
	},
	set(result) {
		localStorage.setItem('result', result);
	}
};