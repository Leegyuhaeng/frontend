$(function(){

    
    
    $.ajax({
        url:"../shop1/newproduct/new_product.json",
    cache:false,
    type:"GET",
    dataType:"JSON",
    success:function($a){
        // console.log($a)
        $.fn.new($a)
    }
})

$.fn.new=function($data){
    
    $.each($data["new_product"],function($a,$b){
        var $ceil = Number($b["product_money"])
        var $ceil2 = Number($b["product_money"]).toLocaleString()+"원"
        var $sp = Number($b["product_dc"].split("%")[0])
        var $hap = ($ceil-(($ceil*$sp)/100)).toLocaleString()+"원"

       
        if($sp==0){
            $ceil2=""
        }
        if($ceil==""){
            $hap=Number($b["product_money"]).toLocaleString()+"원"
        }
        // console.log($hap)
        // console.log($b)
        // console.log($b["product_img"])
        $("#new_menu").append("<span>\
<label><img class='new_img0' src="+$b["product_img"]+"><img class='new_img1' src ='./newproduct/info_icon02.gif'><img class='new_img2' src ='./newproduct/info_icon03.gif'></label>\
<label>"+$b["product_nm"]+"</label>\
<label>"+$b["product_info"]+"</label>\
<label><s>"+$ceil2+"</s></label>\
<label>"+$hap+"</label>\
</span>\
")
if($sp!=0){
        //    console.log($b["product_dc"])
    $("#new_menu>span").eq($a).append("<div>"+$b["product_dc"]+"</div>")
    }
})




var $y =  $("#new_menu>span").length

    var $w =0

    while($w<=$y){
if($w%3==2){
        $("#new_menu>span").eq($w).css("marginRight","0px")
}

        $w++
    }
    var $height =  Math.ceil($("#new_menu>span").eq(0).height())
    var $top =  Number($("#new_menu>span").eq(0).css("marginBottom").split("px")[0])
    var $ea = Math.ceil($("#new_menu>span").length/3)
    var $new_height =(($height+$top)*$ea)+$top
    $("#new_menu").height($new_height+"px")


    $("#new_menu>span").bind({
        "mouseenter":function(){
    var $ck = $(this).index()
    //  console.log($ck)
    $("#new_menu>span:eq("+$ck+")>label:eq(0)>img").eq(1).css("display","block")
    $("#new_menu>span:eq("+$ck+")>label:eq(0)>img").eq(2).css("display","block")
        },"mouseleave":function(){
            var $ck = $(this).index()
            $("#new_menu>span:eq("+$ck+")>label:eq(0)>img").eq(1).css("display","none")
            $("#new_menu>span:eq("+$ck+")>label:eq(0)>img").eq(2).css("display","none")
        }
    })
}





})