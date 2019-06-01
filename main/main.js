module.exports = function main(x) {
    str = x;
	out_str1 = '';
	out_str2 = '';
	out_str3 = '';
	for (i = 0; i < str.length;i++){
	  if (str[i] == 1) {
		out_str1 += '... ';
	  } else if (str[i] == 4) {
		out_str1 += '... ';
	  } else {
		out_str1 += '._. ';
	  }
	  
	  if (str[i] == 0) {
		out_str2 += '|.| ';
	  }else if (str[i] == 1){
		out_str2 += '..| ';
	  }else if (str[i] == 7){
		out_str2 += '..| ';
	  }else if (str[i] == 2){
		out_str2 += '._| ';
	  }else if (str[i] == 3){
		out_str2 += '._| ';
	  }else if (str[i] == 5){
		out_str2 += '|_. ';
	  }else if (str[i] == 6){
		out_str2 += '|_. ';
	  } else {
		out_str2 += '|_| ';
	  }		
	  if (str[i] == 6){
		out_str3 += '|_| ';
	  }else if (str[i] == 8){
		out_str3 += '|_| ';		  
	  }else if (str[i] == 0){
		out_str3 += '|_| ';
	  }else if (str[i] == 2){
		out_str3 += '|_. ';
	  }else if (str[i] == 3){
		out_str3 += '._| ';
	  }else if (str[i] == 5){
		out_str3 += '._| ';
	  }else {
		out_str3 += '..| ';
	  }
	}
	out_str1 = out_str1.slice(0,-1) + '\n';
	out_str2 = out_str2.slice(0,-1) + '\n';
	out_str3 = out_str3.slice(0,-1) + '\n';
	out_str = out_str1 + out_str2 + out_str3;
	console.log(out_str);
	return 'Hello World!';
};