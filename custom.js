// --------------------------------- menu page

const menuIcon = document.querySelector('.menu_icon');
const menuPage = document.querySelector('.menu');
const menuClose = document.querySelector('.close');

menuIcon.addEventListener('click', function () {
  menuPage.style.display = 'block';
});

menuClose.addEventListener('click', function () {
  menuPage.style.display = 'none';
});

// --------------------------------- hero page effect

window.scrollTo(0, 0);

// ScrollTrigger.saveStyles(".mobile, .desktop");

// ScrollTrigger.matchMedia({
//   "(min-width: 1600px)": function () {

var hero = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom center',
    pin: true,
    markers: true,
    scrub: true,
    toggleActions: 'play none restart none', // 기본값 (onEnter, onLeave, OnEnterBack, onLeaveBack)
    ease: 'easeOutBack',

    // snap: {
    //     snapTo: "labels", // snap to the closest label in the timeline
    //     duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //     ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
  },
});
hero.fromTo(
  '.play > img:nth-child(1)',
  { x: -1125 },
  { x: -53, duration: 10 },
  0
);

hero.fromTo('.play > img:nth-child(2)', { x: -810 }, { x: 0, duration: 10 }, 0);
hero.fromTo('.play > img:nth-child(3)', { x: 1910 }, { x: 0, duration: 10 }, 0);
hero.fromTo('.play > img:nth-child(4)', { x: 3300 }, { x: 0, duration: 10 }, 0);
hero.fromTo('.anywhere, .aw_line', { x: 1609 }, { x: 0, duration: 15 }, 3);
hero.fromTo('.anytime, .at_line', { x: 1800 }, { x: 0, duration: 15 }, 5);
hero.fromTo(
  '.hcenter',
  { width: 800, height: 28 },
  { width: 84, height: 28, duration: 15 },
  5
);
hero.fromTo(
  '.etop, .ecenter',
  { width: 800, height: 28 },
  { width: 81, height: 28, duration: 15 },
  7
);
hero.fromTo(
  '.ebtm',
  { width: 800, height: 16 },
  { width: 81, height: 16, duration: 15 },
  7
);
hero.fromTo(
  '.s_mario, .cap, .main_text, .hero > img, .icon > img:nth-child(2)',
  { y: 1080 },
  { y: 0, duration: 6 },
  0
);
// icon
hero.fromTo('.icon > img:nth-child(1)', { y: -150 }, { y: 0, duration: 4 }, 0);
hero.fromTo('.icon > img:nth-child(3)', { x: -600 }, { x: 0, duration: 2 }, 0);
hero.fromTo('.icon > img:nth-child(4)', { y: -400 }, { y: 0, duration: 2 }, 0);
hero.fromTo(
  '.icon > img:nth-child(5), .icon > img:nth-child(6)',
  { y: 1300 },
  { y: 0, duration: 2 },
  0
);
// outro page effect

// --------------------------------- hardware page horizontal scroll

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray('.hw');

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.hardware',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // snap: {
    //   snapTo: 1 / (sections.length - 1),
    //   duration: 0.1,
    //   delay: 0.1,
    //   ease: 'power1.inOut',
    // },
    end: () => '+=' + document.querySelector('.hardware').offsetWidth,
  },
});

gsap.fromTo(
  '.OLED_mask', // 선택자를 해당 섹션에 맞게 변경
  { scale: 0, x: 100 }, // 시작 스타일
  {
    scale: 1,
    x: 0,
    duration: 1,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: '.hardware01',
      // start: '+=100',
      toggleActions: 'play none',
    },
  } // 종료 스타일
);

// --------------------------------------------- hw03 click event -> color change

const colorPicks = document.querySelectorAll('.pickcolor > *');
const liteImage = document.querySelector('.lite_gray');
const circles = document.querySelectorAll('.hardware03_gray > .circles > *');
const ntdColors = document.querySelectorAll('#Nintendo', '#Nintendo_s');
const swtColors = document.querySelectorAll('#Switch', '#Switch_s');
const idColor = document.querySelector('#or03');

