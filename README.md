# Placeholder

// 针对不支持html5 placeholder的浏览器做兼容

---

## 模块依赖

 - seajs
 - jquery
 - [placeholder](https://github.com/mathiasbynens/jquery-placeholder)
 
## 模拟原理

在不支持placeholder的浏览器中，通过class及value的方式来实现。

利用了jQuery的valHooks，使得用户使用`$.val()`接口去操作在操作有placeholder的input时也不会受到影响。

同时利用jQuery的事件代理，保证了所有的form的submit事件也不会受到影响。

## 使用说明

### `placeholder(element)`

	`element` : 要模拟的element，可以是选择器，如果不选，会默认选择整个body下的所有`input`及`textarea`
	
	P.S. 如果是模拟的placeholder，会在input元素上追加className`placeholder`，__目前该参数不支持更改__

## 最佳实践

__以下的方法在已经支持placeholder的浏览器下不会做任何事，切记__

1. 最简单的用法

	```js
	$(function(){
		placeholder();
	});
	```
2. 针对某些特定的input

	```js
	placeholder('#test');
	```