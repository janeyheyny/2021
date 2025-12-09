gsap.registerPlugin(ScrollTrigger); //this is to make the link to js extra secure

/* ######### INTRO ######*/
gsap.to("#pink-circle", {
  y: "223%",
  scale: 1.1,
  duration: 0.8,
});

var pinkPulse = gsap.timeline({ repeat: -1 });

pinkPulse.to("#pink-circle", {
  delay: 1.5,
  backgroundColor: "#DF4747",
});

pinkPulse.to("#pink-circle", {
  backgroundColor: "#F67575",
});

gsap.to("#orange-circle", {
  y: "823%",
  scale: 1.1,
  duration: 2,
});

gsap.to("#blue-circle", {
  y: "946%",
  scale: 1.1,
  duration: 1.5,
});

gsap.to("#green-bg", {
  delay: 2,
  opacity: 0,
  duration: 3,
});

/* ######### SCROLL TRIGGER######*/

const headings = gsap.utils.toArray(".heading");

headings.forEach((heading) => {
  gsap.from(heading, {
    delay: 0.1,
    x: -100,
    opacity: 0,
    duration: 2.8,

    scrollTrigger: {
      trigger: heading,
      scrub: 1,
    },
  });
});

/* ######### SPEECH ######*/

const spoken = gsap.utils.toArray(".speech");

spoken.forEach((speech) => {
  gsap.from(speech, {
    delay: 0.9,
    x: -100,
    y: 30,
    opacity: 0,
    duration: 2.8,
    ease: "elastic.out(1,0.3)",

    scrollTrigger: {
      trigger: speech,
    },
  });
});

gsap.from("#welcome-paragraph", {
  scrollTrigger: "#welcome-paragraph",
  delay: 1,
  y: 20,
  scale: 1.1,
  duration: 2,
  scrub: 1,
});

gsap.from("#see-you-speech", {
  scrollTrigger: "#see-you-speech",
  opacity: 0,
});

/* ######### DINOS ######*/

const dinos = gsap.utils.toArray(".dino");

dinos.forEach((dino) => {
  gsap.from(dino, {
    delay: 0.5,
    scale: 0.8,

    scrollTrigger: {
      trigger: dino,
      scrub: 1,
    },
  });
});

/* ######### ICONS ######*/
const icons = gsap.utils.toArray(".icon");

icons.forEach((icon) => {
  gsap.from(icon, {
    delay: 0.1,
    x: 400,
    y: 400,
    opacity: 0,
    rotation: 90,

    scrollTrigger: {
      trigger: icon,
    },
  });
});

/* ######### GAME ######*/

var excavateBtn = document.getElementById("excavate-button");

var btnTl = gsap.timeline({ repeat: 0 });

var sandTl = gsap.timeline({ repeat: 0 });

excavateBtn.addEventListener("click", function () {
  btnTl.to("#excavate-button", {
    scale: 1.1,
    duration: 0.9,
  });

  btnTl.to("#excavate-button", {
    scale: 0,
    display: "none",
  });

  sandTl.to("#game-section", {
    backgroundImage: "none",
    backgroundColor: "#B5AFAD",
  });

  sandTl.to(
    "#game-ground",
    {
      opacity: 0,
      rotation: -160,
      scale: 5,
      opacity: 0,
      display: "none",
      duration: 3,
    },
    "<"
  );
});
