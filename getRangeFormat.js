// Javascript
// Joon-Sub

/*
	getRangeFormat() accepts an array of integers
		and returns a string with all continuing chains
		of ranges as X-Y where X is the start of a 
		sequential chain of integers and Y is the last. 
		All other numbers not part of a sequential chain are
		simply separated with a comma.

		e.g. [1,3,4,5,10] --> "1,3-5,10"
*/
function getRangeFormat(arg1){
	var ans = "";					// Our final string to output
	var cnt = 0						// the cnt variable will be our index
	while(cnt < arg1.length){	

		// Case 1: There's a chain of range!
		if (arg1[cnt]+1 == arg1[cnt+1]){
			ans+= arg1[cnt]+"-";	// We begin our range with the first instance
			var k = 0;				// k keeps a record of how long the range is
			while(arg1[cnt+k]+1 == arg1[cnt+k+1]){	// keep going till the range is broken
				k++;	
			}
			if (cnt+k+1 < arg1.length)		// check if we've reached the last character
				ans+= arg1[cnt+k]+",";		// if not, add the comma
			else
				ans+= arg1[cnt+k];			// if end, don't add comma
			cnt += k;						// increase cnt to current k
		}
	
		// Case 2: There's no range chain!
		else {	
			if (cnt+1<arg1.length)		// check if last character
				ans+=arg1[cnt]+", ";	// if not end, add comma
			else						
				ans+=arg1[cnt];			// if end, don't add comma
		}
		cnt++;							// move index to next array
	}
	return ans;							// print the answer!
}

/* usage: */
var arg1 = [1,3,4,5,10];
getRangeFormat(arg1);
