gsap.registerPlugin(ScrollTrigger);

const hw = gsap.timeline({
  scrollTrigger: {
    trigger: '.hardware',
    start: 'top top',
    end: '+=5000',
    scrub: 1,
    pin: true,
  },
});

hw.fromTo('.hardware01', { x: 0 }, { x: -1614 });
hw.fromTo('.hardware02', { x: 1614 }, { x: 0 });
hw.fromTo('.hardware02', { x: 0 }, { x: -1614 });
hw.fromTo('.hardware03_gray', { x: 3228 }, { x: 0 });
