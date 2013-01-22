# 浏览器兼容 placeholder 解决方案

- order: 1

---

以下示例所有的placeholder的样式设置如下: 

````css
.placeholder{
    color:#aaa;
}
````


## 示例一：最简单的使用

> use 本组件后，页面上的 input 和 textarea 里的 placeholder 属性会自动被解析。

<input id="i-1" placeholder="我是placeholder哦">

<button id="b-1">点我获取input的value</button>

````js
// 只需 use 一下 placeholder
seajs.use(['$', 'placeholder'], function($, placeholder) {
    $('#b-1').click(function(){
        alert($('#i-1').val());
    });
});
````

## 示例二：针对某个input的使用

<div id="container"></div>

<button id="b-2">点我创建一个input，并初始化placeholder</button>

````js
seajs.use(['$', 'placeholder'], function($, placeholder){
    $('#b-2').click(function(){
        placeholder($('<input placeholder="动态创建的placeholder" /><br />').appendTo($('#container')));
    });
});
````

## 示例三：绑定多次

<input id="i-3">

<button id="b-3">更换placeholder为“再次更换”</button>

````js
seajs.use(['$', 'placeholder'], function($, placeholder) {
    $('#i-3').attr('placeholder', '后来加上的placeholder');
    placeholder('#i-3');

    $('#b-3').click(function() {
        $('#i-3').attr('placeholder', '再次更换');
        placeholder('#i-3');
    });
});
````

## 示例四：blur 事件次序的诡异问题

> 切 tab 可以触发。

<input id="i-4" placeholder="输入框">


````js
seajs.use(['$', 'placeholder'], function($, placeholder) {
    $('#i-4').blur(function() {
        $('#i-4').val($.trim($('#i-4').val()));
    });
});
````
