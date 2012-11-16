# 浏览器兼容placeholder解决方案

- order: 1

---

以下示例所有的placeholder的样式设置如下

````css
.placeholder{
	color:#aaa;
}
````


## 示例一：最简单的使用

<input id="i-1" placeholder="我是placeholder哦"></input><br />
<button id="b-1">点我获取input的value</button>

````js
seajs.use(['$', 'placeholder'], function($, placeholder){
	$(function(){
		placeholder();
		
		$('#b-1').click(function(){
			alert($('#i-1').val());
		});
	});
});
````

## 示例二：针对某个input的使用

<div id="container"></div>
<button id="b-2">点我创建一个input，并初始化placeholder</button><br />

````js
seajs.use(['$', 'placeholder'], function($, placeholder){
	$('#b-2').click(function(){
		placeholder($('<input placeholder="动态创建的placeholder" /><br />').appendTo($('#container')));
	});
});
````