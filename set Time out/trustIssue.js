console.log("Start");

setTimeout(function(){
    console.log("CallBack");
}, 5000);

console.log("End");

var startTime = new Date().getTime();
var endTime = startTime;

// Blocking Main Thread i.e. Call Stack
while(endTime < startTime + 10000){
    endTime = new Date().getTime();
}

console.log("While end");