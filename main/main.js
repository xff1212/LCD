module.exports = function main(num) {
var zero=new Array( "._.",
			        "|.|",
			        "|_|");
var one =new Array( "...",
			        "..|",
			        "..|");
var two =new Array("._.",
			        "._|",
			        "|_.");
var three =new Array("._.",
			         "._|",
			         "._|");
var four =new Array( "...",
			         "|_|",
			         "..|");
var five =new Array( "._.",
			         "|_.",
			         "._|");
var six = new Array(  "._.",
			          "|_.",
			          "|_|");
var seven = new Array( "._.",
			           "..|",
			           "..|");	
var eight = new Array("._.",
			          "|_|",
			          "|_|");
var nine = new Array( "._.",
			          "|_|",
			          "..|");
var a = new Array();
function myFunction(y) {
  switch (y) {
	  case '0':
		a.push(zero);
		break;
	  case '1':
		a.push(one);
		break;
	  case '2':
		a.push(two);
		break;
	  case '3':
		a.push(three);
		break;
	  case '4':
	   a.push(four);
		break;
	  case '5':
	   a.push(five);
		break;
	  case  '6':
		a.push(six);
		break;
	  case  '7':
	  a.push(seven);
	  break;
	  case  '8':
	  a.push(eight);
	  break;
	  case  '9':
	  a.push(nine);
	  break;
}
}
var l = num.length;
for(var i = 0 ; i < l;i++){
	myFunction(num.charAt(i));
}
var first = new Array();
var second = new Array();
var third = new Array();
for(var j = 0; j < l; j++) {
first.push(a[j][0]);
second.push(a[j][1]);
third.push(a[j][2]);
}
first.join(' ');
second.join(' ');
third.join(' ');
var str = first.join(' ')+'\n' + second.join(' ')+'\n' + third.join(' ') + '\n';
return str;

};