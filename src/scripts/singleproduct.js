const addToCartDesktopBtn = document.getElementById("addToCartDesktop");
const addToCartMobileBtn = document.getElementById("addToCartMobile");

addToCartDesktopBtn.onclick = function () {
  alert("محصول به سبد خرید شما اضافه شد");
};
addToCartMobileBtn.onclick = function () {
  alert("محصول به سبد خرید شما اضافه شد");
};

// More Information Box
const moreInformationBox = document.querySelector("#moreInformationBox");
const openMoreInformationBox = document.querySelector(
  "#openMoreInformationBox",
);
const closeMoreInformationBox = document.querySelector(
  "#closeMoreInformationBox",
);

openMoreInformationBox.addEventListener("click", () => {
  moreInformationBox.classList.replace("hidden", "fixed");
});

closeMoreInformationBox.addEventListener("click", () => {
  moreInformationBox.classList.replace("fixed", "hidden");
});

const informationBox = document.querySelector("#informationBox");

// informations
var informations = [{
    title: "ابعاد",
    answer: "۱۴۶.۷x۷۱.۵x۷.۶۵",
  },
  {
    title: "وزن",
    answer: "۱۷۴ گرم",
  },
  {
    title: "فناوری صفحه‌نمایش",
    answer: "Super Retina XDR OLED",
  },
  {
    title: "بازه‌ی اندازه صفحه نمایش",
    answer: "۶.۰ اینچ و بزرگتر",
  },
  {
    title: "توضیحات سیم کارت",
    answer: "سایز نانو (۸.۸ × ۱۲.۳ میلی‌متر)",
  },
  {
    title: "اندازه",
    answer: "۶.۱ اینچ",
  },
  {
    title: "ساختار بدنه",
    answer: "قاب جلویی و پشتی از جنس شیشه فریم از جنس آلومینیومی صفحه‌نمایش با شیشه مقاوم در برابر خط‌وخش با پوشش Gorilla Glass سرامیکی دارای استاندارد IP۶۸ (مقاومت در برابر نفوذ آب، گِل، گرد و خاک) دارای مقاومت تا ۳۰ دقیقه در آب تا عمق ۶ متر",
  },
  {
    title: "ویژگی‌های خاص",
    answer: [
      "مقاوم در برابر آب",
      "دارای بدنه مقاوم",
      "مناسب عکاسی",
      "مناسب بازی",
      "مجهز به حس‌گر تشخیص چهره",
    ],
  },
  {
    title: "رزولوشن",
    answer: "۱۱۷۰×۲۵۳۲",
  },
  {
    title: "تراکم پیکسلی",
    answer: "۴۶۰ پیکسل بر اینچ",
  },
  {
    title: "تعداد سیم کارت",
    answer: "دو عدد",
  },
  {
    title: "نسبت صفحه‌نمایش به بدنه",
    answer: "۸۶",
  },
  {
    title: "زمان معرفی",
    answer: "۱۴ سپتامبر ۲۰۲۱",
  },
  {
    title: "نسبت تصویر",
    answer: "۱۹.۵:۹",
  },
  {
    title: "محافظت",
    answer: "Scratch-Resistant Ceramic Glass",
  },
  {
    title: "مدل",
    answer: "iPhone ۱۳ CH",
  },
  {
    title: "شناسه کالا",
    answer: "56484634656846",
  },
  {
    title: "تراشه",
    answer: "Apple A۱۵ Bionic (۵ nm) Chipset",
  },
  {
    title: "پردازنده‌ی مرکزی",
    answer: "Hexa-Core CPU",
  },
  {
    title: "نوع پردازنده",
    answer: "۶۴ بیتی",
  },
  {
    title: "فرکانس پردازنده‌ی مرکزی",
    answer: "۳.۳۲ - ۱.۸۲ گیگاهرتز",
  },
  {
    title: "شبکه های ارتباطی",
    answer: ["۲G", "۳G", "۴G", "۵G"],
  },
  {
    title: "پردازنده‌ی گرافیکی",
    answer: "Apple GPU ۴-core graphics",
  },
  {
    title: "حافظه داخلی",
    answer: "۱۲۸ گیگابایت",
  },
  {
    title: "مقدار RAM",
    answer: "چهار گیگابایت",
  },
  {
    title: "فناوری‌های ارتباطی",
    answer: ["GPRS", "NFC", "QZSS", "Wi-Fi", "بلوتوث", "A۲DP", "LE"],
  },
  {
    title: "فن‌آوری موبایل",
    answer: ["A-GPS", "GLONASS", "GALILEO", "BDS"],
  },
  {
    title: "درگاه‌های ارتباطی",
    answer: "Lightning",
  },
  {
    title: "نسخه بلوتوث",
    answer: "۵.۰",
  },
  {
    title: "دوربین‌های پشت گوشی",
    answer: "۲ ماژول دوربین",
  },
  {
    title: "رزولوشن عکس",
    answer: "۱۲ مگاپیکسل",
  },
  {
    title: "فناوری فوکوس",
    answer: "AutoFocus",
  },
  {
    title: "فلش",
    answer: "Dual LED Dual Tone",
  },
  {
    title: "دسته ‌بندی",
    answer: "پرچم‌دار",
  },
  {
    title: "سیستم عامل",
    answer: "iOS",
  },
  {
    title: "نسخه سیستم عامل",
    answer: "iOS ۱۵",
  },
  {
    title: "حس‌گرها",
    answer: [
      "قطب‌نما",
      "شتاب‌سنج",
      "مجاورت",
      "فشارسنج",
      "ژیروسکوپ",
      "تشخیص چهره بیومتریک",
    ],
  },
  {
    title: "مشخصات باتری",
    answer: "باتری لیتیوم پلیمر با میزان ظرفیت ۳۲۴۰ قابلیت شارژ سریع با توان ۲۳ وات دارای فناوری USB Power Delivery ۲.۰ دارای قابلیت شارژ بی‌سیم (وایرلس) با توان ۱۵ وات (MagSafe wireless charging ۱۵W) دارای قابلیت شارژ سریع بی‌سیم (وایرلس) Qi magnetic با توان ۷.۵ وات شارژ شدن تا ۵۰ درصد در ۳۰ دقیقه پخش مداوم موزیک با شارژ ۱۰۰ درصد باتری تا ۵۵ ساعت پخش مداوم مالتی‌مدیا با شارژ ۱۰۰ درصد باتری تا ۱۷ ساعت ۲.۵ ساعت شارژ بیشتر نسبت به نسخه ۱۲",
  },
];

