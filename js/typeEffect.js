// List of sentences
var _CONTENT = ["Implement it", "Experience it"];
var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#banner-typed");
function Type() {
	if (_ELEMENT) {
		var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
		_ELEMENT.innerHTML = text + `<span class="cursor"></span>`;
		_PART_INDEX++;
		if (text === _CONTENT[_PART]) {
			clearInterval(_INTERVAL_VAL);
			setTimeout(function () {
				_INTERVAL_VAL = setInterval(Delete, 70);
			}, 1000);
		}
	}
}
function Delete() {
	if (_ELEMENT) {
		var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
		_ELEMENT.innerHTML = text + `<span class="cursor"></span>`;
		_PART_INDEX--;
		if (text === '') {
			clearInterval(_INTERVAL_VAL);
			if (_PART == (_CONTENT.length - 1))
				_PART = 0;
			else
				_PART++;
			_PART_INDEX = 0;
			setTimeout(function () {
				_INTERVAL_VAL = setInterval(Type, 100);
			}, 200);
		}
	}
}
_INTERVAL_VAL = setInterval(Type, 100);