colorPicks.forEach(function (colorPick) {
  colorPick.addEventListener('click', function () {
    const currentSelected = document.getElementById('selected');
    if (currentSelected) {
      currentSelected.removeAttribute('id');
    }

    // 클릭한 대상에 selected 클래스 추가
    colorPick.id = 'selected';

    var colorClassName = colorPick.className;

    var newImagePath = 'img/hardware/lite_' + colorClassName + '.svg';

    liteImage.src = newImagePath;

    circles.forEach(function (circle, index) {
      var newCirclePath =
        'img/hardware/circle_' + colorClassName + '0' + (index + 1) + '.svg';
      circle.src = newCirclePath;
    });

    var newIdPath = 'img/hardware/or03_' + colorClassName + '.svg';

    idColor.src = newIdPath;

    // Nintendo와 Switch의 color 속성 변경
    ntdColors.forEach(function (element) {
      switch (colorClassName) {
        case 'gray':
          element.style.color = '#4D4D4D';
          break;
        case 'yellow':
          element.style.color = '#F0AD00';
          break;
        case 'pink':
          element.style.color = '#FF3B4A';
          break;
        case 'blue':
          element.style.color = '#072385';
          break;
        case 'cyan':
          element.style.color = '#00B4B7';
          break;
        default:
          element.style.color = '#4D4D4D';
      }
    });

    swtColors.forEach(function (element) {
      switch (colorClassName) {
        case 'gray':
          element.style.color = '#4D4D4D';
          break;
        case 'yellow':
          element.style.color = '#F0AD00';
          break;
        case 'pink':
          element.style.color = '#FF3B4A';
          break;
        case 'blue':
          element.style.color = '#072385';
          break;
        case 'cyan':
          element.style.color = '#00B4B7';
          break;
        default:
          element.style.color = '#4D4D4D';
      }
    });
  });
});

// -------------------------------------------------- main01 scroll

gsap.registerPlugin(ScrollTrigger);

const main01 = gsap.timeline({
  scrollTrigger: {
    trigger: '#main01',
    start: 'top 300px',
    end: 'bottom 900px',
    scrub: 1,
  },
});

for (let i = 1; i <= 115; i++) {
  main01.to('#main01', {
    duration: 0.1,
    onUpdate: updateImage,
    onUpdateParams: [i],
  });
}

function updateImage(index) {
  const mainImage = document.getElementById('main01');
  const imagePath = `img/main01/${String(index).padStart(2, '0')}.png`;
  mainImage.src = imagePath;
}

// ------------------------------------------- zelda switch effect

var game = gsap.timeline({
  scrollTrigger: {
    trigger: '.game',
    start: 'top top',
    end: '+=20000',
    // end: "bottom bottom",
    scrub: 1,
    // startTrigger: "#fixedContent",
    pin: true,
    // endStart: "top center",
    ease: 'slow(0.7, 0.7, false)',
  },
});

game.fromTo(
  '.switchImage > .s_right',
  { y: -160 },
  { y: 0, duration: 10, ease: 'slow(0.7, 0.7, false)' },
  0
);

game.fromTo('.switchImage', { scale: 1 }, { scale: 1.1, duration: 10 }, 30);

game.fromTo('.switch_bg', { opacity: 0 }, { opacity: 1, duration: 10 }, 40);

game.fromTo('.select', { opacity: 0 }, { opacity: 1, duration: 10 }, 50);
// game.fromTo(
//   '.switch_bg .thumbnail, .select',
//   { opacity: 1 },
//   { opacity: 0, duration: 10 },
//   40
// );
// game.fromTo(
//   '.switch_bg',
//   { backgroundColor: '#ffffff' },
//   { backgroundColor: 'black', duration: 3 },
//   40
// );
game.fromTo('.zelda_video', { opacity: 0 }, { opacity: 1, duration: 3 }, 60);
game.fromTo('.zelda_logo', { opacity: 0 }, { opacity: 1, duration: 10 });
game.fromTo('.zelda_logo', { opacity: 1 }, { opacity: 0, duration: 10 });
game.fromTo(
  '.switchImage',
  { scale: 1.1 },
  { scale: 2.53, duration: 10, ease: 'slow(0.7, 0.7, false)' },
  90
);
game.fromTo(
  '.switch_bg, .zelda_video',
  { scale: 1 },
  { scale: 2.3, duration: 10, ease: 'slow(0.7, 0.7, false)' },
  90
);

// ----------------------------------------- zelda full page effect -------------------

const zeldaVideo = document.querySelector('.zelda_video');

zeldaVideo.playbackRate = 0.3;

const zeldaRing = document.querySelector('.zelda_cnt > img:nth-child(1)');

gsap.to(zeldaRing, {
  rotateY: 540,
  duration: 0.5,
  repeat: -1, // 무한 반복
  delay: 3, // 시작 딜레이
  repeatDelay: 3, // 반복 사이 딜레이
  ease: 'power1.inOut', // 타이밍 함수 설정
});

