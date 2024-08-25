function outer(){
    let a = 10;
    function inner(){
        setTimeout(function(){
            a++;
            console.log(a);
        }, 2000);
        console.log(a);
    }
    return inner();
}

outer();