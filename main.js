/* 
 * The MIT License
 *
 * Copyright 2017 bitchunk.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var scripts ="";
var mail = "test@test.t.to";


window.onload = function(){
	var scr = "";
	
	function insertText(m, radix, delimiter, type){
		var t
			, sc = "s.split('" + delimiter + "').map(function(c){return String.fromCharCode(parseInt(c," +  radix + "));}).join('')"
			;
		switch(type){
			case 'mail': t = "javascript:var s='" + m + "';window.open('mailto:' + " + sc + ");"; break;
			case 'prompt': t = "javascript:var s='" + m + "';window.prompt('mail address:' ," + sc + ");"; break;
			case 'plain': t = 'var s="' + m + '"; ' + sc; break;
		}
		document.getElementById('encode').innerHTML = t;
	}
	
	document.forms[0].addEventListener('submit', function () {
		var radix = document.getElementById('radix').value
			, delimiter = document.getElementById('delimiter').value
			, code = Array.prototype.map.call(document.getElementById('input_e').value, function (c) {
			return c.charCodeAt(0).toString(radix);
		}).join(delimiter)
			, type = document.getElementById('type').value
		;
		insertText(code, radix, delimiter, type);
		event.preventDefault();
		return false;
	}, false);

//	document.forms[1].addEventListener('submit', function () {
//		var delimiter = document.getElementById('delimiter').value;
//		var reg = new RegExp('[' + delimiter + ']');
//		console.log(reg.source);
//		var radix = document.getElementById('radix').value;
//		var code = document.getElementById('input_d').value.split(reg).map(function (c) {
//			return String.fromCharCode(parseInt(c, radix));
//		}).join('');
//		document.getElementById('decode').innerHTML = code;
//		event.preventDefault();
//		return false;
//	}, false);
	
	document.getElementById('encode').onclick = function(e){
		e.target.select();
	};
};

