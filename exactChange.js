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

function checkCashRegister(price, cash, cid) {
  var change = cash-price;
  var cidObj=arrToObj(cid);
  if(totalCid(cidObj)<change){
  	return "Insufficient Funds";
  }
  else if(totalCid(cidObj)===change){
  	return "Closed";
  }
}