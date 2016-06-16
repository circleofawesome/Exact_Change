function arrToObj(arr){
	var retObj={};
	for(var i=0;i<arr.length;i++){
		retObj[arr[i][0]]=arr[i][1];
	}
	return retObj;
}

function totalCid(obj){
	var keys=Object.keys(obj);
	var sum=0;
	for(var i=0;i<keys.length;i++){
		sum+=obj[keys[i]];
	}
	return sum;
}

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

function changeMaker(change,startingPoint,currencyTotal){
	if(change>=currencyTotal){
		return [startingPoint,currencyTotal];
	}
	else{
		while(change<=currencyTotal){
			currencyTotal-=startingPoint;
		}
		change-=currencyTotal;
		return [startingPoint,currencyTotal,change];
	}
	
}

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



//*********************MAIN FUNCTION BELOW*******************************//
function checkCashRegister(price, cash, cid) {
  var change = cash-price;
  var cidObj=arrToObj(cid);
  if(totalCid(cidObj)<change){
  	return "Insufficient Funds";
  }
  else if(totalCid(cidObj)===change){
  	return "Closed";
  }

  var retArr=[];
  var startingP=startingPoint(change);
  var currencyTotal=cidObj[numToText(startingP)];
  while(change>0){
  	var tempArr=changeMaker(change,startingP,currencyTotal);
  	retArr.push(tempArr);
  	startingP=startingPoint(tempArr[2]);
  	currencyTotal=cidObj[numToText(startingP)];
  	change=tempArr[2];
  }
  return retArr;
}