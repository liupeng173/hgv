
//var renderIt =document.getElementById('renderIt');
//var mySel =document.getElementById('mySel');

var renderIt = $('renderIt');
var mySel = $('mySel');

renderIt.onclick = function() {
var arr ='北京 上海 天津 深圳 杭州 '.split(' ');
	renderSelect(arr);
}
function renderSelect(tmpArr){
	var opts =[];
    for (var i = 0; i < tmpArr.length; i++){
    	opts.push('<option>',tmpArr[i],'</option>')
    }

mySel.innerHTML =opts.join('');
}

function $(id){
	return document.getElementById(id);
}
