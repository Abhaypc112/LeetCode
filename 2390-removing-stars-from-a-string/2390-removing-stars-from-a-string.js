/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let a = [];
    for(let x of s){
        if(x == "*"){
            a.pop();
        }else {
            a.push(x)
        }
    }
    return a.join("")
};