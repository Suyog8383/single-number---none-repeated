let arr=[1,4,3,5,1,4,3,5];
function singleNumber(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]]++;
        }else{
            obj[arr[i]]=1;
        }
    }
    
        for (let a in obj) {

      if (obj[a] === 1) {

        return a;
      }else{
          return 1;
      }
    }
    
 
}
console.log(singleNumber(arr));
