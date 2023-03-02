import "../common/index.css";

const mobileSearchBtn = document.querySelector(".mobileSearchBtn");
const mobileSearchBox = document.querySelector(".mobileSearchBox");

mobileSearchBtn.addEventListener("click", () => {
  mobileSearchBox.classList.toggle("hidden");
});

const productBox = document.querySelector("#productBox");

var products = [
  {
    title: "ساعت هوشمند اپل سری ۸",
    image: "/assets/images/img/Cart/watch/watch8.png",
    category: "smartWatch",
    price: "۱۹,۹۰۰,۰۰۰",
  },

  {
    title: "ساعت هوشمند اپل سری ۷	",
    image: "/assets/images/img/Cart/watch/watch7.png",
    category: "smartWatch",
    price: "۱۴,۶۹۹,۰۰۰",
  },

  {
    title: "ساعت هوشمند اپل سری ۶",
    image: "/assets/images/img/Cart/watch/watch6.png",
    category: "smartWatch",
    price: "۱۴,۳۰۰,۰۰۰",
  },

  {
    title: "ساعت هوشمند اپل سری ۵",
    image: "/assets/images/img/Cart/watch/watch5.png",
    category: "smartWatch",
    price: "۱۳,۷۹۰,۰۰۰",
  },

  {
    title: "ساعت هوشمند اپل سری ۴",
    image: "/assets/images/img/Cart/watch/watch4.png",
    category: "smartWatch",
    price: "۱۲,۹۹۹,۰۰۰",
  },

  {
    title: "ساعت هوشمند اپل سری ۳",
    image: "/assets/images/img/Cart/watch/watch3.png",
    category: "smartWatch",
    price: "۹,۳۹۰,۰۰۰",
  },

  {
    title: " گوشی موبایل آیفون ۱۳",
    image: "/assets/images/img/Cart/mobile/1.png",
    category: "mobile",
    price: "۵۸,۳۵,۰۰۰",
  },

  {
    title: "گوشی موبایل آیفون ۱۲ پرو",
    image: "/assets/images/img/Cart/mobile/2.png",
    category: "mobile",
    price: "۴۶,۶۶۰,۰۰۰",
  },

  {
    title: "  گوشی موبایل آیفون ۱۳",
    image: "/assets/images/img/Cart/mobile/3.png",
    category: "mobile",
    price: "۵۸,۶۱۰,۰۰۰",
  },

  {
    title: " گوشی موبایل آیفون ۱۲",
    image: "/assets/images/img/Cart/mobile/4.png",
    category: "mobile",
    price: "۴۰,۱۵۰,۰۰۰",
  },
  {
    title: "۱۱ گوشی موبایل آیفون",
    image: "/assets/images/img/Cart/mobile/5.png",
    category: "mobile",
    price: "۳۸,۰۰۰,۰۰۰",
  },

  {
    title: "۱۱ گوشی موبایل آیفون",
    image: "/assets/images/img/Cart/mobile/6.png",
    category: "mobile",
    price: "۳۶,۰۰۰,۰۰۰",
  },

  {
    title: "مک بوک پرو ۲۰۲۲",
    image: "/assets/images/img/Cart/laptop/macpro.png",
    category: "laptop",
    price: "۷۸,۷۵۰,۰۰۰",
  },
  {
    title: "مک بوک ام ۱۱ ایر",
    image: "/assets/images/img/Cart/laptop/macm11.png",
    category: "laptop",
    price: "۱۱۰,۹۹۰,۰۰۰",
  },
];

let cards = "";

products.forEach((products) => {
  if (products.category == "mobile") {
    let cardstemplate = `
      <div class="bg-Stone-50 rounded-xl p-2 shadow">
          <div class="mb-6 bg-Gray-200 rounded-xl pb-7 items-center">
            <img src="${products.image}" alt="" class="w-48 mx-auto">
          </div>
          <div class="flex items-center justify-between w-full mb-4">
          <span class="text-Slate-700 text-xs">اپل</span>
          <div class="flex items-center">
            <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Gray-500 bg-Stone-50 -mr-1.5 flex items-center justify-center"></div>
            <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 bg-Orange-500 -mr-1.5 flex items-center justify-center"></div>
            <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 bg-Yellow-400 -mr-1.5 flex items-center justify-center"></div>
            <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 bg-Indigo-600 -mr-1.5 flex items-center justify-center"></div>
            <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 bg-Orange-700 -mr-1.5 flex items-center justify-center"></div>
          </div>
        </div>
        <div class="text-Slate-800 text-xs mb-2 md:text-base">${products.title}</div>
        <div class="text-[#DE3618] font-bold text-left text-xs mt-2 mb-3">${products.price} تومان</div>
        <hr class="">
        <button class="w-full font-bold text-Orange-600 mt-2 md:text-lg">مشاهده و سفارش</button>
      </div>
    `;
    cards += cardstemplate;
  }
  if (products.category == "laptop") {
    let cardstemplate = `
    <div class="relative bg-Stone-50 rounded-xl p-2 shadow">
      <div class="mb-6 bg-Gray-200 rounded-xl pb-7 items-center">
        <img src="${products.image}" alt="" class="w-48 mx-auto">
      </div>
      <div class="flex items-center justify-between w-full mb-4">
          <span class="text-Slate-700 text-xs">اپل</span>
          <div class="flex items-center">
            <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Gray-500 bg-Stone-50 -mr-1.5 flex items-center justify-center"></div>
            <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 bg-Orange-500 -mr-1.5 flex items-center justify-center"></div>
            <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 bg-Yellow-400 -mr-1.5 flex items-center justify-center"></div>
            <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 bg-Indigo-600 -mr-1.5 flex items-center justify-center"></div>
            <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 bg-Orange-700 -mr-1.5 flex items-center justify-center"></div>
          </div>
      </div>
      <div class="text-Slate-800 text-xs mb-2 md:text-base">${products.title}</div>
      <div class="text-[#DE3618] font-bold text-left text-xs mt-2 mb-3">${products.price} تومان</div>
      <div class="w-full 2xl:absolute bottom-3">
      <hr class="ml-4">
      <button class="w-full font-bold text-Orange-600 mt-2 md:text-lg">مشاهده و سفارش</button>
      </div>
    </div>
    `;
    cards += cardstemplate;
  }
});

productBox.insertAdjacentHTML("beforeend", cards);

// filter
const filterBtn = document.querySelectorAll(".filterBtn");
const badge = document.querySelectorAll(".badge");

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", () => {
    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].classList.remove("text-Slate-800");
      filterBtn[i].classList.remove("font-bold");
      badge[i].classList.add("hidden");
    }
    filterBtn[i].classList.toggle("font-bold");
    filterBtn[i].classList.toggle("text-Slate-800");
    badge[i].classList.toggle("hidden");
  });
}

const FilterBtn = document.querySelectorAll(".FilterBtn");
const filterItems = document.querySelectorAll(".filterItems");
const chevrown = document.querySelectorAll(".chevrown");

for (let i = 0; i < FilterBtn.length; i++) {
  FilterBtn[i].addEventListener("click", () => {
    filterItems[i].classList.toggle("hidden");
    filterItems[i].classList.toggle("transition-all");
    filterItems[i].classList.toggle("duration-1000");
    chevrown[i].classList.toggle("rotate-0");
  });
}

let slider = document.querySelector(".rangeSliderRange");
let output = document.querySelector(".rangeSliderValue");

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;

  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to left, #fdba74 0%, #FC5858 " +
    value +
    "%, #d7dcdf " +
    value +
    "%, #d7dcdf 100%)";
};
