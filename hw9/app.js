// 當檔案讀取完成後 要執行的事
$(function () {

    var $btn1 = $("#btn1");
    $btn1.click(function () {
        var height = $("#height").val() / 100;
        var weight = $("#weight").val()
        var ans = Math.round(10 * weight / (height * height)) / 10;

        $("#result").text(ans).slideDown();

        $("#result1").hide();
        $("#result2").hide();
        $("#result3").hide();

        if (ans > 24) {
            $("#result1").slideDown();
        } else if (ans > 18.5) {
            $("#result2").slideDown();
        } else {
            $("#result3").slideDown();
        }
    });

});
