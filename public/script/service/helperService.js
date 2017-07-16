angular.module("myApp")
	.service("Helper", [function Helper() {
				var getObjectLength = function getObjectLength(obj) {
            var count = 0;
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    count++;
                }
            }
            return count;
        };
				// accepts object and counts/returns number (type number) of properties in object (like an array.length)

        var convertMapToArray = function convertMapToArray(map) {
            var myArray = [];
            angular.forEach(map, function(mapItem) {
                myArray.push(mapItem);
            });
            return myArray;
        };
				// accepts object and creates new array with only values
				//  Helper.convertMapToArray({name:"brad", last: "efting"}); returns ["brad", "efting"]

				var convertArrayToMap = function convertArrayToMap(theArray, key) {
            var map = {};
            key = key || 'id';
            angular.forEach(theArray, function(arrayItem) {
								// makes the id of each object the key in returned object
                map[arrayItem[key]] = arrayItem;
            });
            return map;
        };
				// accepts array of objects and creates/returns object of objects with id as key

	    return {
	    	getObjectLength: getObjectLength,
	    	convertMapToArray: convertMapToArray,
	    	convertArrayToMap: convertArrayToMap
	    }
}]);
