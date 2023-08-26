let num = [
    {id: 1, name: "Áo thun", quantity: 10, price: 20},
   {id: 2, name: "Quần âu", quantity: 5, price: 60},
   {id: 3, name: "Giầy", quantity: 0, price: 30},
   {id: 4, name: "Áo sơ mi", quantity: 6, price: 40},
   {id: 5, name: "Quần bò", quantity: 4, price: 50},
 ];



console.log(num.find(n=> n.quantity===0));