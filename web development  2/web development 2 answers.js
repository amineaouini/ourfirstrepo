//A - 1 
//Bob says hi, immediately

// A -  2

function sayHello () {
alert(this.name + " says hello!");
}
var alice = { name: "Alice" };


sayHello.call(alice);

//A - 3

var x = 10;
var puzzle = function (amount) {
this.x += amount;
return this.x;
};

var result = 50 - puzzle(20); // => 20

// A - 4 
// C

// A - 5 
// B

// A - 6
// C

// A - 7
// A + D