const input = document.getElementById("promptInput");

const sendBtn = document.getElementById("sendBtn");

const micBtn = document.getElementById("micBtn");

const responseText = document.getElementById("responseText");

const menuBtn = document.getElementById("menuBtn");

const closeMenu = document.getElementById("closeMenu");

const sideMenu = document.getElementById("sideMenu");

const overlay = document.getElementById("overlay");

const featureCards = document.querySelectorAll(".feature-card");

const navItems = document.querySelectorAll(".nav-item");

const profileBtn = document.getElementById("profileBtn");

const proBtn = document.getElementById("proBtn");

/* --------------------------------

   Chat

-------------------------------- */

function sendMessage() {

  const message = input.value.trim();

  if (!message) {

    input.focus();

    return;

  }

  responseText.textContent = "Kurd AI خەریکی بیرکردنەوەیە...";

  setTimeout(() => {

    responseText.textContent =

      "ئەمە وەڵامی تاقیکردنەوەی Kurd AI ـە. دواتر دەتوانین AI ـی ڕاستەقینە بە API ـەوە پەیوەندی پێوە بکەین.";

  }, 900);

  input.value = "";

}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {

    sendMessage();

  }

});

/* --------------------------------

   Feature Cards

-------------------------------- */

const featureMessages = {

  chat: "💬 گفتوگۆی Kurd AI کراوەتەوە.",

  image: "🖼️ بەشی دروستکردنی وێنە هەڵبژێردرا.",

  writing: "✍️ بەشی یارمەتی نووسین هەڵبژێردرا.",

  translate: "🌐 بەشی وەرگێڕان هەڵبژێردرا.",

  study: "📚 بەشی یارمەتی خوێندن هەڵبژێردرا.",

  code: "💻 بەشی کۆدنوسین هەڵبژێردرا.",

  voice: "🎙️ بەشی گفتوگۆی دەنگی هەڵبژێردرا.",

  favorite: "⭐ بەشی تایبەتمەندییەکان هەڵبژێردرا."

};

featureCards.forEach((card) => {

  card.addEventListener("click", () => {

    const feature = card.dataset.feature;

    responseText.textContent =

      featureMessages[feature] || "Kurd AI";

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  });

});

/* --------------------------------

   Menu

-------------------------------- */

function openMenu() {

  sideMenu.classList.add("show");

  overlay.classList.add("show");

}

function closeSideMenu() {

  sideMenu.classList.remove("show");

  overlay.classList.remove("show");

}

menuBtn.addEventListener("click", openMenu);

closeMenu.addEventListener("click", closeSideMenu);

overlay.addEventListener("click", closeSideMenu);

/* --------------------------------

   Profile

-------------------------------- */

profileBtn.addEventListener("click", () => {

  responseText.textContent =

    "👤 بەشی هەژمار و پڕۆفایل بە زوویی زیاد دەکرێت.";

});

/* --------------------------------

   Pro

-------------------------------- */

proBtn.addEventListener("click", () => {

  responseText.textContent =

    "👑 Kurd AI Pro بە زوویی بەردەست دەبێت.";

});

/* --------------------------------

   Bottom Navigation

-------------------------------- */

navItems.forEach((item) => {

  item.addEventListener("click", () => {

    navItems.forEach((nav) => {

      nav.classList.remove("active");

    });

    item.classList.add("active");

    const section = item.dataset.nav;

    const messages = {

      home: "🏠 بەخێربێیت بۆ Kurd AI.",

      history: "◷ مێژووی گفتوگۆکان لێرە دەردەکەون.",

      favorites: "♡ دڵخوازەکانت لێرە دەبینیت.",

      projects: "□ پڕۆژەکانت لێرە دەبینیت.",

      settings: "⚙️ ڕێکخستنەکانی Kurd AI."

    };

    responseText.textContent =

      messages[section] || "Kurd AI";

  });

});

/* --------------------------------

   Voice Recognition

-------------------------------- */

const SpeechRecognition =

  window.SpeechRecognition ||

  window.webkitSpeechRecognition;

if (SpeechRecognition) {

  const recognition = new SpeechRecognition();

  recognition.lang = "ku";

  recognition.continuous = false;

  recognition.interimResults = false;

  micBtn.addEventListener("click", () => {

    try {

      recognition.start();

      micBtn.classList.add("listening");

      responseText.textContent =

        "🎙️ گوێم لێتە... قسە بکە.";

    } catch (error) {

      console.log(error);

    }

  });

  recognition.onresult = (event) => {

    const transcript =

      event.results[0][0].transcript;

    input.value = transcript;

    responseText.textContent =

      "دەنگەکەت وەرگیرا. ئێستا دەتوانیت بینێریت.";

  };

  recognition.onend = () => {

    micBtn.classList.remove("listening");

  };

  recognition.onerror = () => {

    micBtn.classList.remove("listening");

    responseText.textContent =

      "دەنگ نەگیرا. تکایە دووبارە هەوڵ بدەوە.";

  };

} else {

  micBtn.addEventListener("click", () => {

    responseText.textContent =

      "🎙️ ئەم وێبگەڕە پشتگیری لە ناسینەوەی دەنگ ناکات.";

  });

}

/* --------------------------------

   Initial greeting

-------------------------------- */

setTimeout(() => {

  responseText.textContent =

    "سڵاو 👋 چۆنی؟ Kurd AI ئامادەیە یارمەتیت بدات.";

}, 600);