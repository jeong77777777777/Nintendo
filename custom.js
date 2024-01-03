//  nav
const nintendoLogo = document.querySelector('.nintendo_logo');
window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition >= 1000) {
    nintendoLogo.style.opacity = 1;
  } else {
    nintendoLogo.style.opacity = 0;
  }
});

// --------------------------------- menu page

const menuIcon = document.querySelector('.menu_icon');
const menuPage = document.querySelector('.menu');
const menuClose = document.querySelector('.close');

menuIcon.addEventListener('click', function () {
  menuPage.style.transform = 'translateY(0)';
});

menuClose.addEventListener('click', function () {
  menuPage.style.transform = 'translateY(-120%)';
});

// ----------------------------------- menu click

const ww = document.body.offsetWidth;
// console.log(ww);
console.log(Math.floor((123 / 1876) * 200));

window.addEventListener('mousemove', function (event) {
  console.log(event.pageY);

  // 1000px : 화면크기
  // 100px : 마우스 커서 위치
});

const hwIcon = document.querySelector('.hwicon');
const zdIcon = document.querySelector('.zdicon');
const acIcon = document.querySelector('.acicon');
const pkIcon = document.querySelector('.pkicon');
const ctIcon = document.querySelector('.cticon');

const icons = document.querySelectorAll('.menu_cnt > img');

icons.forEach(function (icon, idx) {
  var iconClassName = icon.className;

  var iconPath = 'img/menu/' + iconClassName + '.svg';
  var iconNewPath = 'img/menu/' + iconClassName + '_over.svg';
  var menuCnt = document.querySelector('.menu_cnt');

  icon.addEventListener('mouseenter', function () {
    icon.src = iconNewPath;
    icon.style.transform = 'scale(1.3)';
    icon.style.margin = '0 35px';
    icon.style.filter = 'drop-shadow(5px 5px 8px rgba(0, 0, 0, 0.6))';
    menuCnt.style.justifyContent = 'center';
    icons.forEach((otherIcon) => {
      if (otherIcon !== icon) {
        var otherIconClassName = otherIcon.className;
        var otherIconNotPath = 'img/menu/' + otherIconClassName + '_not.svg';
        otherIcon.src = otherIconNotPath;
      }
    });
  });
  icon.addEventListener('mouseleave', function () {
    icon.src = iconPath;
    icon.style.transform = 'scale(1)';
    icon.style.margin = '0 0';
    icon.style.filter = 'drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3))';

    this.classList.remove('hovering');
    icons.forEach((otherIcon) => {
      if (otherIcon !== icon) {
        otherIcon.src = 'img/menu/' + otherIcon.className + '.svg';
      }
    });
  });
});

const zdTitle = document.querySelector('.menu_title_zd');
const acTitle = document.querySelector('.menu_title_ac');
const pkTitle = document.querySelector('.menu_title_pk');

zdIcon.addEventListener('mouseenter', function () {
  zdTitle.style.opacity = 1;
  zdTitle.style.transform = 'translateY(30px)';
});
acIcon.addEventListener('mouseenter', function () {
  acTitle.style.opacity = 1;
  acTitle.style.transform = 'translateY(30px)';
});
pkIcon.addEventListener('mouseenter', function () {
  pkTitle.style.opacity = 1;
  pkTitle.style.transform = 'translateY(30px)';
});
zdIcon.addEventListener('mouseleave', function () {
  zdTitle.style.opacity = 0;
  zdTitle.style.transform = 'translateY(-30px)';
});
acIcon.addEventListener('mouseleave', function () {
  acTitle.style.opacity = 0;
  acTitle.style.transform = 'translateY(-30px)';
});
pkIcon.addEventListener('mouseleave', function () {
  pkTitle.style.opacity = 0;
  pkTitle.style.transform = 'translateY(-30px)';
});

// click

hwIcon.addEventListener('click', function () {
  window.scrollTo({ top: 2640, behavior: 'instant' });
  menuPage.style.transform = 'translateY(-120%)';
});
zdIcon.addEventListener('click', function () {
  window.scrollTo({ top: 5705, behavior: 'instant' });
  menuPage.style.transform = 'translateY(-120%)';
});
acIcon.addEventListener('click', function () {
  window.scrollTo({ top: 12748, behavior: 'instant' });
  menuPage.style.transform = 'translateY(-120%)';
});
pkIcon.addEventListener('click', function () {
  window.scrollTo({ top: 17220, behavior: 'auto' });
  menuPage.style.transform = 'translateY(-120%)';
});
ctIcon.addEventListener('click', function () {
  window.scrollTo({ top: 24100, behavior: 'instant' });
  menuPage.style.transform = 'translateY(-120%)';
});

// --------------------------------- hero page effect

gsap.registerPlugin(ScrollTrigger);

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
    markers: false,
    scrub: false,
    snap: 1,
    toggleActions: 'play none reverse reverse',

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
  { x: -53, duration: 1.5 },
  0
);

