const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 2, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});


ScrollReveal().reveal('.aboutSubFirst', { delay: 400 });
ScrollReveal().reveal('.aboutSubSecond', { delay: 700 });
ScrollReveal().reveal('.aboutSubThird', { delay: 1000});
ScrollReveal().reveal('.underTheEarth', { delay: 1300 });
ScrollReveal().reveal('.aboutItemDownContent', { delay: 1400 });
ScrollReveal().reveal('.us', { delay: 200 });

gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    scrub: true,
    pin: true,
    start: "center center",
    end: "bottom -100%",
    toggleClass: "active",
    ease: "power2"
  }
});

gsap.to(".hero__image", {
  scrollTrigger: {
    trigger: ".hero",
    scrub: 0.5,
    start: "top bottom",
    end: "bottom -300%",
    ease: "power2"
  },
  y: "-30%"
});

let delSections = document.querySelectorAll(".delayed-section");

delSections.forEach(section => {
  
  let imageAnim = gsap.to(section.querySelector("img"), {
    y: "-80vh",
    ease: "none",
    paused: true
  });
  
  let progressTo = gsap.quickTo(imageAnim, "progress", {ease: "power3", duration: parseFloat(section.dataset.scrub) || 0.1});
  
  gsap.to(section.querySelector(".innerContainer"), {
    y: "100vh",
    ease: "none",
    scrollTrigger: {
      scrub: true,
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onUpdate: self => progressTo(self.progress)
    }
  });

});

function portfolio() {
  gsap.from('.work__item, .work__item-num', {
    y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
    scrollTrigger: {
      trigger: '.work',
      start: 'top bottom',
      scrub: 1.9
    }
  })
  gsap.from('.work__item-img img', {
    scale: 1.6,
    scrollTrigger: {
      trigger: '.work__wrapp',
      start: 'top bottom',
      scrub: 1.9
    }
  })
}
portfolio();



function footer() {
  gsap.from('.footer__div span', {
    y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
    opacity: 0,
    scrollTrigger: {
      trigger: '.footer',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 1.9
    }
  })
}
footer();

