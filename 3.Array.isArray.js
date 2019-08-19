//通过判断Array.isArray来决定这个是否是一个数组

function log(text){
    console.log(text)
}

log('Array.isArray')
log(`Array.isArray() 本质上检测的是对象的 [[Class]] 值，
    [[Class]] 是对象的一个内部属性，里面包含了对象的类型信息，
    其格式为 [object Xxx] ，Xxx 就是对应的具体类型 。对于数组而言，[[Class]] 的值就是 [object Array] 。`)