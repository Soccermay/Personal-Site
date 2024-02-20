

function Message() {
    var message = prompt("Enter your message here:");
    var messagecount = message.length;

alert("You have typed out " + messagecount + " characters in the empty box.");
}

Message();



var message = prompt("Enter your message here:");
var messageUnder20 = message.slice(0,20);
var messageGenerator = message.toUpperCase;
alert("You have typed out " + (" '" + messageUnder20 + "' " + message.length) + " characters in the empty box.");

// var name = "Brandon";
// var greeting = "Hello there people";
// greeting.slice(5,10)

var name1 = prompt("What is your name?");
var firstLetter = name1.slice(0,1);
var nameUppercase = firstLetter.toUpperCase();
var restofname = name1.slice(1,name1.length);
var totalresult = nameUppercase + restofname;

alert("Hello there " + totalresult);