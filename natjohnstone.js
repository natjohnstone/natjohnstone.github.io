
TweenLite.set('#mundauf', {autoAlpha:0});
TweenMax.set("#charly, #text", {xPercent:-50, yPercent:-50});


TweenLite.set('#scrollDistance',{height:5000});

var natjohnstone = new TimelineMax({paused:true})
// .to('#charly',3,{x:400, ease: Bounce.easeOut})
// .to("#mundzu",1, {morphSVG:"#mundauf",repeat:11,yoyo:true},"label2")
// .to("#zaehne",1, {rotation:-10, transformOrigin:"center top", y:-10, repeat:11, yoyo:true}, "label2")
.staggerTo('#text h1',0.2,{autoAlpha:1},3,"label2")
.staggerTo('#text h1',0.2,{autoAlpha:0},3,"label2+=3")

// .to('#charly',1,{rotationY:40, transformOrigin:"center", repeat:1,yoyo:true},"label3")

// .to('#charly',1,{scaleY:1.2, transformOrigin:"bottom"},"+=3")
// .to('#charly',2,{x:2000, transformOrigin:"bottom"})

.to('#wrapper',0,{position:'relative'})
//.to('body',0,{height:5000})
.to('#scrollDistance',0,{cursor:'auto'})
.to('main',0,{autoAlpha:1})


// === scrolling sync =========================
var lastScrollTop = 0;

$('#scroll').scroll(function(e) {
  var scrollNum = $('#scroll').scrollTop();
  scrollPercent = $('#scroll').scrollTop() / ($('#scrollDistance').height() - $('#scroll').height());
  
var progressCharly = scrollPercent*1; 
  
  if (scrollNum > lastScrollTop) {  // downscroll
    TweenLite.to(natjohnstone, 1, {progress:progressCharly, ease: Sine.easeOut});
  } else {    //upscroll
    TweenLite.to(natjohnstone, 1, {progress:progressCharly, ease: Sine.easeOut});
  }
  
  lastScrollTop = scrollNum;
  
});
