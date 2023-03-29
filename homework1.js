const laptops = [
    { name : "MacBook Air" , price : 128000, color : "black" },
    { name : "Asus ROG Zephyrus G15" , price : 82600, color : "black" },
    { name : "MacBook Pro 16" , price : 68000, color : "black" },
    { name : " HP Spectre x360 14" , price : 58000, color : "black" },
    { name : "dell XPS 13" , price : 88000, color : "black" },
    { name : "Asus Zenbook Pro Duo" , price : 228000, color : "black" },
    { name : " Asus ROG Zephyrus G14" , price : 128000, color : "black" },
    { name : "Asus Zenbook S 13 OLED" , price : 28000, color : "black" },
    { name : "Lenovo Chromebook Duet 3" , price : 98000, color : "black" },
    { name : "Microsoft Surface Laptop 5 (13.5-inch)" , price : 368000, color : "black" }
];  

function laptopDetails (allDetails){
    let expensive = laptops[0];
    for( var laptop of allDetails){
        if(laptop.price > expensive.price){
            expensive = laptop
        }
    }
     return expensive;
    
};

const output = laptopDetails(laptops)
console.log(output);
