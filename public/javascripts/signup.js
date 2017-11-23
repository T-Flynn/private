/* 注册 */
function validatorForm() {
    var ret = true;
    if (!validator.isMobilePhone($("#phone").val(), "zh-CN")) {
        ret = false;
        alert("The phone number is not correct");
        $("#phone").focus();
        return false;
    }
    if (!validator.isLength($("#inputPassword").val(), {min: 6, max: 20})) {
        ret = false;
        alert("The password should be between 6 and 20 letters");
        $("#inputPassword").focus();
        return false;
    }
    if ($("#inputPassword").val() !== $("#inputPassword4").val()) {
        ret = false;
        alert("The two passwords you typed do not match");
        return false;
    }
    if (ret) {
        signUp();
    }
    
    function signUp() {
        var para = $("#signUpform").serialize();
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