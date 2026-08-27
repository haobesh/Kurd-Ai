/* =====================================

   KURD AI

   MAIN JAVASCRIPT

===================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* =====================================

     ELEMENTS

  ===================================== */

  const userInput = document.getElementById("userInput");

  const sendBtn = document.getElementById("sendBtn");

  const micBtn = document.getElementById("micBtn");

  const aiGreeting = document.getElementById("aiGreeting");

  const menuBtn = document.getElementById("menuBtn");

  const closeMenu = document.getElementById("closeMenu");

  const menuOverlay = document.getElementById("menuOverlay");

  const profileBtn = document.getElementById("profileBtn");

  const proBtn = document.getElementById("proBtn");

  const modalOverlay = document.getElementById("modalOverlay");

  const modalClose = document.getElementById("modalClose");

  const modalAction = document.getElementById("modalAction");

  const modalTitle = document.getElementById("modalTitle");

  const modalText = document.getElementById("modalText");

  const toast = document.getElementById("toast");

  /* =====================================

     TOAST

  ===================================== */

  let toastTimer;

  function showToast(message) {

    clearTimeout(toastTimer);

    toast.textContent = message;

    toast.classList.add("show");

    toastTimer = setTimeout(() => {

      toast.classList.remove("show");

    }, 2500);

  }

  /* =====================================

     MODAL

  ===================================== */

  function openModal(title, text) {

    modalTitle.textContent = title;

    modalText.textContent = text;

    modalOverlay.classList.add("open");

  }

  function closeModal() {

    modalOverlay.classList.remove("open");

  }

  modalClose.addEventListener("click", closeModal);

  modalAction.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (event) => {

    if (event.target === modalOverlay) {

      closeModal();

    }

  });

  /* =====================================

     MENU

  ===================================== */

  function openMenu() {

    menuOverlay.classList.add("open");

    document.body.style.overflow = "hidden";

  }

  function closeMenuFunction() {

    menuOverlay.classList.remove("open");

    document.body.style.overflow = "";

  }

  menuBtn.addEventListener("click", openMenu);

  closeMenu.addEventListener("click", closeMenuFunction);

  menuOverlay.addEventListener("click", (event) => {

    if (event.target === menuOverlay) {

      closeMenuFunction();

    }

  });

  /* =====================================

     PROFILE

  ===================================== */

  profileBtn.addEventListener("click", () => {

    openModal(

      "Kurd AI",

      "پڕۆفایلی بەکارهێنەر لە وەشانی داهاتوودا زیاد دەکرێت."

    );

  });

  /* =====================================

     SEND MESSAGE

  ===================================== */

  function sendMessage() {

    const text = userInput.value.trim();

    if (!text) {

      showToast("تکایە پرسیارەکەت بنووسە ✍️");

      userInput.focus();

      return;

    }

    aiGreeting.textContent =

      "چاوەڕێ بکە... Kurd AI وەڵامەکەت ئامادە دەکات ✨";

    userInput.value = "";

    setTimeout(() => {

      const answer = generateDemoAnswer(text);

      aiGreeting.textContent = answer;

    }, 700);

  }

  sendBtn.addEventListener("click", sendMessage);

  userInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

      event.preventDefault();

      sendMessage();

    }

  });

  /* =====================================

     DEMO AI ANSWERS

  ===================================== */

  function generateDemoAnswer(text) {

    const lower = text.toLowerCase();

    if (

      lower.includes("سڵاو") ||

      lower.includes("slaw")

    ) {

      return "سڵاو 👋 بەخێربێیت! من Kurd AI ـم، چۆن بتوانم یارمەتیت بدەم؟";

    }

    if (

      lower.includes("کورد") ||

      lower.includes("کوردستان")

    ) {

      return "بەخێربێیت ❤️ بژی کورد و کوردستان. Kurd AI بۆ خزمەتکردن بە زمانی کوردی دروست دەکرێت.";

    }

    if (

      lower.includes("چییە") ||

      lower.includes("کێیە")

    ) {

      return "من Kurd AI ـم؛ دەستیارێکی زیرەکی کوردی بۆ گفتوگۆ، نووسین، وەرگێڕان و فێربوون.";

    }

    return (

      "پرسیارەکەت وەرگیرا ✨ " +

      "ئەمە وەشانی تاقیکردنەوەی Kurd AI ـە. " +

      "لە وەشانی داهاتوودا AI ـی ڕاستەقینە بە API ـەوە پەیوەست دەکەین."

    );

  }

  /* =====================================

     QUICK ACTIONS

  ===================================== */

  const actionCards =

    document.querySelectorAll(".action-card");

  const actionData = {

    chat: {

      title: "گفتوگۆ",

      placeholder: "چی دەتەوێت لەگەڵ Kurd AI گفتوگۆ بکەیت؟",

      message: "ئێستا دەتوانیت پرسیارەکەت لێرە بنووسیت 💬"

    },

    image: {

      title: "دروستکردنی وێنە",

      placeholder: "وێنەیەک کە دەتەوێت دروست بکرێت بنووسە...",

      message: "ناوی وێنەکەت بنووسە 🎨"

    },

    write: {

      title: "نووسین",

      placeholder: "دەربارەی چی دەتەوێت بنووسم؟",

      message: "بابەتەکەت بنووسە ✍️"

    },

    translate: {

      title: "وەرگێڕان",

      placeholder: "دەقەکەت لێرە دابنێ...",

      message: "دەقەکەت بنێرە بۆ وەرگێڕان 🌐"

    },

    read: {

      title: "پەرتەی خوێندن",

      placeholder: "چی دەتەوێت فێری ببیت؟",

      message: "بابەتێک هەڵبژێرە بۆ فێربوون 📖"

    },

    code: {

      title: "کۆدنوسین",

      placeholder: "کۆدەکەت یان پرسیارەکەت بنووسە...",

      message: "ئامادەم بۆ یارمەتیدان لە کۆد 💻"

    },

    voice: {

      title: "دەنگ",

      placeholder: "دوگمەی مایکروفۆن دابگرە...",

      message: "دەتوانیت بە دەنگ قسە بکەیت 🎙️"

    },

    more: {

      title: "تایبەتمەندی زیاتر",

      placeholder: "تایبەتمەندییەک هەڵبژێرە...",

      message: "تایبەتمەندییە زیاترەکان بەردەوام زیاد دەکرێن ⭐"

    }

  };

  actionCards.forEach((card) => {

    card.addEventListener("click", () => {

      const action =

        card.dataset.action;

      const data =

        actionData[action];

      if (!data) return;

      userInput.placeholder =

        data.placeholder;

      aiGreeting.textContent =

        data.message;

      userInput.focus();

      showToast(data.title);

    });

  });

  /* =====================================

     MICROPHONE

  ===================================== */

  let recognition = null;

  const SpeechRecognition =

    window.SpeechRecognition ||

    window.webkitSpeechRecognition;

  if (SpeechRecognition) {

    recognition =

      new SpeechRecognition();

    recognition.lang = "ku-IQ";

    recognition.interimResults = false;

    recognition.continuous = false;

    recognition.onstart = () => {

      micBtn.textContent = "🔴";

      showToast("گوێم لێتە... قسە بکە 🎙️");

    };

    recognition.onresult = (event) => {

      const transcript =

        event.results[0][0].transcript;

      userInput.value =

        transcript;

      micBtn.textContent = "🎙️";

    };

    recognition.onerror = () => {

      micBtn.textContent = "🎙️";

      showToast(

        "نەتوانرا دەنگ وەربگیرێت."

      );

    };

    recognition.onend = () => {

      micBtn.textContent = "🎙️";

    };

    micBtn.addEventListener("click", () => {

      try {

        recognition.start();

      } catch (error) {

        showToast(

          "مایکروفۆن پێشتر چالاکە."

        );

      }

    });

  } else {

    micBtn.addEventListener("click", () => {

      showToast(

        "ئەم وێبگەڕە پشتگیری ناسینەوەی دەنگ ناکات."

      );

    });

  }

  /* =====================================

     PRO

  ===================================== */

  proBtn.addEventListener("click", () => {

    openModal(

      "Kurd AI Pro 👑",

      "وەشانی Pro تایبەتمەندییە زیاتر و بەهێزترەکان دەخاتە بەردەست."

    );

  });

  /* =====================================

     BOTTOM NAVIGATION

  ===================================== */

  const navItems =

    document.querySelectorAll(".nav-item");

  const menuItems =

    document.querySelectorAll(".menu-item");

  function selectSection(section) {

    navItems.forEach((item) => {

      item.classList.toggle(

        "active",

        item.dataset.section === section

      );

    });

    if (section === "home") {

      window.scrollTo({

        top: 0,

        behavior: "smooth"

      });

      return;

    }

    const sectionNames = {

      history:

        "مێژوو",

      favorites:

        "دڵخوازەکان",

      projects:

        "پڕۆژەکان",

      settings:

        "ڕێکخستن"

    };

    const title =

      sectionNames[section] ||

      "Kurd AI";

    openModal(

      title,

      "ئەم بەشە لە وەشانی داهاتوودا بە تەواوی چالاک دەکرێت."

    );

  }

  navItems.forEach((item) => {

    item.addEventListener("click", () => {

      selectSection(

        item.dataset.section

      );

    });

  });

  menuItems.forEach((item) => {

    item.addEventListener("click", () => {

      selectSection(

        item.dataset.section

      );

      closeMenuFunction();

    });

  });

  /* =====================================

     ESC KEY

  ===================================== */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      closeMenuFunction();

      closeModal();

    }

  });

  /* =====================================

     START

  ===================================== */

  console.log(

    "Kurd AI started successfully."

  );

});