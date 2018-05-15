document.addEventListener('DOMContentLoaded', function(){

/*
    *      / 1-1
   ***     / 2-3
  *****    / 3-5
 *******   / 4-7
*********  / 5-9


User write the quantity of string and script will
show the tree )
*/

var _zv='*'; _sp='^'; // Chars for printing
var _q=0; // calculating of chars in string

function br (){ // <br>
	document.write('<br>');
}

function dw(x){
	document.write(x);
}

function zv(x){ //Printing _zv
	for (i=0;i<x;i++){
	dw(_zv);
	}
}

function sp(x){ //Printing _sp
	for (i=0;i<x;i++){
	dw(_sp);
	}
}

function strCalc(x){ // Calculating total chars
	return x*2-1;
}

function wStr (x,y){ // Write string x-value of string, y-value of total chars
	for(var str=1;str<=x;str++){
	if(str==1){
		sp((y-str)/2);
		zv(str);
		sp((y-str)/2);	
		br();
	}else if(str==x){
		zv(y);
		br();
	}else if(str<x){
		sp((y-(str*2-1))/2);
		zv(str*2-1);
		sp((y-(str*2-1))/2);	
		br();
	}else{
		alert('ERROR');
	}
	}
}

var q=+prompt('Enter number of strings that you need : ');//Quantity of string
_q=strCalc(q);
wStr(q,_q);













});