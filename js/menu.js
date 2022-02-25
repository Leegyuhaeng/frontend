let dt
function ajax(){


    function ck(){
        if(window.XMLHttpRequest){
            return new XMLHttpRequest()
        }
}

function go(){

if(dt.readyState==XMLHttpRequest.DONE&&dt.status==200){

    // console.log(this.response)
    abc(this.response)
}

}



dt=ck()
dt.onreadystatechange = go
dt.open("GET","../shop1/menu/menu.json",true)
dt.send()
}
ajax()

function abc(dta){

var data = JSON.parse(dta)

// console.log(data)

var menu = document.getElementById("menu2")
var ul = document.createElement("ul")
var ol = document.createElement("ol")

menu.appendChild(ul)
menu.appendChild(ol)
data.forEach(function(a,b,c){
    
    var li = document.createElement("li")
    // console.log(a["menus"])
    // console.log(b)
    if(b<6){
        li.textContent=a["menus"]
        ul.appendChild(li)
       
       
 }

 else{


li.textContent=a["menus"]
ol.appendChild(li)
 }


 if(data[b]["cate"]!=""){
    var ol2 = document.createElement("ol")
    menu.children[0].children[b].appendChild(ol2)
    ol2.setAttribute("id","menu_box"+b)
    
    // console.log(data[b]["cate"].length)
    
    data[2]["cate"].forEach(function(q,w,e){
           
        var li2 = document.createElement("li")
                
         if(w<data[b]["cate"].length){
    document.getElementById("menu_box"+b).appendChild(li2)
    li2.textContent=data[b]["cate"][w]
}
             
    })
 }
 



})



}




$(function(){

    $("#menu2>ul>li").bind({

        "mouseenter":function abc(){
            var $a = $(this).index()
            $("#menu2>ul>li:eq("+$a+")>ol").eq(0).stop().slideDown(100)
        
        },
        "mouseleave":function bbb(){
            var $a = $(this).index()
            $("#menu2>ul>li:eq("+$a+")>ol").eq(0).stop().slideUp(100)
           
        }

    })

})