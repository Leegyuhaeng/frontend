$(function(){
    var $width = $(window).width()
    var $height = $("#roule_bk>img").height()
    console.log($width)
    console.log($height)
    $("#outline").css("height",$height+"px")





    let $data = ["500포인트","5000포인트","꽝 다음기회에","3000포인트","2000포인트","1000포인트"]
    var $r = 0
    var $count =0
    $.fn.ccc=function(){
    $("#gamebtn").click(function(){
        if($count<3){
        var $random = Math.ceil(Math.random()*360);
        $r = $r + 1800
        var $msg = $.fn.rotate($r,$random)
        console.log($data[$msg])
            
        $("#msg").slideUp(800)
        $count++
        $(this).unbind("click")
        setTimeout(function(){
            $("#msg").slideDown(800)
            $("#msg").html("<span id='close' class='close'>X</span>"+$data[$msg])
            $("#close").click(function(){
                $("#msg").slideUp(800)
            })
            $.fn.ccc()
        },5500)
        
    }
    else{
        alert("오늘 기회를 다사용하셨습니다")
    }
    })
}
$.fn.ccc()

    $.fn.rotate = function($r,$random){
        var $node = 0 
        
        
        
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
      
        $("#gameboard").css("transform","rotate("+$rotate+"deg)")
        return $node

    }
})