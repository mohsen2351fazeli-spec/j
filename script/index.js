const hero11 = document.querySelector(".hero-1-1-1");
const hero12 = document.querySelector(".hero-1-2-1");
const hero13 = document.querySelector(".hero-1-2-2");
const hero1e = document.querySelector(".hero-1-extra");

const hero21 = document.querySelector(".hero-2-2-1");
const hero22 = document.querySelector(".hero-2-1-1");
const hero23 = document.querySelector(".hero-2-1-2");
const hero2e = document.querySelector(".hero-2-extra");

const hero1 = document.querySelector(".hero-1");
const hero2 = document.querySelector(".hero-2");
const hero = document.querySelector(".hero");

const heroextra1kh = document.querySelector(".hero-extra-1-kh");
const heroextra2kh = document.querySelector(".hero-extra-2-kh");

const hed = document.querySelector(".header");

let heroFlag = 1;
let inter;

const hero2play = () => {
  hero22.classList.add("o0");
  hero23.classList.add("o0");
  hero22.classList.add("d4");
  hero23.classList.add("d4");
  hero21.classList.add("rz");
  hero2e.classList.add("r0");
  setTimeout(() => {
    hero22.classList.remove("o0");
    hero23.classList.remove("o0");
    hero22.classList.remove("d4");
    hero23.classList.remove("d4");
    hero21.classList.remove("rz");
    hero2e.classList.remove("r0");
  }, 100);
};

const hero1play = () => {
  hero12.classList.add("o0");
  hero13.classList.add("o0");
  hero12.classList.add("d4");
  hero13.classList.add("d4");
  hero11.classList.add("lz");
  hero1e.classList.add("w35");
  setTimeout(() => {
    hero12.classList.remove("o0");
    hero13.classList.remove("o0");
    hero12.classList.remove("d4");
    hero13.classList.remove("d4");
    hero11.classList.remove("lz");
    hero1e.classList.remove("w35");
  }, 100);
};

hero1play();
heroextra1kh.classList.add("animate");

inter = setInterval(() => {
  if (heroFlag == 1) {
    heroFlag = 2;
    hero1.classList.add("hidden");
    hero2.classList.remove("hidden");
    heroextra2kh.classList.add("animate");
    heroextra1kh.classList.remove("animate");
    hero2play();
  } else {
    heroFlag = 1;
    hero2.classList.add("hidden");
    hero1.classList.remove("hidden");
    heroextra1kh.classList.add("animate");
    heroextra2kh.classList.remove("animate");
    hero1play();
  }
}, 5000);
hero.addEventListener("click", () => {
  clearInterval(inter);
  if (heroFlag == 1) {
    heroFlag = 2;
    hero1.classList.add("hidden");
    hero2.classList.remove("hidden");
    heroextra2kh.classList.add("animate");
    heroextra1kh.classList.remove("animate");
    hero2play();
  } else {
    heroFlag = 1;
    hero2.classList.add("hidden");
    hero1.classList.remove("hidden");
    heroextra1kh.classList.add("animate");
    heroextra2kh.classList.remove("animate");
    hero1play();
  }
  inter = setInterval(() => {
    if (heroFlag == 1) {
      heroFlag = 2;
      hero1.classList.add("hidden");
      hero2.classList.remove("hidden");
      heroextra2kh.classList.add("animate");
      heroextra1kh.classList.remove("animate");
      hero2play();
    } else {
      heroFlag = 1;
      hero2.classList.add("hidden");
      hero1.classList.remove("hidden");
      heroextra1kh.classList.add("animate");
      heroextra2kh.classList.remove("animate");
      hero1play();
    }
  }, 5000);
});

const canavs = document.querySelector(".can");
const ctx = canavs.getContext("2d");

canavs.width = hero.clientWidth;
canavs.height = hero.clientHeight;

