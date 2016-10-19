//var x = 5;
//
//var y = 5;
//
//console.log(x===y)

//var x = 2;
//
//var y = 2;
//
//var z = 8;
//
//
////console.log (x > y && x > y)
//
//if ( x > y) {
//	console.log("x 大于   y");
//} else if (x < y) {
//	console.log("x 小于 y");
//} else if (x = y) {
//	console.log("x 等于 y");
//}

//var age < 12;
//
//var age <= 12 &&< 18;
//
//var age <= 18 &&< 30;
//
//var age <= 30 &&< 50;
//
//var age <= 50;
//
//var age = 65;
//
//if ( age >= 12 && age < 18){
//	console.log('少年')
//}if( age >=18 && age <30){
//	console.log('青年')
//}if ( age >= 30 && age <50){
//	console.log('中年')
//}if ( age >= 50) {
//	console.log('老年')
//}

//if ( age < 18) {
//  console.log("未成年") 
//}
//else if (age >= 18)
//  console.log("成年人")

//for ( var i = 1; i <= 100; i++) {
//	if ( i % 2 ==0){
//	 console.log(i) ;
//	}
//}

// document.getElementById('switch').onclick =function(){
//	document.getElementById('light').src = 'img/eg_bulbon.gif';
//	 document.getElementById('switch').innerHTML ='关灯';
//	 document.getElementById('switch').className ='bgc';
//}

//var obj ={
//	name: '张三',
//	age: 18
//};
//obj.gender ='男';

//var obj ={给对象增加方法
//	getName:function(){
//	return this.name;
//	}
//}

//delete obj.name;   删除对象属性
//obj.getName('李四');
//console.log(obj)


//var x = 5 ;
//
//  x %= 2;
//  
//console.log(x) ;


//txt1 ="abc";
//txt2 ="hfg" ;
//console.log( txt3=txt1 + txt2);


//var x = 2;
//var y = 2;
//
//if (x < y) {
//	console.log('123');
//} 
//else if(x > y) {
//	console.log('456');
//} else if(x = y) {
//	console.log('789');
//}
//if (age >= 18) {
//	console.log('成年人');
//}else if(age < 18){
//	console.log('未成年');
//}4

//静态时间表
//var date = new Date ();
//
//var dateStr = date.getFullYear() + '年' 
//+(date.getMonth()+1)+'月' 
//+date.getDate()+'日' +''
//+date.getHours()+'：'
//+date.getMinutes()+':' 
//+date.getSeconds();
//
//console.log(dateStr);


//var date = new Date ();
//
//var dateSur = date.getFullYear() +'年'
//+(date.getMonth() +1) +'月'
//+date.getDate() +'日' +''
//+date.getHours()+ ':'
//+date.getMinutes()+';'
//+date.getSeconds();
//
//console.log(dateSur);

//for循环

//1-10循环
//for (var i = 1 ; i <= 10 ; i++){
//	console.log(i);
//}
//1-10之间的偶数
//for (var i = 1; i <= 10 ; i++){
//	if(i % 2 == 0){
//	console.log(i);
//	}
//}
//1-100之间的和
//var total = 0;
//
//for (var i= 1; i <= 100; i++ ){
//	total += i;//total = total +1;
//}
//	console.log(total);
//0-100之间偶数和
//var total = 0;
//
//for (var i = 0; i <= 100; i++){
//	if ( i % 2){
//	total += i;
//	}
//}
//console.log(total);
//第二种
//for (var i =0, total = 0; i <= 100; i++){
//	if ( i % 2){
//	total += i;
//	}
//}
//console.log(total);
//第三种
//var i = 0 ,total = 0;
//
//for (; i <= 100; i++) {
//	if ( i % 2){
//	total += i;
//	}
//}
//console.log(total);
//第四种
//var total = 0;
//for (var i = 0; i <= 100; i +=2){
//	total += i;
//}
//
//console.log(total);

//var sum = 0 ;
//
//for (var i = 0; i <= 100; i+= 2){
//	
//	sum += i ;
//}
// console.log(sum);

//while循环

//var i = 0,
//  sum = 0;
//while ( i <= 100) {
//	sum += i;
//	i += 2;//必加
//}
//
//console.log(sum);

//break 与 continue语句

//for (var i = 0; i <= 10; i++){
//	console.log(i)
////	break;//强制中断循环
//}
//
//for (var i = 0; i < 10; i++){
//	
//  if (i == 5){
//     continue;//跳过当次循环
//  }
//	console.log(i);
//}
//字符串对象
//length属性//字符串的长度
//var str = 'kjbuygytfyj'
//console.log(str.length)
//11

