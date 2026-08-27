/* =================================

   KURD AI

   Main JavaScript

================================= */

/* =================================

   Elements

================================= */

const messageInput =

  document.getElementById("messageInput");

const sendButton =

  document.getElementById("sendButton");

const voiceButton =

  document.getElementById("voiceButton");

const responseText =

  document.getElementById("responseText");

const menuButton =

  document.getElementById("menuButton");

const closeMenu =

  document.getElementById("closeMenu");

const sideMenu =

  document.getElementById("sideMenu");

const overlay =

  document.getElementById("overlay");

const profileButton =

  document.getElementById("profileButton");

const proButton =

  document.getElementById("proButton");

const featureCards =

  document.querySelectorAll(".feature-card");

const navButtons =

  document.querySelectorAll(".nav-button");

/* =================================

   Send Message

================================= */

function sendMessage() {

  const message =

    messageInput.value.trim();

  if (!message) {

    messageInput.focus();

    return;

  }

  responseText.textContent =

    "Kurd AI خەریکی بیرکردنەوەیە...";

  setTimeout(() => {

    responseText.textContent =

      "سڵاو 👋 پرسیارەکەت وەرگیرا. لە هەنگاوی دواتردا دەتوانین Kurd AI بە AI ـی ڕاستەقینە پەیوەست بکەین.";

  }, 900);

  messageInput.value = "";

}

/* Click */

sendButton.addEventListener(

  "click",

  sendMessage

);

/* Enter */

messageInput.addEventListener(

  "keydown",

  function(event) {

    if (event.key === "Enter") {

      sendMessage();

    }

  }

);

/* =================================

   Features

================================= */

const featureMessages = {

  chat:

    "💬 بەشی گفتوگۆی Kurd AI هەڵبژێردرا.",

  image:

    "🖼️ بەشی دروستکردنی وێنە هەڵبژێردرا.",

  writing:

    "✍️ بەشی نووسین هەڵبژێردرا.",

  translate:

    "🌐 بەشی وەرگێڕان هەڵبژێردرا.",

  study:

    "📚 بەشی یارمەتی خوێندن هەڵبژێردرا.",

  code:

    "💻 بەشی کۆدنوسین هەڵبژێردرا.",

  voice:

    "🎙️ بەشی گفتوگۆی دەنگی هەڵبژێردرا.",

  more:

    "⭐ تایبەتمەندییە زۆرترەکانی Kurd AI بە زوویی زیاد دەکرێن."

};

featureCards.forEach(

  function(card) {

    card.addEventListener(

      "click",

      function() {

        const feature =

          card.dataset.feature;

        responseText.textContent =

          featureMessages[feature];

        window.scrollTo({

          top: 0,

          behavior: "smooth"

        });

      }

    );

  }

);

/* =================================

   Side Menu

================================= */

function openMenu() {

  sideMenu.classList.add("show");

  overlay.classList.add("show");

}

function closeSideMenu() {

  sideMenu.classList.remove("show");

  overlay.classList.remove("show");

}

menuButton.addEventListener(

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

/* =================================

   Profile

================================= */

profileButton.addEventListener(

  "click",

  function() {

    responseText.textContent =

      "👤 بەشی پڕۆفایل و هەژمار بە زوویی زیاد دەکرێت.";

  }

);

/* =================================

   Pro

================================= */

proButton.addEventListener(

  "click",

  function() {

    responseText.textContent =

      "👑 Kurd AI Pro بە زوویی بەردەست دەبێت.";

  }

);

/* =================================

   Bottom Navigation

================================= */

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

navButtons.forEach(

  function(button) {

    button.addEventListener(

      "click",

      function() {

        navButtons.forEach(

          function(item) {

            item.classList.remove(

              "active"

            );

          }

        );

        button.classList.add(

          "active"

        );

        const page =

          button.dataset.page;

        responseText.textContent =

          navMessages[page];

      }

    );

  }

);

/* =================================

   Voice Recognition

================================= */

const SpeechRecognition =

  window.SpeechRecognition ||

  window.webkitSpeechRecognition;

if (SpeechRecognition) {

  const recognition =

    new SpeechRecognition();

  recognition.lang = "ku";

  recognition.continuous = false;

  recognition.interimResults = false;

  voiceButton.addEventListener(

    "click",

    function() {

      try {

        recognition.start();

        voiceButton.classList.add(

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

    function(event) {

      const transcript =

        event.results[0][0].transcript;

      messageInput.value =

        transcript;

      responseText.textContent =

        "دەنگەکەت وەرگیرا. ئێستا دەتوانیت بینێریت.";

    };

  recognition.onend =

    function() {

      voiceButton.classList.remove(

        "listening"

      );

    };

  recognition.onerror =

    function() {

      voiceButton.classList.remove(

        "listening"

      );

      responseText.textContent =

        "دەنگ نەگیرا. تکایە دووبارە هەوڵ بدەوە.";

    };

} else {

  voiceButton.addEventListener(

    "click",

    function() {

      responseText.textContent =

        "🎙️ ئەم وێبگەڕە پشتگیری لە ناسینەوەی دەنگ ناکات.";

    }

  );

}

/* =================================

   Initial Greeting

================================= */

setTimeout(

  function() {

    responseText.textContent =

      "سڵاو 👋 چۆنی؟ Kurd AI ئامادەیە یارمەتیت بدات.";

  },

  700

);