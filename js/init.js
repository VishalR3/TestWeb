Vue.component("todo-item",{
    template:'<li>ghjsagdsa</li>'
})
var app = new Vue({
    el:"#VueApp",
    data:{
        items : {
            text:"one",
            text:"two"
        } 
    }
})

$(function(){
    $(".add_btn").on("click",function(){
        var plus=document.createElement("button");
        plus.classList="plus";
        plus.innerHTML="+";
        var minus=document.createElement("button");
        minus.classList="minus";
        minus.innerHTML="-";
        $(this).append(plus,minus);
        $(".cart_qty").text(1);
        $(this).addClass("dsbnbf").removeClass("add_btn");
    });

    $(".plus").on("click",function(){
        let val=parseInt($(".cart_qty").text());
        console.log(val);
        $(".cart_qty").text(val+1);
    });

    $(".minus").on("click",function(){
        let val=parseInt($(".cart_qty").text());
        console.log(val);
        $(".cart_qty").html( val-1 );
    });
});