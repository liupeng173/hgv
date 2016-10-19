
var wp = document.getElementById('wp');

var tableHtml = [
   '<table>',
];
for ( var i = 1; i < 10; i++){
    tableHtml.push('<tr>')
    for ( var j =1; j<=i ; j++){
         tableHtml.push('<td> '+j+'&times'+i+'='+i*j+' </td>')
}
    tableHtml.push('</tr>')
} 
    tableHtml.push('</table>');
//  console.log(tableHtml);
wp.innerHTML = tableHtml.join('');




//数组排序

//var arr =[2,5,9,11,20,40,3];
//function order(tmpArr){
//	return tmpArr.sort(sortBy);
//}
//
//function sortBy(a,b){
//	return a - b;
//}
//
//var newArr = order(arr);
//console.log(newArr);


//第三方个性颜色
//var lis = document.getElementsByTagName('li');
//for ( var i = 0; i < lis.length; i++){
//	if (i == 2){
//	continue;
//	}
//  lis[i].style.color= "red";
//}
//console.log(lis);

//斑马线
//var lis = document.getElementsByTagName('li');
//for ( var i = 0; i < lis.length; i+=2){
//  lis[i].style.color= "red";
//}
//console.log(lis);


//var radios =document.getElementsByName('gender');
//console.log(radios);


