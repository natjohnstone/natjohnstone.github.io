gsap.registerPlugin(ScrollTrigger);

let speachContent = document.querySelector('.speach-container');

const initalText = document.querySelector('.feet-text-container');
initalText.style.display = 'none';

if (navigator.appVersion.indexOf("Win") !== -1) {
  // because of scroll bars in windows
  const feetImg = [...document.querySelectorAll('.feet-img')];
  feetImg.forEach(fImg => fImg.style.marginLeft = '-15px');
}

displaySpeachText = (speachObj) => {
  speachContent.style.display = 'block';
  speachObj.style.display = 'block';
  const img = speachObj.querySelector('img');
  img.style.opacity = "1";
};

hideSpeachOnEnd = () => {
  speachContent.style.display = 'none';
};


showSpeachOnChangeDirection = (speachObj) => {
  speachContent.style.display = 'block';
  speachObj.style.display = 'block';
};

const speach = [...document.querySelectorAll('.speach')];

speach.forEach((comment, i) => {
  const img = comment.querySelector('img')
  gsap.to(img, { opacity: 0 })
  gsap.to(".head-viewer", {
    scrollTrigger: {
      trigger: ".head-section",
      start: "top top",
      end: "+=" + (innerHeight * 7),
      pin: true,
      scrub: true
    }
  })
  ScrollTrigger.create({
    trigger: comment,
    x: 50,
    start: "bottom bottom",
    end: () => `+=${innerHeight * 1.3}`,
    pin: true,
    onEnter: () => {
      displaySpeachText(comment);
    },
    onLeave: () => { hideSpeachOnEnd(comment) },
    onUpdate: (self) => {
      if (self.direction === -1) {
        showSpeachOnChangeDirection(comment)
      }

    }
  })
});


let feetContent = document.querySelector('.feet-content');

displayFeetAndText = (footObj) => {
  feetContent.style.display = 'block';
  const img = footObj.querySelector('img');
  const div = footObj.querySelector('div');
  img.style.opacity = "1";
  div.style.display = "block";
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
      end: "+=" + (innerHeight * 7),
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
      displayFeetAndText(foot);
    },
    onEnterBack: () => {
      displayFeetAndText(foot);
    },
    onLeave: () => {
      hideOnEnd(foot)
    },
    onLeaveBack: () => {
      hideOnEnd(foot);
    },
    onUpdate: (self) => {
      if (self.direction == -1) {
        showOnChangeDirection(foot)
      }

    }
  })
});
