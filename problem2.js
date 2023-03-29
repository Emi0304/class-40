const phones = [
    {name : "redmi note 11" , price : 28000, color : "black" },
    {name : "samsung s22" , price : 21000, color : "black" },
    {name : "realme 10" , price : 23000, color : "black" },
    {name : "iphone 13 pro" , price : 245000, color : "black" },
    {name : "walton" , price : 24500, color : "black "},
    {name : "iphone 12" , price : 23000, color : "black" },
    {name : "redmi lite 10" , price : 124000, color : "black" }

];

let chepestPrice = phones[0] ;
for (let phone of phones){
    if(phone.price < chepestPrice.price){
        chepestPrice = phone
    }

};
console.log(chepestPrice);