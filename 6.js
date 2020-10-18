const fibonacci = (num)=>{
	let fib = new Array(num);
	for(let i=0;i<num;i++){
		if(i===0){
			fib[i]=i+1;
		} else if (i===1){
			fib[i] = i;
		} else {
			fib[i] = fib[i-1] + fib[i-2];
		}
	}
	return fib;
}

console.log(fibonacci(11));
