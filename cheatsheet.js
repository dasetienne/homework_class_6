
// Variables with numbers and strings
var x= 1;
var y= 2;

alert(x+y);

var country1= "Germany";

var country2= "Argentina";

console.log("Argentina" + "Germany");

// Debugging (Alert, Console, Comments)

alert("cat"+"dog");

console.log(x+5);

document.getElementById("some_name").innerHTML = "NEW TEXT";

// Use comments to explain changes in the code, e.g:

//Changed footer of this document

document.getElementById("myFooter").innerHTML = "This is the footer";

// Different java script data types

// Seen in class:

// Strings ("This is a string") - A string is everything in "". Strings are usually words, but can also be numbers (CAREFUL: Numbers marked as strings can't be used for mathematical equations and might confuse.)
var string= "This is a string";

// Numbers (5,6,7 etc) - Numbers don't have to be displayed in "".
var x=5;

// Boolean (True or false) - Entering a boolean in the console will return a true or false statement. You can define variables and then test if they are true or false.
Boolean(20>2);
True

Boolean(5===5);
True

Boolean(11=11);
Invalid

Boolean(5<2);
false

// Undefined has no value 

Undefined(no value)

// Arrays include different data sets. They can also include different datatypes like for example strings or numbers. They are displayed in []

var authors= ["Hesse", "Bukowski", "Frantzen", "Houellebecq"];

var countries= ["France", "Germany", "USA", "Great Britain"];

var mix= ["String", "Number", 7, 9];

// Arrays are represented as variables, you can combine arrays in MULTIDIMENSIONAL ARRAY

var all= ["authors", "countries"];

// Select within multidimensional arrays by defining position within (First position is 0). Don't forget;

alert(all[1][0]);
>France

console.log(all[0][2]);
>Frantzen

// Other data types:

// Objects

var demian = {author: 'Herman Hesse', published: '1919'};

console.log(demian['author']);
>Herman Hesse

// You can also use dot notation to pull data out of an object

var geography= {country: "Zimbabwe", capital: "Harare"};
alert(geography.capital)
> Harare

// IF Statement: Let's you run code if input if test answer is TRUE.

if(country==="Zimbabwe"){
	alert("The capital of Zimbabwe is Harare!");
};

// The Else statement: Let's you run code if test answer is FALSE

var country= Mozambique

if(country==="Zimbabwe"){
	alert("The capital of Zimbabwe is Harare!");
	} else{
	alert("We have no information about this country!")
	};

// The above statement will display the second option, as input is false.


// Functions added for homework Class 6


// Function 1
var x=10;
console.log(x+12);

// Function 2

var athlete= "Michael Jordan";
var activity= "Drunk Driving";

alert("The " + athlete + " of " activity );

// Function 3

var revdoor= "I push!";

if (revdoor=== "We push!"){
	alert("This is how it should be!");

} else if (revdoor=== "I push!"){
	alert("That's wrong we are equal!");


} else {
	alert("Might be wrong, might be right!")
};

// Other functions:

function simpleFunction (firstNumber, secondNumber){
	return secondNumber + 20 + firstNumber;
};

alert(simpleFunction(20,14));


function simplePhrase (aName, anAttribute){
	return aName + "is" + anAttribute;
};

alert(simplePhrase("Horst", "very German!"));

// Second function with strings does not work. 

function function3 (randomNr1, randomNr2){
	return 5* randomNr2 + randomNr1;
};

console.log(function3(4,8));














