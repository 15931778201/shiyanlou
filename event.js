var events = require('events');
var emmiter = new events.EventEmitter();

// emmiter.on('connection', function() {
//     console.log('a');
// });
// //prependLister将时间添加到监听数组开头
// emmiter.prependListener('connection', () =>console.log('b'))
// setTimeout(function() {
//     emmiter.emit('connection');
// }, 1000);

// EventEmitter.once 可以注册最多一个监听器  事件被触发时监听然后再调用
// var n = 0;
// emmitter.once('connection', function() {
//     ++n;
//     console.log('第'+ n +'次');
// });
// emmiter.emit('connection');
// emmiter.emit('connection');
// emmiter.emit('connection');
// emmiter.emit('connection');


// EventEmitter.setMaxListener置统一事件监听器最大绑定数。
var callback1 = function(arg1,arg2) {
    console.log('hello world', arg1, arg2);
}
var callback2 = function(arg3,arg4) {
    console.log('hello stranger', arg3, arg4);
}
emmiter.on('connection', callback1);
emmiter.on('connection', callback2);
// 移除所有监听器
// emmiter.removeAllListeners('connection');
//查看事件监听器个数
var num =emmiter.listenerCount('connection');
console.log(num);
emmiter.emit('connection', 'sdsadsac', 'lldkclskcx');

// var callback = function() {
//     console.log('syl');
// };
// emmiter.on('connection',callback);
// emmiter.off('connection',callback);
// emmiter.emit('connection');