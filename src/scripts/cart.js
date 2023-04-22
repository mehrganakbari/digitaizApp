// window.onload(
//     alert("این سایت صرفا یک پروژه فرانت اند است و این صفحه کاملا نمایشی است.")
// )

const productsBox = document.querySelector("#productsBox");


var resultEl = document.querySelector(".resultSet"),
    plusMinusWidgets = document.querySelectorAll(".v-counter");

for (var i = 0; i < plusMinusWidgets.length; i++) {
    plusMinusWidgets[i]
        .querySelector(".minusBtn")
        .addEventListener("click", clickHandler);
    plusMinusWidgets[i]
        .querySelector(".plusBtn")
        .addEventListener("click", clickHandler);
    plusMinusWidgets[i]
        .querySelector(".count")
        .addEventListener("change", changeHandler);
}

function clickHandler(event) {
    var countEl = event.target.parentNode.querySelector(".count");
    if (event.target.className.match(/\bminusBtn\b/)) {
        countEl.value = Number(countEl.value) - 1;
    } else if (event.target.className.match(/\bplusBtn\b/)) {
        countEl.value = Number(countEl.value) + 1;
    }
    triggerEvent(countEl, "change");
}

function changeHandler(event) {
    resultEl.value = 0;
    for (var i = 0; i < plusMinusWidgets.length; i++) {
        resultEl.value =
            Number(resultEl.value) +
            Number(plusMinusWidgets[i].querySelector(".count").value);
    }
}

function triggerEvent(el, type) {
    if ("createEvent" in document) {
        var e = document.createEvent("HTMLEvents");
        e.initEvent(type, false, true);
        el.dispatchEvent(e);
    } else {
        var e = document.createEventObject();
        e.eventType = type;
        el.fireEvent("on" + e.eventType, e);
    }
}

const productBox = document.querySelectorAll(".productBox");
const prodCloseBtn = document.querySelectorAll(".prodCloseBtn");

for (let i = 0; i < prodCloseBtn.length; i++) {
    prodCloseBtn[i].addEventListener("click", () => {
        productBox[i].classList.toggle("hidden");
    });
}

