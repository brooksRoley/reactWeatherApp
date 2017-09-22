var names = ["arya", 'brooks', 'Paul', "lizzy"]

names.forEach(function(name) {
	console.log('forEach', name)
})

names.forEach( (name)=> {
	console.log('arrowFunc', name)
})


names.forEach( (name)=> console.log('arrowFunc', name) )

var returnMe = (name) => name + '!';

console.log(returnMe("Andrew"));

// annonymous functions have their own 'this' binding while arrow functions have thier parent's 'this' context

var person = {
	name: 'Brooks',
	greet: function() {
		names.forEach( (name) => {
			console.log(this.name + ' says hi to ' + name)
		});
	},
};

person.greet()


function add(a,b){
	return a+b;
}

var addStatement = (a,b) => { return a+b }
var addExpression = (a,b) => a+b
console.log(add(1,2))
console.log(add(1,8))
console.log(addStatement(1,8))
console.log(addExpression(1,8))