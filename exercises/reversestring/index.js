// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//var reverse=(str)=> Array.from(str).reverse().join('');

//var reverse=(str)=>{ 
//     let r=''; 
//     for(let c of str){ 
//         r= c+ r; 
//     }
//     return r;
// }

function reverse(str) {
    let a= str.split('');
    for(let i=0, j=a.length-1; i<j ;i++,j--){
        let tmp= a[i];
        a[i]=a[j];
        a[j]=tmp;
    }
    return a.join('');
}


module.exports = reverse;
