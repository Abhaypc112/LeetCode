/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let a = [];
    for(let x of s){
        if(x === a[a.length - 1]){
            a.pop()
        }else{
            a.push(x)
        }
    }
    return a.join("")
};