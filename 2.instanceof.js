//原型链上的判断方法
//1.instanceof

console.log('[] instanceof Array:',[] instanceof Array);

console.log('null instanceof object:',null instanceof Object);

console.log('[] instanceof Object:',[] instanceof Object);

console.log('new Date() instanceof Date',new Date() instanceof Date);

console.log('-------------------弊端---------------------------------');

console.log('nstanceof 操作符的问题在于，它假定只有一个全局执行环境。如果网页中包含多个框架，那实际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的构造函数。如果你从一个框架向另一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有各自不同的构造函数。');

var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[0].Array;
var arr = new xArray(1,2,3); // [1,2,3]
arr instanceof Array; // false