if (window.innerWidth < 500) {
  let data = [];
  let count = 50;

  for (let i = 0; i < count; i++) {
    const cer = {
      x: Math.random() * canavs.width,
      y: Math.random() * canavs.height,
      dx: Math.random() * 0.8 * (Math.random() * 2 > 1 ? 1 : -1),
      dy: Math.random() * 0.8 * (Math.random() * 2 > 1 ? 1 : -1),
      rad: Math.random() * 1 + 2,
    };
    data.push(cer);
  }

  const draw = () => {
    ctx.clearRect(0, 0, canavs.width, canavs.height);
    data.forEach((c) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.rad, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(215, 171, 76, .5)";
      ctx.fill();
      c.x += c.dx;
      c.y += c.dy;
      if (c.x > canavs.width || c.x < 0) c.dx *= -1;
      if (c.y > canavs.height || c.y < 0) c.dy *= -1;
    });
    requestAnimationFrame(draw);
  };
  draw();
} else {
  let data = [];
  let count = 100;

  for (let i = 0; i < count; i++) {
    const cer = {
      x: Math.random() * canavs.width,
      y: Math.random() * canavs.height,
      dx: Math.random() * 0.8 * (Math.random() * 2 > 1 ? 1 : -1),
      dy: Math.random() * 0.8 * (Math.random() * 2 > 1 ? 1 : -1),
      rad: Math.random() * 1 + 2,
    };
    data.push(cer);
  }

  const draw = () => {
    ctx.clearRect(0, 0, canavs.width, canavs.height);
    data.forEach((c) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.rad, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(215, 171, 76, .5)";
      ctx.fill();
      c.x += c.dx;
      c.y += c.dy;
      if (c.x > canavs.width || c.x < 0) c.dx *= -1;
      if (c.y > canavs.height || c.y < 0) c.dy *= -1;
    });
    requestAnimationFrame(draw);
  };
  draw();
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    hed.classList.add("h4");
    document.querySelector(".panel-btn").classList.add("t");
  } else {
    hed.classList.remove("h4");
    document.querySelector(".panel-btn").classList.remove("t");
  }
});

// ///////////////////////////////////////////////

const throne = document.querySelector(".throne");
const thcan = document.querySelector(".thcan");
const gtx = thcan.getContext("2d");

thcan.width = throne.clientWidth;
thcan.height = throne.clientHeight;

const centerx = thcan.width / 2;
const centery = thcan.height / 2;

const thronepic = new Image();
const wei2pic = new Image();
const wupic = new Image();
const shupic = new Image();

thronepic.src = "../pngpic/throne.png";
wei2pic.src = "../pngpic/wei2.png";
wupic.src = "../pngpic/wu.png";
shupic.src = "../pngpic/shu.png";

let t = 0;

if (window.innerWidth > 500) {
  let posWei2 = {
    x: centerx + (centerx / 2) * Math.cos(-Math.PI / 2) - (2.1 * 250) / 2,
    y: centery - centery / 2 - 250 / 2,
  };
  let posWu = {
    x: centerx + (centerx / 2) * Math.cos(Math.PI / 4) - (1.28 * 250) / 2,
    y: centery + centery / 2 - 250 / 2 - 40,
  };
  let posShu = {
    x:
      centerx +
      (centerx / 2) * Math.cos(Math.PI / 2 + Math.PI / 4) -
      (0.92 * 250) / 2,
    y: centery + centery / 2 - 250 / 2 - 40,
  };

  const animate = () => {
    gtx.clearRect(0, 0, thcan.width, thcan.height);

    const cx = centerx;
    const cy = centery;

    gtx.drawImage(thronepic, cx - 65, cy - 60, 130, 130);

    const shakeX = Math.sin(t) * 2;
    const shakeY = Math.cos(t) * 2;

    gtx.drawImage(
      wei2pic,
      posWei2.x + shakeX * 0.7,
      posWei2.y + shakeY * 0.7,
      2.1 * 250,
      250,
    );

    gtx.drawImage(
      wupic,
      posWu.x + -shakeX * 0.8,
      posWu.y + shakeY * 0.8,
      1.28 * 250,
      250,
    );

    gtx.drawImage(
      shupic,
      posShu.x + -shakeX * 1.1,
      posShu.y + -shakeY * 1.1,
      0.92 * 250,
      250,
    );

    t += 0.03;

    requestAnimationFrame(animate);
  };
  let loadCount = 0;
  const startIfReady = () => {
    loadCount += 1;
    if (loadCount === 4) animate();
  };

  thronepic.onload = startIfReady;
  wei2pic.onload = startIfReady;
  wupic.onload = startIfReady;
  shupic.onload = startIfReady;
} else {
  let posWei2 = {
    x: centerx + (centerx / 2) * Math.cos(-Math.PI / 2) - (2.1 * 100) / 2,
    y: centery - centery / 2 - 100 / 2,
  };
  let posWu = {
    x: centerx + (centerx / 2) * Math.cos(Math.PI / 4) - (1.28 * 100) / 2,
    y: centery + centery / 2 - 100 / 2 - 40,
  };
  let posShu = {
    x:
      centerx +
      (centerx / 2) * Math.cos(Math.PI / 2 + Math.PI / 4) -
      (0.92 * 100) / 2,
    y: centery + centery / 2 - 100 / 2 - 40,
  };

  const animate = () => {
    gtx.clearRect(0, 0, thcan.width, thcan.height);

    const cx = centerx;
    const cy = centery;

    gtx.drawImage(thronepic, cx - 25, cy - 30, 50, 50);

    const shakeX = Math.sin(t) * 2;
    const shakeY = Math.cos(t) * 2;

    gtx.drawImage(
      wei2pic,
      posWei2.x + shakeX * 0.7,
      posWei2.y + shakeY * 0.7,
      2.1 * 100,
      100,
    );

    gtx.drawImage(
      wupic,
      posWu.x + -shakeX * 0.8,
      posWu.y + shakeY * 0.8,
      1.28 * 100,
      100,
    );

    gtx.drawImage(
      shupic,
      posShu.x + -shakeX * 1.1,
      posShu.y + -shakeY * 1.1,
      0.92 * 100,
      100,
    );

    t += 0.015;

    requestAnimationFrame(animate);
  };
  let loadCount = 0;
  const startIfReady = () => {
    loadCount += 1;
    if (loadCount === 4) animate();
  };

  thronepic.onload = startIfReady;
  wei2pic.onload = startIfReady;
  wupic.onload = startIfReady;
  shupic.onload = startIfReady;
}

