// // var str = "aac";
// // var ans = []
// // var count = 0;

// // for(var i =0; i < str.length; i++){
// //     var sub = "";
// //     for(var j = i; j < str.length; j++){
// //         sub += str[j];
// //         ans.push(sub);
// //         // console.log(sub);
// //         check(sub)
// //     }
// // }
// // // console.log(ans)
// // // for(var i = 0; i < ans.length; i++){
// // //     // console.log(ans[i])
// // // }
// // function check(s){
// // for(var i = 0; i < s.length; i++) {
// //     if(s[i] == "a" || s[i]  == "e" || s[i]  == "i" || s[i]  == "o" || s[i]  == "u"){
// //         if(s[i+1] == "a" || s[i+1]  == "e" || s[i+1]  == "i" || s[i+1]  == "o" || s[i+1]  == "u"){
// //             // console.log(s)
// //             count++;        }

// //     }
// // }
// // }
// // console.log(count)

// // var arr = [5, 4, 1, 3, 2];

// var num = "19";
// var n = num.split("").map(Number)
// // console.log(num)
// var arr = []
// for(var i = 0; i < n.length; i++){
//     // console.log(n[0]+n[1])
//     arr.push(n[i])
// }
// var ans = 0;
// var sum = 0
// for(var i = 0; i < arr.length; i++){
//     // console.log(arr[i])

//     ans += arr[i]**2
//     // console.log(ans)

// }
// if(ans !== 1){
//     n = ans
// }
// while(n )

// console.log({} === {})

// var arr = "A";

// var obj = {};

// for(var i =0; i < arr.length; i++){
//     if(obj[arr[i]] == undefined){
//         obj[arr[i]] = 1;
//     }
//     else{
//         obj[arr[i]]++;
//     }
// }
// console.log(obj)
// var sum = 0;

// for(let key in obj){
//     // console.log(key)
//     // console.log(obj[key])
//     if(obj[key] > 1){
//         sum += obj[key] + 1;
//     }
//     else{
//         if(obj[key] == 1){
//             sum += obj[key]*2
//         }
//     }
// }
// console.log(sum)
var k = 4
var arr = [2, 7, 4, 3];
var sum = 0;
for(var i=0; i < arr.length; i++) {
sum += arr[i]
}
console.log(sum-k+1)
// var a = [3, 2, 1, 2, 1];

// var x = []
// var y = []
//   for (var j = 0; j < a.length; j++) {
//     for(var i =0; i < a[j]; i++){
//         x.push(arr[i])
//     }
//     for(var i = a[j]; i < arr.length; i++){
//         y.push(arr[i])
//     }
//   }
// console.log(x)
// console.log(y)
