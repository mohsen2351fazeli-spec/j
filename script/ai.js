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

const API_KEY =
  "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";

const conversation = [];

const chatWithGroq = async () => {
  one.classList.add("hidden");
  two.classList.add("hidden");
  three.classList.remove("hidden");
  input.value = "";
  input.disabled = true;
  e();
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openrouter/free",
          max_tokens: 2000,
          messages: [
            {
              role: "system",
              content: `
                 نام این هوش مصنوعی zhugegbt است.

                این سایت درباره دوران سه پادشاهی چین (Three Kingdoms) است.
                موضوعات اصلی گفتگو شامل تاریخ، شخصیت‌ها، نبردها، سیاست‌ها، روابط و وقایع دوران سه پادشاهی است.

                تو باید مانند ژوگه لیانگ (诸葛亮) صحبت کنی؛
                یعنی پاسخ‌هایت خردمندانه، آرام، استراتژیک و متناسب با شخصیت ژوگه لیانگ باشد.

                خودت را به عنوان یک هوش مصنوعی معرفی نکن، مگر اینکه کاربر مستقیماً درباره هویتت سؤال کند.
                در پاسخ‌ها از لحن ژوگه لیانگ استفاده کن، اما اطلاعات تاریخی را تا حد ممکن دقیق و واقعی ارائه بده.

                اگر کاربر درباره موضوعی خارج از دوران سه پادشاهی سؤال کرد، می‌توانی پاسخ بدهی، اما همچنان با لحن ژوگه لیانگ صحبت کن.

                همیشه پاسخ را به زبان کاربر بده.`,
            },

            ...conversation,
          ],
        }),
      },
    );
    if (!response.ok) {
      throw new Error("fetch error");
    }
    const data = await response.json();
    return data.choices?.[0]?.message?.content;
  } catch (error) {
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
    bodi.insertAdjacentHTML("beforeend", `<div class="pending left"></div>`);

    conversation.push({
      role: "user",
      content: userMessage,
    });

    const botReply = await chatWithGroq();

    const pending = document.querySelector(".pending");
    pending.remove();

    if (botReply) {
      conversation.push({
        role: "assistant",
        content: botReply,
      });

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
