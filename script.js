/* ==================================================

   KURD AI

   JAVASCRIPT

================================================== */

/* ==================================================

   ELEMENTS

================================================== */

const messageInput =

  document.getElementById("messageInput");

const sendBtn =

  document.getElementById("sendBtn");

const voiceBtn =

  document.getElementById("voiceBtn");

const responseMessage =

  document.getElementById("responseMessage");

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

const modal =

  document.getElementById("modal");

const modalClose =

  document.getElementById("modalClose");

const modalTitle =

  document.getElementById("modalTitle");

const modalText =

  document.getElementById("modalText");

const modalAction =

  document.getElementById("modalAction");

/* ==================================================

   MODAL

================================================== */

function openModal(title, text) {

  modalTitle.textContent = title;

  modalText.textContent = text;

  modal.classList.add("show");

}

function closeModal() {

  modal.classList.remove("show");

}

modalClose.addEventListener(

  "click",

  closeModal

);

modalAction.addEventListener(

  "click",

  closeModal

);

modal.addEventListener(

  "click",

  function(event) {

    if (event.target === modal) {

      closeModal();

    }

  }

);

/* ==================================================

   SEND MESSAGE

================================================== */

function sendMessage() {

  const message =

    messageInput.value.trim();

  /* Empty message */

  if (message === "") {

    responseMessage.textContent =

      "تکایە پرسیارەکەت بنووسە ✍️";

    messageInput.focus();

    return;

  }

  /* Loading */

  responseMessage.textContent =

    "Kurd AI خەریکی بیرکردنەوەیە... ✦";

  sendBtn.disabled = true;

  /* Small delay */

  setTimeout(

    function() {

      const text =

        message.toLowerCase();

      let answer =

        "سوپاس بۆ پرسیارەکەت ❤️ Kurd AI لێرەیە بۆ یارمەتیدانت.";

      /* GREETING */

      if (

        text.includes("سڵاو") ||

        text.includes("سلام") ||

        text.includes("slaw")

      ) {

        answer =

          "سڵاو 👋 بەخێربێیت بۆ Kurd AI. چۆنی؟ چ شتێکت بۆ بکەم؟";

      }

      /* KURD */

      else if (

        text.includes("کورد") ||

        text.includes("کوردستان")

      ) {

        answer =

          "کوردستان و کوردەکان هەمیشە لە دڵی Kurd AI ـدان ❤️💛💚";

      }

      /* WHO */

      else if (

        text.includes("کێی") ||

        text.includes("چیی") ||

        text.includes("کویت")

      ) {

        answer =

          "من Kurd AI ـم 🤖 دەستیارێکی زیرەکی کوردی. دەتوانم لە نووسین، وەرگێڕان، خوێندن، کۆد و زۆر شتی تر یارمەتیت بدەم.";

      }

      /* THANKS */

      else if (

        text.includes("سوپاس") ||

        text.includes("دەستخۆش")

      ) {

        answer =

          "بەخێر بێیت ❤️ هەر کاتێک پێویستت بە یارمەتی بوو Kurd AI لێرەیە.";

      }

      /* HELP */

      else if (

        text.includes("یارمەتی") ||

        text.includes("help")

      ) {

        answer =

          "بە دڵنیاییەوە ❤️ پرسیارەکەت بنووسە، Kurd AI هەوڵ دەدات یارمەتیت بدات.";

      }

      /* DEFAULT */

      else {

        answer =

          "پرسیارەکەت وەرگیرا:\n\n«" +

          message +

          "»\n\n" +

          "ئەمە وەڵامی تاقیکردنەوەی Kurd AI ـە. لە هەنگاوی داهاتوودا دەتوانین AI ـی ڕاستەقینە بە API پەیوەندی پێوە بکەین.";

      }

      responseMessage.textContent =

        answer;

      sendBtn.disabled = false;

    },

    800

  );

  messageInput.value = "";

}

/* SEND BUTTON */

sendBtn.addEventListener(

  "click",

  sendMessage

);

/* ENTER */