game.fromTo('.bg_shadow', { opacity: 0 }, { opacity: 1, duration: 5 }, 130);
game.fromTo(
  '.card > *, .zelda_cnt > img:nth-child(1), .zelda_text, .zelda_id',
  { opacity: 0 },
  { opacity: 1, duration: 5 },
  140
);

game.fromTo(
  '.zelda_cnt .factor',
  { opacity: 0 },
  { opacity: 1, duration: 15 },
  140
);
// --------------------------------------------------- card01 rotate
game.fromTo('.card01', { rotateY: 0 }, { rotateY: 90, duration: 5 }, 160);
game.fromTo(
  '.card01bhd, .card01body, .create, .eyes, .line_c',
  { rotateY: -90 },
  { rotateY: 0, duration: 5 },
  170
);

game.fromTo(
  '.card01bhd, .card01body, .create, .eyes, .line_c',
  { rotateY: 0 },
  { rotateY: 90, duration: 5 },
  190
);
game.fromTo('.card01', { rotateY: -90 }, { rotateY: 0, duration: 5 }, 200);

// --------------------------------------------------- card 위치 변경_1

game.fromTo(
  '.card01',
  { x: 0, y: 0, zIndex: 100, scale: 1 },
  { x: -625, y: 60, zIndex: 0, duration: 10, scale: 0.46 },
  210
);

game.fromTo(
  '.card02',
  { x: 0, y: 0, zIndex: 70, scale: 1 },
  { x: -637, y: -59, zIndex: 120, scale: 2.2, duration: 10 },
  210
);

game.fromTo(
  '.card03',
  { x: 0, zIndex: 10 },
  { x: 1261, zIndex: 0, duration: 10 },
  210
);

// --------------------------------------------------- card02 rotate

game.fromTo('.card02', { rotateY: 0 }, { rotateY: 90, duration: 5 }, 250);
game.fromTo(
  '.card02bhd, .card02body, .explore, .eyes, .line_c',
  { rotateY: -90 },
  { rotateY: 0, duration: 5 },
  260
);

game.fromTo(
  '.card02bhd, .card02body, .explore, .eyes, .line_c',
  { rotateY: 0 },
  { rotateY: 90, duration: 5 },
  290
);
game.fromTo('.card02', { rotateY: -90 }, { rotateY: 0, duration: 5 }, 300);

// -------------------------------------------------- card 위치변경_2

game.fromTo(
  '.card01',
  { x: -625, y: 60, zIndex: 0, scale: 0.46 },
  { x: 632, zIndex: 0, duration: 10 },
  350
);

game.fromTo(
  '.card02',
  { x: -637, y: -59, zIndex: 100, scale: 2.2 },
  { x: -1265, y: 0, scale: 1, zIndex: 10, duration: 10 },
  350
);
game.fromTo(
  '.card03',
  { x: 1261, zIndex: 100 },
  { scale: 2.2, x: 627, y: -55, zIndex: 10000, duration: 10 },
  350
);

// --------------------------------------------------- card03 rotate
game.fromTo('.card03', { rotateY: 0 }, { rotateY: 90, duration: 5 }, 400);
game.fromTo(
  '.card03bhd, .card03body, .discover, .eyes, .line_c',
  { rotateY: -90 },
  { rotateY: 0, duration: 5 },
  410
);

game.fromTo(
  '.card03bhd, .card03body, .discover, .eyes, .line_c',
  { rotateY: 0 },
  { rotateY: 90, duration: 5 },
  440
);
game.fromTo('.card03', { rotateY: -90 }, { rotateY: 0, duration: 5 }, 450);

// --------------------------------------------------- 배경 text effect

game.fromTo(
  '.zelda_text > img:nth-child(1)',
  { x: 0 },
  { x: -500, duration: 350 },
  140
);
game.fromTo(
  '.zelda_text > img:nth-child(2)',
  { x: 0 },
  { x: 100, duration: 350 },
  140
);

// --------------------------------------------------- zelda id effect

game.fromTo(
  '.line_right',
  { width: 1539, height: 8 },
  { width: 0, height: 8, duration: 310, ease: 'none' },
  150
);
game.fromTo(
  '.line_left',
  { width: 0 },
  { width: 1539, duration: 310, ease: 'none' },
  150
);

// --------------------------------------------------- zelda game end

game.fromTo(
  '.switchImage',
  { scale: 2.53 },
  { scale: 1.1, duration: 20, ease: 'slow(0.7, 0.7, false)' },
  470
);

