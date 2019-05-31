var zero=new Array( "._.",
			        "|.|",
			        "|_|");
var one =new Array( "...",
			        "..|",
			        "..|");
var two =new Array(" ._.",
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

function myFunction(y) {
  switch (y) {
	  case 0:
		print(zero);
		break;
	  case 1:
		print(one);
		break;
	  case 2:
		print(two);
		break;
	  case 3:
		print(three);
		break;
	  case 4:
	   print(four);
		break;
	  case 5:
	   print(five);
		break;
	  case  6:
		print(six);
		break;
	  case  7:
	  print(seven);
	  break;
	  case  8:
	  print(eight);
	  break;
	  case  9:
	  print(nine);
	  break;
}
}

function print( number){
	console.log(number[0]+'/n'+number[1]+'/n'+number[2]+' ')
}

myFunction(9)