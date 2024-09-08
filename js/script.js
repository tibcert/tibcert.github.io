gsap.registerPlugin(ScrollTrigger);
gsap.from("#logo",{
    delay:0.2,
    opacity:0,
    duration:.6,
    y:20,
	}  
)
gsap.from(".title-line",{
    delay:1,
    opacity:0,
    duration:.5,
    y:20,
 
	}  
)

let heading = document.querySelectorAll(".heading");

heading.forEach((element) => {
    gsap.from(element,{
        scrollTrigger:{
            trigger:element,
            toggleActions: "restart none restart none",
            //              onEnter  onleave onEnter onLeaveBack   values: restart/pause/reverse/none
        },
        delay:.5,
        duration:.7,
        y:20,
        opacity:0,
    })
});


