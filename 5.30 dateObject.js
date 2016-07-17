/* 
 * Exercise 5.30 Date Object	
 * JavaScript comes with a built-in object called Date, which is a constructor.
 * Dovi Wilensky, CS81, 16Jul2016              
 */

// (a) What does the expression new Date() produce? 
new Date()				// this expression returns the current time stamp: "Sat Jul 16 2016 21:46:13 GMT-0700 (Pacific Daylight Time)"

// (b) What does the expression new Date( 2009,0,20) produce? 
new Date( 2009,0,20)	// this expression returns the time stamp for New Years 2009 plus 20 days: "Tue Jan 20 2009 00:00:00 GMT-0800 (Pacific Standard Time)""

// (c) If d1 and d2 refer to date objects, what does the expression d1. valueOf() - d2. valueOf() produce? 
d1 = new Date( );
d2 = new Date ( 2009,0,20);
d1. valueOf() - d2. valueOf()	// returns: 236293199158 (the number of milliseconds between d1 and d2)