game.fromTo(
  '.switch_bg, .zelda_video',
  { scale: 2.3, opacity: 1 },
  { scale: 1, opacity: 0, duration: 20, ease: 'slow(0.7, 0.7, false)' },
  470
);

game.fromTo('.zelda_cnt', { opacity: 1 }, { opacity: 0, duration: 5 }, 470);

// ------------------------------------------------- animal crossing open

game.fromTo(
  '.switch_bg',
  { zIndex: 0, opacity: 0 },
  { zIndex: 2000, opacity: 1, duration: 10 },
  480
);

game.fromTo('.select', { x: 0 }, { x: 248, duration: 10 }, 500);
game.fromTo('.thumbnail', { x: 0 }, { x: -70, duration: 10 }, 500);

game.fromTo('.ac_video', { opacity: 0 }, { opacity: 1, duration: 3 }, 530);
game.fromTo('.ac_logo', { opacity: 0 }, { opacity: 1, duration: 10 }, 540);
game.fromTo('.ac_logo', { opacity: 1 }, { opacity: 0, duration: 10 }, 560);
game.fromTo(
  '.switchImage',
  { scale: 1.1 },
  { scale: 2.53, duration: 10, ease: 'slow(0.7, 0.7, false)' },
  570
);
game.fromTo(
  '.switch_bg, .ac_video',
  { scale: 1 },
  { scale: 2.3, duration: 10, ease: 'slow(0.7, 0.7, false)' },
  570
);

// -------------------------------------- animal crossing full page effect

game.fromTo(
  '.ac_bg01',
  { clipPath: 'circle(0% at 50% 50%)' },
  { clipPath: 'circle(100% at 50% 50%)', duration: 15 }
);

game.fromTo(
  '.house_main',
  { scale: 0 },
  { scale: 1, duration: 8, ease: 'back.out' },
  590
);
game.fromTo(
  '.house_cap',
  { scale: 0 },
  { scale: 1, duration: 8, ease: 'back.out' },
  591
);
game.fromTo(
  '.textballon',
  { scale: 0 },
  { scale: 1, duration: 10, ease: 'back.out' },
  590
);
game.fromTo(
  '.id_house',
  { y: -200 },
  { y: 0, duration: 10, ease: 'power2.out' },
  595
);
game.fromTo(
  '.yeoul',
  { y: 700 },
  { y: 0, duration: 10, ease: 'back.out' },
  593
);

game.to('.ac_video', { display: 'none' });

// animal house body writing effect
gsap.registerPlugin(TextPlugin);

game.to(
  '.house_body',
  {
    duration: 10,
    text: "In a room that's more spacious, you can line up your favorite furniture. Let's make an ideal room.",
  },
  600
);

// ------------------------------------------------------- DIY change effect

game.fromTo(
  '.yeoul',
  { x: 0, y: 0 },
  { x: 1183, y: -321, duration: 10, ease: 'back.out' },
  627
);
game.fromTo('.textballon', { x: 0 }, { x: -72, duration: 10 }, 625);
game.fromTo(
  '.id_house',
  { y: 0 },
  { y: -185, duration: 10, ease: 'back.out' },
  620
);

game.fromTo(
  '.house_main',
  { scale: 1 },
  { scale: 0, duration: 8, ease: 'back.in' },
  620
);

game.fromTo(
  '.house_cap',
  { scale: 1 },
  { scale: 0, duration: 8, ease: 'back.in' },
  620
);
game.fromTo('.house_body', { scale: 1 }, { scale: 0, duration: 2 }, 620);

game.fromTo(
  '.ac_bg02',
  { clipPath: 'circle(0% at 50% 50%)' },
  { clipPath: 'circle(100% at 50% 50%)', duration: 15 },
  620
);

game.to(
  '.DIY_body',
  {
    duration: 10,
    text: 'Based on the recipe, DIY makes anything by hand. You can get a recipe from a message bottle or balloon.',
  },
  630
);

game.fromTo(
  '.id_DIY',
  { y: -200 },
  { y: -15, duration: 10, ease: 'back.out' },
  630
);

game.fromTo(
  '.DIY_cap',
  { scale: 0 },
  { scale: 1, duration: 8, ease: 'back.out' },
  628
);

