// Tarika1
// gsap.from(".st", {
//     stagger: .2,
//     x: 30,
//     opacity: 0,
//     duration: 1,
//     ease: "Expo.easeInOut"

// })
// gsap.from("#main h1", {
//     stagger: .2,
//     y: 30,
//     opacity: 0,
//     delay: 1,
//     duration: 1,
//     ease: "Expo.easeInOut"


// smart way-->agar animation ek line ke baad dusri line pe chaiye hai toh 
// mtlb umne ek route decide kiya h jisko hum kehte hai timeline

var tl = gsap.timeline();

tl.from(".st", {
        stagger: .2,
        x: 30,
        opacity: 0,
        duration: 1,
        ease: "Expo.easeInOut"

    })
    .from("#main h1", {
        stagger: .2,
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "Expo.easeInOut"
    }, "-=.7")
    .to("#overlay", {
        width: "100%",
        duration: "2",
        ease: "Expo.easeInOut",
    })
    .to("#overlay", {
        width: "0%",
        duration: "2",
        ease: "Expo.easeInOut",
    })






// first video 
// straight up gsap animation
// suruwati form ya initial state jb btana ho tb hum use krenge "From" 
// (phli cheez element(jispe animation lgna hai) hogi aur 
// dusri cheez object(object mtlb aap kya kya value change krna chahte ho) 
// jaise yh properties hui duration,color,ease..)


// gsap.from("h1", {
//     duration: 2,
//     color: "red",
//     scale: .2,
//     ease: Expo.easeInOut()
// })


//timeline creation
//scroll based animation