let n=-5;
// 1.	Kiểm tra xem n là số chẵn hay số lẻ. In ra thông báo: "Số [n] là số chẵn" hoặc "Số [n] là số lẻ". 

if (n%2===0) {
    alert(`Số ${n} là số chẵn`);

    
}else{
    alert(`Số ${n} là số lẻ`);
    
}
//2.	Kiểm tra xem n là số dương, số âm hay bằng 0. 
if(n>0){
    console.log(`${n}  là số dương`);
    
}else if(n<0){
    console.log(` ${n} là số âm`);
    
}else {
    console.log(`${n} bằng 0`);
    
}
    

// 3.	Nếu n > 0, sử dụng vòng lặp để in ra các số từ 1 đến n. Nếu n <= 0, in ra thông báo: "Giá trị n không hợp lệ để tạo dãy số".

if(n>0){
    for(let i=1;i<=n;i++){
        console.log("số từ 1 đến n: ",i);
        

    }
}else{
    alert(`Giá trị ${n} không hợp lệ để tạo dãy số`);
    
}