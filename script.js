/* ==========================================

   KURD AI

   Main JavaScript

========================================== */

/* =========================

   ELEMENTS

========================= */

const promptInput = document.getElementById("promptInput");

const sendBtn = document.getElementById("sendBtn");

const micBtn = document.getElementById("micBtn");

const responseText = document.getElementById("responseText");

const profileBtn = document.getElementById("profileBtn");

const menuBtn = document.getElementById("menuBtn");

const closeMenu = document.getElementById("closeMenu");

const sideMenu = document.getElementById("sideMenu");

const menuOverlay = document.getElementById("menuOverlay");

const modal = document.getElementById("modal");

const modalClose = document.getElementById("modalClose");

const modalTitle = document.getElementById("modalTitle");

const modalText = document.getElementById("modalText");

const modalAction = document.getElementById("modalAction");

const proBtn = document.getElementById("proBtn");

/* =========================

   MODAL

========================= */

function openModal(title, text) {

    modalTitle.textContent = title;

    modalText.textContent = text;

    modal.classList.add("show");

}

function closeModal() {

    modal.classList.remove("show");

}

modalClose.addEventListener("click", closeModal);

modalAction.addEventListener("click", closeModal);

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeModal();

    }

});

/* =========================

   PROFILE

========================= */

profileBtn.addEventListener("click", function() {

    openModal(

        "Kurd AI",

        "پڕۆفایلی بەکارهێنەر لەم شوێنەدا دەبێت. دەتوانیت دواتر سیستەمی چوونەژوورەوە زیاد بکەیت."

    );

});

/* =========================

   SIDE MENU

========================= */

function openMenu() {

    sideMenu.classList.add("open");

    menuOverlay.classList.add("show");

}

function closeSideMenu() {

    sideMenu.classList.remove("open");

    menuOverlay.classList.remove("show");

}

menuBtn.addEventListener("click", openMenu);

closeMenu.addEventListener("click", closeSideMenu);

menuOverlay.addEventListener("click", closeSideMenu);

/* =========================

   SEND MESSAGE

========================= */

function sendMessage() {

    const question = promptInput.value.trim();

    if (question === "") {

        openModal(

            "Kurd AI",

            "تکایە پرسیارەکەت لە خانەی پرسیار بنووسە."

        );

        promptInput.focus();

        return;

    }

    responseText.textContent = "خەریکی بیرکردنەوەین...";

    sendBtn.disabled = true;

    setTimeout(function() {

        let answer =

            "سوپاس بۆ پرسیارەکەت 🌟\n\n" +

            "ئەمە وەڵامی نموونەیی Kurd AI ـە. " +

            "لە داهاتوودا دەتوانین API ـی AI بە ئەپەکەوە ببەستین.";

        const lower = question.toLowerCase();

        if (

            question.includes("سڵاو") ||

            question.includes("سلاو")

        ) {

            answer =

                "سڵاو 👋 بەخێربێیت بۆ Kurd AI. چ شتێک دەتوانم بۆت بکەم؟";

        }

        else if (

            question.includes("کورد") ||

            question.includes("کوردستان")

        ) {

            answer =

                "بەخێربێیت ❤️ بژی کورد و کوردستان. Kurd AI بۆ خزمەتکردنی بەکارهێنەرانی کوردە.";

        }

        else if (

            lower.includes("hello") ||

            lower.includes("hi")

        ) {

            answer =

                "Hello 👋 بەخێربێیت بۆ Kurd AI.";

        }

        responseText.textContent = answer;

        sendBtn.disabled = false;

        promptInput.value = "";

    }, 900);

}

sendBtn.addEventListener("click", sendMessage);

/* =========================

   ENTER KEY

========================= */

promptInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        event.preventDefault();

        sendMessage();

    }

});

/* =========================

   MICROPHONE

========================= */

let recognition = null;

const SpeechRecognition =

    window.SpeechRecognition ||

    window.webkitSpeechRecognition;

