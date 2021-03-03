$(function () { 
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.timeline({
        scrollTrigger: {
            trigger: '.head-img',
            start: "center center",
            end: "bottom top",
            scrub: true,
            pin: true
        }
    })
    gsap.timeline({
        scrollTrigger: {
            trigger: '.speach-img-container',
            start: "top center",
            end: "bottom top",
            scrub: true,
            pin: true
        }
    })

    
    var offset = innerHeight * 0.61;
    gsap.timeline({
        scrollTrigger: {
        trigger: ".text1",
        start: "-" + offset, 
        end: "+=200",
        pin: true,
        pinSpacing: true,
        toggleClass: 'visable',
        }
    });
    gsap.timeline({
        scrollTrigger: {
        trigger: ".text2",
        start: "-" + offset, 
        end: "+=200",  
        pin: true,
        toggleClass: 'visable',
        }
    })
    gsap.timeline({
        scrollTrigger: {
        trigger: ".text3",
        start: "-" + offset, 
        end: "+=250",
        pin: true,
        toggleClass: 'visable',
        }
    });


    // BODY TIMELINES...

    gsap.timeline({
        scrollTrigger: {
            trigger: '.body-section',
            start: "center center",
            end: () => `+=${innerHeight * 5}`,
            scrub: true,
            pin: true,
            marker: true
        }
    });


    gsap.timeline({
        scrollTrigger: {
        trigger: ".feet1",
        start: "-" + innerHeight, 
        end: "+=200",
        pin: true,
        toggleClass: 'visable',
        
        }
    });
    gsap.timeline({
        scrollTrigger: {
        trigger: ".feet2",
        start: "-" + innerHeight, 
        end: "+=200",  
        pin: true,
        toggleClass: 'visable',
        }
    })

    // gsap.timeline({
    //     scrollTrigger: {
    //     trigger: ".feet1",
    //     start: "top top", 
    //     end: () => `+=${innerHeight}`,
    //     // pin: true,
    //     toggleClass: 'hidden',
    //     marker: true
    //     }
    // });

    // gsap.timeline({
    //     scrollTrigger: {
    //     trigger: ".feet2",
    //     start: "top top",
    //     end: () => `+=${innerHeight}`,
    //     // pin: true,
    //     toggleClass: 'hidden',
    //     marker: true
    //     }
    // });

    // gsap.timeline({
    //     scrollTrigger: {
    //     trigger: ".feet3",
    //     start: "top top",
    //     end: () => `+=${innerHeight}`,
    //     // pin: true,
    //     toggleClass: 'hidden',
    //     marker: true
    //     }
    // });

    // gsap.timeline({
    //     scrollTrigger: {
    //     trigger: ".feet4",
    //     start: "top top",
    //     end: () => `+=${innerHeight}`,
    //     // pin: true,
    //     toggleClass: 'hidden',
    //     marker: true
    //     }
    // });
});