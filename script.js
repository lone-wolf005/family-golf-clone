var cur=document.querySelector("#cursor1");
var bur=document.querySelector("#cursor-blur")
// var cur=document.getElementById('#cursur1');
document.addEventListener("mousemove",function(dets){
    cur.style.left=dets.x+"px";
    cur.style.top=dets.y+"px";
    bur.style.left=dets.x-150+"px";
    bur.style.top=dets.y-150+"px";
})
var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        cur.style.scale=3
        cur.style.border="1.5px solid #fff"
        cur.style.backgroundColor="transparent"
    })
})
h4all.forEach(function(ele){
    ele.addEventListener("mouseleave",function(){
        cur.style.scale=1
        cur.style.border="0px solid #95C11E"
        cur.style.backgroundColor="#95C11E"
    })
})
var h3all=document.querySelectorAll("#f1 h3");
h3all.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        cur.style.scale=3
        cur.style.border="1.5px solid #fff"
        cur.style.backgroundColor="transparent"
    })
})
h3all.forEach(function(ele){
    ele.addEventListener("mouseleave",function(){
        cur.style.scale=1
        cur.style.border="0px solid #95C11E"
        cur.style.backgroundColor="#95C11E"
    })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // marker:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})
gsap.from("#About-us img,#About-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#About-us",
        scroller:"body",
        start:"top 55%" ,
        end:"top 50%",
        scrub:3,

    }
})
gsap.from("#cards",{
    scale:0.8,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#cards",
        scroller:"body",
        start:"top 70%" ,
        end:"top 65%",
        scrub:3,

    }
})