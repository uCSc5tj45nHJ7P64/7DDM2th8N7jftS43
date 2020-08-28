//$(".comment_block a").click(function () {
//    var $commblock1 = $(".comment_block1")
//    if ($commblock1.hasClass("hide")) {
//        $commblock1.addClass("show")
//        setTimeout(function () {
//            $commblock1.removeClass("hide")
//        }, 100);
//
//        $(".commhere").append("<div class='write_comm_cover'>\n<h5>Write comment<\/h5>\n<input name='name' placeholder='Name'><\/input>\n<textarea placeholder='Your text' cols='30' rows='10'><\/textarea>\n<div class='write_comm_btn_cover'>\n<button class='write_comm_btn'>Write comment<\/button><\/div><\/div>");
//        return false
//    }
//    if ($commblock1.hasClass("show")) {
//        setTimeout(function () {
//            $commblock1.removeClass("show")
//        }, 100);
//        $commblock1.addClass("hide")
//        $(".commhere").remove("<div class='write_comm_cover'>\n<h5>Write comment<\/h5>\n<input name='name' placeholder='Name'><\/input>\n<textarea placeholder='Your text' cols='30' rows='10'><\/textarea>\n<div class='write_comm_btn_cover'>\n<button class='write_comm_btn'>Write comment<\/button><\/div><\/div>");
//        return false
//    }
//});

$(function () {
    $(".write_comm_btn").click(function () {
        var e = $("#your_name").val(),
            s = $("#your_comment").val(),
            o = $(".check").val(),
            l = ($(".comment_block27").css("display", "block"), new Date);
        return l = l.getDate() + "." + (l.getMonth() + 1) + "." + l.getFullYear(), o.length > 1 && ($("#my_name").html(e), $("#my_comment").html(s),$(".comment_block27").addClass("comm_hidd"), $(".commdate1").html(l), $(".write_comm_btn").prop("disabled", !0), sessionStorage.setItem("comm123", "pop"), sessionStorage.setItem("commname", e), sessionStorage.setItem("commtext", s), sessionStorage.setItem("commdate", l)), 
        $(".comment_block27").addClass("write_comm_animation"),
        $("#your_name").val(""),
        $("#your_comment").val("");
    })
});

var $sesscommname = sessionStorage.getItem("commname"),
    $sesscommtext = sessionStorage.getItem("commtext"),
    $sesscommdate = sessionStorage.getItem("commdate");

"pop" == sessionStorage.getItem("comm123") && ($("#my_name").html($sesscommname), $("#my_comment").html($sesscommtext), $(".comment_block27").addClass("comm_hidd"), $(".comment_block27").css("display", "block"), $(".write_comm_btn").attr("disabled", !0), $(".commdate1").html($sesscommdate)), $(".comment_block27").addClass("write_comm_animation"),
//$(document).ready(function () {
//    $(".anchor").click(function () {
//        return $("html, body").animate({
//            scrollTop: $($(this).prop("href")).offset().top + "px"
//        }, {
//            duration: 500,
//            easing: "swing"
//        }), !1
//    });
//});

$(".bars").click(function() {
    if ($(".close").css("height") == ("0px")) {
        $(".close").css("height", "450px");
    } 
    if ($(".close").css("height") == ("450px")) {
        $(".close").css("height", "0px");
    } 
});









//var num = 1;
//
//function addQuestion() {
//    var newdiv = document.createElement("div");
//    var commblock1 = document.querySelector(".comment_block1");
//    newdiv.innerHTML = "<div class='write_comm_cover'>\n<h5>Write comment<\/h5>\n<input name='name' placeholder='Name'><\/input>\n<textarea placeholder='Your text' cols='30' rows='10'><\/textarea>\n<div class='write_comm_btn_cover'>\n<button class='write_comm_btn'>Write comment<\/button><\/div><\/div>";
//    //newdiv.appendTo('div#quest');
//    document.querySelector(".comment_block1").classList.add('show')
//    if (commblock1.classList.contains('show')) {
//            document.querySelector(".commhere").appendChild(newdiv);
//            alert("show");
//            commblock1.classList.remove('show');
//            commblock1.classList.add('hide');
//    } 
//    if (commblock1.classList.contains('hide')) {
//            document.querySelector(".commhere").removeChild(newdiv);
//            alert("hide");
//    }
//    
//}