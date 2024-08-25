function outest(){
    var a = 20;
    function outer(b){
        function inner(){
            console.log(c, b, a);
        }
        var c = 10;

        return inner;
    }

    return outer;
}

var c = 100;

outest()("Hello World")();

var res1 = outest();
var res2 = res1("Hye");
var res3 = res2();

console.log(c);