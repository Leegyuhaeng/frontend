var $w = 0
$(function(){
    
    var $timer


    $.ajax({

        url:"./banner/banner.json",
        cache:false,
        type:"GET",
        dataType:"JSON",
        success:function($a,$b){
            // console.log($a)
          $.fn.bbb($a)


        }
        
        
    })
    
    $.fn.bbb = function($data){
        
        
        
        $.each($data["banners"],function($a,$b){
            
            // console.log($b)
            
            $("#banner").append("<label id ='bannerbox"+$a+"'><span>\
            <img src='"+$data["banners"][$a][0]+"'>\
            </span>\
            <div>\
            <ul id='ulbox"+$a+"'>\
            </ul>\
            </div></label>\
            ")
            
            $("#ulbox"+$a).html("<li>"+$data["banners"][$a][1]+"</li>\
            <li>"+$data["banners"][$a][2]+"</li>\
            <li>"+$data["banners"][$a][3]+"</li>\
            <li>VIEW DETAIL</li>")
            
        })

        $("#banner").append("<ol id='olbox' class='olbox'><li>"+$data['banners'][0][4]+"</li>\
        <li>"+$data['banners'][1][4]+"</li>\
        <li>"+$data['banners'][2][4]+"</li>\
        </ol>")


        var $e = 0 
        var $t = $("#ulbox0>li").length-1
        // console.log($t)
        
        while($e<$t){
            
            $("#ulbox"+$w+">li").eq($e).delay(500*$e).animate({
                left: "60px",
                opacity:1
            },500)
            $e++
        }
        
        
        
        $timer = setTimeout($.fn.ccc,8000)
        
   
     
        $("#olbox>li").click(function(){
            clearTimeout($timer)
            var $ck = $(this).index()
            if($ck!=$w){

                $("#olbox>li").css("backgroundColor","#ffffff")
                $("#olbox>li").css("borderColor","#f2f2f2")
                $("#olbox>li").eq($ck).css("backgroundColor","#f2f2f2")
                $("#olbox>li").eq($ck).css("borderColor","#ffffff")
    
                $("#bannerbox"+$w).stop().fadeOut(500)
                $("#bannerbox"+$ck).stop().fadeIn(500)
             
              
               $w = $ck
           
              $.fn.ddd($ck)
            }
      
        })
        
    }
    
      
    
    
    var $time
    
    $.fn.ccc=function(){
        // console.log($w)
      clearTimeout($time)   
        var $t = $("#ulbox0>li").length-1
        var $e = 0 
        var $y = 0

        $("#bannerbox"+$w).stop().fadeOut(500)
        $("#olbox>li").css("backgroundColor","#ffffff")
        $("#olbox>li").css("borderColor","#f2f2f2")
        $w++
        if($w>=$("#banner>label").length){
            $w=0
        }
        
        while($e<$t){
            $("#ulbox"+$w+">li").eq($e).css("left","-50px")
            $("#ulbox"+$w+">li").eq($e).css("opacity","0")
    
            $e++
        }
    
        $("#olbox>li").eq($w).css("backgroundColor","#f2f2f2")
        $("#olbox>li").eq($w).css("borderColor","#ffffff")
        $("#bannerbox"+$w).stop().fadeIn(1000,function(){
            while($y<$t){
    
                $("#ulbox"+$w+">li").eq($y).delay(500*$y).animate({
                    left: 60+"px",
                    opacity:1
                },500)
                $y++
            }
        })

    
    
    $time = setTimeout($.fn.ccc,8000)
    
 
    
    }
    var $tt
 
    $.fn.ddd = function($ck){
        
        clearTimeout($tt)
        clearTimeout($time)
        
        var $t = $("#ulbox0>li").length-1
        
        var $e = 0 
        var $y = 0
        while($e<$t){
   
            $("#ulbox"+$ck+">li").eq($e).css("left","-50px")
            $("#ulbox"+$ck+">li").eq($e).css("opacity","0")
    
            $e++
        }
            
     
        
    
            while($y<$t){
                
                $("#ulbox"+$ck+">li").eq($y).delay(500*$y).animate({
                    left: 60+"px",
                    opacity:1
                },500)
                $y++
            }
            
     
        
        
        
        $tt = setTimeout($.fn.ccc,8000)   
    }


 
})
