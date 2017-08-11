angular.module('gt-gamers-guild.occupations', [])
.factory("Occupations", function(){
	var occupations = [
		"Teacher",
		"Blacksmith",
		"Wordsmith",
		"Milliner",
		"Barber"
	];

	return occupations;

});