// add product
function AddProductToHTML(informations) {
  let info = "";

  informations.forEach((information) => {
    if (typeof information.answer === "string") {
      let infotemplate = `
            <div class="grid grid-cols-4 gap-5 p-5 text-xs lg2:text-md text-Slate-700 border-b border-Slate-200">
                <p class="col-span-2 lg2:col-span-1">${information.title}</p>
                <p class="col-span-2 lg2:col-span-3 iranSans">${information.answer}</p>
            </div>
            `;
      info += infotemplate;
    } else {
      let infotemplate = `
            <div class="grid grid-cols-4 gap-5 p-5 text-xs lg2:text-md text-Slate-700 border-b border-Slate-200">
                <p class="col-span-2 lg2:col-span-1">${information.title}</p>
                <ul class="col-span-2 lg2:col-span-3 iranSans arrayItems space-y-2 list-disc">
                    ${information.answer.map((item) => `<li>${item}</li>`)}
                </ul>
            </div>
            `;
      info += infotemplate;
    }
  });

  informationBox.insertAdjacentHTML("beforeend", info);
}

AddProductToHTML(informations);

const arrItems = document.getElementsByClassName("arrayItems");

for (let arrItemIndex = 0; arrItemIndex < arrItems.length; arrItemIndex++) {
  const element = arrItems[arrItemIndex];
  const editedInnerHTML = element.innerHTML.replaceAll(",", "");
  element.innerHTML = editedInnerHTML;
}