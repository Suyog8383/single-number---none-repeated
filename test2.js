let arr=[1,4,3,5,1,4,3];
function singleNumber(arr){
let ans = 0;
for (let num of arr) {
    ans = ans ^ num;
}

return ans;
}
console.log(singleNumber(arr));
