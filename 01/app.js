import data from './data.json' assert { type: 'json' };

let lSorted = data.l.sort()
let rSorted = data.r.sort()

let diff = lSorted.reduce((r, e, i) => {
    // console.log(e, rSorted[i], Math.abs(e - rSorted[i]))
    return r + Math.abs(e - rSorted[i])
}, 0);

console.log(diff)