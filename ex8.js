const number = [1,3,5,7,9];
 const num1 = number.map( (n) => {
    return n * 2;
 });

const num2 = number.filter(n => n === 3);

const locSanPham = (...dssanpham) =>{
    return dssanpham.filter(n => n === 1);
}

console.log(locSanPham(1,3,5,1));
console.log(locSanPham(3,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,));


 console.log(number);
 console.log(num1);
 console.log(num2);

 