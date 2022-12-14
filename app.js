//  var myCar = {
//     maxSpeed: 70,
//     driver: "Seth Lillard",
//     drive: function(speed, time) {
//         console.log(speed * time);
//     },
//     logDriver: function(){
//         console.log("driver name is " + thisi.driver);
//     }
//  };

//  var myArray = new Array();
//  var myString = new String();
//  var myCar = new Car();

var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };
};

var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(40, "James Bond");
var myCar3 = new Car(60, "Humpty Dumpty");
var myCar4 = new Car(85, "Seth Lillard");

myCar.drive(30, 5);
myCar3.logDriver();