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

totalCid({ PENNY: 0.01,
  NICKEL: 5.20,
  DIME: 0,
  QUARTER: 0.25,
  ONE: 11.0,
  FIVE: 0,
  TEN: 0,
  TWENTY: 0,
  'ONE HUNDRED': 0 });

================

