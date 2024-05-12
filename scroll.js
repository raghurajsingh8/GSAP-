// // delay ya time line use krne pr user ke scroll liye bina hi animation ho jayega isliye user ke samne anime ho isliye scroll use kreneg
//  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
// gsap.from("#page1 #box",{
//     // scale:0,
//     delay:1,
//     duration:2,
//     rotation:360,


// }) 

// gsap.from("#page2 #box",{
//     scale:0,
//     // delay:1,
//     duration:2,
//     // rotation:360,
//     scrollTrigger:"#page2 #box"
    

// }) 

// gsap.from("#page3 #box",{
//     scale:0,
//     // delay:1,
//     duration:2,
//     rotation:360,
//     scrollTrigger:{
//         trigger:"#page3 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"


//     }

// }) 

// gsap.from("#page2 h1 ",{
//     opacity:0,
//     x:150,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }


// })
// gsap.from("#page2 h2 ",{
//     opacity:0,
//     x:-150,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }





gsap.from("#page2 #box",{
    scale:0,
    opacity:0,
    duration:11,
    rotation:360,
    borderRadius:"50%",
    scrollTrigger: {
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:1,
    },
})


// why my scrub and trigger not work
// it may be because of wrong syntax or wrong value of start and end prop. 
// also make sure to include the correct path of the element in the trigger prop. 
// and also make sure to include the correct value of scroller prop. 
