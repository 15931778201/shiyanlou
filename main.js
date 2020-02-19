console.log('main 开始');
// exports.done = false;
var a =require('./shiyanlou/a.js');
var b =require('./shiyanlou/b.js');
console.log('在 main 中, a.done = %j, b.done = %j', a.done, b.done);
// exports.done = true;
// console.log('a 结束');