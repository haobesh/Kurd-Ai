"use strict";

// =========================

// ELEMENTS

// =========================

const input = document.getElementById("messageInput");

const sendBtn = document.getElementById("sendBtn");

const micBtn = document.getElementById("micBtn");

const toast = document.getElementById("toast");

// =========================

// TOAST

// =========================

function showToast(message) {

  if (!toast) return;

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {

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

  showToast("Kurd AI: پرسیارەکەت وەرگیرا ✅");

  input.value = "";

  input.focus();

}

if (sendBtn) {

  sendBtn.addEventListener("click", sendMessage);

}

if (input) {

  input.addEventListener("keydown", function(event) {

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

  recognition.onstart = function() {

    showToast("گوێم لێتە 🎙️");

  };

  recognition.onresult = function(event) {

    const result =

      event.results[0][0].transcript;

    input.value = result;

  };

  recognition.onerror = function() {

    showToast("دەنگ نەدۆزرایەوە");

  };

  recognition.onend = function() {

    // microphone finished

  };

  micBtn.addEventListener("click", function() {

    try {

      recognition.start();

    } catch (error) {

      // microphone is already running

    }

  });

}

else if (micBtn) {

  micBtn.addEventListener("click", function() {

    showToast("ئەم وێبگەڕە پشتگیری دەنگ ناکات");

  });

}

// =========================

// FEATURE BUTTONS

// =========================

const features =

  document.querySelectorAll(".feature");

features.forEach(function(button) {

  button.addEventListener("click", function() {

    const text =

      button.getAttribute("data-text");

    if (text) {

      showToast(text + " هەڵبژێردرا");

    }

  });

});

// =========================

// PRO

// =========================

const proBtn =

  document.getElementById("proBtn");

if (proBtn) {

  proBtn.addEventListener("click", function() {

    showToast("Kurd AI Pro بە زوویی دێت ⭐");

  });

}

// =========================

// PROFILE

// =========================

const profileBtn =

  document.getElementById("profileBtn");

if (profileBtn) {

  profileBtn.addEventListener("click", function() {

    showToast("پڕۆفایل 👤");

  });

}

// =========================

// MENU

// =========================

const menuBtn =

  document.getElementById("menuBtn");

if (menuBtn) {

  menuBtn.addEventListener("click", function() {

    showToast("مێنیو ☰");

  });

}

// =========================

// BOTTOM NAVIGATION

// =========================

const navItems =

  document.querySelectorAll(".nav-item");

navItems.forEach(function(item) {

  item.addEventListener("click", function() {

    navItems.forEach(function(nav) {

      nav.classList.remove("active");

    });

    item.classList.add("active");

    const page =

      item.getAttribute("data-page");

    switch (page) {

      case "home":

        showToast("سەرەکی");

        break;

      case "menu":

        showToast("مێژوو");

        break;

      case "favorites":

        showToast("دڵخوازەکان");

        break;

      case "projects":

        showToast("پڕۆژەکان");

        break;

      case "settings":

        showToast("ڕێکخستن");

        break;

    }

  });

});