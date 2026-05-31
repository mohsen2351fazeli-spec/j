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

const pers = document.querySelectorAll(".person");
const pexs = document.querySelectorAll(".p-ex");
const hals = document.querySelectorAll(".person-hale");
const enf = document.querySelectorAll(".person-enf");
const persons = document.querySelectorAll(".person");
pexs.forEach((p, i) => {
  p.addEventListener("click", () => {
    pexs[i].classList.toggle("ro");
    pexs[i].classList.toggle("lk");
    hals[i].classList.toggle("rt");
    enf[i].classList.toggle("re");
  });
});
pexs.forEach((p) => {
  p.classList.add("hidden");
});
if (window.innerWidth < 500) {
  pexs.forEach((p) => {
    p.classList.remove("hidden");
  });
}
