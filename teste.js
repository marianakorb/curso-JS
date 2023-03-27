function fakeBin(x){
    let arr = x.split('').map(Number)

    for(let i = 0; i <= arr.length; i++){
        if(arr[i] < 5) {
          arr[i] = 0
        } 
        if(arr[i] >= 5) {
          arr[i] = 1
        }
      } 
      return arr.join('')
    
}

console.log(fakeBin('45385593107843568'))
// 01011110001100111