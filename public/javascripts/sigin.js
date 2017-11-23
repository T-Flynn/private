/* 登录 */
function validatorSignForm() {
    var ret = true;
    if (!validator.isMobilePhone($("#inputTel").val(), "zh-CN")) {
        ret = false;
        alert("The phone number is not correct");
        $("#inputTel").focus();
        return false;
    }
    if (!validator.isLength($("#inputPassword3").val(), {min: 6, max: 20})) {
        ret = false;
        alert("The password should be between 6 and 20 letters");
        $("#inputPassword3").focus();
        return false;
    }
    if (ret) {
        signUp();
    }
    function signUp() {
        var para = $("#signInform").serialize();
        $.ajax({
            url: '',
            type: 'POST',
            async: true,
            data: para,
            success: function (res) {
            
            }
        });
        alert(para);
    }
}