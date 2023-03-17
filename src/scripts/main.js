import "../common/index.css";

const mobileSearchBtn = document.querySelector(".mobileSearchBtn");
const mobileSearchBox = document.querySelector(".mobileSearchBox");

mobileSearchBtn.addEventListener("click", () => {
  mobileSearchBox.classList.toggle("hidden");
});

const productBox = document.querySelector("#productBox");

var products = [{
    title: "ساعت هوشمند اپل سری ۸",
    image: "/assets/images/img/Cart/watch/watch8.png",
    category: "smartWatch",
    price: "۱۹,۹۰۰,۰۰۰",
    priceEng: 199000000,
    star: 3,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },

  {
    title: "ساعت هوشمند اپل سری ۷	",
    image: "/assets/images/img/Cart/watch/watch7.png",
    category: "smartWatch",
    price: "۱۴,۶۹۹,۰۰۰",
    priceEng: 14699000,
    star: 5,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },

  {
    title: "ساعت هوشمند اپل سری ۶",
    image: "/assets/images/img/Cart/watch/watch6.png",
    category: "smartWatch",
    price: "۱۴,۳۰۰,۰۰۰",
    priceEng: 14300000,
    star: 4,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },

  {
    title: "ساعت هوشمند اپل سری ۵",
    image: "/assets/images/img/Cart/watch/watch5.png",
    category: "smartWatch",
    price: "۱۳,۷۹۰,۰۰۰",
    priceEng: 13790000,
    star: 3,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },

  {
    title: "ساعت هوشمند اپل سری ۴",
    image: "/assets/images/img/Cart/watch/watch4.png",
    category: "smartWatch",
    price: "۱۲,۹۹۹,۰۰۰",
    priceEng: 12999000,
    star: 4,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },

  {
    title: "ساعت هوشمند اپل سری ۳",
    image: "/assets/images/img/Cart/watch/watch3.png",
    category: "smartWatch",
    price: "۹,۳۹۰,۰۰۰",
    priceEng: 9390000,
    star: 2,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },

  {
    title: " گوشی موبایل آیفون ۱۳",
    image: "/assets/images/img/Cart/mobile/1.png",
    category: "mobile",
    price: "۵۸,۳۵۰,۰۰۰",
    priceEng: 58350000,
    star: 5,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },

  {
    title: "گوشی موبایل آیفون ۱۲ پرو",
    image: "/assets/images/img/Cart/mobile/2.png",
    category: "mobile",
    price: "۴۶,۶۶۰,۰۰۰",
    priceEng: 46660000,
    star: 4.5,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },

  {
    title: "  گوشی موبایل آیفون ۱۳",
    image: "/assets/images/img/Cart/mobile/3.png",
    category: "mobile",
    price: "۵۸,۶۱۰,۰۰۰",
    priceEng: 58610000,
    star: 4,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },

  {
    title: " گوشی موبایل آیفون ۱۲",
    image: "/assets/images/img/Cart/mobile/4.png",
    category: "mobile",
    price: "۴۰,۱۵۰,۰۰۰",
    priceEng: 40150000,
    star: 4.5,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },
  {
    title: "۱۱ گوشی موبایل آیفون",
    image: "/assets/images/img/Cart/mobile/5.png",
    category: "mobile",
    price: "۳۸,۰۰۰,۰۰۰",
    priceEng: 38000000,
    star: 4,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },

  {
    title: "۱۱ گوشی موبایل آیفون",
    image: "/assets/images/img/Cart/mobile/6.png",
    category: "mobile",
    price: "۳۶,۰۰۰,۰۰۰",
    priceEng: 36000000,
    star: 3.5,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },

  {
    title: "مک بوک پرو ۲۰۲۲",
    image: "/assets/images/img/Cart/laptop/macpro.png",
    category: "laptop",
    price: "۷۸,۷۵۰,۰۰۰",
    priceEng: 78750000,
    star: 5,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },
  {
    title: "مک بوک ام ۱۱ ایر",
    image: "/assets/images/img/Cart/laptop/macm11.png",
    category: "laptop",
    price: "۱۱۰,۹۹۰,۰۰۰",
    priceEng: 110990000,
    star: 5,
    colors: ["red", "white", "yellow", "purple", "orange"],
  },
];

