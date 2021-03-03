gsap.registerPlugin(ScrollTrigger);

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
              end: "+=" + (innerHeight * 5),
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
              end: "+=" + (innerHeight * 5.5),
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
