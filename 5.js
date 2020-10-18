const palindrome = (word)=>{
	let newWord = "";
	for(let i=word.length-1;i>=0;i--){
		newWord += word[i];
	}
	if(newWord === word) return "String palindrome";
	return "String bukan palindrome";
}

console.log(palindrome("NaNaNI"));
