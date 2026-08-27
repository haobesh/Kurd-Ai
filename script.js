/* =========================================

   Kurd AI

   Main JavaScript

========================================= */

const input = document.getElementById("promptInput");

const sendBtn = document.getElementById("sendBtn");

const micBtn = document.getElementById("micBtn");

const responseText =

  document.getElementById("responseText");

const menuBtn =

  document.getElementById("menuBtn");

const closeMenu =

  document.getElementById("closeMenu");

const sideMenu =

  document.getElementById("sideMenu");

const overlay =

  document.getElementById("overlay");

const profileBtn =

  document.getElementById("profileBtn");

const proBtn =

  document.getElementById("proBtn");

const featureCards =

  document.querySelectorAll(".feature-card");

const navItems =

  document.querySelectorAll(".nav-item");

/* =========================================

   AI Response

========================================= */

function sendMessage() {

  const message = input.value.trim();

  if (!message) {

    input.focus();

    return;

  }

  responseText.textContent =

    "Kurd AI خەریکی بیرکردنەوەیە...";

  sendBtn.disabled = true;

  setTimeout(() => {

    responseText.textContent =

      "سڵاو 👋 پرسیارەکەت وەرگیرا. ئەمە وەڵامی تاقیکردنەوەی Kurd AI ـە. دواتر AI ـی ڕاستەقینە بە API پەیوەست دەکەین.";

    sendBtn.disabled = false;

  }, 900);

  input.value = "";

}

/* Send button */

sendBtn.addEventListener(

  "click",

  sendMessage

);

/* Enter key */

input.addEventListener(

  "keydown",

  function (event) {

    if (event.key === "Enter") {

      event.preventDefault();

      sendMessage();

    }

  }

);

/* =========================================

   Feature Cards

========================================= */

const featureMessages = {

  chat:

    "💬 بەشی گفتوگۆی Kurd AI هەڵبژێردرا.",

  image:

    "🖼️ بەشی دروستکردنی وێنە هەڵبژێردرا.",

  writing:

    "✍️ بەشی یارمەتی نووسین هەڵبژێردرا.",

  translate:

    "🌐 بەشی وەرگێڕان هەڵبژێردرا.",

  study:

    "📚 بەشی یارمەتی خوێندن هەڵبژێردرا.",

  code:

    "💻 بەشی کۆدنوسین هەڵبژێردرا.",

  voice:

    "🎙️ بەشی گفتوگۆی دەنگی هەڵبژێردرا.",

  more:

    "⭐ بەشی تایبەتمەندییە زیاترەکان هەڵبژێردرا."

};

featureCards.forEach(

  function (card) {

    card.addEventListener(

      "click",

      function () {

        const feature =

          card.dataset.feature;

        responseText.textContent =

          featureMessages[feature] ||

          "Kurd AI";

        window.scrollTo({

          top: 0,

          behavior: "smooth"

        });

      }

    );

  }

);

/* =========================================

   Side Menu

========================================= */

function openMenu() {

  sideMenu.classList.add("show");

  overlay.classList.add("show");

  document.body.style.overflow =

    "hidden";

}

function closeSideMenu() {

  sideMenu.classList.remove("show");

  overlay.classList.remove("show");

  document.body.style.overflow =

    "";

}

menuBtn.addEventListener(

  "click",

  openMenu

);

closeMenu.addEventListener(

  "click",

  closeSideMenu

);

overlay.addEventListener(

  "click",

  closeSideMenu

);

/* =========================================

   Profile

========================================= */

profileBtn.addEventListener(

  "click",

  function () {

    responseText.textContent =

      "👤 بەشی پڕۆفایل و هەژمار بە زوویی زیاد دەکرێت.";

  }

);

/* =========================================

   Pro

========================================= */

proBtn.addEventListener(

  "click",

  function () {

    responseText.textContent =

      "👑 Kurd AI Pro بە زوویی بەردەست دەبێت.";

  }

);

/* =========================================

   Bottom Navigation

========================================= */

const navMessages = {

  home:

    "🏠 بەخێربێیت بۆ Kurd AI.",

  history:

    "◷ مێژووی گفتوگۆکان لێرە دەردەکەون.",

  favorites:

    "♡ دڵخوازەکانت لێرە دەبینیت.",

  projects:

    "□ پڕۆژەکانت لێرە دەبینیت.",

  settings:

    "⚙️ ڕێکخستنەکانی Kurd AI."

};

navItems.forEach(

  function (item) {

    item.addEventListener(

      "click",

      function () {

        navItems.forEach(

          function (nav) {

            nav.classList.remove(

              "active"

            );

          }

        );

        item.classList.add(

          "active"

        );

        const section =

          item.dataset.nav;

        responseText.textContent =

          navMessages[section] ||

          "Kurd AI";

      }

    );

  }

);

/* =========================================

   Voice Recognition

========================================= */

const SpeechRecognition =

  window.SpeechRecognition ||

  window.webkitSpeechRecognition;

if (SpeechRecognition) {

  const recognition =

    new SpeechRecognition();

  recognition.continuous = false;

  recognition.interimResults = false;

  recognition.lang = "ku";

  micBtn.addEventListener(

    "click",

    function () {

      try {

        recognition.start();

        micBtn.classList.add(

          "listening"

        );

        responseText.textContent =

          "🎙️ گوێم لێتە... قسە بکە.";

      } catch (error) {

        console.log(error);

      }

    }

  );

  recognition.onresult =

    function (event) {

      const transcript =

        event.results[0][0].transcript;

      input.value =

        transcript;

      responseText.textContent =

        "دەنگەکەت وەرگیرا. ئێستا دەتوانیت بینێریت.";

    };

  recognition.onend =

    function () {

      micBtn.classList.remove(

        "listening"

      );

    };

  recognition.onerror =

    function () {

      micBtn.classList.remove(

        "listening"

      );

      responseText.textContent =

        "دەنگ نەگیرا. تکایە دووبارە هەوڵ بدەوە.";

    };

} else {

  micBtn.addEventListener(

    "click",

    function () {

      responseText.textContent =

        "🎙️ ئەم وێبگەڕە پشتگیری لە ناسینەوەی دەنگ ناکات.";

    }

  );

}

/* =========================================

   Escape = Close Menu

========================================= */

document.addEventListener(

  "keydown",

  function (event) {

    if (

      event.key === "Escape" &&

      sideMenu.classList.contains("show")

    ) {

      closeSideMenu();

    }

  }

);

/* =========================================

   Start Message

========================================= */

setTimeout(

  function () {

    responseText.textContent =

      "سڵاو 👋 چۆنی؟ Kurd AI ئامادەیە یارمەتیت بدات.";

  },

  500

);