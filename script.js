"use strict";

// =========================

// ELEMENTS

// =========================

const input = document.getElementById("messageInput");

const sendBtn = document.getElementById("sendBtn");

const micBtn = document.getElementById("micBtn");

const toast = document.getElementById("toast");

const profileBtn = document.getElementById("profileBtn");

const menuBtn = document.getElementById("menuBtn");

const proBtn = document.getElementById("proBtn");

const features = document.querySelectorAll(".feature");

const navItems = document.querySelectorAll(".nav-item");

// =========================

// TOAST

// =========================

let toastTimer;

function showToast(message) {

  if (!toast) return;

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(function () {

    toast.classList.remove("show");

  }, 2200);

}

// =========================

// SEND MESSAGE

// =========================

function sendMessage() {

  if (!input) return;

  const text = input.value.trim();

  if (!text) {

    showToast("تکایە پرسیارەکەت بنووسە");

    input.focus();

    return;

  }

  /*

    ئێستا UI ـەکە وەڵامی وەرگرتنی

    پرسیار پیشان دەدات.

    دواتر API ـی Kurd AI لێرە پەیوەست دەکەین.

  */

  showToast("Kurd AI: پرسیارەکەت وەرگیرا ✅");

  input.value = "";

  input.focus();

}

if (sendBtn) {

  sendBtn.addEventListener("click", sendMessage);

}

if (input) {

  input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

      event.preventDefault();

      sendMessage();

    }

  });

}

// =========================

// MICROPHONE

// =========================

let recognition = null;

const SpeechRecognition =

  window.SpeechRecognition ||

  window.webkitSpeechRecognition;

if (SpeechRecognition && micBtn && input) {

  recognition = new SpeechRecognition();

  recognition.lang = "ku";

  recognition.continuous = false;

  recognition.interimResults = false;

  recognition.onstart = function () {

    showToast("گوێم لێتە 🎙️");

  };

  recognition.onresult = function (event) {

    const result =

      event.results[0][0].transcript;

    input.value = result;

    input.focus();

  };

  recognition.onerror = function () {

    showToast("کێشەیەک لە دەنگدا ڕوویدا");

  };

  micBtn.addEventListener("click", function () {

    try {

      recognition.start();

    } catch (error) {

      showToast("میکرۆفۆن پێشتر چالاکە");

    }

  });

}

else if (micBtn) {

  micBtn.addEventListener("click", function () {

    showToast("ئەم وێبگەڕە پشتگیری دەنگ ناکات");

  });

}

// =========================

// FEATURE BUTTONS

// =========================

features.forEach(function (button) {

  button.addEventListener("click", function () {

    const feature =

      button.getAttribute("data-text");

    if (!feature) return;

    if (feature === "گفتوگۆی زیرەک") {

      input.focus();

      showToast("ئێستا دەتوانیت گفتوگۆ بکەیت 💬");

      return;

    }

    if (feature === "دروستکردنی وێنە") {

      showToast("بەشی دروستکردنی وێنە هەڵبژێردرا 🖼️");

      return;

    }

    if (feature === "نووسین") {

      input.focus();

      input.placeholder =

        "چی دەتەوێت بنووسین؟";

      showToast("بەشی نووسین چالاک کرا ✎");

      return;

    }

    if (feature === "وەرگێڕان") {

      input.focus();

      input.placeholder =

        "دەقەکەت بۆ وەرگێڕان بنووسە...";

      showToast("بەشی وەرگێڕان چالاک کرا 🌐");

      return;

    }

    if (feature === "یارمەتی خوێندن") {

      input.focus();

      input.placeholder =

        "چی دەتەوێت فێری ببیت؟";

      showToast("یارمەتی خوێندن چالاک کرا 📖");

      return;

    }

    if (feature === "کۆدنوسین") {

      input.focus();

      input.placeholder =

        "کۆدەکەت یان پرسیاری کۆد بنووسە...";

      showToast("بەشی کۆدنوسین چالاک کرا </>");

      return;

    }

    if (feature === "دەنگ") {

      if (micBtn) {

        micBtn.click();

      }

      return;

    }

    if (feature === "زۆرتر") {

      showToast("تایبەتمەندی زیاتر بە زوویی دێت ⭐");

      return;

    }

  });

});

// =========================

// PROFILE

// =========================

if (profileBtn) {

  profileBtn.addEventListener("click", function () {

    showToast("پڕۆفایلی Kurd AI 👤");

  });

}

// =========================

// MENU

// =========================

if (menuBtn) {

  menuBtn.addEventListener("click", function () {

    showToast("مێنیو ☰");

  });

}

// =========================

// PRO

// =========================

if (proBtn) {

  proBtn.addEventListener("click", function () {

    showToast("Kurd AI Pro ⭐ بە زوویی دێت");

  });

}

// =========================

// BOTTOM NAVIGATION

// =========================

navItems.forEach(function (item) {

  item.addEventListener("click", function () {

    navItems.forEach(function (nav) {

      nav.classList.remove("active");

    });

    item.classList.add("active");

    const page =

      item.getAttribute("data-page");

    switch (page) {

      case "home":

        showToast("سەرەکی 🏠");

        break;

      case "menu":

        showToast("مێژوو 🕘");

        break;

      case "favorites":

        showToast("دڵخوازەکان ♡");

        break;

      case "projects":

        showToast("پڕۆژەکان 📁");

        break;

      case "settings":

        showToast("ڕێکخستن ⚙️");

        break;

    }

  });

});