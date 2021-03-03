gsap.registerPlugin(ScrollTrigger);

// var frame_count  = 9,
//     offset_value = 211;

// gsap.to(".viewer", {
//   backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
//   ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
//   scrollTrigger: {
//     trigger: ".scene",
//     start: "top top",
//     end: "+=" + (frame_count * offset_value),
//     pin: true,
//     scrub: true
//   }
// });

gsap.timeline({
    scrollTrigger: {
        trigger: ".head-section",
        start: "top top",
        end: "top top",
        onEnter: () => {
            console.log('test')
        },
        onLeave: () => {
            console.log('test2')
        },
        onUpdate: self => console.log("direction:", self.direction)
    }
  })


hideInitialSpeachImage = () => {
    const initalText = document.querySelector('.speach-img-container');
    initalText.style.display = 'none';

};

let speachContent = document.querySelector('.speach-container');

displaySpeachText = (speachObj) => {
    speachContent.style.display = 'block';
    speachObj.style.display = 'block';
    const img = speachObj.querySelector('img');
    img.style.opacity = "1";
};

hideSpeachOnEnd = (speachObj) => {
    //speachContent.style.display = 'none';
    //speachObj.style.opacity = '0';
};

const speach = [...document.querySelectorAll('.speach')];

speach.forEach((comment, i) => {
	const img = comment.querySelector('img')
	gsap.to(img, { opacity: 0 })
	gsap.to(".head-viewer", {
            scrollTrigger: {
              trigger: ".head-section",
              start: "top top",
              end: "+=" + (innerHeight * 4),
              pin: true,
              scrub: true
            }
          })
	ScrollTrigger.create({
        trigger: comment,
        x: 50,
        start: "bottom bottom",
        end: () => `+=${innerHeight}`,
        pin: true,
        onEnter: () => {
            console.log('sdsd')
            hideInitialSpeachImage();
            displaySpeachText(comment);
        },
        onLeave: () => { hideSpeachOnEnd(comment)},
	})
});


hideInitialtext = () => {
    const initalText = document.querySelector('.initial-text');
    initalText.style.display = 'none';
};

let feetContent = document.querySelector('.feet-content');

displayFeetAndText = (footObj) => {
    feetContent.style.display = 'block';
    const img = footObj.querySelector('img');
    img.style.opacity = "1";
};

hideOnEnd = (footObj) => {
    feetContent.style.display = 'none';
    footObj.style.display = 'none';
};

showOnChangeDirection = (footObj) => {
    feetContent.style.display = 'block';
    footObj.style.display = 'block';
};


const feet = [...document.querySelectorAll('.feet-img-container')];

feet.forEach((foot, i) => {
	const img = foot.querySelector('img')
	gsap.to(img, { opacity: 0 })
	gsap.to(".body-viewer", {
            scrollTrigger: {
              trigger: ".body-section",
              start: "top top",
              end: "+=" + (innerHeight * 5),
              pin: true,
              scrub: true
            }
          })
	ScrollTrigger.create({
        trigger: foot,
        x: 50,
        start: "top top",
        end: () => `+=${innerHeight}`,
        pin: true,
        onEnter: () => {
            hideInitialtext();
            displayFeetAndText(foot);
        },
        onEnterBack: () => { 
            hideInitialtext();
            displayFeetAndText(foot); 
        },
        onLeave: () => { 
            hideOnEnd(foot)
        },
        onLeaveBack: () => { hideOnEnd(foot); },
        onUpdate: () => {
            if (self.direction == -1) {
                showOnChangeDirection(foot)
            }
            
        }
    })
});
