function pro(){

    let dt

function windowck(){    

    if(window.XMLHttpRequest){
        return new XMLHttpRequest()
    }



}

function fileopen(){

    if(dt.readyState==XMLHttpRequest.DONE&&dt.status==200){
    //   console.log(this.response)
      title(this.response)
    }


}

dt=windowck()
dt.onreadystatechange = fileopen
dt.open("GET","../shop1/product/hash.json",true)
dt.send()



}
pro()

function title(dt){
    
    let data = JSON.parse(dt)
    
    var tagbox = document.getElementById("tagbox")
    // console.log(data)
    data.forEach(function(a,b,c){
        // console.log(data)
        // if(){
            
            // }
            var span = document.createElement("span")
            span.innerHTML="#"+data[b]["hash_title"]
            tagbox.appendChild(span)
        })
        
        
    }
    
    
    
    
    
    
    
    
    
    $(function(){
        
        
        
        // console.log($height)
        // console.log($top)
        // console.log($ea)
        
        
        
        // console.log($ul_height)
        
        
        
        
        $.ajax({
            
            url:"../shop1/product/product.json",
            cache:false,
            type:"GET",
            dataType:"JSON",
            success:function($a,$b){
                
                //  console.log($a)
                $.fn.product($a)
            }
            
            
        })
        
        
        $.fn.product=function($data){
            // console.log($data["flat_product"])
            $.each($data["flat_product"],function($q,$w){
                if($data["flat_product"][$q]["product_dc"]!=""){
                var $money ="<s>"+Number($data["flat_product"][$q]["product_money"]).toLocaleString()+"원"+"</s>"
                }
                else{
                    $money=""
                }
                if($data["flat_product"][$q]["product_dc"]==""){
                    $data["flat_product"][$q]["product_dc"]=$data["flat_product"][$q]["product_money"]
                }
                // console.log($data["flat_product"][$q])
                $("#product_ul").append("<li>\
                <label><img src="+$data["flat_product"][$q]["product_img"]+"></label>\
                <label><b>"+$data["flat_product"][$q]["product_nm"]+"</b></label>\
                <label>"+$data["flat_product"][$q]["product_color"]+"</label>\
                <label>"+$money+"</label>\
                <label>"+Number($data["flat_product"][$q]["product_dc"]).toLocaleString()+"원"+"</label>\
                </li>")
                
            })
            
            var $height =  Math.ceil($("#product_ul>li").eq(0).height())
            var $top =  Number($("#product_ul>li").eq(0).css("marginTop").split("px")[0])
            var $ea = Math.ceil($("#product_ul>li").length/4)
            var $ul_height =(($height+$top)*$ea)+$top
            $("#product_ul").height($ul_height+"px")
            
            
            $("#product_ul>li").bind({
               
               "mouseenter":function(){
                    var $ck = $(this).index()
                    // console.log($ck)
                    $("#product_ul>li:eq("+$ck+")>label").eq(0).css("opacity","0.3")
        },
        "mouseleave":function(){
            var $ck = $(this).index()
            // console.log($ck)
            $("#product_ul>li:eq("+$ck+")>label").eq(0).css("opacity","")
}

    })
            
            
            
            
            
        }
        
       
        
        
    



})