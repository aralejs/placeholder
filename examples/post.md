# 表单提交演示

---

````html
<form action="" method="post" id="test-form">
    <input type="text"  name="test-input" id="test-input" placeholder="我是placeholder，不要提交我">
    <input type="button" id="test-button" value="提交表单">
</form>
````

````js
seajs.use(['placeholder', '$'], function(placeholder, $) {
    $('#test-button').click(function() {
        $('#test-form').submit();
        //$('#test-form')[0].submit();  // 请使用 jQuery 对象的 submit 方法
    });
});
````
