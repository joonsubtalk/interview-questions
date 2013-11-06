// Javascript
// Joon-Sub

/*
	getMaxK() accepts an array of integers
	and returns an array with K number of max integers.

	e.g. a= [13,41,25,40] --> getMaxK(2,a) ==> [41,40]
*/
function getMaxK(cnt,data){
	if (cnt > data.length)	// cnt can't exceed total data
		return "error";
	data.sort();	// sorts the array asc order
	data.reverse();	// resverse array to desc order
	return data.slice(0,cnt);	//gets top max array
}

// Example usage
a=[13,41,25,40];
getMaxK(2,a);

// Comment:Please implement the functions.
// Assumption: Sorting is done O(nlogn)

/*
	reverse() reverses an array integers.
	e.g. a=[1,2,3] --> reverse(a) ==> [3,2,1]
*/
function reverse(data){
	var cnt = tmp = 0;
	while(cnt < data.length/2){
		temp = data[cnt];
		data[cnt] = data[(data.length-1)-cnt];
		data[(data.length-1)-cnt] = temp;
		cnt++;
	}
	return data;
}

function getMaxKRevised(cnt,data){
	if (cnt > data.length)	// cnt can't exceed total data
		return "error";

	// assume data is given sorted
	data.sort();	// sorts the array asc order
	
	// not allowed to use .reverse()
	reverse(data);	// reverse array to desc order
	
	// not allowed to use .slice()
	var i = 0		// track subset count
	var k = [];		// create a new array to pass
	while(i < cnt){		// up to cnt times...
		k[i] = data[i]; // assign old data[] to new array k[]
		i++;
	}

	return k;
}

// Example usage
a=[13,41,25,40];
getMaxKRevised(2,a);