const musicTime = document.querySelector(".music-time");
const musicName = document.querySelector(".music-name");
const musicPro = document.querySelector(".music-pro");
const musicCer = document.querySelector(".music-cer");
const musicProDad = document.querySelector(".music-pro-dad");
const audio = document.querySelector(".audio");
const omgg = document.querySelectorAll(".omgg");
const omggt = document.querySelectorAll(".omg-text");
const bar = document.querySelector(".music-bar");
const closebtn = document.querySelector(".close");

let isDrag = false;
let isplay = false;

omgg.forEach((o, i) => {
  o.addEventListener("click", () => {
    audio.setAttribute("src", `../music/${o.dataset.id}.mp3`);
    musicName.innerHTML = omggt[i].innerHTML;
    isplay = true;
    audio.play();
    bar.classList.remove("h0");
    btn.classList.remove("is-stop");
  });
});

const navHandler = (x) => {
  musicPro.style.width = `${x}%`;
  musicCer.style.left = `calc(${x}% - 0.125rem * 4)`;
};
const timeHandler = (t) => {
  musicTime.innerHTML = `${Math.floor(t / 60)}:${Math.floor(t % 60)
    .toString()
    .padStart(2, "0")}`;
};
audio.addEventListener("timeupdate", () => {
  navHandler((audio.currentTime / audio.duration) * 100);
  timeHandler(audio.currentTime);
});
musicProDad.addEventListener("pointerdown", (e) => {
  isDrag = true;
  musicProDad.setPointerCapture(e.pointerId);

  const rect = musicProDad.getBoundingClientRect();
  const x = e.clientX - rect.left;
  let percent = (x / musicProDad.clientWidth) * 100;

  percent = Math.min(Math.max(percent, 0), 100);

  audio.currentTime = (percent / 100) * audio.duration;

  musicProDad.classList.remove("h25s");
  musicCer.classList.add("hidden");
  audio.pause();

  navHandler(percent);
  timeHandler(audio.currentTime);
});
musicProDad.addEventListener("pointermove", (e) => {
  if (!isDrag) return;

  const rect = musicProDad.getBoundingClientRect();
  const x = e.clientX - rect.left;
  let percent = (x / musicProDad.clientWidth) * 100;

  percent = Math.min(Math.max(percent, 0), 100);

  audio.currentTime = (percent / 100) * audio.duration;

  navHandler(percent);
  timeHandler(audio.currentTime);
});
musicProDad.addEventListener("pointerup", (e) => {
  isDrag = false;
  musicProDad.releasePointerCapture(e.pointerId);
  if (!isplay) {
    btn.classList.add("is-stop");
    audio.pause();
    isplay = false;
  } else {
    btn.classList.remove("is-stop");
    audio.play();
    isplay = true;
  }
  musicCer.classList.remove("hidden");
  musicProDad.classList.add("h25s");
});
const btn = document.getElementById("main-btn");

btn.onclick = () => {
  if (isplay) {
    btn.classList.add("is-stop");
    audio.pause();
    isplay = false;
  } else {
    btn.classList.remove("is-stop");
    audio.play();
    isplay = true;
  }
};
closebtn.addEventListener("click", () => {
  btn.classList.remove("is-stop");
  audio.pause();
  isplay = false;
  bar.classList.add("h0");
});
// poster
const posterdad = document.querySelector(".poster-dad");
const poster = document.querySelector(".poster");
const btx = poster.getContext("2d");

poster.width = posterdad.clientWidth;
poster.height = posterdad.clientHeight;

const pcenterx = poster.width / 2;
const pcentery = poster.height / 2;

const caopic = new Image();
const glpic = new Image();
const mainpic = new Image();

caopic.src = "../poster/caocao.png";
glpic.src = "../poster/guanlobo.png";
mainpic.src = "../poster/threee.png";

