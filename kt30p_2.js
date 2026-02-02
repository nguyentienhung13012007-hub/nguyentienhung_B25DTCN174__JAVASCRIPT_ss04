// Viết một chương trình duyệt các số tự nhiên từ 1 đến 50.
let Fizz=0;
for(let i=1;i<=50;i++){
    if(i%3==0){
        console.log(`${i} là  :Fizz`);
        Fizz+=i;
    }else if(i%5==0){
        console.log(`${i} là  :Buzz`);
        
    }else if(i%3==0 && i%5==0){
        console.log(`${i} là  :FizzBuzz`);
        
    }else{
        console.log(i);
        
    }
}
console.log("Tổng các số Fizz: ",Fizz);