if (SpeechRecognition) {

    recognition = new SpeechRecognition();

    recognition.lang = "ku";

    recognition.interimResults = false;

    recognition.continuous = false;

    recognition.onstart = function() {

        micBtn.textContent = "🔴";

    };

    recognition.onend = function() {

        micBtn.textContent = "🎙️";

    };

    recognition.onresult = function(event) {

        const text =

            event.results[0][0].transcript;

        promptInput.value = text;

    };

    recognition.onerror = function() {

        micBtn.textContent = "🎙️";

        openModal(

            "دەنگ",

            "نەتوانرا دەنگ تۆمار بکرێت. تکایە ڕێگە بە مایکروفۆن بدە."

        );

    };

    micBtn.addEventListener("click", function() {

        recognition.start();

    });

} else {

    micBtn.addEventListener("click", function() {

        openModal(

            "دەنگ",

            "ئەم وێبگەڕە پشتگیری ناسینەوەی دەنگ ناکات."

        );

    });

}

/* =========================

   TOOL BUTTONS

========================= */

const toolCards =

    document.querySelectorAll(".tool-card");

toolCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const tool =

            card.getAttribute("data-tool");

        if (tool === "chat") {

            openModal(

                "گفتوگۆ",

                "لێرە دەتوانیت لەگەڵ Kurd AI گفتوگۆ بکەیت."

            );

            promptInput.focus();

        }

        else if (tool === "image") {

            openModal(

                "دروستکردنی وێنە",

                "بەشی دروستکردنی وێنە دواتر زیاد دەکرێت."

            );

        }

        else if (tool === "writer") {

            openModal(

                "نووسین",

                "Kurd AI دەتوانێت لە نووسینی دەق و نامە و پۆست یارمەتیت بدات."

            );

        }

        else if (tool === "translate") {

            openModal(

                "وەرگێڕان",

                "بەشی وەرگێڕان دەتوانێت دواتر بە شێوەی تەواو زیاد بکرێت."

            );

        }

        else if (tool === "learn") {

            openModal(

                "یارمەتی خوێندن",

                "لێرە دەتوانیت پرسیاری خوێندنت لە Kurd AI بکەیت."

            );

        }

        else if (tool === "code") {

            openModal(

                "کۆدنوسین",

                "Kurd AI دەتوانێت لە HTML، CSS، JavaScript و کۆدەکانی تر یارمەتیت بدات."

            );

        }

        else if (tool === "voice") {

            if (recognition) {

                recognition.start();

            } else {

                openModal(

                    "دەنگ",

                    "ناسینەوەی دەنگ لەسەر ئەم وێبگەڕە بەردەست نییە."

                );

            }

        }

        else if (tool === "more") {

            openModal(

                "زۆرتر",

                "تایبەتمەندییە زیاترەکانی Kurd AI لە وەشانی داهاتوودا زیاد دەکرێن."

            );

        }

    });

});

/* =========================

   BOTTOM NAV

========================= */

const navItems =

    document.querySelectorAll(".nav-item");

function activatePage(page) {

    navItems.forEach(function(item) {

        item.classList.remove("active");

        if (item.getAttribute("data-page") === page) {

            item.classList.add("active");

        }

    });

    if (page === "home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

    else if (page === "history") {

        openModal(

            "مێژوو",

            "هیچ مێژوویەکی گفتوگۆ لە ئێستادا نییە."

        );

    }

    else if (page === "favorites") {

        openModal(

            "دڵخوازەکان",

            "هیچ شتێک لە دڵخوازەکانت نییە."

        );

    }

    else if (page === "projects") {

        openModal(

            "پڕۆژەکان",

            "پڕۆژەکانت لەم شوێنەدا دەردەکەون."

        );

    }

    else if (page === "settings") {

        openModal(

            "ڕێکخستن",

            "بەشی ڕێکخستنەکانی Kurd AI لەم شوێنەدا دەبێت."

        );

    }

}

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        activatePage(

            item.getAttribute("data-page")

        );

    });

});

/* =========================

   SIDE MENU NAVIGATION

========================= */

const menuItems =

    document.querySelectorAll(".menu-item");

menuItems.forEach(function(item) {

    item.addEventListener("click", function() {

        const page =

            item.getAttribute("data-page");

        closeSideMenu();

        activatePage(page);

    });

});

/* =========================

   PRO BUTTON

========================= */

proBtn.addEventListener("click", function() {

    openModal(

        "Kurd AI Pro",

        "وەشانی Pro لە داهاتوودا تایبەتمەندییە زیاتر و بەهێزترەکانی دەبێت."

    );

});

/* =========================

   ESC KEY

========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeSideMenu();

        closeModal();

    }

});

/* =========================

   INITIAL

========================= */

console.log("Kurd AI loaded successfully 🚀");