messageInput.addEventListener(

  "keydown",

  function(event) {

    if (event.key === "Enter") {

      event.preventDefault();

      sendMessage();

    }

  }

);

/* ==================================================

   VOICE

================================================== */

let recognition = null;

let isListening = false;

/* Check browser */

if (

  "SpeechRecognition" in window ||

  "webkitSpeechRecognition" in window

) {

  const SpeechRecognition =

    window.SpeechRecognition ||

    window.webkitSpeechRecognition;

  recognition =

    new SpeechRecognition();

  recognition.lang =

    "ku";

  recognition.continuous =

    false;

  recognition.interimResults =

    false;

  recognition.onstart =

    function() {

      isListening = true;

      voiceBtn.classList.add(

        "listening"

      );

      responseMessage.textContent =

        "🎙️ گوێم لێیە... قسە بکە.";

    };

  recognition.onresult =

    function(event) {

      const transcript =

        event.results[0][0].transcript;

      messageInput.value =

        transcript;

      responseMessage.textContent =

        "دەنگەکەت وەرگیرا 🎙️";

    };

  recognition.onerror =

    function() {

      responseMessage.textContent =

        "ببورە، نەمانتوانی دەنگەکەت وەربگرین.";

    };

  recognition.onend =

    function() {

      isListening = false;

      voiceBtn.classList.remove(

        "listening"

      );

    };

}

/* VOICE BUTTON */

voiceBtn.addEventListener(

  "click",

  function() {

    if (!recognition) {

      openModal(

        "دەنگ",

        "وێبگەڕەکەت پشتگیری لە Voice Recognition ناکات. تکایە Safari یان Chrome ـی نوێ تاقی بکەرەوە."

      );

      return;

    }

    if (isListening) {

      recognition.stop();

      return;

    }

    try {

      recognition.start();

    } catch(error) {

      console.log(error);

    }

  }

);

/* ==================================================

   FEATURES

================================================== */

const features =

  document.querySelectorAll(

    ".feature"

  );

const featureData = {

  chat: {

    title: "💬 گفتوگۆ",

    text:

      "ئێستا لە بەشی گفتوگۆی Kurd AI ـیت. پرسیارەکەت لە خانەی سەرەوە بنووسە و دوگمەی ➤ دابگرە."

  },

  image: {

    title: "▧ دروستکردنی وێنە",

    text:

      "ئەم بەشە بۆ دروستکردنی وێنە بە AI ـە. دەتوانین لە هەنگاوی دواتردا سیستەمی دروستکردنی وێنەی Kurd AI زیاد بکەین."

  },

  writing: {

    title: "✎ نووسین",

    text:

      "Kurd AI دەتوانێت یارمەتیت بدات لە نووسینی پەیام، بابەت، CV، ڕیکلام و دەقی جۆراوجۆر."

  },

  translate: {

    title: "A文 وەرگێڕان",

    text:

      "بەشی وەرگێڕان بۆ وەرگێڕانی دەقەکانە. لە هەنگاوی داهاتوودا دەتوانین زمانە زیاترەکان زیاد بکەین."

  },

  study: {

    title: "📖 یارمەتی خوێندن",

    text:

      "Kurd AI دەتوانێت یارمەتیت بدات لە فێربوون، تێگەیشتن لە وانەکان و وەڵامدانەوەی پرسیارەکان."

  },

  code: {

    title: "</> کۆدنوسین",

    text:

      "ئەم بەشە بۆ نووسین و چاککردنەوەی HTML، CSS، JavaScript و کۆدەکانی ترە."

  },

  voice: {

    title: "🎙️ دەنگ",

    text:

      "دەتوانیت بە دوگمەی دەنگ قسە بکەیت. ئەگەر وێبگەڕەکەت پشتگیری بکات، قسەکەت دەگۆڕێت بۆ دەق."

  },

  more: {

    title: "☆ زۆرتر",

    text:

      "تایبەتمەندییە زیاترەکانی Kurd AI لە هەنگاوەکانی داهاتوودا زیاد دەکرێن."

  }

};

