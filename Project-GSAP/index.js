function cursorEffect(){

let cursor = document.querySelector(".cursor");
let container1 = document.querySelector(".container1")
container1.addEventListener("mousemove",(event)=>{
    gsap.to(cursor,{
        x:event.x,
        y:event.y
    })
})

container1.addEventListener("mouseenter",(event)=>{
    gsap.to(cursor,{
        scale:1,
        duration:0.3
    })
})

container1.addEventListener("mouseleave",(event)=>{
    gsap.to(cursor,{
        scale:0,
        duration:0.3
    })
})
}
cursorEffect();

function lineEffect(){

let containe2Items = document.querySelectorAll(".container2 li")

gsap.from('.container2 li',{
    y:10,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:".container2",
        start:"top 60%",
        end:"top 10%",
        scrub:1
    }
})

}
lineEffect();


//container 3 animations


function overlayfunc(){
let overlay = document.querySelectorAll(".projects>div")

for(let overlays of overlay){

overlays.addEventListener("mouseenter",()=>{
    let el = overlays.querySelector(".overlay")
    gsap.to(el,{
        scale:1,
        duration:0.6,
        ease:"expo.out"
    })
})
overlays.addEventListener("mouseleave",()=>{
    let el = overlays.querySelector(".overlay")
    gsap.to(el,{
        scale:0,
        duration:0.6
    })
})
}
}
overlayfunc()

gsap.from('.projects div',{
    y:500,
    duration:0.8,
    delay:5,
    stagger:0.1,
    scrollTrigger:{
        trigger:".projects",
        start:"top 60%",
        end:"top 20%",
        scrub:true
    }
})




//svg animation

let string = document.querySelector(".string");
let finalpath = "M0 100 Q 250 100 990 100";

string.addEventListener("mousemove", (event) => {
    const rect = string.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    let path = `M0 100 Q ${x} ${y} 990 100`;

    gsap.to(".string path", {
        attr: { d: path },
        duration: 0.1
    });
});

string.addEventListener("mouseleave", () => {
    gsap.to(".string path", {
        attr: { d: finalpath },
        ease: "bounce"
    });
});

let thankyoutext = document.querySelector(".container4animate")

gsap.from(thankyoutext,{
    color:"black",
    delay:0.4,
    duration:1,
    scrollTrigger:{
        trigger:'.container4',
        start:'top 80%',
        end:'top 60%',
        scrub:true
    }
})
