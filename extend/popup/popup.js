const BG = chrome.extension.getBackgroundPage();

document.addEventListener("DOMContentLoaded", () => {

	const source = document.querySelector('#source');
	const result = document.querySelector('#result');
	const generateButton = document.querySelector('#generate');
	const copyButton = document.querySelector('#copy');

	source.value = BG.Source.get() || '';
	result.value = BG.Result.get() || '';

	/**
	 * 生成双重 MD5
	 * @param source
	 */
	function generateDoubleMD5(source) {
		return source ? md5(md5(source)) : '';
	}

	/**
	 * 设置 MD5 的值
	 * @param value
	 */
	function setMD5(value = source.value) {
		const r = generateDoubleMD5(value);
		result.value = r;
		BG.Result.set(r);
	}

	/**
	 * 复制 MD5 值到粘贴板
	 */
	function copy() {

		const value = BG.Result.get();

		const el = document.createElement('textarea');
		document.body.appendChild(el);
		el.value = value;
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);

		source.focus();

	}

	source.addEventListener('input', e => {
		setMD5(e.target.value);
		copy();
	});

	source.addEventListener('keydown', e => {
		if (e.keyCode == 13) {
			setMD5(e.target.value);
			copy();
		}
	});

	generateButton.addEventListener('click', setMD5);

	copyButton.addEventListener('click', copy);

});