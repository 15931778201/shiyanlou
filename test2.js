// console.log("hello world");
// console.log(__filename);
// console.log(__dirname);
function foo() {
    console.log("hello, syl");
}
// var t = setTimeout(foo, 3000);
// clearTimeout(t);

var t = setInterval(foo, 3000);
clearTimeout(t);