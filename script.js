var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-250+"px"
    blur.style.top = dets.y-250+"px"
})

var h4all= document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        // scrub:true,
        scrub:1,       //11 and 12 line are same, 12th line is just telling the time it will take but 11th line is telling it will definitely happen at 0 second.
        //scrub is use for timing  //means kitna samay lagega effect change hone me

    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:1,
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"#body",
        markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"#body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"#body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})