//toLowerCase()方法 //把字符串转为小写
//var str = ' hbhjLUHI'
//console.log(str.toLocaleLowerCase());
//hbhjluhi

//toUpperCase()方法//把字符串转化为大写
//var str = 'bjhuygjjh'
//console.log(str.toUpperCase());
//BJHUYGJJH
//属性后面没有小括号,方法后面必须有小括号

//indexOf()方法        一个字符在一个字符串的位子 第一个目标
//var str = 'jkhu/g12/354'
//console.log(str.indexOf('/'))
//计算机中第一个数为0, 如果输入的数不在字符串里会为-1位,相应的数对应相应的位子

//lastIndexOf()方法     一个字符在一个字符串的位子 最后一个目标
//var str = 'jkhu/g12/354'
//console.log(str.lastIndexOf('/'))

//substring()方法     截取字符串
//var str ='khjghvnghjmhg'
//str = str.substring(0, 7);
////                0开始截取的位置     7结束截取的位置(包含0 但不包含第7个)
//console.log(str);
//
//khjghvn

//str = str.substring(1);
//                 如果参数只有一个,从这个参数的位置截到字符串最后一个.
//substr()方法
//var str ='khjghvnghjmhg'
//str = str.substr(1, 7); 
////                1开始截取的位置     7截取的长度(从1开始截  截7个)
//console.log(str);
////hjghvng

//如何得到文件的扩展名
//var imgUrl = 'img/khgj/kgjyg.rmvb';
//var ext ='';
//ext = imgUrl.substring(imgUrl.indexOf('.'))
//console.log(ext);

//var imgUrl ='img/mhgjg201565443.mb.gif';
//var ext ='';
//ext = imgUrl.substring(imgUrl.lastIndexOf('.'))
//console.log(ext);

//如何判断一个字符串以a开头?   以a结尾?


//toFixed()方法  保留小数点的参数的位数

//var f = 1.23456;
//
//f = f.toFixed(4);
////           保留小数点的后两位   根据四舍五入后一位大于5时会覆盖前一位，最大的会覆盖前一位
//console.log(f);

//isNaN()方法  是不是不是一个数
//var a= 'akhb';
//
//console.log(isNaN(a));
////          是数字就true; 不是数字就false;

//数组      使用单独的数量名来储存一系列有序的值

//var arr = ['a', 'b', 5 , true, 12353];
//            数组可以储存任何数据类型
//console.log(arr);

//如何访问数组中的元素     (数组名[索引]) 
//console.log(arr[3]);
//如何修改数组中的元素      (数组名[索引]=新值)
//console.log(arr[4])
//console.log(arr[4]=100);

//concat()方法     连接两个或多个数组
//var arr = ['a', 'b', 5 , true, 12353];
//var arr2 = ['你好','北京'];
//var arr3 = ['你好','广州'];
//console.log(arr.concat(arr2).concat(arr3));
//         (arr3.concat(arr2).concat(arr));
//["a", "b", 5, true, 12353, "你好", "北京", "你好", "广州"]

//join()方法   元素通过指定的分隔符进行分割(连接符进行连接)  数组会变成字符串
//var arr4 =['a','b','c','d'];
//console.log(arr4.join('='));
//a=b=c=d

//push()方法   向数组末尾加一个或更多元素，并返回新的长度
//var arr5 =['a','b','c','d'];
//console.log(arr5.push(3));
////5   新的长度
//["a", "b", "c", "d", 3]

//数组的遍历    把元素中的元素通通访问一遍
//var arr6 =['a','b','c','d','e','f',1321,'abcd'];
//for (var i = 0; i <arr6.length; i++){
//	console.log(arr6[i]);
//}

//如何清空一个数组      (设置长度为0)   设置或返回数组中元素的数目
//var arr7 =['a','b','c','d','e','f'];
//arr7.length =0;
//console.log(arr7);

//javascript 内置对象Boolean
//var f = -5;
////      根据课本p54列表
//if (f) {
//	alert(true);
//}else {
//	alert(false);
//}

//Javascript 自定义对象

//如何创建对象
//第一种方式
//var obj = new Object();
//obj.name ='张三';
//obj.age ='20';
//obj.gender ='男';
//console.log(obj);
//第二种方式 (推荐)
//var obj2 ={
//	name: '李四',
//	age: 22,
//	gender:'男'
//}
//console .log(obj2)

//如何得到对象某个属性值 
//第一种方式
//名字(console .log(obj2.name))
//var obj2 ={3
//	name: '李四',
//	age: 22,
//	gender:'男'
//}
//console .log(obj2.name);

//第二种方式   
// 名字   console .log(obj2['name'])
//var obj3 ={
//	name: '李四',
//	age: 22,
//	gender:'男'
//}
//console .log(obj3['age']);

