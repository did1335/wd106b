var arr = new Array(10)
for(i=1;i<=10;i++){
    x=Math.round(Math.random()*90/10+1)
    console.log("1到10變數["+i+"]:"+x)
    arr[i]=x
}
console.log("arr="+arr)