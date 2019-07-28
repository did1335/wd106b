var e2c = { dog: '狗', cat: '貓', a: '一隻', chase: '追', eat: '吃' };

function look (e) {
  return e2c[e]
}

let e = process.argv[2] // 從 process.argv 這個陣列取出第二個位置的元素 (node dlook cat的cat是0、1、2的第二個位置)
let c = look(e)
console.log(e + '=' + c)
