// import data from './data.json' assert { type: 'json' };

let data = [[7, 6, 4, 2, 1],
[1, 2, 7, 8, 9],
[9, 7, 6, 2, 1],
[1, 3, 2, 4, 5],
[8, 6, 4, 4, 1],
[1, 3, 6, 7, 9]]

let x = data.reduce((r, e)=>{
    let len = e.filter((e, i, a) => e === a[i+1] || Math.abs(e - a[i+1]) > 3).length
    return r + (len == 0 ? 1 : 0);
}, 0)

console.log('x: ',x)