let num = [50, 30, 45, 20, 89, 60];

let result = num.filter(function(item){
    let flag =1;
    if( item % 2 === 0 ) flag =0;
    return flag;
       
});

console.log(result);