const http = require('http');

// there 3 ways

// 1 write a function and assign to that http.createServer

//  function rqServer(req, res) {

//  }

// http.createServer(rqServer())

// 2nd approach is to use direct function inside that createServer

// http.createServer(function(req, res) {

// })

// 3rd is to you can use lambda or arrow function.

const server = http.createServer((req, res) => {
    console.log(req.headers, req.method, req.url);
})

server.listen(4000)
console.log(server);

// how to remove duplicates from array?
var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
var uniqueNames = [];
$.each(names, function(i, el){
    if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
});

// how to connect mongodb?
var db = null // global variable to hold the connection

MongoClient.connect('mongodb://localhost:27017/', function(err, client) {
    if(err) { console.error(err) }
    db = client.db('test') // once connected, assign the connection to the global variable
})

app.get('/', function(req, res) {
    db.collection('test').find({}).toArray(function(err, docs) {
        if(err) { console.error(err) }
        res.send(JSON.stringify(docs))
    })
})


var conn = MongoClient.connect('mongodb://localhost:27017/') // returns a Promise

app.get('/', function(req, res) {
    conn.then(client=> client.db('test').collection('test').find({}).toArray(function(err, docs) {
        if(err) { console.error(err) }
        res.send(JSON.stringify(docs))
    }))
})


// how to write higher order function?
noisy(Boolean)(0)


// (In effect, we're not really creating a variable...)
var x = noisy(Boolean);


x(0);


function foo(bar) {
    bar();
}
function testing() {
    alert("testing got called");
}
foo(testing);




// how to make api call in node js?
const request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})




// how to write try and catch method?
try {
    if(window.opener.hideRecordReload){
        window.opener.hideRecordReload(pg.recordID, pg.recordTypeID);

    } else {
        window.opener.pg.hideRecord(pg.recordID, pg.recordTypeID);

    }

    window.opener.pg.hideEncounter(pg.recordID);
    window.opener.pg.hideRecordResponse(pg.hideReasonID.value == 0 ? pg.otherReason.value : pg.hideReasonID.options[pg.hideReasonID.selectedIndex].text);
    window.opener.pg.hideRecord_Response(pg.recordID, pg.recordTypeID);
    window.opener.pg.hideRecord_Response(pg.recordID, pg.recordTypeID);
    window.opener.window.parent.frames[1].pg.loadQualityMeasureRequest();
    window.opener.pg.closeWindow();

}

catch(e) {
   console.log(e);
}   


try {
   doSomething();
}

catch(e) {
   error = true;
}

if(error) {
   doStuffToRecoverFromError();
}

else {
   doOtherStuff();
}


function VeryBadException(message) {
   this.message = message; 
}

function ReallyBadException(message) {
   this.message = message;
}

function foo() {
   var r = Math.floor(Math.random() * 4);
   if(r == 2) {
      throw new VeryBadException("Something very bad happened!");
   }
}

function bar() {
   var r = Math.floor(Math.random() * 4);
   if(r == 1) {
      throw new ReallyBadException("Something REALLY bad happened!");
   }
}

try {
  foo();
  bar();
}

catch(e) {
   if(e instanceof VeryBadException) {
      console.log(e.message);
   }

   else if(e instanceof ReallyBadException) {
      console.log(e.message);
   }
}


// array functions?
var array_of_functions = [
    first_function,
    second_function,
    third_function,
    forth_function
]


array_of_functions[0]('a string');

// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit?
document.getElementById("cInput").oninput = function() {convertCToF()};
document.getElementById("fInput").oninput = function() {convertFToC()};


var conversionFn;
document.querySelector('#cInput').onfocus = function(){
    conversionFn = convertCToF;
};
document.querySelector('#fInput').onfocus = function(){
    conversionFn = convertFToC; 
};


c = parseInt(c);
f = parseInt(f);


document.querySelector('#submit').onclick = function(){
    conversionFn();  
};


//  Write a JavaScript program to count the number of vowels in a given string.?
function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}
get

