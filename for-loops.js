console.log("hello main.js")

var counter = 5
console.log("Current value is", counter)
for (var counter = 5; counter <= 120;) {
	counter += 10
	console.log("Current value is", counter)
}
var counter = 4096
console.log("Current value is", counter)
for (var counter = 4096; counter !== 1;) {
	counter /= 2
	console.log("Current value is", counter)
}
var listOfPres2 = ["George Washington",
"John Adams",
"Thomas Jefferson",
"James Madison",
"James Monroe",
"John Quincy Adams",
"Andrew Jackson",
"Martin Van Buren",
"William H. Har",
"John Tyler",
"James K. Polk",
"Zachary Taylor",
"Millard Fillmore",
"Franklin Pierce",
"James Buchanan",
"Abraham Lincoln",
"Andrew Johnson",
"Ulysses S. Grant",
"Rutherford B. Hayes",
"James A. Gar",
"Chester A. Arthur",
"Grover Cleveland",
"Benjamin Harrison",
"Grover Cleveland",
"William McKinley",
"Theodore Roosevelt",
"William H. Taft",
"Woodrow Wilson",
"Warren G. Harding",
"Calvin Coolidge",
"Herbert Hoover",
"Franklin D. Roosevelt",
"Harry S. Truman",
"Dwight D. Eisenhower",
"John F. Kennedy",
"Lyndon B. Johnson",
"Richard M. Nixon",
"Gerald R. Ford",
"Jimmy Carter",
"Ronald Reagan",
"George H. W. Bush",
"Bill Clinton",
"George W. Bush",
"Barack Obama",
"Donald Trump"]
for (i = 0; i < listOfPres2.length; i++) {
	console.log("President #"+ i +" was "+listOfPres2[i]+".")
}
var listOfPres = [
{number: "1", name: "George Washington"},
{number: "2", name: "John Adams"},
{number: "3", name: "Thomas Jefferson"},
{number: "4", name: "James Madison"},
{number: "5", name: "James Monroe"},
{number: "6", name: "John Quincy Adams"},
{number: "7", name: "Andrew Jackson"},
{number: "8", name: "Martin Van Buren"},
{number: "9", name: "William H. Har"},
{number: "10", name: "John Tyler"},
{number: "11", name: "James K. Polk"},
{number: "12", name: "Zachary Taylor"},
{number: "13", name: "Millard Fillmore"},
{number: "14", name: "Franklin Pierce"},
{number: "15", name: "James Buchanan"},
{number: "16", name: "Abraham Lincoln"},
{number: "17", name: "Andrew Johnson"},
{number: "18", name: "Ulysses S. Grant"},
{number: "19", name: "Rutherford B. Hayes"},
{number: "20", name: "James A. Gar"},
{number: "21", name: "Chester A. Arthur"},
{number: "22", name: "Grover Cleveland"},
{number: "23", name: "Benjamin Harrison"},
{number: "24", name: "Grover Cleveland"},
{number: "25", name: "William McKinley"},
{number: "26", name: "Theodore Roosevelt"},
{number: "27", name: "William H. Taft"},
{number: "28", name: "Woodrow Wilson"},
{number: "29", name: "Warren G. Harding"},
{number: "30", name: "Calvin Coolidge"},
{number: "31", name: "Herbert Hoover"},
{number: "32", name: "Franklin D. Roosevelt"},
{number: "33", name: "Harry S. Truman"},
{number: "34", name: "Dwight D. Eisenhower"},
{number: "35", name: "John F. Kennedy"},
{number: "36", name: "Lyndon B. Johnson"},
{number: "37", name: "Richard M. Nixon"},
{number: "38", name: "Gerald R. Ford"},
{number: "39", name: "Jimmy Carter"},
{number: "40", name: "Ronald Reagan"},
{number: "41", name: "George H. W. Bush"},
{number: "42", name: "Bill Clinton"},
{number: "43", name: "George W. Bush"},
{number: "44", name: "Barack Obama"},
{number: "45", name: " Donald Trump"}
]

for (pres in listOfPres) {
	console.log("President #"+listOfPres[pres].number +" was "+listOfPres[pres].name+" .")
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (key in antSpecies) {
	console.log(key)
}
