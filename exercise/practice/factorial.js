function factorial(n){
    var result=1
    for(var i=1;i<=n;i++){
        result *= i //result=result*i
    }
    return result
}

console.log("factorial(10)=",factorial(10))