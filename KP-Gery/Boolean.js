// let x = 5;
// let y = 15;

// console.log(x > y); //false
// console.log(x < y); //true
// console.log(x == y); //false
// console.log(x != y); //true

// function isActive(Gery) {
//     if(Gery > 0) 
//     { 
//         return true;
//     } else { 
//         return false; }
// }

// function isActive2(Gery) {
//     return Gery > 0 ? true : false;
// } 

// function isActive3(Gery) {
//     return Gery > 0;
// }

// console.log(isActive(1000));
// console.log(isActive2(1000));
// console.log(isActive3(1000));

/*-------------------------------------*/

// //object

const gery = {
    name: 'saon',
    age: 25,
    city: 'Bekasi',
    Country: 'INA'

}

age_property_exists = 'age' in gery;

console.log(age_property_exists)

const update_gery={
    ...gery,
    surname: 'yanto'
}
console.log(update_gery)

/*-------------------------------------*/

//array

// const array1 = [1,1,1,1,1,1,1,2,2,2,3,3,3,4,4,4,];
// const unique_array = [...new Set(array1)]

// console.log(unique_array)


//Variabels

// let name;
// name = 'Gery saon';
// console.log(name);
// name = 'KP';
// console.log(name);

