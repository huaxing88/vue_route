// 遍历list数组
let list = [
    {ip: '0.0.0.0', name: 'kk', parentId: 0},
    {ip: '0.0.0.1', name: 'kk', parentId: 1},
]

list.forEach((item, index, array) => {
console.log(item, index, array)
})