const sortArray = (arr)=>{
	let tmp;
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			if(arr[j] < arr[i]){
				tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}
	return arr;
}

console.log(sortArray(["z","d","a","b"]));
