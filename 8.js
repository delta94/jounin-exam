const cetakGambar = (num)=>{
	if(num%2===0){
		num++;
	}
	for(let i=0;i<num;i++){
	let tmp="";
		for(let j=1;j<=num;j++){
			if(i===(i/2)+1){
				tmp+="*";
			} else if(j===1 || j===num){
				tmp+="*";
			} else {
				tmp+="=";
			}
		}
		console.log(tmp);
	}
}

cetakGambar(4);
