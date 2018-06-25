const wrap = (line, maxLen) => {
    let arr = []
    if(line.indexOf(' ')===-1){
        return line
    } else {
        while(line.length>maxLen){
            let tempStr = line.slice(0,maxLen)
            let spaceAt = tempStr.lastIndexOf(' ')
            let newLine = line.slice(0, spaceAt)
            arr.push(newLine)
            line = line.slice(spaceAt+1)
        }
        arr.push(line)
    }
    return arr.join('\n')
};


module.exports = wrap;