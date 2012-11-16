# Placeholder

---

针对不支持 Html5 placeholder 的占位符兼容解决方案。本组件在已经支持 placeholder 的浏览器下不会做任何事，切记。

---

## 模拟原理

在不支持placeholder的浏览器中，通过class及value的方式来实现。

利用了jQuery的valHooks，使得用户使用`$.val()`接口去操作在操作有placeholder的input时也不会受到影响。

同时利用jQuery的事件代理，保证了所有的form的submit事件也不会受到影响。

## 使用说明

### placeholder(element)

参数是 `element` 要模拟的element，可以是选择器，如果不选，会默认选择整个 body 下的所有`input`及`textarea`。

> P.S. 如果是模拟的 placeholder，会在 input 元素上追加`className="placeholder"`，__目前该参数不支持更改__

## 最佳实践

1. 最简单的用法，直接 use 组件，不需要手动调用任何代码。

    ```js
    seajs.use(['placeholder'], function(placeholder) {
    
    });
    ```

2. 针对某些特定的input

    ```js
    seajs.use(['placeholder'], function(placeholder) {
        placeholder('#test'); 
    });
    ```
