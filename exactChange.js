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
	var goToNext=false;
	if(change>=currencyTotal){
		change-=currencyTotal;
		goToNext=true;
		return[parseFloat(startingPoint.toFixed(2)),parseFloat(currencyTotal.toFixed(2)),parseFloat(change.toFixed(2)),goToNext];
	}
	else{
		var originalCurrencyTotal=currencyTotal;
		while(change<=currencyTotal){
			currencyTotal-=startingPoint;
			change-=startingPoint;
			change=parseFloat(change.toFixed(2));
			if(change===0){
				break;
			}
			else if(change<startingPoint){
				break;
			}
		}
		currencyTotal=originalCurrencyTotal-currencyTotal;
		return[parseFloat(startingPoint.toFixed(2)),parseFloat(currencyTotal.toFixed(2)),parseFloat(change.toFixed(2)),goToNext];
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

function nextLowest(startingP){
	if(startingP===100.00){
		return 20.00;
	}
	else if(startingP===20.00){
		return 10.00;
	}
	else if(startingP===10.00){
		return 5.00;
	}
	else if(startingP===5.00){
		return 1.00;
	}
	else if(startingP===1.00){
		return 0.25;
	}
	else if(startingP===0.25){
		return 0.10;
	}
	else if(startingP===0.10){
		return 0.05;
	}
	else if(startingP===0.05){
		return 0.01;
	}
	else{
		return "Insufficient Funds";
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
  var goToNext=false;
  while(change>0){
  	var tempArr=changeMaker(change,startingP,currencyTotal);
  	retArr.push([tempArr[0],tempArr[1]]);
    goToNext=tempArr[3];
    change=tempArr[2];
  	if(goToNext===false){
  		//do the normal 
  		startingP=startingPoint(change);
  	}
  	else{
  		//run nextLowest
  		startingP=nextLowest(startingP);
  		if(typeof startingP==='string'){
  			return startingP;
  		}
  	}
  }
  for(var i=0;i<retArr.length;i++){
  	retArr[i][0]=numToText(retArr[i][0]);
  }
  return retArr;
}


//***STILL RETURING INFINITE WHILE LOOP DUE TO CHANGE NOT CHANGING, FIX THAT 