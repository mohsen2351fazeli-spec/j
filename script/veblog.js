const hed = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    hed.classList.add("h4");
    document.querySelector(".panel-btn").classList.add("t");
  } else {
    hed.classList.remove("h4");
    document.querySelector(".panel-btn").classList.remove("t");
  }
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

const magaledad = document.querySelectorAll(".magale-1-pic");
const cers = document.querySelectorAll(".cer");

cers.forEach((c) => {
  c.classList.add("qr");
});

magaledad.forEach((m, i) => {
  m.addEventListener("mouseenter", () => {
    cers[i * 3 + 2].classList.remove("qr");
    setTimeout(() => {
      cers[i * 3 + 1].classList.remove("qr");
    }, 20);
    setTimeout(() => {
      cers[i * 3 + 0].classList.remove("qr");
    }, 40);
  });

  m.addEventListener("mouseout", () => {
    cers[i * 3 + 2].classList.add("ql");
    setTimeout(() => {
      cers[i * 3 + 1].classList.add("ql");
    }, 20);
    setTimeout(() => {
      cers[i * 3 + 0].classList.add("ql");
    }, 40);
    setTimeout(() => {
      cers[i * 3 + 0].classList.add("qr");
      cers[i * 3 + 0].classList.remove("ql");
      cers[i * 3 + 1].classList.add("qr");
      cers[i * 3 + 1].classList.remove("ql");
      cers[i * 3 + 2].classList.add("qr");
      cers[i * 3 + 2].classList.remove("ql");
    }, 300);
  });
});
