document.addEventListener('DOMContentLoaded', function(){

function dw(name){
	document.write(name);
}

function br (){
	document.write('<br>');
}

function cl(name){
	console.log(name);
}

/*
var a = 4;
document.write(a + "<br>");
var b = 5;
document.write(b + "<br>");
var c = 'Hello';
document.write(c + "<br>");

var d = true;
var e = false;
document.write(d + " и " + e + "<br>");
*/
//alert("Hi");
//confirm("Hello")
//var p=prompt('Enter something: ');
//console.log("Hi console");
//document.write("Don't");


// Infinity
// Nan - not a number
// Undefind - not found
// null - nothing to collected

//var x;
//document.write(x);

/*
const s=7;
document.write(s);
s=8;
document.write(s);
*/

/*
const t=2;
var result = t*2;
document.write(t+'*'+2+'='+result+"<br>");
*/

/*
var p=prompt('Enter number for multiplying: ');
for (var i=1; i<11;i++){
	var mult=p*i;
	document.write(p+'*'+i+'='+mult+"<br>");
}
*/


//Myltiplying table from 1 up to 10
/*
var p=0;
for (var u=0; u<10;u++){
	p=++p;
	if (p>=2){
	document.write("<br>");
	}
for (var i=1; i<11;i++){
	var mult=p*i;
	document.write(p+'*'+i+'='+mult+"<br>");
}}
*/



/*
for (var p=1; p<11;p++){
for (var i=1; i<11;i++){
	var mult=p*i;
	document.write(i+'*'+p+'='+mult+";"+"___"+" ");
	if (i===10){
		document.write("<br>");
	//	document.write("Working !)))");
	}
}
}
*/



/*var det=prompt('Enter Quantity: ');
var per=prompt('Enter Percentage: ');
var result=det/100*per;
document.write(result);
*/

/*
var det=500;
var per=60;
var result=det/100*per;
document.write(result);
*/

/*document.write("Hello"+ " world"+"!"+"<br>");
var p, e, r;
p="Hello";
e=" world";
r="!";
document.write(p+e+r)
*/



/*
const login="User";
const psswrd="password";
var _login=prompt('Enter login: ', 'Please write login here...');
	if(_login==login){
	var _psswrd=prompt('Enter password: ', 'Please write password here...');
		if(_psswrd==psswrd){
		alert("Welcome !");
		document.write("Welcome !"+"<br>");
		}
		if(_psswrd==null){
		alert("Password Canceled!");
		document.write("Password Canceled!"+"<br>");
		}
		if(_psswrd!=psswrd&&_psswrd!=null){
		alert("Password insorrect!!!");
		document.write("Password insorrect!!!"+"<br>");
		}
	}
	if(_login==null){
	alert("Login Canceled!");
	document.write("Login Canceled!"+"<br>");
	}
	if(_login!==login&&_login!==null){
	alert("User is not found!");
	document.write("User is not found!"+"<br>");
	}
*/


/*
var a=10;
var c=10;
var d='10';
	document.write(a+c+(+d)+"<br>");
	document.write(a+c+"<br>");
	document.write(a/d+"<br>");
	document.write("a="+a+"; "+"c="+c+";      "+"d='"+d+"'; "+"<br>");
	document.write("a==c : "+(a==c)+"<br>");
	document.write("d==c : "+(d==c)+"<br>");
	document.write("d===c : "+(d===c)+"<br>");
	document.write("a!=c : "+(a!=c)+"<br>");
	document.write("d!=c : "+(d!=c)+"<br>");
	document.write("d!==c : "+(d!==c)+"<br>");
*/

/*
var login ="user";
var password ="1111";
var login2=prompt("Enter login : ");
var password2=prompt("Enter password : ");
var res1=(login==login2);
var res2=(password==password2);
alert("Your write login correct if TRUE"+res1);
alert("Your write login correct if TRUE"+res2);
*/


/*
var b=3;
document.write(a%b+"<br>");
document.write(b%a+"<br>");
*/


/*
var i=0;
var ri=++i;
document.write(ri+"<br>");
var s=0;
s++;
document.write(s++);
document.write(++s);
*/

// name of - '&' - ampersant

/*
var x=24;
// && = and
// || = or
document.write(x>0&&x<10);
document.write(x>0||x<10);
// (x>0&&x>10);
// (x>0||x<10);
*/


/*
var p=prompt('Введите имя: ');
document.write(p);
document.write("Приветствуем Вас на нашем уроке, "+p+"!")
*/

/*
var number1=+prompt('Введите первое число: ');
var number2=+prompt('Введите первое число: ');
var sum=number1+number2;
document.write("Сумма этих чисел = "+ sum+"<br>")
*/



//var str2 = 'Don't';
//var str2 = "Don't";
//var str2 = 'Don\'t'

/*
var s1 = '123';
s1=+'123';
document.write(s1+"<br>");
var s2 = '123abc';
s2=+'123abc';
document.write(s2+"<br>");
*/

/*
var a=+'123';
var a=Number("123");
document.write(a+"<br>");
*/

/*
document.write(+true+'<br>'); //
document.write(+false+'<br>');
document.write(+null+'<br>');
document.write(+undefined +'<br>');
document.write(+(+Infinity)+'<br>');
*/

/*
var NumberX=1; // унарный и бинарный оператор ПРОЧИТАТЬ!!!!
NumberX=-NumberX;
document.write(+NumberX+'<br>');
*/

//var a=4, b, c=7;

/*
var a,b,c;
a=b=c=8+2;
document.write(+a+b+c+'<br>');
document.write(+b+'<br>');
document.write(+c+'<br>');
*/

/*
var n=2;
//n+=5;
//n*=2;
n*=3+5;
document.write(n);
*/

// Путь к файлу
//C/users/desctop/js/index.js -абсолютный путь
// /script.js-относительный путь
// ../ - каталог выше
// http://test/index.js-путь с использованием домена

//что такое http

//var pSpeed, bSpeed, distance, time, x;
//time=2.5;
//distance=40;

/*
pSpeed=distance/time;
bSpeed=4*pSpeed;
document.write(pSpeed+'<br>');
document.write(bSpeed+'<br>');
document.write(pSpeed+'<br>');
document.write(bSpeed+'<br>');
*/

//2.5x+2.5*4x=40;
//2.5(x+4x)=40;
//2.5*5x=40;
//5x=40/2.5;

/*
var x=40/2.5/5;
var v=4*x;
document.write(x+'<br>');
document.write(v+'<br>');
*/


/*var q, p, ans;
var q=15;
var p=9;
var ans=p/q*100;
document.write(ans);
*/

/*
var quantFlat=8;
var flatA=22.8*2;
var flatB=16.2*3;
var flatC=34*2;
var avrg=24.7;
var total=avrg*quantFlat;
var flatD=total-flatA-flatB-flatC;
	document.write(total+'<br>');
	document.write(flatD+'<br>');
*/


	
/*
24,7*8=197,6 total square
197,6-162,2=35,4 -flat8 suare
*/
//данны 2 числа нужно насти среденне арифметические кубов 
//этих чисел;


/*
var _number1=prompt("Enter no. 1 : ");
var _number2=prompt("Enter no. 2 : ");
document.write("Number 1 is : "+_number1+'<br>');
document.write("Number 2 is : "+_number2+'<br>');
_number1=Math.pow(_number1,3);
_number2=Math.pow(_number2,3);
document.write("Cubed number 1 is : "+_number1+'<br>');
document.write("Cubed number 1 is : "+_number2+'<br>');
var ans=(_number1+_number2)/2;
//_number2=Math.sqrt(_number2);
//document.write("Square from cubed number 1 is : "+_number1+'<br>');
//document.write("Square from cubed number 2 is : "+_number2+'<br>');
//if (_number1>_number2){
//	alert("Square from cubed number 1 MORE that Square from cubed number 2");
//	document.write("Square from cubed number 1 MORE that Square from cubed number 2"+'<br>');
//}else{
alert("Average figure from cubed number 1 and 2 is: "+ans);
document.write("Average figure from cubed number 1 and 2 is: "+ans+'<br>');
//}
*/

/*
document.write(!!undefined); // false
br();
document.write(!!null);// false
br();
document.write(!!0);// false
br();
document.write(!!1);// true
br();
document.write(!!''); // false
br();
document.write(!!'a'); // true
br();


//convent to number
document.write(+undefined); // NaN
br();
document.write(+null);// 0
br();
document.write(+true);// 1
br();
document.write(+false);// 0
br();
document.write(+'123asd'); // Nan
br();
document.write(+'asd123'); // Nan
br();
document.write(+'123'); // 123
br();
*/


/*
var x=1,str='a', bool=true;
document.write('---- type of ------');
br();
document.write(typeof x); // number
br();
document.write(typeof str); // string
br();
document.write(typeof bool); // boolean
br();
document.write(typeof empty); // undefined
br();
*/


/*

//  0   1   2
//['C','a','t']
var str='Cat';
var str2='Cat';
document.write(str===str2); // true
br();

var str='Cat';
var str2='cat';
var symbOne=str.charCodeAt(0);
var symbTwo=str2.charCodeAt(0);
document.write(symbOne,' ',symbTwo); // true
br();
document.write(str===str2); // false
br();

//Много скобок не бывает

var str='Cat';
var str2='Cats';
document.write(str===str2); // false
br();

//gnusmas-samsung
*/

/*
str='a';
str2='b';
var symbOne=str.charCodeAt(0);
var symbTwo=str2.charCodeAt(0);
document.write(str>str2,' ',symbOne,' ',symbTwo);
br();

str='aa';
str2='ab';
var symbOne=str.charCodeAt(1);
var symbTwo=str2.charCodeAt(1);
document.write(str<str2,' ',symbOne,' ',symbTwo);
br();
*/


/*
document.write(undefined+''); // undefined
br();
document.write(null+'');// null
br();
document.write(true+'');// true
br();
document.write(false+'');// false
br();
document.write(123+''); // 123
br();
document.write('asd' + 123); // asd123
br();
document.write(123+'asd'); // 123asd
br();
*/

/*
var parse=parseInt('123',10);//(строка, система счисления)
document.write('parse= ',parse,' ','type of =', typeof parse);
br();

var float=parseFloat('123.12');
document.write('float= ',float,' ','type of =', typeof float);
br();
*/




/*
var num=1;
var num2=1;
num=num.toString(); // =1+''
document.write(typeof num);
br();
document.write(typeof (num2+=''));
*/




/*
var f=1;
if (f===1){
	document.write('f = 1');
}
br();

f=4;
if (f===1){
	dw('f = 1');
}else{
	dw('f != 1');
}
br();
*/

/*
var f;
f=5;
if (1===f){
	dw('f = 1');
}else if (2===f){
	dw('f = 2')
}else{
	dw('Other numbers');
}
br();
*/

/*
if (){
	// function
} else if(){
	// function
} else {
	// function
}
*/
 

 /*
if('0'){
	alert('String with nul');
}
if(""){
	alert('String with nul');
}
if(0){
	alert('String with nul');
}
*/

/*
var x='a';
dw(typeof x);
if (x){
	alert('Cheking x for ==0')
}
*/

/*
var min=prompt('');
if(min>=0&&min<=14){
	alert('In First quart');
}
if(min>=15&&min<=29){
	alert('In Second quart');
}
if(min>=30&&min<=44){
	alert('In Third quart');
}
if(min>=45&&min<=60){
	alert('In Fouth quart');
}
*/

/*
var min=prompt('');
if(min>=0&&min<=14){
	alert('In First quart');
} else if (min>=15&&min<=29){
	alert('In Second quart');
} else if (min>=30&&min<=44){
	alert('In Third quart');
} else if(min>=45&&min<=60){
	alert('In Fouth quart');
} else {
	alert('Error');
}
*/

/* поломать прорамму
var user='user';
var admin='admin';
var login=prompt('Enter login :');
console.log(login);
console.log(typeof login);
var userPass='1111';
var adminPass='2222';
var password=prompt('Enter password :');

if (user===login&&password===userPass){
	alert('You enter as USER !');
} else if (admin===login&&password===adminPass){
	alert('You enter as ADMIN !');
} else{
	alert('Yor are not registered !');
}

*/

/*
var number=prompt('Enter number :');
if (number>100){
	alert('Your number MORE that 100')
} else if (number<100){
	alert('Your number LESS that 100')
} else {
	alert('You enter number 100')
}
*/

/*
var number1=20;	
var number=prompt('Enter number from 0 up to 50 :');
if (number>number1){
	alert('Your number MORE that you need');
} else if (number<number1){
	alert('Your number LESS that you need');
} else {
	alert('You are lucky! You are Winner!!!! number is'+number1);
}
*/


/*
var userLogin=prompt('Enter user login : ');
if(userLogin==='user'){
	var userPass=prompt('Enter password :');
	if (userPass==='password'){
		alert('Welcome !!!');
	}  else if(userPass===''){
		alert('Entrance is CANCELED, write a password');
	} else{
		alert('Passwordis NOT Correted!!!');
	}
}else if(userLogin===''){
	alert('Entrance is CANCELED, write a login');
} else {
	alert('User NOT found');
}
*/

/*
var x=1; y=0;
if (x==1&&y==1){
	alert('False');
}
if (x==1||x==0){
	alert('True');
}
*/

/*
// тернарный оператор - знать!!!
var x=1;
if (x===1){
	alert('true');
}else{
	alert('false');
}
//(условие)? действие if = true
//:действиеd alse=false 
(x===1) ? alert('true'):alert('false');
(x===2) ? alert('true'):alert('false');
(x===3) ? alert('true'):alert('false');
*/

/* LOOK HERE
//что выведет alert?
alert(undefined||8||null);
// выводит true

alert(15&&undefined&&44);
*/

/*
const password='1111';
var qttymoney=5000;

alert('Please insert card and push OK ');
var _password=prompt('Please enter PIN number and push OK ');
if (_password===password){
	alert ('PIN is correct. Please push OK');
	var _getmoney=prompt('Please be informed that our ATM can give money from 50 UAH up to 3000 UAH. '+' Now at your account : '+qttymoney+' Please write below a quantity that you NEED :');
	if (_getmoney<50||_getmoney>3000) {
		alert('Please write CORRECT quantity from 50 UAH up to 3000 UAH');
		}else{
		qttymoney=qttymoney-_getmoney;
		alert('Remains after operations is : '+qttymoney+'UAH. Please take your money and don\'t miss you card at ATM');
		}
}else if(_password!==password&&_password!==null){
			alert('PIN is WRONG!');
}else{
	alert('PIN is canceled. Please don\'t miss your card');
}
*/

/*
(_password===null)?alert ('PIN is canceled.Please don\'t miss your card')
				  :alert ('PIN is correct. Please push OK');
*/

/*
var x=+prompt('Enter 1 or 2');
(x===1)?alert('1'):alert('2');
*/

/*
const time = '12:30', money = 500 ;
var _time=prompt('Enter time :');
var _money=prompt('Enter quantity of money:')
(_time===time&&_money>=money) ? alert('CONGRAGILATIONS it\'s SALE time'):alert('Thank you! Awaiting for you soon');
*/

/*
const time = '12:30', money = 500 ;
var _time=prompt('Enter time :');
var _money=+prompt('Enter quantity of money:');
//console.log(typeof _money);
if (typeof _money=='string'){
	alert('Please write correct NUMBER!');
}else if(_time===time&&_money>=money){
	alert('CONGRAGILATIONS it\'s SALE time');
}else if(!(_time==time&&_money>=money)){
	alert('You don\'t have a SALE');
}else{
	alert('Thank you! Awaiting for you soon:)');
}
*/

/*
var count=prompt('Enter a number (1-5)');
console.log(typeof count)
switch(count){
case 1:
	dw('1');
	break;
case 2:
	dw('2');
	break;
case 3:
	dw('3');
	break;
case 4:
case 5:	
	dw('4 or 5');
	break;
default:
	dw('You number is not between (1-4)');
}
*/

/*
var x=+prompt('Enter number from 5 to 10');
switch(x){
case 10:
	alert(10);
	break;
case 5:
	alert(5);
	break;
case 6:
	alert(6);
	break;
case 7:
case 8:	
	alert('7 or 8');
	break;
default:
	alert('You number is not between (5-10)');
}
*/

/*
var x=+prompt('Enter number from 1 to 4');
switch(x){
case 1:
	x="Winter";
	break;
case 2:
	x="Autumn";
	break;
case 3:
	x="Summer";
	break;
case 4:
	x="Spring";
	break;
default:
	x="Error";
}
alert(x);
*/

/*
var result;
var a=+prompt('Enter number A : ');
var char=prompt('Enter +,-,*,/.....')
var b=+prompt('Enter number B : ');
switch(char){
case '+':
	result=a+b;
	break;
case '-':
	result=a-b;
	break;
case '*':
	result=a*b;
	break;
case "/":
	result=a/b;
	break;
default:
	result="Error";
}
alert(result);
*/



/*
var x=+prompt('Enter number from 1 to 12');
switch(x){
case 12:
case 1:
case 2:
	x="Winter";
	break;
case 3:
case 4:
case 5:
	x="Autumn";
	break;
case 6:
case 7:
case 8:
	x="Summer";
	break;
case 9:
case 10:
case 11:
	x="Spring";
	break;
default:
	x="Error";
}
alert(x);

*/

/*
var x=+prompt('Enter number from 1 to 12');
	if (x===12||x===1||x===2){
		alert("Winter");
	}else if(x>=3&&x<=5){
		alert("Autumn");
	}else if(x>=6&&x<=8){
		alert("Summer");
	}else if(x>=9&&x<=11){
		alert("Spring");
	} else {
		alert("ERROR");
}
*/

/*
var browser=prompt('Write your browser!');
if (browser==='IE'){
	alert('Oh, YES you have IE!');
}else if(browser==='Chrome'
		||browser==='Firefox'
		||browser==='Safari'
		||browser==='Opera'){
	alert('Yes, on this browsers We are work');
}else{
	alert('We are hope that inn you browser are all OK!')
}

*/

/*
var str='abcde';
if (str[0]==='a'){
	alert('Yes');
}else{
	alert('No');
}
*/

/*
var count=0;
while(count<4){
	dw(count);
	count++;
}
alert(count);
*/

/*
var i=4;
while (i){ // when i=0 it will be FALSE and cycle will be stopped
	dw(i);
	i--;
}
*/

/*
var count=0;
do {
	dw(count);
	count++;
}while(count<4);
*/

/*
var count=0;
while(count++<4){
	dw(count);
}
alert(count);
*/
/*
var count=4;
while(count-->0){
	dw(count);
}
alert(count);
*/
/*
for (var count=0;count<4;count++){
	dw(count);
	br();
}
*/

/*
for (var count=0;count<5;count++){
	dw(count);
}
br();
for (var count=0;count<5;++count){
	dw(count);
}
br();
dw(count);
*/


// without close
/*
var x=1;
while(true){
	alert(x);
}

while(1){
	alert(x);
}

for(x=1;x>0;x++){
	alert(x);
}
*/

/*
//прерывание цикла
var x=1; 
var y=1;
while(x>0&&y>0){
	var counter=+prompt('Please enter counter :');
	if (counter==5){
		break;
	}
alert(counter);
counter++; // количество вводов пользователя
}
*/

/*
for(var y=1; y<10;y++){
	dw('Before continue ='+y);
	br();
	if(y%2==0){
		continue;
	}
	dw('After continue='+y);
	br();
}
*/

/*
for(var i=1; i<6; i++){
	dw(i);
	if(i==5){
	dw('.');
		break;
	}
dw(',');
}
*/

/*
var sum=0;
for(var i=1; i<=100; i++){
	sum=sum+i; //sum+=i
	}
dw(sum);
*/
/*
const a=3;
var res;
for (var i=1;i<=10;i++){
	res=a*i;
	dw(a+'*'+i+'='+res);
	br();
}
*/

/*
var a=+prompt('Enter initial number');
var b=+prompt('Enter final number');
for(a;a<b;a++){
	if (a%2==0){
		dw(a);
		br();
	}
}
*/

/*
function showHi(){
	dw('Hi');
}
showHi();
*/

/*
// cheking unawailabless of local variable
function showHi(){
	var hi='Hi from function !'; //local variable
	dw(hi);
}
showHi();
dw(hi); // ERROR
*/

/*
var userName='user';
var a;
function showHi(){
	a='Hello, '+userName+', from function!';
	var hi='Hello, '+userName+', from function!';
	dw(hi);
}
showHi();
dw('a='+a);
dw(hi);// ERROR
*/
/*
    *      / 1-1
   ***     / 2-3
  *****    / 3-5
 *******   / 4-7
*********  / 5-9

User write the quantity of string and script will
show the tree )
*/

/*
function charCalc(a){
	a=a*2-1;
}

var q=+prompt('Enter number of strings that you need : ');
*/
/*
var star='*';
var space=' ';
//i - string, total 4 string
//n - number of chars in string, all string is 7 chars
for (i=1;i<5;i++){
	
}



*/

/*
function Sum (a,b){
	return a+b;
}

var x=+prompt('Enter number 1: ');
var y=+prompt('Enter number 2: ');

var result=Sum (x,y);
dw(result);
br();
dw(Sum(x,y));
*/

/*
function showHi(userName, userSay){
	if (userSay===undefined){
		userSay='Goodbay!';
	}
	userName=userName+' say: ';
	dw(userName+userSay);
}
showHi('user2','Hello!');
br();
showHi('user3');
*/

/*
function sum2(a,b){
	a=a||0;
	return a+b;
}
*/


/*
function check(sum){
	if (sum>500){
		alert('You are RICH !');
		dw('You are RICH !');
	}else{
		alert('Go to work!!!!');
		dw('Go to work!!!!');
	}
}

var a=+prompt('What is your SALARY ????');
check(a);
*/

/*
function mult(a,b=2*a){
	return a*b;
}
var m=mult(5); //50
*/

/*
function minMax(a,b){
	if (a>b){
		alert('Number 1 = '+a+' is MORE than number 2 = '+b);
	}else if(a==b){
		alert('Number 1 = '+a+' is EQUAL with number 2 = '+b);
	}else{
		alert('Number 1 = '+a+' is LESS than number 2 = '+b);
	}
}

var x=+prompt('Enter number 1 :');
var y=+prompt('Enter number 2 :');
minMax(x,y);
aler(minMax);
*/

/*
var x=+prompt('Enter number :');
var y=+prompt('Enter Pow:');
if (y<=0){
	alert('Number is less or eqaul to zero!')
}else{
	alert(calc(x,y));
}

function calc(a,b){
var _q=a;
for (i=1;i<b;i++){
_q=_q*a;

}
return _q;
}
*/


/*

fuction calc(a,b){
	var i=0;
	while(i<b){
		a=a*a;
	}
}
*/

/*
var a=+prompt('Enter number :');
if (a<=0){
	alert('Your number is les or eqaul to zero!');
} else{
	alert(fact(a));
}

function fact(x){
	var calc=1;
	for (i=1; i<=x; i++){
		calc=calc*i;
	}
return calc;
}
*/

/*
alert(Math.floor(5.4)); // округляет к меньшему
alert(Math.ceil(5.4)); // округляет к большему
alert(Math.round(5.4)); // округляет до целого
*/

/*
var n=15.3566;
alert(n.toFixed(1));
alert(n.toFixed(2));
alert(n.toFixed(3));
alert(n.toFixed(5));
*/

/*
var a=0.1+0.2
dw(a);
br();
dw(a.toFixed(1));
*/

/*
var x=prompt("Entern any number","-3.14");
if (isNaN(x)){ //isNaN
	alert("Tnis is Not A Number");
}else{
	alert("It's not a number!!");
}
*/

/*
var x=+prompt("Enter 1st number bettwen 0 and 1");
var y=+prompt("Enter 2nd number bettwen 0 and 1");

calc(x,y);

function calc(x,y){
if (((x>0&&x<1))&&((y>0&&y<1))){
var result=x+y;
dw("x = "+x+" "+"y = "+y);
br();
dw("x + y = "+result.toFixed(1));
}else{
	alert("You write wrong numbers");
}}

*/


/* ARRAY */

/*
//        0   1   2   3
var arr=['1','2','3','9'];
alert(arr[2]); //3
alert(arr[0]); //1

var ar=[];
console.log(ar);
*/

/*
var numbers=['Zero','One','Two'];
alert(numbers[0]);// Zero
alert(numbers[1]);// One
alert(numbers[2]);// Two
*/

/*
var numbers=['Zero','One','Two'];

numbers[2]='Not two';
alert(numbers);//Zero,One,Not two
numbers[3]='Tree';
alert(numbers); //Zero,One,Not two,Tree
*/
/*
var arr=[];
var x='name';
arr[0]=x;
arr[1]='age'; // arr=['name','age']
alert(arr.length);
*/
/*
var numbers=['Zero','One','Two'];
numbers.pop(); // Delete last element of array (Two)
alert(numbers); //Zero,One
numbers.push('New Two'); // Add last element of array (New Two)
alert(numbers); //Zero,One,New Two
numbers.shift(); // Delete 0 element of array (Zero)
alert(numbers); //One,New Two
numbers.unshift('New Zero'); // Add 0 element of array (Zero)
alert(numbers); //New Zero,One,New Two
alert(numbers.length); //3
alert(typeof numbers);
*/

/*
var arr=[1,2,3,4,5];
for(var i=0;i<arr.length;i++){
	dw(arr[i]+'<br>');
}
*/

/*
var arr=[2,3,4,5];
var mult=1;
for(var i=0;i<arr.length;i++){
	mult*=arr[i];
}
dw(mult);
*/

/*
var arr= [10,9,8,7,6,5,4,3,2,1,0];
//for(var i=arr.length; i>=0; i--)
for(var i=0;i<arr.length;i++){
	if(arr[i]%2==0){
		dw(arr[i]);
		br();
	}
}
*/

/*
var books=['JavaScript','PHP','HTML','CSS'];
dw('<ol>');
for (var i=0; i<books.length; i++){
	dw('<li>'+books[i]+'</li>')
}
dw('</ol>');
*/

/*
var books=['JavaScript','PHP','HTML','CSS'];
for (var i=0; i<books.length; i++){
	dw(i+1+'.'+books[i]+'<br>');
}

br();
books.length=2;
for (var i=0; i<books.length; i++){
	dw(i+1+'.'+books[i]+'<br>');
}
*/

/*
var array1D =[1,2,3];
var array2D = [
[1,2,3], // element 0
[4,5,6], // element 1
[7,8,9]  // element 2
];

dw(array1D);
br();
dw(array2D);
*/

/*
array2D[0]=[1,2,3];
array2D[2]=[7,8,9];

array[0][0];
array[2][2];
*/

/*
var color=['Yellow','Blue'];
alert(color);
color.push('Red');
alert(color);
color[color.length-2]='Black';
alert(color);
//delete color[0];
color.shift();
alert(color[0]);
color.unshift('Orange','Green');
alert(color);
*/

/*
var number=['Zero','JavaScript','PHP','HTML','CSS','Yellow','Blue'];
dw(number[Math.floor(Math.random()*number.length)]);
*/

/*
var books=['JavaScript','PHP','HTML','CSS'];
var _book=prompt('Enter name of book : ');
check(_book);



function check(x){
for(var i=0; i<books.length; i++){
	dw(books[i]+'<br>');
	}
}
*/

/*
var number=['Zero','JavaScript','PHP','HTML','CSS','Yellow','Blue'];
var x=prompt('Enter name :');


function find(array, value){
	if(array.indexOf){
		return array.indexOf(value)+1; 
}
	for (var i=0;i<array.length; i++){
		if (array[i]===value)
			return i=i+1;
	else{
	return -1;
}
}
*/

/*
var a=[];

for(var i=0;i<5;i++){
	var x=prompt('Enter NAME :');
	a.push(x);
}
alert('Yuor create as follow :'+a);
*/
/*
var str=['Hello, ','world ','!','1','2','3'];
alert(str);
alert(str[0]+str[1]+str[2]);
var str2=str[0]+str[1]+str[2];
alert(str2);
var str10=[];
var str3=str10.concat(str[3],str[4],str[5]);
alert(str3);
var str4=str.join('+');
alert(str4);
*/

/*
var obj={
	key1:1,
	key2:2
};

var user1={
	name:'Vasya',
	email:'vasiya@ukr.net'
}
 var arr=[obj,user1];
/*
var arr=[
{
	name:'vasya',
	age:21
},
{
	name:'patya',
	age:36
}

]
*/
/*
for(var i=0;i<arr.length;i++){
	console.log(arr[i]);
	for(var key in arr[i]){
		console.log(key); //Swow the 'key' of object 
		console.log(arr[i][key]); // Show value of key
	}
}

*/

/*
var person={
	name:'Fedor',
	age:56,
	language: 'en'
};
console.log(person.language);
console.log(person);
*/

/*
var arr={
	'ru':['Goluboi','Krastnii','Zeleniy'],
	'en':['Blue','Red','Green']
}
alert(arr['ru']);
console.log(arr);
console.log(arr['en']);
console.log(arr['en'][0]);
console.log(arr['en'][1]);
console.log(arr['ru'][1]);
*/

/*
var arr=['Hello ! ','How','are ','you ?'];
dw(arr[0]+arr[1]+', '+arr[2]+arr[3]);
*/


var arr={
	'ru':['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
	'en':['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
};
//cl(arr['ru']);


var x=prompt('Введите день недели :');

for(var i=0;i<arr['ru'].length;i++){
	if(arr['ru'][i]===x){
	alert("It well be :"+arr['en'][i]);
}
	
}



/* foreach */

//var arr1=[1,2,3];
//var arr2=[];
/*
var x='*';
for(var i=0;i<arr1.length;i++){
	arr2[i]=arr1[i]+x
}
//cl(arr2);
*/



/*
arr1.forEach(
	function(item,index,array){
		array[index]=item+'1';
	}
	);
console.log('Array :',arr1);

//item - arr[i]
// index - i
// arr - array
*/
/*
var arr1=[1,2,3];
arr1.forEach(
	function(item,index,array){
		console.log(item);
	});
*/

/*
var arr1=[1,2,3];
const items = ['item1','item2','item3'];
const copy=[];
items[0]='const';

for (var i=0; i<items.length;i++){
	copy.push(items[i]);
	console.log('for',items[i]);
}
console.log(copy);
*/

/*
console.log(items);
items.push(arr1);
console.log(items);
*/

/*
const items2 = ['item1','item2','item3'];
const copy2=[];
items2.forEach(function(item){
	copy2.push(item);
	console.log('forEach',item);
});
cl(copy2);
*/

/*
var words=['One', 'Two','Three','Four'];

words.forEach(function(word){
	if(word==='One'){
		words.shift();
	}
});
console.log('words',words);
*/

/*
var numbersArray=[
{num1:1, num2:2},
{num3:3, num4:4}];
*/
/*
console.log(numbersArray);

for(var i=0;i<numbersArray.length;i++){
	if (i===numbersArray.length){
		break;
	}
	for(var key in numbersArray[i]){
		if(key==='num3'&&numbersArray[i][key]===3){
			console.log('GOOD'+' '+key+' '+numbersArray[i][key]);
			
		}
	}}
*/
/*
for(var i=0;i<numbersArray.length;i++){
	//if (i===numbersArray.length){
	//	break;
	//}
	if(numbersArray[i].num3===3){
		console.log('num3 :',numbersArray[i].num3);
	}else{
		console.log('doesn\'t exist');
	}
	}
*/	







});