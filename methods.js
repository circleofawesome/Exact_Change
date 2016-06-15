//takes 2D array and returns it as an object with the values as floats
function arrToObj(arr){
	var retObj={};
	for(var i=0;i<arr.length;i++){
		retObj[arr[i][0]]=arr[i][1];
	}
	return retObj;
}

//arrToObj([["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

===============

//takes cid object(which was transformed from cid 2d array) and returns the total sum of the cash in the register
function totalCid(obj){
	var keys=Object.keys(obj);
	var sum=0;
	for(var i=0;i<keys.length;i++){
		sum+=obj[keys[i]];
	}
	return sum;
}

/*totalCid({ PENNY: 0.01,
  NICKEL: 5.20,
  DIME: 0,
  QUARTER: 0.25,
  ONE: 11.0,
  FIVE: 0,
  TEN: 0,
  TWENTY: 0,
  'ONE HUNDRED': 0 });*/

================

//takes the string of the currency and returns its float value
function textToNum(str){
	if(str==='ONE HUNDRED'){
		return 100.00;
	}
	else if(str==='TWENTY'){
		return 20.00;
	}
	else if(str==='TEN'){
		return 10.00;
	}
	else if(str==='FIVE'){
		return 5.00;
	}
	else if(str==='ONE'){
		return 1.00;
	}
	else if(str==='QUARTER'){
		return 0.25;
	}
	else if(str==='DIME'){
		return 0.10;
	}
	else if(str==='NICKEL'){
		return 0.05;
	}
	else{
		return 0.01;
	}
}


//textToNum('FIVE');

=================


