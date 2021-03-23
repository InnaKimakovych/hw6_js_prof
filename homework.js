var s = [{}, {}, [], [], 2, 2, 1, 1];

function unique(array) {
	var i, j, newArr = [];

	function equalArr(arr, arrForCheck) {
		var boolObj = false;
		if(Array.isArray(arr) && Array.isArray(arrForCheck)) {
			if(arr.length === arrForCheck.length) {
				if (arrForCheck.length === 0) {
					boolObj = true;
				} else {
					for (var k = 0; k < arr.length; k++) {
						if (arr[k] === arrForCheck[k]) {
							boolObj = true;
						} else {
							boolObj = false;
						}
					}
				}
			} else {
				boolObj = false;
			}
		}
		return boolObj;
	}

	function equalObj(obj, objForCheck) {
		var boolObj = false;
		if((obj instanceof Object) && (objForCheck instanceof Object)) {
			if (Object.keys(obj).length === 0) {
				if(Object.keys(obj).length === Object.keys(objForCheck).length) {
					boolObj = true;
				} else if ( (obj.constructor === objForCheck.constructor) ) {
					for (key in objForCheck ) {
						if (obj[key] === objForCheck[key]) {
		    			boolObj = true;
		    		} else {
		    			boolObj = false;
		    		}
					}
				}
			}
		}
		return boolObj;
	}

	for(i = 0; i < array.length; i++) {
		var bool = false;

		if(Array.isArray(array[i])) {
			for(j = 0; j < newArr.length; j++) {
				bool = bool || equalArr(newArr[j], array[i]);
			} if(!bool) newArr.push(array[i]); 
		} else if (array[i] instanceof Object) {
			for(j = 0; j < newArr.length; j++) {
				bool = bool || equalObj(newArr[j], array[i]);
			} if(!bool) newArr.push(array[i]); 
		} else {
			for(j = 0; j < newArr.length; j++) {
				bool = bool || (array[i] === newArr[j]);
		}
			if(!bool) newArr.push(array[i]);
		}
	}
	return newArr;
}
console.log(unique(s));
