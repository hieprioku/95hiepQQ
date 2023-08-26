let num = [
    {id: 1, name: "Áo thun", quantity: 10, price: 20},
    {id: 2, name: "Quần âu", quantity: 20, price: 60},
    {id: 3, name: "Giầy",  quantity: 30, price: 30},
    {id: 4, name: "Áo sơ mi", quantity: 40, price: 40},
    {id: 5, name: "Quần bò", quantity: 50, price: 50},
 ];
 let props = num.filter(function(element) {

      return element.price < 50;
    
    });


console.log( props);