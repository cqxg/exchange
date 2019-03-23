module.exports = function makeExchange(currency) {
	var obj = {};
	if(currency > 0 && currency < 10000){
		var temp = [];
		var amount50 = 0;
		var amount25 = 0;
		var amount10 = 0;
		var amount5 = 0;
		var amount1 = 0;
		amount50  = Math.floor(currency / 50);
		currency = currency - amount50 * 50;
		amount25 = Math.floor(currency / 25);
		currency = currency - amount25 * 25;
		amount10 = Math.floor(currency / 10);
		currency = currency - amount10 * 10;
		amount5 = Math.floor(currency / 5);
		currency = currency - amount5 * 5;
		amount1 = currency / 1;
		temp[0] = amount50;	
		temp[1] = amount25;
		temp[2] = amount10;
		temp[3] = amount5;
		temp[4] = amount1;
		for(var i = 0; i < 5; i++){
			if(temp[i] != 0 && i == 0){
				obj["H"] = temp[i];
			}
			else if(temp[i] != 0 && i == 1){
				obj["Q"] = temp[i];
			}
			else if(temp[i] != 0 && i == 2){
				obj["D"] = temp[i];
			}
			else if(temp[i] != 0 && i == 3){
				obj["N"] = temp[i];
			}
			else if(temp[i] != 0 && i == 4){
				obj["P"] = temp[i];
			}
			else{
				continue;
			}
		}
	}
	else if(currency != 0 && currency > 10000){
		obj.error = "You are rich, my friend! We don't have so much coins for exchange";
	}
	return obj;
}