if (window.innerWidth > 500) {
  const f = () => {
    btx.clearRect(0, 0, poster.width, poster.height);

    btx.drawImage(
      mainpic,
      pcenterx - (300 * 2.54) / 2,
      pcentery - 150,
      300 * 2.54,
      300,
    );
  };

  let ploadCount = 0;
  const pstartIfReady = () => {
    ploadCount += 1;
    if (ploadCount === 3) f();
  };

  caopic.onload = pstartIfReady;
  glpic.onload = pstartIfReady;
  mainpic.onload = pstartIfReady;
} else {
  const f = () => {
    btx.clearRect(0, 0, poster.width, poster.height);

    btx.drawImage(
      mainpic,
      pcenterx - (150 * 2.54) / 2,
      pcentery - 75,
      150 * 2.54,
      150,
    );
  };

  let ploadCount = 0;
  const pstartIfReady = () => {
    ploadCount += 1;
    if (ploadCount === 3) f();
  };

  caopic.onload = pstartIfReady;
  glpic.onload = pstartIfReady;
  mainpic.onload = pstartIfReady;
}

// /////////////////////////
const magaledad = document.querySelector(".magale-1-pic");
const cers = document.querySelectorAll(".cer");

cers.forEach((c) => {
  c.classList.add("qr");
});

magaledad.addEventListener("mouseenter", () => {
  cers[2].classList.remove("qr");
  setTimeout(() => {
    cers[1].classList.remove("qr");
  }, 20);
  setTimeout(() => {
    cers[0].classList.remove("qr");
  }, 40);
});

magaledad.addEventListener("mouseout", () => {
  cers[2].classList.add("ql");
  setTimeout(() => {
    cers[1].classList.add("ql");
  }, 20);
  setTimeout(() => {
    cers[0].classList.add("ql");
  }, 40);
  setTimeout(() => {
    cers.forEach((c) => {
      c.classList.add("qr");
      c.classList.remove("ql");
    });
  }, 300);
});

// can resize

// thtext

const ex = document.querySelector(".thtext-extra-extra");
const thtext = document.querySelector(".thtext");
const thchs = document.querySelectorAll(".th-child");
let cactive = 0;

const thhandler = () => {
  if (cactive == 0) {
    ex.className = "thtext-extra-extra red r1";
  } else if (cactive == 1) {
    ex.className = "thtext-extra-extra green r2";
  } else if (cactive == 2) {
    ex.className = "thtext-extra-extra blue r3";
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const index = Array.from(thchs).indexOf(e.target);
        cactive = index;
        thhandler();
      }
    });
  },
  {
    threshold: 0.5,
    rootMargin: `0px`,
  },
);
thchs.forEach((t) => {
  observer.observe(t);
});
// panel
const pbtn = document.querySelector(".panel-btn");
const panel = document.querySelector(".panel");
const hola = document.querySelector(".hola");
const ca = document.querySelector(".ca");
const cb = document.querySelector(".cb");
const cc = document.querySelector(".cc");

pbtn.addEventListener("click", () => {
  panel.classList.toggle("w0");
  pbtn.classList.toggle("r12");
  hola.classList.toggle("hidt");
  cb.classList.toggle("hidt");
  ca.classList.toggle("cat");
  cc.classList.toggle("cct");
});
hola.addEventListener("click", () => {
  panel.classList.toggle("w0");
  pbtn.classList.toggle("r12");
  hola.classList.toggle("hidt");
  cb.classList.toggle("hidt");
  ca.classList.toggle("cat");
  cc.classList.toggle("cct");
});
////////////////////////////////////
const pers = document.querySelectorAll(".person");
const pexs = document.querySelectorAll(".p-ex");
const hals = document.querySelectorAll(".person-hale");
const enf = document.querySelectorAll(".person-enf");
const persons = document.querySelectorAll(".person");
let cuactive = 0;

pexs.forEach((p) => {
  p.classList.add("hidden");
});

if (window.innerWidth < 500) {
  pexs.forEach((p) => {
    p.classList.remove("hidden");
  });
  persons[1].classList.add("sso");
  persons[1].classList.add("sss");
  persons[2].classList.add("sso");
  persons[2].classList.add("sss");
  persons[3].classList.add("sso");
  persons[3].classList.add("sss");

  const phandler = () => {
    persons.forEach((p) => {
      p.classList.add("sso");
      p.classList.add("sss");
    });
    persons[cuactive].classList.remove("sso");
    persons[cuactive].classList.remove("sss");
  };
  // //////////
  const observerr = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const index = Array.from(persons).indexOf(e.target);
          cuactive = index;

          phandler();
        }
      });
    },
    {
      threshold: 0.8,
      rootMargin: `0px`,
    },
  );
  persons.forEach((t) => {
    observerr.observe(t);
  });
  pexs.forEach((p, i) => {
    p.addEventListener("click", () => {
      pexs[i].classList.toggle("ro");
      pexs[i].classList.toggle("lk");
      hals[i].classList.toggle("rt");
      enf[i].classList.toggle("re");
    });
  });
}
