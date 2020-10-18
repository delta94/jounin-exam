const countHandshake = (person)=>{
	let count = 0;
	for(let i=0;i<person;i++){
		for(let j=i;j<person-1;j++){
			count++;
		}
	}
	return count;
}
console.log(countHandshake(3));