hero.fromTo(
  '.play > img:nth-child(2)',
  { x: -810 },
  { x: 0, duration: 1.5 },
  0
);
hero.fromTo(
  '.play > img:nth-child(3)',
  { x: 1910 },
  { x: 0, duration: 1.5 },
  0
);
hero.fromTo(
  '.play > img:nth-child(4)',
  { x: 3300 },
  { x: 0, duration: 1.5 },
  0
);
hero.fromTo('.anywhere, .aw_line', { x: 1609 }, { x: 0, duration: 1.5 }, 0.5);
hero.fromTo('.anytime, .at_line', { x: 1800 }, { x: 0, duration: 1.5 }, 0.5);
hero.fromTo(
  '.hcenter',
  { width: 800, height: 28 },
  { width: 84, height: 28, duration: 1.5 },
  0.5
);
hero.fromTo(
  '.etop, .ecenter',
  { width: 800, height: 28 },
  { width: 81, height: 28, duration: 1.5 },
  0.5
);
hero.fromTo(
  '.ebtm',
  { width: 800, height: 16 },
  { width: 81, height: 16, duration: 1.5 },
  0.5
);
hero.fromTo(
  '.s_mario, .hero > img, .icon > img:nth-child(2)',
  { y: 1080 },
  { y: 0, duration: 1.5, ease: 'back.out' },
  0.5
);
hero.fromTo(
  '.cap, .main_text, .NowYoure',
  { y: 1080 },
  { y: 0, duration: 1.5 },
  0
);

// icon
hero.fromTo(
  '.icon > img:nth-child(1)',
  { y: -150, rotate: 360 },
  { y: 0, rotate: 0, duration: 1.5 },
  0
);
hero.fromTo(
  '.icon > img:nth-child(3)',
  { scale: 0 },
  { scale: 1, duration: 1.5 },
  1
);
hero.fromTo(
  '.icon > img:nth-child(4)',
  { y: -400, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.5 },
  0.5
);
hero.fromTo(
  '.icon > img:nth-child(5), .icon > img:nth-child(6)',
  { y: 1300 },
  { y: 0, duration: 1.5 },
  0
);
// outro page effect

// --------------------------------- hardware page loop slide

gsap.registerPlugin(ScrollTrigger);

const slider = document.querySelector('.hardwarebox');
const slides = document.querySelectorAll('.hw');
const colorBox = document.querySelector('.pickcolor');
const backIcon = document.querySelector('.back_icon');
const nextIcon = document.querySelector('.next_icon');

const hwIds = document.querySelectorAll('.hw_id > *');

let currentIndex = 0;
let isMouseOverColorBox = false;

const slideColors = ['#d42d26', '#00BEDF', '#4D4D4D'];

updateSlider();

function updateSlider() {
  slider.style.transform = `translateX(${-currentIndex * 1614}px)`;

  hwIds.forEach((element, index) => {
    const isActive = index === currentIndex;
    const width = isActive ? '210px' : '9px';
    const backgroundColor = isActive ? slideColors[index] : '#CCC';

    element.style.width = width;
    element.style.backgroundColor = backgroundColor;
  });
}

function nextSlide() {
  if (!isMouseOverColorBox) {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }
}

function prevSlide() {
  if (!isMouseOverColorBox) {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }
}

function handleMouseOverColorBox() {
  isMouseOverColorBox = true;
}

function handleMouseOutColorBox() {
  isMouseOverColorBox = false;
}

setInterval(nextSlide, 3500);

colorBox.addEventListener('mouseenter', handleMouseOverColorBox);
colorBox.addEventListener('mouseleave', handleMouseOutColorBox);

backIcon.addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

nextIcon.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

gsap.to('.oled, .switch, .lite_gray', {
  y: 50,
  duration: 1,
  ease: 'power2.inOut',
  yoyo: true,
  repeat: -1, // -1로 설정하여 무한 반복
});

// --------------------------------------------- hw03 click event -> color change

const colorPicks = document.querySelectorAll('.pickcolor > *');
const liteImage = document.querySelector('.lite_gray');
const circles = document.querySelectorAll('.hardware03_gray > .circle');
const ntdColors = document.querySelectorAll('.nintendo03 > *');
const swtColors = document.querySelectorAll('.switch03 > *');
const idColor = document.querySelector('.id_hw03');