game.fromTo(
  '.DIY_main',
  { scale: 0 },
  { scale: 1, duration: 8, ease: 'back.out' },
  627
);
// ------------------------------------------------------- fishing change effect
game.fromTo(
  '.ac_bg03',
  { clipPath: 'circle(0% at 50% 50%)' },
  { clipPath: 'circle(100% at 50% 50%)', duration: 15 },
  650
);
game.fromTo(
  '.yeoul',
  { x: 0 },
  { x: -100, duration: 10, ease: 'back.out' },
  657
);
game.fromTo('.textballon', { x: 0 }, { x: -650, duration: 10 }, 655);
game.fromTo(
  '.DIY_cap',
  { scale: 1 },
  { scale: 0, duration: 10, ease: 'back.in' },
  650
);
game.fromTo(
  '.DIY_main',
  { scale: 1 },
  { scale: 0, duration: 10, ease: 'back.in' },
  650
);

game.fromTo('.DIY_body', { scale: 1 }, { scale: 0, duration: 2 }, 650);
game.fromTo('.id_DIY', { y: 0 }, { y: -200, duration: 10 }, 650);

game.fromTo(
  '.fishing_main',
  { scale: 0 },
  { scale: 1, duration: 10, ease: 'back.out' },
  660
);

game.fromTo(
  '.fishing_cap',
  { scale: 0 },
  { scale: 1, duration: 10, ease: 'back.out' },
  658
);

game.fromTo(
  '.id_fishing',
  { y: -200 },
  { y: -15, duration: 10, ease: 'back.out' },
  660
);
game.to(
  '.fishing_body',
  {
    duration: 10,
    text: 'On an island surrounded by the sea and where the river flows, you can catch many kinds of fish.',
  },
  660
);

// ---------------------------------------------- animal crossing end

game.fromTo(
  '.switchImage',
  { scale: 2.53 },
  { scale: 1.1, duration: 20, ease: 'slow(0.7, 0.7, false)' },
  710
);

game.fromTo(
  '.switch_bg, .ac_video',
  { scale: 2.3, opacity: 1 },
  { scale: 1, opacity: 0, duration: 20, ease: 'slow(0.7, 0.7, false)' },
  710
);

game.fromTo('.ac_cnt', { opacity: 1 }, { opacity: 0, duration: 5 }, 710);

// ---------------------------------------------------- pokemon open

game.fromTo(
  '.switch_bg',
  { zIndex: 0, opacity: 0 },
  { zIndex: 2000, opacity: 1, duration: 10 },
  720
);

game.fromTo('.select', { x: 248 }, { x: 285, duration: 10 }, 740);
game.fromTo('.thumbnail', { x: -70 }, { x: -350, duration: 10 }, 740);
game.fromTo(
  '.thumbnail, .select',
  { opacity: 1 },
  { opacity: 0, duration: 10 },
  760
);
game.fromTo(
  '.switch_bg',
  { backgroundColor: '#ffffff' },
  { backgroundColor: 'black', duration: 3 },
  760
);
game.fromTo('.pk_logo', { opacity: 0 }, { opacity: 1, duration: 10 }, 770);
game.fromTo('.pk_logo', { opacity: 1 }, { opacity: 0, duration: 10 }, 790);
game.fromTo('.pk_bg', { opacity: 0 }, { opacity: 1, duration: 10 }, 795);
game.fromTo('.switch_bg', { opacity: 1 }, { opacity: 0, duration: 10 }, 795);

game.fromTo(
  '.switchImage',
  { scale: 1.1 },
  { scale: 2.53, duration: 20, ease: 'slow(0.7, 0.7, false)' },
  810
);
game.fromTo(
  '.pk_bg',
  { scale: 1 },
  { scale: 2.3, ease: 'slow(0.7, 0.7, false)', duration: 20 },
  810
);
game.fromTo(
  '.pk_icon1, .pk_icon2',
  { scale: 0, rotate: 0 },
  { scale: 1, rotate: 180, duration: 10 },
  830
);
game.fromTo('.pk_icon1', { x: 0 }, { x: -420, duration: 15 }, 850);
game.fromTo('.pk_icon2', { x: 0 }, { x: 420, duration: 15 }, 850);
game.to(
  '.pkbody',
  {
    duration: 15,
    text: 'Which will you choose?',
  },
  850
);
game.to(
  '.pkbody',
  {
    duration: 15,
    text: '',
  },
  870
);
game.fromTo('.pk_icon1', { x: -420 }, { x: 0, duration: 15 }, 870);
game.fromTo('.pk_icon2', { x: 420 }, { x: 0, duration: 15 }, 870);
game.fromTo('.pk_icon2', { opacity: 1 }, { opacity: 0, duration: 1 }, 885);
game.fromTo(
  '.pk_icon1',
  { rotate: 0, opacity: 1, scale: 1 },
  { rotate: 180, opacity: 0.5, scale: 6.48, duration: 10 },
  890
);

