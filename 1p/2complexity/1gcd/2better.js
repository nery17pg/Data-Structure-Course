// recursive
// arrow
// mod
//validate x gcd(0,0)

let k=0
gcd = (a, b) => {
    k++
    if (a % b === 0){
        console.log('steps:',k)
        return b}
    else{
        return gcd(b,a%b)}
    //console.log('print here how many steps it took')
}

//begins
console.time('time:')
console.log(gcd(1, 1000))//1
console.timeEnd('time:')

//console.log('print here how many steps it took')

//ends
//console.log('print here how much time it took')

//can we do better ? (yes/no)