const colData = function(e,bool) {	
	
	if(bool==true){
		var item = JSON.parse(e)
		dateArr.push(item)	
	 }else if(bool==false){
		 var item = JSON.parse(e)		
		for(var i = 0;i<dateArr.length;i++){
			if(item.id == dateArr[i].id){
				dateArr.splice(i,1)
			}
		}
	}
	console.log(dateArr)
	return dateArr
}
var dateArr = [
		
	]

export default {
	colData : colData
}
