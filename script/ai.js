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

// //////////////////
const titr = document.querySelector(".zhuge");
const inputdad = document.querySelector(".input-dad");
const input = document.querySelector(".ques");
const btn = document.querySelector(".send-btn");
const bodi = document.querySelector(".wwe");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const main2 = document.querySelector(".main-2");

const e = () => {
  if (input.value.trim()) {
    btn.classList.add("o1");
  } else {
    btn.classList.remove("o1");
  }
};

input.addEventListener("keyup", e);

const go = () => {
  inputdad.classList.add("bottom");
  titr.classList.add("hidden");
};
const remove = () => {
  document.querySelector(".spy").remove();
};
const add = () => {
  bodi.insertAdjacentHTML("beforeend", `<div class="spy "></div>`);
};
const scrol = () => {
  document
    .querySelector(".spy")
    .scrollIntoView({ behavior: "smooth", block: "end" });
};
//
// {
//   const API_KEY = "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";

//   const chatWithGroq = async (prompt) => {
//     one.classList.add("hidden");
//     two.classList.add("hidden");
//     three.classList.remove("hidden");
//     const response = await fetch(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         method: "POST",
//         headers: {
//           Authorization:
//             "Bearer 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",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           model: "llama-3.3-70b-versatile",
//           messages: [
//             {
//               role: "user",
//               content: prompt,
//             },
//           ],
//         }),
//       },
//     );

//     const data = await response.json();
//     console.log(data);

//     return data.choices[0].message.content;
//   };
//   // /////////////////
//   btn.addEventListener("click", () => {
//     if (input.value) {
//       go();
//       bodi.insertAdjacentHTML(
//         "beforeend",
//         `<div class="right">${input.value}</div>`,
//       );
//       bodi.insertAdjacentHTML(
//         "beforeend",
//         `<div class="left">${chatWithGroq(input.value)}</div>`,
//       );
//       lefthandler();
//       one.classList.remove("hidden");
//       two.classList.remove("hidden");
//       three.classList.add("hidden");
//     }
//     input.value = "";
//     e();
//   });
//   const lefthandler = () => {
//     const date = document.querySelectorAll(".left");
//     const last = date[date.length - 1];
//     let value = last.innerHTML;
//     last.innerHTML = "";
//     let inner = "";

//     for (let i = 0; i < value.length; i++) {
//       setTimeout(
//         () => {
//           inner += value[i];
//           last.innerHTML = inner;
//         },
//         10 + i * 10,
//       );
//     }
//   };
// }

const API_KEY = "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";

const chatWithGroq = async (prompt) => {
  one.classList.add("hidden");
  two.classList.add("hidden");
  three.classList.remove("hidden");
  input.value = "";
  input.disabled = true;
  e();
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
messages: [
  { role: "system", content: "تو یک مورخ متخصص در دوره سه پادشاهی چین هستی. فقط به سوالات مرتبط با این دوره پاسخ بده و با لحن حماسی و محترمانه صحبت کن." },
  { role: "user", content: prompt }
],
        }),
      },
    );
    if (!response.ok) {
      throw new Error("fetch error");
    }
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    //
    console.error("error");
    one.classList.remove("hidden");
    two.classList.remove("hidden");
    three.classList.add("hidden");
    input.disabled = false;
    bodi.insertAdjacentHTML(
      "beforeend",
      `<div class="left ">oops!,something wrong, please try again</div>`,
    );
    scrol();
  }
};
btn.addEventListener("click", async () => {
  if (input.value) {
    go();
    const userMessage = input.value;
    bodi.insertAdjacentHTML(
      "beforeend",
      `<div class="right">${userMessage}</div>`,
    );

    const botReply = await chatWithGroq(userMessage);

    if (botReply) {
      bodi.insertAdjacentHTML("beforeend", `<div class="left"></div>`);

      const lastLeft = document.querySelectorAll(".left");
      const last = lastLeft[lastLeft.length - 1];
      let inner = "";
      for (let i = 0; i < botReply.length; i++) {
        setTimeout(
          () => {
            inner += botReply[i];
            last.innerHTML = inner;
          },
          10 + i * 10,
        );
        scrol();
      }
      one.classList.remove("hidden");
      two.classList.remove("hidden");
      three.classList.add("hidden");
      input.disabled = false;
    }
  }
});

//