// ---------------------------------------- quaxly effect
game.fromTo('.qch', { scale: 0 }, { scale: 1, duration: 10 }, 895);
game.fromTo('.tq1, .tq2', { opacity: 0 }, { opacity: 1, duration: 10 }, 895);
game.fromTo('.choose_box', { opacity: 0 }, { opacity: 1, duration: 10 }, 895);
game.fromTo(
  '.qbody',
  { y: -10, opacity: 0 },
  { y: -50, opacity: 1, duration: 10 },
  898
);
game.fromTo(
  '.title_quaxly',
  { y: -490, opacity: 0 },
  { y: -530, opacity: 1, duration: 10 },
  902
);
game.fromTo(
  '.qcap1, .qcap2',
  { opacity: 0 },
  { opacity: 0.3, duration: 10 },
  895
);

// ---------------------------------------- fuecoco change effect
game.fromTo('.qch', { scale: 1 }, { scale: 0, duration: 10 }, 915);
game.fromTo('.tq1, .tq2', { opacity: 1 }, { opacity: 0, duration: 10 }, 915);

game.fromTo(
  '.qbody',
  { y: -50, opacity: 1 },
  { y: -90, opacity: 0, duration: 6 },
  918
);
game.fromTo(
  '.title_quaxly',
  { y: -530, opacity: 1 },
  { y: -570, opacity: 0, duration: 6 },
  918
);

game.fromTo(
  '.qcap1, .qcap2',
  { opacity: 0.3 },
  { opacity: 0, duration: 10 },
  915
);
game.fromTo(
  '.fcap1, .fcap2',
  { opacity: 0 },
  { opacity: 0.3, duration: 10 },
  915
);
game.fromTo(
  '.pk_icon1 svg path',
  { fill: '#004169' },
  { fill: '#A65656', duration: 10 },
  918
);
game.fromTo(
  '.choose_box',
  { border: '3px solid #004169', color: '#004169' },
  { border: '3px solid #A65656', color: '#A65656', duration: 10 },
  918
);

game.fromTo('.pk_icon1', { rotate: 0 }, { rotate: 180, duration: 10 }, 918);

game.fromTo('.fch', { scale: 0 }, { scale: 1, duration: 10 }, 920);
game.fromTo('.tf1, .tf2', { opacity: 0 }, { opacity: 1, duration: 10 }, 920);
game.fromTo(
  '.fbody',
  { y: -315, opacity: 0 },
  { y: -355, opacity: 1, duration: 10 },
  923
);
game.fromTo(
  '.title_fuecoco',
  { y: -315, opacity: 0 },
  { y: -355, opacity: 1, duration: 10 },
  928
);

// ---------------------------------------- sprigatito change effect
game.fromTo('.fch', { scale: 1 }, { scale: 0, duration: 10 }, 946);
game.fromTo('.tf1, .tf2', { opacity: 1 }, { opacity: 0, duration: 10 }, 946);

game.fromTo(
  '.fbody',
  { y: -355, opacity: 1 },
  { y: -395, opacity: 0, duration: 10 },
  949
);
game.fromTo(
  '.title_fuecoco',
  { y: -355, opacity: 1 },
  { y: -395, opacity: 0, duration: 10 },
  949
);

game.fromTo(
  '.fcap1, .fcap2',
  { opacity: 0.3 },
  { opacity: 0, duration: 10 },
  946
);
game.fromTo(
  '.scap1, .scap2',
  { opacity: 0 },
  { opacity: 0.3, duration: 10 },
  946
);
game.fromTo(
  '.pk_icon1 svg path',
  { fill: '#A65656' },
  { fill: '#39AC37', duration: 10 },
  949
);
game.fromTo(
  '.choose_box',
  { border: '3px solid #A65656', color: '#A65656' },
  { border: '3px solid #39AC37', color: '#39AC37', duration: 10 },
  949
);
game.fromTo('.pk_icon1', { rotate: 0 }, { rotate: 180, duration: 10 }, 949);

game.fromTo('.sch', { scale: 0 }, { scale: 1, duration: 10 }, 951);
game.fromTo('.ts1, .ts2', { opacity: 0 }, { opacity: 1, duration: 10 }, 951);

game.fromTo(
  '.sbody',
  { y: -315, opacity: 0 },
  { y: -355, opacity: 1, duration: 10 },
  954
);
game.fromTo(
  '.title_sprigatito',
  { y: -315, opacity: 0 },
  { y: -355, opacity: 1, duration: 10 },
  959
);

