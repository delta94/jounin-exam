const findRepeat = (string) =>{
	let key = new Array(string.length);
	for(let i=0;i<string.length;i++){
		for(let j=0;j<key.length;j++){
			if(string[i] === key[j]){
				return key[j];
			}
		}
		key[i] = string[i];
	}
}
console.log(findRepeat('BCABA'));
console.log(findRepeat('ABCA'));
