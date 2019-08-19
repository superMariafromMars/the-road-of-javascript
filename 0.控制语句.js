    let basePath = " "
    const button = document.querySelector('.button')
    const script = document.querySelector('script')
    const event = document.querySelector('.event')
    const instanceOf = document.querySelector('.instanceOf')
    const arrayIsArray = document.querySelector('.ArrayisArray')
    //创建一个新的标签和元素
    function addScript(src){
        //删除上一个节点script
        let childNodes = document.querySelector('body').childNodes
        document.querySelector('body').removeChild(childNodes[childNodes.length-1])
        console.log(childNodes)

        //新增一个节点script
        let newScript = document.createElement('script');
        newScript.setAttribute('src',src)
        document.querySelector('body').appendChild(newScript)
    }

//所有的buttton在这里不断进行
    //1.typeof按钮点击事件
    event.onclick = function () {
        console.log('onClick只可以添加一个，会被覆盖');
        console.log('--------------但是-----------');
        console.log('addEventListener可以添加多个而且不会被覆盖，利用true和false判断优先级');
    }
    button.addEventListener('click',function(){
        addScript('./1.typeof.js')
    },true)

    //2.instanceOf点击事件
    instanceOf.addEventListener('click',function(){
        basePath = "./2.instanceof.js"
        addScript(basePath)
    })

    //3.ArrayisArray点击事件
    arrayIsArray.addEventListener('click',function(){
        basePath = "./3.Array.isArray.js"
        addScript(basePath)
    })
    