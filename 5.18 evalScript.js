/* 
 * Exercise 5.18 Evaluate Script	
 * Evaluate what happens when this script is run
 * Dovi Wilensky, CS81, 16Jul2016              
 */

var shout = function( ) {			// declares a function named shout, with no parameters
	var message = "HEY YOU";		// declares a variable in the function named message, initializes message to the string "HEY YOU"
	alert(message);					// next, the function call command, alert(message);
};
shout();							// this calls the shout function
alert(message);						// [ReferenceError: message is not defined] ", message is only defined within the function
									