colorPicks.forEach(function (colorPick) {
  colorPick.addEventListener('mouseenter', function () {
    const currentSelected = document.getElementById('selected');
    if (currentSelected) {
      currentSelected.removeAttribute('id');
    }

    colorPick.id = 'selected';

    var colorClassName = colorPick.className;

    var newImagePath = 'img/hardware/lite_' + colorClassName + '.svg';

    liteImage.src = newImagePath;

    circles.forEach(function (circle, index) {
      var newCirclePath =
        'img/hardware/circle_' + colorClassName + '0' + (index + 1) + '.svg';
      circle.src = newCirclePath;
    });

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

    switch (colorClassName) {
      case 'gray':
        idColor.style.backgroundColor = '#4D4D4D';
        break;
      case 'yellow':
        idColor.style.backgroundColor = '#F0AD00';
        break;
      case 'pink':
        idColor.style.backgroundColor = '#FF3B4A';
        break;
      case 'blue':
        idColor.style.backgroundColor = '#072385';
        break;
      case 'cyan':
        idColor.style.backgroundColor = '#00B4B7';
        break;
      default:
        idColor.style.backgroundColor = '#4D4D4D';
    }

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

const pickText = document.querySelector('.picktext');

setInterval(() => {
  pickText.style.display = 'block';

  setTimeout(() => {
    pickText.style.display = 'none';
  }, 1000);
}, 1500);
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
    end: '+=17000px',
    scrub: 0.1,
    pin: true,
    // markers: true,
  },
});

game.fromTo('.switchImage > .s_right', { y: -160 }, { y: 0, duration: 20 }, 0);

game.fromTo('.switchImage', { scale: 1 }, { scale: 1.1, duration: 20 }, 20);

game.fromTo('.switch_bg', { opacity: 0 }, { opacity: 1, duration: 20 }, 40);

game.fromTo('.select', { opacity: 0 }, { opacity: 1, duration: 20 }, 60);
game.fromTo('.zelda_video', { opacity: 0 }, { opacity: 1, duration: 20 }, 80);
game.fromTo('.zelda_logo', { opacity: 0 }, { opacity: 1, duration: 15 }, 100);
game.fromTo('.zelda_logo', { opacity: 1 }, { opacity: 0, duration: 15 }, 125);
game.fromTo('.switchImage', { scale: 1.1 }, { scale: 2.53, duration: 15 }, 145);
game.fromTo(
  '.switch_bg, .zelda_video',
  { scale: 1 },
  { scale: 2.3, duration: 15 },
  145
);

// ----------------------------------------- zelda full page effect -------------------

// const zeldaVideo = document.querySelector('.zelda_video');

// zeldaVideo.playbackRate = 0.8;

const zeldaRing = document.querySelector('.zelda_cnt > img:nth-child(1)');

gsap.to(zeldaRing, {
  rotateY: 540,
  duration: 0.5,
  repeat: -1, // 무한 반복
  delay: 3, // 시작 딜레이
  repeatDelay: 3, // 반복 사이 딜레이
  ease: 'power1.inOut', // 타이밍 함수 설정
});
game.fromTo(
  '.zelda1',
  { opacity: 0, rotate: 0 },
  { opacity: 1, rotate: 360, duration: 150 },
  350
);
game.fromTo(
  '.zelda3',
  { rotate: 0, opacity: 1, x: 0 },
  { x: 500, rotate: 360, opacity: 0, duration: 200, ease: 'none' },
  170
);
game.fromTo('.zelda2', { opacity: 1 }, { opacity: 0, duration: 70 }, 200);
game.fromTo(
  '.zelda4',
  { opacity: 0, y: -150 },
  { opacity: 1, y: 0, duration: 150 },
  270
);
game.fromTo('.bg_shadow', { opacity: 0 }, { opacity: 1, duration: 5 }, 160);

game.fromTo(
  '.card > *, .zelda_cnt > img:nth-child(1), .zelda_text, .zelda_id',
  { opacity: 0 },
  { opacity: 1, duration: 10 },
  160
);

game.fromTo(
  '.zelda_cnt .factor',
  { opacity: 0 },
  { opacity: 1, duration: 5 },
  160
);
// --------------------------------------------------- card01 rotate
game.fromTo('.card01', { rotateY: 0 }, { rotateY: 270, duration: 20 }, 180);
game.fromTo(
  '.card01bhd, .card01body, .create, .eyes, .line_c',
  { rotateY: -90 },
  { rotateY: 0, duration: 20 },
  200
);

game.fromTo(
  '.card01bhd, .card01body, .create, .eyes, .line_c',
  { rotateY: 0 },
  { rotateY: 270, duration: 20 },
  240
);
game.fromTo('.card01', { rotateY: -90 }, { rotateY: 0, duration: 20 }, 260);

// --------------------------------------------------- card 위치 변경_1

game.fromTo(
  '.card01',
  { x: 0, y: 0, zIndex: 100, scale: 1 },
  { x: -625, y: 60, zIndex: 0, duration: 20, scale: 0.46 },
  290
);

game.fromTo(
  '.card02',
  { x: 0, y: 0, zIndex: 70, scale: 1 },
  { x: -637, y: -59, zIndex: 120, scale: 2.2, duration: 20 },
  290
);

game.fromTo(
  '.card03',
  { x: 0, zIndex: 10 },
  { x: 1261, zIndex: 0, duration: 20 },
  290
);

// --------------------------------------------------- card02 rotate

game.fromTo('.card02', { rotateY: 0 }, { rotateY: 270, duration: 20 }, 320);
game.fromTo(
  '.card02bhd, .card02body, .explore, .eyes, .line_c',
  { rotateY: -90 },
  { rotateY: 0, duration: 20 },
  340
);

game.fromTo(
  '.card02bhd, .card02body, .explore, .eyes, .line_c',
  { rotateY: 0 },
  { rotateY: 270, duration: 20 },
  380
);
game.fromTo('.card02', { rotateY: -90 }, { rotateY: 0, duration: 20 }, 400);

// -------------------------------------------------- card 위치변경_2

game.fromTo(
  '.card01',
  { x: -625, y: 60, zIndex: 0, scale: 0.46 },
  { x: 632, zIndex: 0, duration: 20 },
  430
);

game.fromTo(
  '.card02',
  { x: -637, y: -59, zIndex: 100, scale: 2.2 },
  { x: -1265, y: 0, scale: 1, zIndex: 10, duration: 20 },
  430
);
game.fromTo(
  '.card03',
  { x: 1261, zIndex: 100 },
  { scale: 2.2, x: 627, y: -55, zIndex: 10000, duration: 20 },
  430
);

// --------------------------------------------------- card03 rotate
game.fromTo('.card03', { rotateY: 0 }, { rotateY: 270, duration: 20 }, 460);
game.fromTo(
  '.card03bhd, .card03body, .discover, .eyes, .line_c',
  { rotateY: -90 },
  { rotateY: 0, duration: 20 },
  480
);

game.fromTo(
  '.card03bhd, .card03body, .discover, .eyes, .line_c',
  { rotateY: 0 },
  { rotateY: 270, duration: 20 },
  520
);
game.fromTo('.card03', { rotateY: -90 }, { rotateY: 0, duration: 20 }, 540);

// --------------------------------------------------- 배경 text effect

game.fromTo(
  '.zelda_text > img:nth-child(1)',
  { x: -200 },
  { x: 600, duration: 400 },
  160
);
game.fromTo(
  '.zelda_text > img:nth-child(2)',
  { x: 0 },
  { x: 100, duration: 400 },
  160
);

// --------------------------------------------------- zelda id effect

game.fromTo(
  '.line_right',
  { width: 1510, height: 1 },
  { width: 0, height: 1, duration: 380, ease: 'none' },
  180
);
game.fromTo(
  '.line_left',
  { width: 0, height: 1 },
  { width: 1510, height: 1, duration: 380, ease: 'none' },
  180
);

// --------------------------------------------------- zelda game end

game.fromTo('.switchImage', { scale: 2.53 }, { scale: 1.1, duration: 15 }, 580);

game.fromTo(
  '.switch_bg, .zelda_video',
  { scale: 2.3, opacity: 1 },
  { scale: 1, opacity: 0, duration: 15 },
  580
);

game.fromTo('.zelda_cnt', { opacity: 1 }, { opacity: 0, duration: 10 }, 580);
// ------------------------------------------------- joycon change

game.fromTo('.s_right', { y: 0 }, { y: -780, duration: 30 }, 600);
game.fromTo('.s_left', { y: 0 }, { y: -780, duration: 30 }, 600);
game.fromTo('.s_right', { y: -780 }, { y: 0, duration: 30 }, 630);
game.fromTo('.s_left', { y: -780 }, { y: 0, duration: 30 }, 630);

// ---------------------------------------------- joycon change

window.addEventListener('scroll', function () {
  const targetScrollPosition1 = 12130;
  const targetScrollPosition2 = 16499;

  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  const sRight = document.querySelector('.s_right');
  const sLeft = document.querySelector('.s_left');

  if (currentScrollPosition > targetScrollPosition2) {
    if (sRight) {
      const rightNewPath = 'img/game/pk_right.svg';
      sRight.src = rightNewPath;
    }
    if (sLeft) {
      const leftNewPath = 'img/game/pk_left.svg';
      sLeft.src = leftNewPath;
    }
  } else if (currentScrollPosition > targetScrollPosition1) {
    if (sRight) {
      const rightNewPath = 'img/game/ac_right.svg';
      sRight.src = rightNewPath;
    }
    if (sLeft) {
      const leftNewPath = 'img/game/ac_left.svg';
      sLeft.src = leftNewPath;
    }
  } else {
    if (sRight) {
      const rightPath = 'img/game/right.svg';
      sRight.src = rightPath;
    }
    if (sLeft) {
      const leftPath = 'img/game/left.svg';
      sLeft.src = leftPath;
    }
  }
});

// ------------------------------------------------- animal crossing open

game.fromTo(
  '.switch_bg',
  { zIndex: 0, opacity: 0 },
  { zIndex: 2000, opacity: 1, duration: 20 },
  660
);

game.fromTo('.select', { x: 0 }, { x: 248, duration: 20 }, 660);
game.fromTo('.thumbnail', { x: 0 }, { x: -70, duration: 20 }, 660);

game.fromTo('.ac_video', { opacity: 0 }, { opacity: 1, duration: 15 }, 680);
game.fromTo('.ac_logo', { opacity: 0 }, { opacity: 1, duration: 15 }, 705);
game.fromTo('.ac_logo', { opacity: 1 }, { opacity: 0, duration: 15 }, 730);
game.fromTo('.switchImage', { scale: 1.1 }, { scale: 2.53, duration: 15 }, 750);
game.fromTo(
  '.switch_bg, .ac_video',
  { scale: 1 },
  { scale: 2.3, duration: 15 },
  750
);

// -------------------------------------- animal crossing full page effect

game.fromTo(
  '.ac_bg01',
  { clipPath: 'circle(0% at 50% 50%)' },
  { clipPath: 'circle(100% at 50% 50%)', duration: 15 },
  770
);

game.fromTo(
  '.house_main',
  { scale: 0 },
  { scale: 1, duration: 20, ease: 'back.out' },
  785
);
game.fromTo(
  '.house_cap',
  { scale: 0 },
  { scale: 1, duration: 20, ease: 'back.out' },
  785
);
game.fromTo(
  '.textballon',
  { scale: 0 },
  { scale: 1, duration: 20, ease: 'back.out' },
  785
);
game.fromTo(
  '.id_house',
  { y: -200 },
  { y: 0, duration: 20, ease: 'power2.out' },
  785
);
game.fromTo(
  '.yeoul',
  { y: 700 },
  { y: 0, duration: 20, ease: 'back.out' },
  785
);

game.to('.ac_video', { display: 'none' }, 790);

// animal house body writing effect
gsap.registerPlugin(TextPlugin);

game.to(
  '.house_body',
  {
    duration: 20,
    text: "In a room that's more spacious, you can line up your favorite furniture. Let's make an ideal room.",
  },
  787
);

// ------------------------------------------------------- DIY change effect

game.fromTo(
  '.yeoul',
  { x: 0, y: 0 },
  { x: 1183, y: -321, duration: 25, ease: 'power1.out' },
  830
);
game.fromTo('.textballon', { x: 0 }, { x: -72, duration: 20 }, 830);
game.fromTo(
  '.id_house',
  { y: 0 },
  { y: -185, duration: 15, ease: 'back.out' },
  830
);

game.fromTo(
  '.house_main',
  { scale: 1 },
  { scale: 0, duration: 15, ease: 'back.in' },
  830
);

game.fromTo(
  '.house_cap',
  { scale: 1 },
  { scale: 0, duration: 15, ease: 'back.in' },
  830
);
game.fromTo(
  '.house_body',
  { scale: 1, opacity: 1 },
  { scale: 0, opacity: 0, duration: 5 },
  830
);

game.fromTo(
  '.ac_bg02',
  { clipPath: 'circle(0% at 50% 50%)' },
  { clipPath: 'circle(100% at 50% 50%)', duration: 15 },
  835
);

game.to(
  '.DIY_body',
  {
    duration: 20,
    text: 'Based on the recipe, DIY makes anything by hand. You can get a recipe from a message bottle or balloon.',
  },
  847
);

game.fromTo(
  '.id_DIY',
  { y: -200 },
  { y: -15, duration: 20, ease: 'back.out' },
  845
);

game.fromTo(
  '.DIY_cap',
  { scale: 0 },
  { scale: 1, duration: 20, ease: 'back.out' },
  845
);

game.fromTo(
  '.DIY_main',
  { scale: 0 },
  { scale: 1, duration: 20, ease: 'back.out' },
  845
);
// ------------------------------------------------------- fishing change effect
game.fromTo(
  '.yeoul',
  { x: 1183 },
  { x: -100, duration: 20, ease: 'power1.out' },
  900
);
game.fromTo('.textballon', { x: -72 }, { x: -650, duration: 20 }, 900);
game.fromTo(
  '.DIY_cap',
  { scale: 1 },
  { scale: 0, duration: 15, ease: 'back.in' },
  890
);
game.fromTo(
  '.DIY_main',
  { scale: 1 },
  { scale: 0, duration: 15, ease: 'back.in' },
  890
);

game.fromTo(
  '.DIY_body',
  { scale: 1, opacity: 1 },
  { scale: 0, opacity: 0, duration: 5 },
  890
);
game.fromTo('.id_DIY', { y: 0 }, { y: -200, duration: 15 }, 890);
game.fromTo(
  '.ac_bg03',
  { clipPath: 'circle(0% at 50% 50%)' },
  { clipPath: 'circle(100% at 50% 50%)', duration: 15 },
  895
);

game.fromTo(
  '.fishing_main',
  { scale: 0 },
  { scale: 1, duration: 20, ease: 'back.out' },
  910
);

game.fromTo(
  '.fishing_cap',
  { scale: 0 },
  { scale: 1, duration: 20, ease: 'back.out' },
  910
);

game.fromTo(
  '.id_fishing',
  { y: -200 },
  { y: -15, duration: 20, ease: 'back.out' },
  910
);
game.to(
  '.fishing_body',
  {
    duration: 20,
    text: 'On an island surrounded by the sea and where the river flows, you can catch many kinds of fish.',
  },
  912
);

// ---------------------------------------------- animal crossing end

game.fromTo('.switchImage', { scale: 2.53 }, { scale: 1.1, duration: 15 }, 950);

game.fromTo(
  '.switch_bg',
  { scale: 2.3, opacity: 1 },
  { scale: 1, opacity: 0, duration: 15 },
  950
);

game.fromTo('.ac_cnt', { opacity: 1 }, { opacity: 0, duration: 15 }, 950);

//---------------------------------------------------- joycon change

game.fromTo('.s_right', { y: 0 }, { y: -780, duration: 30 }, 970);
game.fromTo('.s_left', { y: 0 }, { y: -780, duration: 30 }, 970);
game.fromTo('.s_right', { y: -780 }, { y: 0, duration: 30 }, 1000);
game.fromTo('.s_left', { y: -780 }, { y: 0, duration: 30 }, 1000);

// ---------------------------------------------------- pokemon open

game.fromTo(
  '.switch_bg',
  { zIndex: 0, opacity: 0 },
  { zIndex: 2000, opacity: 1, duration: 20 },
  1030
);

game.fromTo('.select', { x: 248 }, { x: 285, duration: 20 }, 1030);
game.fromTo('.thumbnail', { x: -70 }, { x: -350, duration: 20 }, 1030);
game.fromTo(
  '.thumbnail, .select',
  { opacity: 1 },
  { opacity: 0, duration: 15 },
  1060
);
game.fromTo(
  '.switch_bg',
  { backgroundColor: '#ffffff' },
  { backgroundColor: 'black', duration: 15 },
  1060
);
game.fromTo('.pk_logo', { opacity: 0 }, { opacity: 1, duration: 15 }, 1070);
game.fromTo('.pk_logo', { opacity: 1 }, { opacity: 0, duration: 15 }, 1105);
game.fromTo('.pk_bg', { opacity: 0 }, { opacity: 1, duration: 20 }, 1115);
game.fromTo('.switch_bg', { opacity: 1 }, { opacity: 0, duration: 1 }, 1400);

game.fromTo(
  '.switchImage',
  { scale: 1.1 },
  { scale: 2.53, duration: 15 },
  1135
);
game.fromTo('.pk_bg', { scale: 1 }, { scale: 2.3, duration: 15 }, 1125);
game.fromTo(
  '.pk_icon1, .pk_icon2',
  { scale: 0, rotate: 0 },
  { scale: 1, rotate: 180, duration: 20 },
  1150
);
game.fromTo('.pk_icon1', { x: 0 }, { x: -420, duration: 20 }, 1170);
game.fromTo('.pk_icon2', { x: 0 }, { x: 420, duration: 20 }, 1170);
game.to(
  '.pkbody',
  {
    duration: 20,
    text: 'Which will you choose?',
  },
  1170
);
game.to(
  '.pkbody',
  {
    duration: 20,
    text: '',
  },
  1210
);
game.fromTo('.pk_icon1', { x: -420 }, { x: 0, duration: 20 }, 1210);
game.fromTo('.pk_icon2', { x: 420 }, { x: 0, duration: 20 }, 1210);
game.fromTo('.pk_icon2', { opacity: 1 }, { opacity: 0, duration: 0.1 }, 1230);
game.fromTo(
  '.pk_icon1',
  { rotate: 0, opacity: 1, scale: 1 },
  { rotate: 180, opacity: 0.5, scale: 6.48, duration: 20 },
  1230
);

// ---------------------------------------- quaxly effect
game.fromTo('.qch', { scale: 0 }, { scale: 1, duration: 10 }, 1250);
game.fromTo('.tq1, .tq2', { opacity: 0 }, { opacity: 1, duration: 10 }, 1250);
game.fromTo(
  '.choose_box',
  { opacity: 0 },
  { opacity: 0.5, duration: 10 },
  1250
);
game.fromTo(
  '.qbody',
  { y: -10, opacity: 0 },
  { y: -50, opacity: 1, duration: 20 },
  1260
);
game.fromTo(
  '.title_quaxly',
  { y: -490, opacity: 0 },
  { y: -530, opacity: 1, duration: 20 },
  1270
);
game.fromTo(
  '.qcap1, .qcap2',
  { opacity: 0 },
  { opacity: 0.3, duration: 20 },
  1250
);

// ---------------------------------------- fuecoco change effect
game.fromTo('.qch', { scale: 1 }, { scale: 0, duration: 10 }, 1310);
game.fromTo('.tq1, .tq2', { opacity: 1 }, { opacity: 0, duration: 10 }, 1310);

game.fromTo(
  '.qbody',
  { y: -50, opacity: 1 },
  { y: -90, opacity: 0, duration: 10 },
  1310
);
game.fromTo(
  '.title_quaxly',
  { y: -530, opacity: 1 },
  { y: -570, opacity: 0, duration: 10 },
  1310
);

game.fromTo(
  '.qcap1, .qcap2',
  { opacity: 0.3 },
  { opacity: 0, duration: 10 },
  1310
);
game.fromTo(
  '.fcap1, .fcap2',
  { opacity: 0 },
  { opacity: 0.3, duration: 10 },
  1310
);
game.fromTo(
  '.pk_icon1 svg path',
  { fill: '#004169' },
  { fill: '#A65656', duration: 20 },
  1310
);
game.fromTo(
  '.choose_box',
  { border: '3px solid #004169', color: '#004169' },
  { border: '3px solid #A65656', color: '#A65656', duration: 20 },
  1310
);

game.fromTo('.pk_icon1', { rotate: 0 }, { rotate: 180, duration: 20 }, 1310);

game.fromTo('.fch', { scale: 0 }, { scale: 1, duration: 20 }, 1330);
game.fromTo('.tf1, .tf2', { opacity: 0 }, { opacity: 1, duration: 20 }, 1330);
game.fromTo(
  '.fbody',
  { y: -315, opacity: 0 },
  { y: -355, opacity: 1, duration: 20 },
  1340
);
game.fromTo(
  '.title_fuecoco',
  { y: -315, opacity: 0 },
  { y: -355, opacity: 1, duration: 20 },
  1350
);

// ---------------------------------------- sprigatito change effect
game.fromTo('.fch', { scale: 1 }, { scale: 0, duration: 10 }, 1390);
game.fromTo('.tf1, .tf2', { opacity: 1 }, { opacity: 0, duration: 10 }, 1390);

game.fromTo(
  '.fbody',
  { y: -355, opacity: 1 },
  { y: -395, opacity: 0, duration: 10 },
  1390
);
game.fromTo(
  '.title_fuecoco',
  { y: -355, opacity: 1 },
  { y: -395, opacity: 0, duration: 10 },
  1390
);

game.fromTo(
  '.fcap1, .fcap2',
  { opacity: 0.3 },
  { opacity: 0, duration: 10 },
  1390
);
game.fromTo(
  '.scap1, .scap2',
  { opacity: 0 },
  { opacity: 0.3, duration: 10 },
  1390
);
game.fromTo(
  '.pk_icon1 svg path',
  { fill: '#A65656' },
  { fill: '#39AC37', duration: 20 },
  1390
);
game.fromTo(
  '.choose_box',
  { border: '3px solid #A65656', color: '#A65656' },
  { border: '3px solid #39AC37', color: '#39AC37', duration: 20 },
  1390
);
game.fromTo('.pk_icon1', { rotate: 0 }, { rotate: 180, duration: 20 }, 1390);

game.fromTo('.sch', { scale: 0 }, { scale: 1, duration: 20 }, 1380);
game.fromTo('.ts1, .ts2', { opacity: 0 }, { opacity: 1, duration: 20 }, 1410);

game.fromTo(
  '.sbody',
  { y: -315, opacity: 0 },
  { y: -355, opacity: 1, duration: 20 },
  1420
);
game.fromTo(
  '.title_sprigatito',
  { y: -315, opacity: 0 },
  { y: -355, opacity: 1, duration: 20 },
  1430
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
    markers: false,
    scrub: false,

    toggleActions: 'play none reverse reverse',
  },
});
ctr.fromTo(
  '.line1, .line2, .line3',
  { scale: 0 },
  { scale: 1, duration: 2 },
  0
);
ctr.fromTo('.n_n1', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0);
ctr.fromTo('.n_i', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.1);
ctr.fromTo('.n_n2', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.2);
ctr.fromTo('.n_t', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.3);
ctr.fromTo('.n_e', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.4);
ctr.fromTo('.n_n3', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.5);
ctr.fromTo('.n_d', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.6);
ctr.fromTo('.n_o', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.7);
ctr.fromTo(
  '.is, .for',
  { opacity: 0, y: 15 },
  { opacity: 1, y: 0, duration: 0.5 },
  0.7
);
ctr.fromTo(
  '.ctrbody',
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 1 },
  1
);
ctr.fromTo(
  '.ent_ctr',
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 1 },
  1
);

