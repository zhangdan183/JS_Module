var a = (function(){
	var num = 0;
	
	var fun1 = function(){
		console.log(num);
	}
	
	var fun2 = function(){
		console.log('fun2');
	}
	
	return {
		fun1: fun1,
		fun2: fun2,
		num: num
	}
})();
