# 表单提交演示

---

## 使用 jQuery.submit 提交

````html
<form action="" method="post" id="test-form">
    <input type="text"  name="test-input" id="test-input" placeholder="不要提交我">
    <input type="button" id="test-button" value="提交表单">
</form>
````

````js
seajs.use(['placeholder', '$'], function(placeholder, $) {
    $('#test-button').click(function() {
        $('#test-form').submit();
        //$('#test-form')[0].submit();  // 原生方法会提交 test-input
    });
});
````

## 用原生方法提交的话 


````html
<form action="" method="post" id="test-form-2">
    <input type="text"  name="test-input" id="test-input-2" placeholder="不要提交我">
    <input type="button" id="test-button-2" value="提交表单">
</form>
````

````js
seajs.use(['placeholder', '$'], function(placeholder, $) {
    $('#test-button-2').click(function() {
        // 提前清除掉 placeholder 带来的 value
        placeholder.clear('#test-input-2'); // 或 placeholder.clear('#test-form-2');

        $('#test-form-2')[0].submit();
    });
});
````