ctr.fromTo('.e_e1', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.8);
ctr.fromTo('.e_v', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.9);
ctr.fromTo('.e_e2', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 1);
ctr.fromTo('.e_r', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 1.1);
ctr.fromTo('.e_y', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 1.2);
ctr.fromTo('.e_o', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 1.3);
ctr.fromTo('.e_n', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 1.4);
ctr.fromTo('.e_e3', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 1.5);

// ------------------------------------------------ controller products page

var ctrpd = gsap.timeline({
  scrollTrigger: {
    trigger: '.ctr_products',
    start: 'top top',
    end: 'bottom center',
    // pin: true,
    markers: false,
    scrub: true,
    ease: 'none',
  },
});

ctrpd.fromTo('.prbar', { y: 0 }, { y: 1800 }, 0);
ctrpd.fromTo('.present', { x: 65, y: -221 }, { x: 65, y: 323 }, 0);

// --------------------- kirby star rotate
const kirbyStar = document.querySelector('.star3');

gsap.to(kirbyStar, {
  rotate: 360,
  transformOrigin: 'center center',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  duration: 1,
  repeat: -1,
  delay: 1,
  repeatDelay: 1,
});

// ------------------------- kirby effect

var kirby = gsap.timeline({
  scrollTrigger: {
    trigger: '.kirby',
    start: 'top 300px',
    end: 'bottom 1000px',
    // pin: true,
    markers: false,
    scrub: false,

    toggleActions: 'play none reverse reverse',
  },
});
kirby.fromTo(
  '.kirby_title, .kirbycap',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 0.5 },
  0
);
kirby.fromTo(
  '.kirbybody',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 0.5 },
  1
);
kirby.fromTo(
  '.star1',
  { scale: 0, rotate: -180 },
  { scale: 1, rotate: 0, duration: 0.5 },
  1
);
kirby.fromTo(
  '.star2',
  { scale: 0, rotate: -180 },
  { scale: 1, rotate: 0, duration: 0.5 },
  1.5
);
kirby.fromTo('.star3', { scale: 0 }, { scale: 1, duration: 0.5 }, 0.5);
kirby.fromTo(
  '.ctrkirby1',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 0.5 },
  0.5
);
kirby.fromTo('.ctrkirby2', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1);
kirby.fromTo('.kirbych', { scale: 0 }, { scale: 1, duration: 0.5 }, 0.5);
9;
// // --------------------------------------- pikachu effect

