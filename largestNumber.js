let ages = [10, 20, 30, 40, 22, 56, 17];

let largestNumber = 0;
for (let age of ages){
    if(age > largestNumber){
        largestNumber = age;
    }
}
console.log("Largest Number : ", largestNumber);