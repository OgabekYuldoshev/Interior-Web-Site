gsap.from("#infoSocial", {
    duration:2,
    ease: "elastic.out(1, 0.3)",
    y:-100
});
gsap.from(".mainText", {
    duration: 2,
   fontSize: '5vh',
   opacity:0
})

gsap.from('.img',{
    scrollTrigger:{
        trigger:'.img',
      
        start:"top 70%"
 
    },
duration: 2,
opacity:0,
    x:500 
   
});
gsap.from('.whyUs',{
    scrollTrigger:{
        trigger:'.whyUs',
        start:"top 70%"
 
    },
duration: 2,
opacity:0,
    x:-500 
   
});