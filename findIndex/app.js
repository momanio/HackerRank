function findEvenIndex(arr) {
  //Code goes here!
  const temp = arr.filter((value, index, a) => {
    return a.indexOf(value, index - 1);
  });
  return temp;
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// function caesarCipher(s, k) {
//     // Write your code here
//     const enc=[];
//     for(let value in s)
//     {
//         let code = s.charCodeAt(value) + k;
//         if((code >= 65) && (code <= 90))
//         {
//             code = (code - 65 )%26 +65
//         }
//       else  if((code >= 97) && (code <= 122))
//         {
//             code = (code - 97)%26 +96
//         }

//         enc.push(String.fromCharCode(code))
//     }
//     return enc.join('')

// }

// console.log(caesarCipher('middle-Outz', 2))

// function caesarCipher(s, k) {
//     // Write your code here
//     const enc=[];
//     for(let value in s)
//     {
//         let code = s.charCodeAt(value) + k;
//         while(code > 122)
//         {
//             code = (code - 122) +96;
//         }
//         enc.push(String.fromCharCode(code))
//     }
//     return enc.join('')

// }

function twoStrings(s1, s2) {
  // Write your code here
  return s1.search(s2);
}

console.log(twoStrings("omar", "omarr"));
