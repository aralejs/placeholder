# Placeholder

---

> 注意，本模块后续将删除。请使用 [gallery/placeholders](https://spmjs.org/gallery/placeholders/) 来代替，使用方式参考 [文档](http://jamesallardice.github.io/Placeholders.js/)。

```js
seajs.use('gallery/placeholders/2.1.0/placeholders', function() {
    Placeholders.enable();
});
```

---

[![Build Status](https://travis-ci.org/aralejs/placeholder.png?branch=master)](https://travis-ci.org/aralejs/placeholder)

针对不支持 Html5 placeholder 的占位符兼容解决方案。本组件在已经支持 placeholder 的浏览器下不会做任何事，切记。

---

## 模拟原理

在不支持 placeholder 的浏览器中，通过 className 及 value 的方式来实现。

利用了 jQuery 的 valHooks，使得用户使用`$.val()`接口去操作在操作有 placeholder 的 input 时也不会受到影响。

同时利用 jQuery 的事件代理，保证了所有表单的 submit 事件也不会受到影响。

> 注意要使用 jQuery 对象的 submit 方法取代原生的 submit 方法，才能正确拦截所有绑定了 placeholder 的 input 对象。

## 使用说明

### placeholder(element)

参数是 `element` 要模拟的 element，可以是选择器，如果不选，会默认选择整个 body 下的所有`input`及`textarea`。

> P.S. 如果是模拟的 placeholder，会在 input 元素上追加`className="placeholder"`，__目前该参数不支持更改__

## 最佳实践

1. 最简单的用法，直接 use 组件，不需额外调用代码。

    ```js
    seajs.use(['arale/placeholder/{{版本号}}/placeholder']);
    ```

2. 针对某些特定的input

    ```js
    seajs.use(['arale/placeholder/{{版本号}}/placeholder'], function(placeholder) {
        placeholder('#test'); 
    });
    ```

3. 只能使用原生对象提交表单时，可能需要手动清除对应 placeholder 的 value。

    ```js
    placeholder.clear('#test-form');  // 这个表单里的 input 的 placeholder 值不会被提交
    ```

    ```js
    placeholder.clear('#test-input1, #test-input2'); // 指定的输入框的 placeholder 值不会被提交
    ```
