// delay ya time line use krne pr user ke scroll liye bina hi animation ho jayega isliye user ke samne anime ho isliye scroll use kreneg
// cdn <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotation:360,


}) 

gsap.from("#page2 #box",{
    scale:0,
    // delay:1,
    duration:2,
    rotation:360,
    scrollTrigger:"#page2 #box"
    

}) 

gsap.from("#page3 #box",{
    scale:0,
    // delay:1,
    duration:2,
    rotation:360,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true,
        start:"top 60%"


    }

}) 