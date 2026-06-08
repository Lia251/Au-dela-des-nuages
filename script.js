"use strict";

const root = document.querySelector( ':root' ),
      body = document.querySelector( 'body' ),
      values = {
        scrollHeight: body.scrollHeight,
        screenHeight: window.innerHeight,
        screenWidth: window.innerWidth,
        mx: 0,
        my: 0,
        deltaY: null,
        lastDeltaY: null,
        wheeling: false
      };

const nav = document.querySelector(".nav--menu");
const openBtn = document.querySelector(".menu--btn");
const closeBtn = document.querySelector(".nav--close");


if(openBtn){
  openBtn.addEventListener("click", () => {
    nav.classList.add("open");
  })
}

if(closeBtn){
  closeBtn.addEventListener("click", () => {
    nav.classList.remove("open");
  })
}

const updateScroller = () => {
  const scrollY = window.scrollY;
  const currentY = scrollY / (values.scrollHeight - values.screenHeight);
  root.style.setProperty( '--y', currentY );

  console.log(scrollY,values.scrollHeight);
};

const onResize = () => {
  values.scrollHeight = body.scrollHeight;
 
  values.screenHeight = window.innerHeight;
  values.screenWidth = window.innerWidth;
  updateScroller();
};

window.addEventListener( 'resize', () => {
  onResize();
});

window.addEventListener( 'scroll', () => {
  updateScroller();
});

window.addEventListener("mousemove", (event) => {
    values.mx = (event.clientX / values.screenWidth -0.5) *2;
    values.my = (event.clientY / values.screenHeight -0.5) *2;
    
    root.style.setProperty("--mx", values.mx);
    root.style.setProperty("--my", values.my);
});

onResize();

// PAGE 2

const pins = document.querySelectorAll(".carte .pin");
const closeModals = document.querySelectorAll(".modal--close");
const modals = document.querySelectorAll(".modal");

pins.forEach(pin => {
  pin.addEventListener('click', () => {
    const targetId = pin.getAttribute('data-target');
    const targetModal = document.getElementById(targetId);
    if (targetModal) {
      targetModal.classList.add('active');
    }
  })
})

closeModals.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    const modal = closeBtn.closest('.modal');
    if (modal) {
      modal.classList.remove('active');
    }
  });
});

modals.forEach(modal => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('active');
    }
  });
});