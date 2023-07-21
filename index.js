function roman(nums) {
    let map = {
        'M': 1000,
        'D': 500, 
        'C': 100,
        'L': 50, 
        'X': 10,
        'V': 5,
        'I': 1
    }

    let prev = 0
    let result = ''
    
    for(let i = 0; i < nums.length; i++) {
        let curr = map[nums[i]]
        let keys = Object.keys(nums) 
        console.log(curr);

        if(curr )
        console.log(keys);
    }
}
console.log(roman(2));
// console.log(arabicToRoman(5));
// console.log(arabicToRoman(7));
// console.log(arabicToRoman(1996));









// const romes = {
//     'M': 1000,
//     'CM': 900,
//     'D': 500,
//     'CD': 400, 
//     'C': 100,
//     'XC': 90,
//     'L': 50, 
//     'XL': 40,
//     'X': 10,
//     'IX': 9,
//     'V': 5,
//     'IV': 4,
//     'I': 1
// }

// function arabicToRoman(num) {
//     let result = ''

//     for(let key in romes) {
//         while(romes[key] <= num) {
//             result += key
//             num = num - romes[key]
//         }
//     }
//     return result
// }


// console.log(arabicToRoman(1));
// console.log(arabicToRoman(5));
// console.log(arabicToRoman(7));
// console.log(arabicToRoman(1996));