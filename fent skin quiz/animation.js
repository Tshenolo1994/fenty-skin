gsap.registerPlugin(ScrollTrigger);

gsap.from(".info, .btn-start", {
    duration:1,
      y: -100, 
      delay:1,
      ease:"slow",
      opacity: 1,
        opacity:0,
     duration:1.3,
     stagger:.5
      
    
    });

   