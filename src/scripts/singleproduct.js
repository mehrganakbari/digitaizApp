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

// informations
var products = [{
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
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
    {
        title: "",
        answer: "",
    },
];