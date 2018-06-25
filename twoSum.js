const twoSum = (arr,target) => {
    let sorted = arr.sort(function(a,b){
        return a - b
    })
    let front = 0
    let back = arr.length-1
    if(!arr.length){
        return []
    } else {
        while(front!==back){
            if(arr[front]+arr[back]===target){
                return [front,back]
            } else if(arr[front]+arr[back]<target) {
                front++
            } else {
                back--
            }
        }
    }
    return []
}

module.exports = twoSum