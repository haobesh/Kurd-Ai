/* ================= MENU ================= */

function toggleMenu() {

  const menu = document.getElementById("sideMenu");

  menu.classList.toggle("open");

}

function closeMenu() {

  document.getElementById("sideMenu").classList.remove("open");

}

/* ================= PAGES ================= */

function showPage(pageName, button = null) {

  // Hide all pages

  document.querySelectorAll(".page").forEach(page => {

    page.classList.remove("active");

  });

  // Show selected page

  const page = document.getElementById(pageName);

  if (page) {

    page.classList.add("active");

  }

  // Remove active from bottom buttons

  document.querySelectorAll(".nav-item").forEach(item => {

    item.classList.remove("active");

  });

  // Activate clicked button

  if (button) {

    button.classList.add("active");

  } else {

    const buttons = document.querySelectorAll(".nav-item");

    const pages = [

      "home",

      "history",

      "favorites",

      "projects",

      "settings"

    ];

    const index = pages.indexOf(pageName);

    if (buttons[index]) {

      buttons[index].classList.add("active");

    }

  }

  closeMenu();

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}

/* ================= SEND MESSAGE ================= */

function sendMessage() {

  const input = document.getElementById("userInput");

  const message = input.value.trim();

  if (message === "") {

    input.focus();

    return;

  }

  const welcome = document.getElementById("welcomeText");

  welcome.innerHTML =

    "پرسیارەکەت وەرگیرا 👍<br>" +

    "Kurd AI لە ئێستادا ئامادەیە بۆ یارمەتیدانت.";

  input.value = "";

  input.focus();

}

/* ================= ENTER ================= */

function handleEnter(event) {

  if (event.key === "Enter") {

    event.preventDefault();

    sendMessage();

  }

}

/* ================= VOICE ================= */

function voiceInput() {

  const input = document.getElementById("userInput");

  if (

    !("webkitSpeechRecognition" in window) &&

    !("SpeechRecognition" in window)

  ) {

    alert(

      "گەڕانەوەی دەنگ لەم وێبگەیەدا لە براوزەرەکەت پشتگیری ناکرێت."

    );

    return;

  }

  const SpeechRecognition =

    window.SpeechRecognition ||

    window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.lang = "ku";

  recognition.interimResults = false;

  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onstart = function () {

    input.placeholder = "گوێم لێیە...";

  };

  recognition.onresult = function (event) {

    const text =

      event.results[0][0].transcript;

    input.value = text;

    input.placeholder =

      "پرسیارێکت لێرە بنووسە...";

  };

  recognition.onerror = function () {

    input.placeholder =

      "پرسیارێکت لێرە بنووسە...";

    alert("نەتوانرا دەنگ وەرگیرێت.");

  };

  recognition.onend = function () {

    input.placeholder =

      "پرسیارێکت لێرە بنووسە...";

  };

}

/* ================= FEATURES ================= */

function feature(type) {

  const input = document.getElementById("userInput");

  const messages = {

    chat:

      "دەربارەی چی دەتەوێت گفتوگۆ بکەین؟",

    image:

      "چی دەتەوێت وێنەی بۆ دروست بکەم؟",

    writing:

      "دەقی چی دەتەوێت بۆ بنووسم؟",

    translate:

      "دەقی چی دەتەوێت وەرگێڕم؟",

    learn:

      "چی دەتەوێت فێری ببیت؟",

    code:

      "کۆدی چی دەتەوێت دروست بکەین؟",

    voice:

      "دەتوانیت دوگمەی مایکروفۆن بەکاربهێنیت.",

    more:

      "بە زوویی تایبەتمەندی زیاتر زیاد دەکرێت."

  };

  input.value = messages[type] || "";

  input.focus();

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}

/* ================= PROFILE ================= */

function openProfile() {

  document

    .getElementById("profileModal")

    .classList.add("show");

}

function closeProfile() {

  document

    .getElementById("profileModal")

    .classList.remove("show");

}

/* ================= PRO ================= */

function upgradePro() {

  alert(

    "Kurd AI Pro بە زوویی بەردەست دەبێت 🚀"

  );

}

/* ================= DARK MODE ================= */

function toggleDarkMode() {

  document.body.classList.toggle("light-mode");

}

/* ================= MODAL OUTSIDE CLICK ================= */

document

  .getElementById("profileModal")

  .addEventListener("click", function(event) {

    if (event.target === this) {

      closeProfile();

    }

  });

/* ================= INITIALIZE ================= */

document.addEventListener("DOMContentLoaded", function() {

  const input =

    document.getElementById("userInput");

  if (input) {

    input.focus();

  }

});