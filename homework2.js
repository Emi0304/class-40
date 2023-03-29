const frindsDetails = [
    { name : "Tara" , age : 18, collageName : "RMPI"},
    { name : "Hafsa" , age : 19, collageName : "RMPI"},
    { name : "Mithila akter" , age : 18, collageName : "RMPI"},
    { name : "Meghla" , age : 19, collageName : "RMPI"},
    { name : "Tamanna" , age : 18, collageName : "RMPI"},
    { name : "Noorjahan" , age : 18, collageName : "RMPI"},
    { name : "Priya" , age : 18, collageName : "RMPI"},
    { name : "Meherunnesa" , age : 18, collageName : "RMPI"},
    { name : "Rani" , age : 18, collageName : "RMPI"},
    { name : "Hani" , age : 19, collageName : "RMPI"},
    { name : "Shila" , age : 18, collageName : "RMPI"},
    { name : "Tania" , age : 19, collageName : "RMPI"},
    { name : "Mounota" , age : 18, collageName : "RMPI"},
    { name : "Asha" , age : 18, collageName : "RMPI"},
    { name : "Aysha" , age : 19, collageName : "RMPI"},
    { name : "supti" , age : 19, collageName : "RMPI"},
    
];  

function leargestName (allDetails){
    let names = frindsDetails[0];
    for ( var friend of allDetails){
        if ( friend.name.length > names.name.length ){
            names = friend
        }
    }
    return names;
}

const result = leargestName(frindsDetails);
console.log(result)