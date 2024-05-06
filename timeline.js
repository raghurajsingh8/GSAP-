// by manually calculation

gsap.to("#box1",{
    x:500,
    rotate:360,
    duration:1.5,
    delay:1,
     
})
gsap.to("#box2",{
    x:500,
    rotate:360,
    duration:1.5,
    delay:2.5
})
gsap.to("#box3",{
    x:500,
    rotate:360,
    duration:1.5,
    delay:4
})


// using fun
var t1=gsap.timeline()

t1.to("#box4",{
    delay:1,
    x:500,
    rotate:360,
    duration:1.5,
    backgroundColor:"purple",
})
t1.to("#box5",{
    x:500,
    rotate:360,
    duration:1.5,
    backgroundColor:"yellow",

})
t1.to("#box6",{
    x:500,
    rotate:360,
    backgroundColor:"red",

    duration:1.5,
})