features.forEach(

  function(feature) {

    feature.addEventListener(

      "click",

      function() {

        const type =

          feature.dataset.feature;

        const data =

          featureData[type];

        if (!data) {

          return;

        }

        openModal(

          data.title,

          data.text

        );

      }

    );

  }

);

/* ==================================================

   SIDE MENU

================================================== */

function openMenu() {

  sideMenu.classList.add(

    "show"

  );

  overlay.classList.add(

    "show"

  );

  document.body.style.overflow =

    "hidden";

}

function closeSideMenu() {

  sideMenu.classList.remove(

    "show"

  );

  overlay.classList.remove(

    "show"

  );

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

/* ==================================================

   PROFILE

================================================== */

profileBtn.addEventListener(

  "click",

  function() {

    openModal(

      "پڕۆفایل",

      "بەشی پڕۆفایلی بەکارهێنەرەکەی Kurd AI ـە. لە هەنگاوی داهاتوودا دەتوانین Login و Signup زیاد بکەین."

    );

  }

);

/* ==================================================

   PRO

================================================== */

proBtn.addEventListener(

  "click",

  function() {

    openModal(

      "Kurd AI Pro",

      "Kurd AI Pro بۆ تایبەتمەندییە پیشکەوتووەکانە. دەتوانین لە هەنگاوی داهاتوودا سیستەمی Pro و پارەدان زیاد بکەین."

    );

  }

);

/* ==================================================

   BOTTOM NAVIGATION

================================================== */

const navItems =

  document.querySelectorAll(

    ".nav-item"

  );

const pageData = {

  home: {

    title: "سەرەکی",

    text:

      "🏠 بەخێربێیت بۆ Kurd AI."

  },

  history: {

    title: "مێژوو",

    text:

      "◷ مێژووی گفتوگۆکانت لێرە پیشان دەدرێت. ئەم بەشە لە هەنگاوی داهاتوودا چالاک دەکەین."

  },

  favorites: {

    title: "دڵخوازەکان",

    text:

      "♡ دەتوانیت گفتوگۆ و پڕۆژە دڵخوازەکانت لێرە هەڵبگریت."

  },

  projects: {

    title: "پڕۆژەکان",

    text:

      "□ پڕۆژەکانت لێرە کۆ دەکرێنەوە."

  },

  settings: {

    title: "ڕێکخستن",

    text:

      "⚙ لە ڕێکخستنەکاندا دەتوانین زمان، شێوازی ڕووناکی و تاریکی و هەژمارەکەت ڕێک بخەین."

  }

};

navItems.forEach(

  function(item) {

    item.addEventListener(

      "click",

      function() {

        /* Remove active */

        navItems.forEach(

          function(button) {

            button.classList.remove(

              "active"

            );

          }

        );

        /* Add active */

        item.classList.add(

          "active"

        );

        const page =

          item.dataset.page;

        const data =

          pageData[page];

        if (!data) {

          return;

        }

        if (page !== "home") {

          openModal(

            data.title,

            data.text

          );

        }

      }

    );

  }

);

/* ==================================================

   SIDE MENU ITEMS

================================================== */

const menuItems =

  document.querySelectorAll(

    ".menu-item"

  );

menuItems.forEach(

  function(item) {

    item.addEventListener(

      "click",

      function() {

        const page =

          item.dataset.menu;

        closeSideMenu();

        const data =

          pageData[page];

        if (!data) {

          return;

        }

        if (page !== "home") {

          openModal(

            data.title,

            data.text

          );

        }

      }

    );

  }

);

/* ==================================================

   ESC KEY

================================================== */

document.addEventListener(

  "keydown",

  function(event) {

    if (event.key === "Escape") {

      closeModal();

      closeSideMenu();

    }

  }

);

/* ==================================================

   INITIAL MESSAGE

================================================== */

responseMessage.textContent =

  "سڵاو 👋 چۆنی؟ چ شتێکت بۆ بکەم؟";

console.log(

  "Kurd AI loaded successfully 🚀"

);