import data from './data.json' assert { type: 'json' };

// let data = {l:[3,4,2,1,3,3], r:[4,3,5,3,9,3]}

let diff = data.l.reduce((r, e) => {
    return r + (e*data.r.filter(el => e===el).length)
}, 0);

console.log(diff)