// ------------------------------------------------ controller page

// window.addEventListener('scroll', function () {
//   var ctrPage = document.querySelector('.ctr_products');
//   var prbar = document.querySelector('.prbar');
//   var scrollPosition = window.scrollY;

//   if (scrollPosition >= ctrPage.offsetTop) {
//     prbar.classList.add('fixed');
//   } else {
//     prbar.classList.remove('fixed');
//   }
// });

var ctr = gsap.timeline({
  scrollTrigger: {
    trigger: '.controller',
    start: 'top top',
    end: 'bottom top',
    pin: true,
    markers: true,
    scrub: true,
  },
});
ctr.fromTo(
  '.line1, .line2, .line3',
  { scale: 0 },
  { scale: 1, duration: 140 },
  0
);
ctr.fromTo('.n_n1', { opacity: 0 }, { opacity: 1, duration: 5 }, 0);
ctr.fromTo('.n_i', { opacity: 0 }, { opacity: 1, duration: 5 }, 5);
ctr.fromTo('.n_n2', { opacity: 0 }, { opacity: 1, duration: 5 }, 10);
ctr.fromTo('.n_t', { opacity: 0 }, { opacity: 1, duration: 5 }, 15);
ctr.fromTo('.n_e', { opacity: 0 }, { opacity: 1, duration: 5 }, 20);
ctr.fromTo('.n_n3', { opacity: 0 }, { opacity: 1, duration: 5 }, 25);
ctr.fromTo('.n_d', { opacity: 0 }, { opacity: 1, duration: 5 }, 30);
ctr.fromTo('.n_o', { opacity: 0 }, { opacity: 1, duration: 5 }, 35);
ctr.fromTo(
  '.is, .for',
  { opacity: 0, y: 15 },
  { opacity: 1, y: 0, duration: 10 },
  40
);
ctr.fromTo(
  '.ctrbody',
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 10 },
  50
);
ctr.fromTo(
  '.ent_ctr',
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 10 },
  45
);

ctr.fromTo('.e_e1', { opacity: 0 }, { opacity: 1, duration: 5 }, 50);
ctr.fromTo('.e_v', { opacity: 0 }, { opacity: 1, duration: 5 }, 55);
ctr.fromTo('.e_e2', { opacity: 0 }, { opacity: 1, duration: 5 }, 60);
ctr.fromTo('.e_r', { opacity: 0 }, { opacity: 1, duration: 5 }, 65);
ctr.fromTo('.e_y', { opacity: 0 }, { opacity: 1, duration: 5 }, 70);
ctr.fromTo('.e_o', { opacity: 0 }, { opacity: 1, duration: 5 }, 75);
ctr.fromTo('.e_n', { opacity: 0 }, { opacity: 1, duration: 5 }, 80);
ctr.fromTo('.e_e3', { opacity: 0 }, { opacity: 1, duration: 5 }, 85);

// ------------------------------------------------ controller products page

var ctrpd = gsap.timeline({
  scrollTrigger: {
    trigger: '.ctr_products',
    start: 'top top',
    // end: 'bottom 3000px',
    // pin: true,
    markers: true,
    scrub: true,
  },
});

ctrpd.fromTo('.prbar', { y: 0 }, { y: 2160 }, 0);
ctrpd.fromTo('.present', { x: 65, y: -221 }, { x: 65, y: 323 }, 0);

// --------------------- kirby star rotate
const kirbyStar = document.querySelector('.star3');

gsap.to(kirbyStar, {
  rotate: 360,
  transformOrigin: 'center center',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  duration: 2.5,
  repeat: -1,
  delay: 3,
  repeatDelay: 3,
});

// ------------------------- kirby effect

var kirby = gsap.timeline({
  scrollTrigger: {
    trigger: '.kirby',
    start: 'top 300px',
    end: 'bottom 1000px',
    // pin: true,
    markers: true,
    scrub: true,
  },
});
kirby.fromTo(
  '.kirby_title, .kirbycap',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 15 },
  0
);
kirby.fromTo(
  '.kirbybody',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 15 },
  5
);
kirby.fromTo(
  '.star1',
  { scale: 0, rotate: -180 },
  { scale: 1, rotate: 0, duration: 15 }
);
kirby.fromTo(
  '.star2',
  { scale: 0, rotate: -180 },
  { scale: 1, rotate: 0, duration: 15 }
);
kirby.fromTo('.star3', { scale: 0 }, { scale: 1, duration: 15 });
kirby.fromTo(
  '.ctrkirby1',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 15 }
);
kirby.fromTo('.ctrkirby2', { opacity: 0 }, { opacity: 1, duration: 15 });
kirby.fromTo('.kirbych', { scale: 0 }, { scale: 1, duration: 15 });
9;
// // --------------------------------------- pikachu effect

