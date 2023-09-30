function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locomotiveAnimation()

function navbarAnimation() {
    gsap.to("#nav-part1 svg",{
        transform: "translateY(-100%)",
        ScrollTrigger:{
            trigger:"#page1",
            scroller: "#main",
            start:"top 0",
            end:"top -5%",
            scrub: true,
        },
    
    });
    
    gsap.to("#nav-part2 #links",{
        transform: "translateY(-100%)",
        opacity:0,
        ScrollTrigger:{
            trigger:"#page1",
            scroller: "#main",
            start:"top 0",
            end:"top -5%",
            scrub: true,
        },
    
    });
}

// navbarAnimation()


// using normal function
// var videocon = document.querySelector("#video-container")
// var playbtn = document.querySelector("#play")
// videocon.addEventListener("mouseover", function(){
//     playbtn.style.opacity = 1
//     playbtn.style.scale = 1
// })
// var playbtn = document.querySelector("#play")
// videocon.addEventListener("mouseleave", function(){
//     playbtn.style.opacity = 0
//     playbtn.style.scale = 0
// })



// for smooth scrolling and a smooth scroll bar 

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });





// using gsap
function videoconAnimation(){
    var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseover", function(){
    gsap.to(playbtn,{
        scale: 1,
        opacity:0.4
    })
})
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn,{
        scale: 0,
        opacity:0
    })
})

videocon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn, {
        left: dets.x-48,
        top:dets.y-36
    })
})
}

videoconAnimation()


// code for loading animaion 

// Select the target elements for the animation using a CSS selector.
// In this case, it selects all <h1> elements that are descendants of the element with the ID "page1."
function loadinganimation(){
    gsap.from("#page1 h1", {
        y: 100,               // Move the elements 100 pixels vertically during the animation.
        opacity: 0,          // Start with an initial opacity of 0 (invisible).
        delay: 0.5,          // Delay the animation by 0.5 seconds before it starts.
        duration: 0.9,       // Set the animation duration to 0.9 seconds.
        stagger: 0.3         // Stagger the animation of each element by 0.4 seconds.
    });

    gsap.from("#page1 #video-container", {
        // y: 100,               // Move the elements 100 pixels vertically during the animation.
        scale: 0.9,
        opacity: 0,          // Start with an initial opacity of 0 (invisible).
        delay: 1.3,          // Delay the animation by 0.5 seconds before it starts.
        duration: 0.5,       // Set the animation duration to 0.9 seconds.
    });
}

loadinganimation();








function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor",{
            left: dets.x,
            top: dets.y
        })
    })

    // document.querySelector("#child1").addEventListener("mouseenter", function(){
//     gsap.to("#cursor",{
//         transform: 'translate(-50%, -50%) scale(1)'
//     })
// })

// document.querySelector("#child1").addEventListener("mouseleave", function(){
//     gsap.to("#cursor",{
//         transform: 'translate(-50%, -50%) scale(0)'
//     })
// })
    
    document.querySelectorAll(".child").forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            gsap.to("#cursor", {
                transform: 'translate(-50%, -50%) scale(1)'
            })
        })
        elem.addEventListener("mouseleave", function(){
            gsap.to("#cursor", {
                transform: 'translate(-50%, -50%) scale(0)'
            })
        })
    })
}

cursorAnimation()



















