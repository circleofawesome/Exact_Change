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

//takes a float and returns it's name as a string
function numToText(num){
	if(num===100.00){
		return 'ONE HUNDRED';
	}
	else if(num===20.00){
		return 'TWENTY';
	}
	else if(num===10.00){
		return 'TEN';
	}
	else if(num===5.00){
		return 'FIVE';
	}
	else if(num===1.00){
		return 'ONE';
	}
	else if(num===0.25){
		return 'QUARTER';
	}
	else if(num===0.10){
		return 'DIME';
	}
	else if(num===0.05){
		return 'NICKEL';
	}
	else{
		return 'PENNY';
	}
}

//numToText(20.00);

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


//takes the change and returns the place where you should start subtracting your change from
function startingPoint(change){
	if(change>=100){
		return 100.00;
	}
	else if(change>=20){
		return 20.00;
	}
	else if(change>=10){
		return 10.00;
	}
	else if(change>=5){
		return 5.00;
	}
	else if(change>=1){
		return 1.00;
	}
	else if(change>=0.25){
		return 0.25;
	}
	else if(change>=0.10){
		return 0.10;
	}
	else if(change>=0.05){
		return 0.05;
	}
	else{
		return 0.01;
	}
}

//startingPoint(0.25);

==================

//takes change, starting point and how much of that currency you have and gives you how much it can give you and the remaining change
function changeMaker(change,startingPoint,currencyTotal){
	if(change>=currencyTotal){
		return [startingPoint,currencyTotal,change];
	}
	else{
		while(change<=currencyTotal){
			currencyTotal-=startingPoint;
		}
		change-=currencyTotal;
		return [startingPoint,currencyTotal,change];
	}
	
}

//changeMaker(49.00,20.00,60.00);

===================


//takes change and returns the next lowest startingP, needs function startingPoint to run properly
function nextLowest(change){
	if(startingPoint(change)===100.00){
		return 20.00;
	}
	else if(startingPoint(change)===20.00){
		return 10.00;
	}
	else if(startingPoint(change)===10.00){
		return 5.00;
	}
	else if(startingPoint(change)===5.00){
		return 1.00;
	}
	else if(startingPoint(change)===1.00){
		return 0.25;
	}
	else if(startingPoint(change)===0.25){
		return 0.10;
	}
	else if(startingPoint(change)===0.10){
		return 0.05;
	}
	else if(startingPoint(change)===0.05){
		return 0.01;
	}
}

//nextLowest(96.74);

=====================