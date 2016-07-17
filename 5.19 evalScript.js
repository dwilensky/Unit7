/* 
 * Exercise 5.19 Evaluate Script	
 * Evaluate what happens when this script is run
 * Dovi Wilensky, CS81, 16Jul2016              
 */

 // alert can only be declared as a variable within a function body
alert("Hello");	// alerts "Hello"	
var alert = 2;	// declares alert as a variable initialized to '2'
alert("World");	// confused JS Engine thinks that alert is a function, 
				// attempts to run the function with parameter "World" 
				// returns error [alert is not a function]	
