$(function(){
    let $data = ["500포인트","5000포인트","꽝 다음기회에","3000포인트","2000포인트","1000포인트"]
    
    var $r = 0 
    var $count = 0
    $.fn.ccc=function(){
    $("#btn").click(function(){
        if($count<3){
        $r=$r+1800
        var $random = Math.ceil(Math.random()*360)
        var $go= $.fn.bbb($r,$random)

        $("#msg").slideUp(800)
       $(this).unbind("click")
        setTimeout(function(){
            $("#msg").slideDown(800)
            $("#msg").html("<span id='close' class='close'>X</span>"+$data[$go])
            $("#close").click(function(){
                $("#msg").slideUp(800)
            })
            $.fn.ccc()
        },5500)

        
        
        $count++
    }
    else{
        alert("오늘 룰렛을 다사용하셨습니다")
    }
    })


   




}

$.fn.ccc()



})

$.fn.bbb=function($r,$random){
    var $node
    
   
    if($random >=0 && $random <= 59){
        $node = 0;
    }
    else if($random >= 60 && $random <= 119){
        $node = 1;
    }
    else if($random >= 180 && $random <= 239){
        $node = 3;
    }
    else if($random >= 240 && $random <= 299){
        $node = 4;
    }
    else if($random >= 300 && $random <= 359){
        $node = 5;
    }
    else {
        $node = 2;
     
    }

    
    
    
    var $rotate = $r+$random
    $("#roule_bord").css("transform","rotate("+$rotate+"deg)")
return $node
}