var pikachu = gsap.timeline({
  scrollTrigger: {
    trigger: '.pikachu',
    start: 'top 300px',
    end: 'bottom 1000px',
    // pin: true,
    markers: false,
    scrub: false,

    toggleActions: 'play none reverse reverse',
  },
});

pikachu.fromTo(
  '.pikachu_title, .pikachucap',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 0.5 },
  0
);
pikachu.fromTo(
  '.pikachubody',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 0.5 },
  0.5
);
pikachu.fromTo(
  '.pikachuball',
  { scale: 0, rotate: -180 },
  { scale: 1, rotate: 0, duration: 0.5 },
  0
);
pikachu.fromTo('.pikachuch', { scale: 0 }, { scale: 1, duration: 0.5 }, 1);
pikachu.fromTo(
  '.pikachu1',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 0.5 },
  0.5
);
pikachu.fromTo('.pikachu2', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.8);

//  mario

var mario = gsap.timeline({
  scrollTrigger: {
    trigger: '.mario',
    start: 'top 300px',
    end: 'bottom 1000px',
    // pin: true,
    markers: false,
    scrub: false,

    toggleActions: 'play none reverse reverse',
  },
});

mario.fromTo(
  '.mario_title, .mariocap',
  { opacity: 0, x: -150 },
  { opacity: 1, x: 0, duration: 0.5 },
  0
);
mario.fromTo(
  '.mariobody1',
  { opacity: 0, x: -30 },
  { opacity: 1, x: 0, duration: 0.5 },
  0.5
);
mario.fromTo(
  '.mariobody2',
  { opacity: 0, x: -30 },
  { opacity: 1, x: 0, duration: 0.5 },
  0.7
);
mario.fromTo('.marioch1', { scale: 0 }, { scale: 1, duration: 0.5 }, 0);
mario.fromTo('.marioch2', { scale: 0 }, { scale: 1, duration: 0.5 }, 0.5);
mario.fromTo('.marioch3', { scale: 0 }, { scale: 1, duration: 0.5 }, 0.5);