function AddProductToHTML(productss) {
  let cards = "";

  productss.forEach((products) => {
    if (products.category == "mobile") {
      let cardstemplate = `
        <div class="bg-Stone-50 transition-all duration-300 dark:bg-Slate-900 rounded-xl p-2 shadow" data-price="${products.priceEng}" data-index="${products.star}">
            <div class="mb-6 bg-Gray-200 transition-all duration-300 dark:bg-Slate-700 rounded-xl pb-7 items-center">
              <img src="${products.image}" alt="" class="w-48 mx-auto">
            </div>
            <div class="flex items-center justify-between w-full mb-4">
            <span class="text-Slate-700 transition-all duration-300 dark:text-lite text-xs">اپل</span>
            <div class="flex items-center">
              <div class="w-5 h-5 rounded-full cursor-pointer border-2 transition-all duration-300 dark:border-lite border-Gray-500 bg-Stone-50 -mr-1.5 flex items-center justify-center"></div>
              <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 transition-all duration-300 dark:border-Slate-900 bg-Orange-500 -mr-1.5 flex items-center justify-center"></div>
              <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 transition-all duration-300 dark:border-Slate-900 bg-Yellow-400 -mr-1.5 flex items-center justify-center"></div>
              <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 transition-all duration-300 dark:border-Slate-900 bg-Indigo-600 -mr-1.5 flex items-center justify-center"></div>
              <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 transition-all duration-300 dark:border-Slate-900 bg-Orange-700 -mr-1.5 flex items-center justify-center"></div>
            </div>
          </div>
          <div class="text-Slate-800 transition-all duration-300 dark:text-lite text-xs mb-2 md:text-base">${products.title}</div>
          <div class="text-[#DE3618] font-bold text-left text-xs mt-2 mb-3">${products.price} تومان</div>
          <hr class="transition-all duration-300 dark:text-Slate-700">
          <button class="w-full font-bold text-Orange-600 mt-2 md:text-lg">مشاهده و سفارش</button>
        </div>
      `;
      cards += cardstemplate;
    }
    if (products.category == "laptop") {
      let cardstemplate = `
      <div class="index relative bg-Stone-50 transition-all duration-300 dark:bg-Slate-900  rounded-xl p-2 shadow" data-price="${products.priceEng}" data-index="${products.star}">
        <div class="mb-6 bg-Gray-200 transition-all duration-300 dark:bg-Slate-700  rounded-xl pb-7 items-center">
          <img src="${products.image}" alt="" class="w-48 mx-auto">
        </div>
        <div class="flex items-center justify-between w-full mb-4">
            <span class="text-Slate-700 transition-all duration-300 dark:text-lite text-xs">اپل</span>
            <div class="flex items-center">
            <div class="w-5 h-5 rounded-full cursor-pointer border-2 transition-all duration-300 dark:border-lite border-Gray-500 bg-Stone-50 -mr-1.5 flex items-center justify-center"></div>
              <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 transition-all duration-300 dark:border-Slate-900  bg-Orange-500 -mr-1.5 flex items-center justify-center"></div>
              <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 transition-all duration-300 dark:border-Slate-900  bg-Yellow-400 -mr-1.5 flex items-center justify-center"></div>
              <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 transition-all duration-300 dark:border-Slate-900  bg-Indigo-600 -mr-1.5 flex items-center justify-center"></div>
              <div class="w-5 h-5 rounded-full cursor-pointer border-2 border-Stone-50 transition-all duration-300 dark:border-Slate-900  bg-Orange-700 -mr-1.5 flex items-center justify-center"></div>
            </div>
        </div>
        <div class="text-Slate-800 text-xs mb-2 md:text-base transition-all duration-300 dark:text-lite">${products.title}</div>
        <div class="text-[#DE3618] font-bold text-left text-xs mt-2 mb-3">${products.price} تومان</div>
        <div class="w-full 2xl:absolute bottom-3">
        <hr class="ml-4 transition-all duration-300 dark:text-Slate-700">
        <button class="w-full font-bold text-Orange-600 mt-2 md:text-lg">مشاهده و سفارش</button>
        </div>
      </div>
      `;
      cards += cardstemplate;
    }
  });

  productBox.insertAdjacentHTML("beforeend", cards);
}