var pikachu = gsap.timeline({
  scrollTrigger: {
    trigger: '.pikachu',
    start: 'top 300px',
    end: 'bottom 1000px',
    // pin: true,
    markers: true,
    scrub: true,
  },
});

pikachu.fromTo(
  '.pikachu_title, .pikachucap',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 15 }
);
pikachu.fromTo(
  '.pikachubody',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 14 },
  5
);
pikachu.fromTo(
  '.pikachuball',
  { scale: 0, rotate: -180 },
  { scale: 1, rotate: 0, duration: 15 }
);
pikachu.fromTo('.pikachuch', { scale: 0 }, { scale: 1, duration: 15 });
pikachu.fromTo(
  '.pikachu1',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 15 }
);
pikachu.fromTo('.pikachu2', { opacity: 0 }, { opacity: 1, duration: 15 });

var mario = gsap.timeline({
  scrollTrigger: {
    trigger: '.mario',
    start: 'top 300px',
    end: 'bottom 1000px',
    // pin: true,
    markers: true,
    scrub: true,
  },
});

mario.fromTo(
  '.mario_title, .mariocap',
  { opacity: 0, x: -150 },
  { opacity: 1, x: 0, duration: 15 },
  0
);
mario.fromTo(
  '.mariobody1, .mariobody2',
  { opacity: 0, x: -150 },
  { opacity: 1, x: 0, duration: 15 },
  5
);
mario.fromTo('.marioch1', { scale: 0 }, { scale: 1, duration: 15 }, 3);
mario.fromTo('.marioch2', { scale: 0 }, { scale: 1, duration: 15 }, 3);
mario.fromTo('.marioch3', { scale: 0 }, { scale: 1, duration: 15 }, 3);

mario.fromTo(
  '.ctrmario2',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 15 },
  5
);
mario.fromTo('.ctrmario1', { opacity: 0 }, { opacity: 1, duration: 15 }, 0);

mario.fromTo(
  '.marioch4',
  { opacity: 0, y: 130 },
  { opacity: 1, y: 0, duration: 15 },
  5
);

// ------------------------------- outro page effect

var outro = gsap.timeline({
  scrollTrigger: {
    trigger: '.outro',
    start: 'bottom bottom',
    // end: 'bottom center',
    pin: true,
    markers: true,
    scrub: true,
  },
});

outro.fromTo(
  '.och',
  { scale: 0 },
  { scale: 1, duration: 10, ease: 'back.out' },
  3
);

outro.fromTo('.outroswitch, .sw_line', { x: 1600 }, { x: 0, duration: 10 }, 0);
outro.fromTo(
  '.h_centerline',
  { width: 800, height: 28 },
  { width: 84, height: 28, duration: 10 },
  5
);
outro.fromTo(
  '.outroplay, .pl_line, .oicon5',
  { x: 1400 },
  { x: 0, duration: 10 },
  3
);
outro.fromTo(
  '.l_btmline',
  { width: 800, height: 16 },
  { width: 81, heigth: 16, duration: 10 },
  8
);

outro.fromTo(
  '.bgplay',
  { opacity: 0, y: -100 },
  { opacity: 1, y: 0, duration: 10 },
  3
);
outro.fromTo(
  '.itloud',
  { opacity: 0, y: 100 },
  { opacity: 1, y: 0, duration: 10 },
  6
);
outro.fromTo('.outrobody', { y: 700 }, { y: 0, duration: 10 }, 4);
outro.fromTo(
  '.oicon1',
  { y: -300, rotate: -180 },
  { y: 0, rotate: 0, duration: 10 },
  1
);
outro.fromTo(
  '.oicon2',
  { x: -300, rotate: 180 },
  { x: 0, rotate: 0, duration: 10 },
  2
);
outro.fromTo('.oicon3', { opacity: 0 }, { opacity: 1, duration: 10 }, 5);
outro.fromTo('.ocion4', { y: 500 }, { y: 0, duration: 10 }, 2);
outro.fromTo(
  '.oicon7',
  { opacity: 0, rotate: 360 },
  { opacity: 1, rotate: 0, duration: 10 },
  0
);
outro.fromTo('.oicon6', { x: 300 }, { x: 0, duration: 10 }, 5);