//如何设置对象某个属性值
//第一种方法
//var obj3 ={
//	name: '李四',
//	age: 22,
//	gender:'男'
//}
//obj3.gender ='女';(需加内容)
//console .log(obj3['gender']);
//第二种方法
//var obj3 ={
//	name: '李四',
//	age: 22,
//	gender:'男'
//}
//obj3.gender =['女'];
////(需加内容)
//console .log(obj3['gender']);



//HTML Dom (文档对象模型)
//作用
// 通过可编程的对象模型,javascript 获得了足够的能力来操作html.


//查找HTML(三种方法)

//通过ID寻找HTML中的元素
//var bdlink = document.getElementById('bdlink');
//console.log(bdlink);

//通过标签名寻找HTML中的元素    (ie9+)
//var divs = document.getElementsByTagName('div');
//console.log(divs);
////如果找到第二个加[2]
//console.log(divs[2]);
//如果把他们单个的打出来   遍历
//var divs = document.getElementsByTagName('div');
//for (var i= 0; i < divs.length; i++){
//	console.log(divs[i]);
//}


//操作HTML
//innerHTML改变
//var text2 =document.getElementById('text2');
//text2.innerHTML ='<h1>你好.世界</h1>';
//console.log(text2)

//innerText改变
//var text2 =document.getElementById('text2');
//text2.innerText ='<h1>你好.世界</h1>';
//console.log(text2)

//innerHTML改变与innerText改变的区别


//改变html属性
//在新的一个页面中打开
//var bdlink = document.getElementById('bdlink');
//bdlink.target ='_blank';

//修改已存在的属性   用新的属性覆盖旧的属性       在本页面打开网易  
//bdlink.href ="http://www.163.com";
//bdlink.innerHTML ='网易'

//改变css样式
//var bdlink = document.getElementById('bdlink');
//bdlink.target ='_blank';
//bdlink.href ="http://www.163.com";
//bdlink.innerHTML ='网易'
////要改变的样式
//bdlink.style.fontSize ='30px';
//       行内样式


//Don事件



//window.open()方法   打开新页面     不是超级链接

//var myBtn = document.getElementById('myBtn');
//myBtn.onclick = function () {
//	window.open('http://www.baidu.com');
//}


//Bom  什么是Bom? 浏览器对象模型
//  bom的作用   是js有能力与浏览器'对话'

    
//函数

//定义函数
//function hello () {
//	alert('hello');
//}
//如何调用一个函数  函数名加()
//hello()

//怎么调用带参数的函数
//       什么是参数：调用时可以向其传递值    其值为参数
//函数名(参数1,参数2,...)
//function hello (name) {
//	alert('hello ' + name);
//}
//hello('wbc');
////     <把wbc赋给了name>
//hello('wbc2');
//hello('wbc3');
//    <可重复调用代码块>

//100次如何怎么调用
//function hello (name) {
//	console.log('hello ' + name);
//}
//for ( var i= 0; i <= 100; i++){
//	hello(i);
//}
//带还回值得函数   工厂(函数) 原材料(参数)  产品(还回值)
//使用return语句，函数会停止执行，并还回指定的值
//function sum (a,b){
//	var r = a + b;
//	return r;
//  return 'abc';
//         不管你的函数怎么计算;return什么值结果就是什么值
//  return后面的语句不会再执行
//  alert (99);
//  
//}
//var jiewei = sum(10,5);
//console.log(jiewei);
//    断点如何调试

//function sum (a, b){
//	var r = a + b;
//	alert (r);
//}
//var myBtn = document.getElementById('myBtn');
//myBtn.onclick = function () {
//	sum (2, 9);
//}
//匿名函数   (没有函数名的函数)function(){}


	
//动态时钟
//setInterval(function(){
//	var date = new Date() ;
//  var hours =date.getHours();
//  var minutes =date.getMinutes();
//  var seconds =date.getSeconds();
//
//   if(seconds < 10){
//   	seconds ="0"+ seconds;
//   }
//   if(minutes < 10){
//   	minutes ="0"+ minutes;
//   }
//   if(hours < 10){
//   	hours ="0"+ hours;
//   }
//   
//  var time= hours +":"+ minutes +":"+seconds;
//  var myColck =document.getElementById('myColck');
//  myColck.innerHTML=time;
//},1000);

//随机点名器
//var menbers =[
//'李玉琢',
//'李怡',
//'李亚宣',
//'李小芬',
//'李睿焘',
//'李桓杉',
//'李宗锦',
//'李维佑',
//'李卫良',
//'李梓琳'
//];
//var r = Math.floor(Math.random() *10);
//// var dm =document.getElementById('dm');
//  dm.innerHTML=menbers[r];