AddProductToHTML(products);

// filter
const filterBtn = document.querySelectorAll(".filterBtn");
const badge = document.querySelectorAll(".badge");

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", () => {
    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].classList.remove("text-Slate-800");
      filterBtn[i].classList.remove("dark:text-lite");
      filterBtn[i].classList.remove("font-bold");
      badge[i].classList.add("hidden");
    }
    filterBtn[i].classList.toggle("font-bold");
    filterBtn[i].classList.toggle("text-Slate-800");
    filterBtn[i].classList.toggle("dark:text-lite");
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
    chevrown[i].classList.toggle("rotate-180");
  });
}

// base sort
const bestsellingBtn = document.querySelector(".bestsellingBtn");
bestsellingBtn.onclick = function () {
  productBox.innerHTML = "";
  AddProductToHTML(products);
};


// popular
const mostPopularBtn = document.querySelector(".mostPopularBtn");
mostPopularBtn.onclick = function () {
  var productsArray = [...products];
  let sorted = productsArray.sort((a, b) => a.star - b.star).reverse();

  productBox.innerHTML = "";
  AddProductToHTML(sorted);
};

// cheapest
const cheapestBtn = document.querySelector(".cheapestBtn");
cheapestBtn.onclick = function () {
  var productsArray = [...products];
  let sorted = productsArray.sort((a, b) => a.priceEng - b.priceEng);

  productBox.innerHTML = "";
  AddProductToHTML(sorted);
};
// ---------------------------------

// Expensive
const mostExpensiveBtn = document.querySelector(".mostExpensiveBtn");
mostExpensiveBtn.onclick = function () {
  var productsArray = [...products];
  let sorted = productsArray.sort((a, b) => a.priceEng - b.priceEng).reverse();

  productBox.innerHTML = "";
  AddProductToHTML(sorted);
};

// dark mode
const toggleDarkModeBtn = document.getElementById("toggleDarkMode");

toggleDarkModeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

const mobileCategoryBtn = document.querySelectorAll(".mobileCategoryBtn");
const mobileCategoryTitle = document.querySelectorAll(".mobileCategoryTitle");

for (let i = 0; i < mobileCategoryBtn.length; i++) {
  mobileCategoryBtn[i].addEventListener("click", () => {
    for (let i = 0; i < mobileCategoryBtn.length; i++) {
      mobileCategoryTitle[i].classList.add("hidden");
    }
    mobileCategoryTitle[i].classList.toggle("hidden");
  });
}

const filterMobileBtn = document.querySelector(".filterMobileBtn");
const mobileFilterBox = document.querySelector("#mobileFilterBox");

filterMobileBtn.addEventListener("click", () => {
  mobileFilterBox.classList.replace("hidden", "block");
});

const mobileFilterCloseBtn = document.querySelector(".mobileFilterCloseBtn");

mobileFilterCloseBtn.addEventListener("click", () => {
  mobileFilterBox.classList.replace("block", "hidden");
});

const mapBtn = document.querySelector(".mapBtn");
const mapBox = document.querySelector(".mapBox");

mapBtn.addEventListener("click", () => {
  mapBox.classList.replace("hidden", "fixed");
});

const mapCloseBtn = document.querySelector(".mapCloseBtn");

mapCloseBtn.addEventListener("click", () => {
  mapBox.classList.replace("fixed", "hidden");
});

let zoomArr = [0.5, 0.75, 0.85, 0.9, 1, 1.2, 1.5];

var element = document.querySelector(".picture");
let value = element.getBoundingClientRect().width / element.offsetWidth;

let indexofArr = 4;

var zoomIn = document.querySelector(".zoomIn");
zoomIn.addEventListener("click", () => {
  if (indexofArr < zoomArr.length - 1) {
    indexofArr += 1;
    value = zoomArr[indexofArr];
    document.querySelector("#sel").value = value;
    element.style["transform"] = `scale(${value})`;
  }
});

var zoomOut = document.querySelector(".zoomOut");
zoomOut.addEventListener("click", () => {
  if (indexofArr > 0) {
    indexofArr -= 1;
    value = zoomArr[indexofArr];
    document.querySelector("#sel").value = value;
    element.style["transform"] = `scale(${value})`;
  }
});