mario.fromTo(
  '.ctrmario2',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 0.5 },
  0.5
);
mario.fromTo('.ctrmario1', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0);

mario.fromTo(
  '.marioch4',
  { opacity: 0, y: 130 },
  { opacity: 1, y: 0, duration: 0.5 },
  0.5
);

// ------------------------------- outro page effect

var outro = gsap.timeline({
  scrollTrigger: {
    trigger: '.outro',
    start: 'top 300px',
    // end: 'bottom center',
    // pin: true,
    markers: false,
    scrub: false,
    toggleActions: 'play none reverse reverse',
  },
});

outro.fromTo(
  '.och',
  { scale: 0 },
  { scale: 1, duration: 1.5, ease: 'back.out' },
  0.9
);

outro.fromTo('.outroswitch, .sw_line', { x: 1600 }, { x: 0, duration: 1 }, 0.6);
outro.fromTo(
  '.h_centerline',
  { width: 800, height: 28 },
  { width: 84, height: 28, duration: 1 },
  0.6
);
outro.fromTo(
  '.outroplay, .pl_line, .oicon5',
  { x: 1400 },
  { x: 0, duration: 1 },
  0.6
);
outro.fromTo(
  '.l_btmline',
  { width: 800, height: 16 },
  { width: 81, height: 16, duration: 1 },
  0.6
);

outro.fromTo(
  '.bgplay',
  { opacity: 0, y: -100 },
  { opacity: 1, y: 0, duration: 1 },
  0.5
);
outro.fromTo(
  '.itloud',
  { opacity: 0, y: 100 },
  { opacity: 1, y: 0, duration: 1 },
  0.5
);
outro.fromTo('.outrobody', { y: 700 }, { y: 0, duration: 1 }, 1);
outro.fromTo(
  '.oicon1',
  { y: -300, rotate: -180 },
  { y: 0, rotate: 0, duration: 1 },
  1
);
outro.fromTo(
  '.oicon2',
  { x: -300, rotate: 180 },
  { x: 0, rotate: 0, duration: 1 },
  1
);
outro.fromTo('.oicon3', { opacity: 0 }, { opacity: 1, duration: 1 }, 0.5);
outro.fromTo('.oicon4', { y: 500 }, { y: 0, duration: 1 }, 2);
outro.fromTo(
  '.oicon7',
  { opacity: 0, rotate: 360 },
  { opacity: 1, rotate: 0, duration: 1 },
  0
);
outro.fromTo('.oicon6', { x: 300 }, { x: 0, duration: 1 }, 0.5);
