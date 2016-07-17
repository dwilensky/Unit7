/* 
 * Exercise 5.27 Evaluate Script	
 * Write a constructor for movie objects.
 * Dovi Wilensky, CS81, 16Jul2016              
 */

// a prototypical movie, designed to be the prototype for all movies created with the Movie funciton below
var protoMovie = {
	title: "",
	MPAArating: "",
	directors: [],
	producers: [],
	studio: "",
	releaseDate: new Date()
};

//  A movie has a title, an MPAA rating, a list of directors, a list of producers, a studio, and a release date
var Movie = function (t, m, [d1, d2], [p1, p2, p3], s, r) {
	var mov = Object.create(protoMovie);
	mov.title = t;
	mov.MPAArating = m;
	mov.directors() = [d1, d1];
	mov.producers() = [p1, p2, p3];
	mov.studio = s;
	mov.releaseDate = r;
};