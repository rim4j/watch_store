import {
  cheapestProductsUrl,
  mostExpensiveProductsUrl,
  mostViewedProductsUrl,
  newestProductsUrl,
} from "./url";

export const AppStrings = {
  replace: "replace",
  enterYourNumber: "شماره خود را وارد کنید",
  hintPhoneNumber: "مثل :  09121114466",
  sendOtpCode: "ارسال کد فعال سازی",
  wrongNumberEditNumber: "شماره اشتباه است/ ویرایش شماره",
  enterVerificationCode: "کد فعال سازی را وارد کنید",
  hintVerificationCode: "- - - - - -",
  next: "ادامه",

  otpCodeSendFor: "کد فعال سازی برای $replace ارسال شد",
  register: "ثبت نام ",
  chooseProfileImage: "انتخاب تصویر پروفایل",
  nameLastName: "نام و نام خانوادگی",
  homeNumber: "تلفن ثابت",
  sendToAddress: "ارسال به آدرس",
  address: "آدرس",
  postalCode: "کد پستی",
  location: "انتخاب موقعیت مکانی",
  hintNameLastName: "نام و نام خانوادگی خود را با حروف فارسی وارد کنید",
  hintHomeNumber: "شماره تلفن ثابت را با پیش شماره وارد بفرمایید",
  hintAddress: "آدرس پستی خود را وارد کنید",
  hintPostalCode: "کد پستی  10 رقمی خود را وارد کنید",
  hintLocation: "برای انتخاب موقعیت مکانی ضربه برنید",
  searchProduct: "جستجوی محصولات",
  classic: "کلاسیک",
  smart: "هوشمند",
  digital: "دیجیتال",
  desktop: "رو میزی",
  viewAll: "مشاهده همه",
  amazing: "شگفت انگیز",
  home: "خانه",
  basket: "سبد خرید",
  profile: "پروفایل",
  topSells: "پرفروش‌ها",
  newestProduct: "جدیدترین محصولات",
  features: "خصوصیات",
  review: "نقد و بررسی",
  commnets: "نظرات",
  addToBasket: "افزودن به سبد خرید",
  count: "عدد",
  totalPrice: "مجموع  $replace تومان",
  continueToPurchase: "مجموع  $replace تومان",
  userProfile: "پروفایل کاربر",
  activeAddress: "آدرس فعال",
  termOfService: "قوانین و مقررات",
  inProccess: "درحال پردازش",
  cancelled: "لغو شده",
  delivered: "تحویل شده",
  lurem: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
  detailsWatch:
    "تخصصی ترین مرجع خرید ساعت مچیِ های کپی و اصلی با سابقه‌‌ی کاری طولانی مدت | امکان خرید اقساطی و خرید آنی | تضمین بهترین قیمت محصولات و کامل ترین خدمات را از میراکو بخواهید. | ارائه دهنده‌ی ضمانتنامه‌ی کتبی و ضمانت تعویض پس از دریافت | مشاوره‌ی رایگان، جامع و موشکافانه در مورد صنعت ساعت مچی ",
  timeShop:
    "از شنبه تا پنجشنبه ، 11 صبح الی 8 شب پاسخگوی شما هستیم. (بغیر از ایام تعطیل)",
};

export const accordionData = [
  {
    title: "آیا ساعت های مچی گارانتی دارند؟",
    content:
      "بله، ساعت‌های مچی دارای گارانتی معتبر هستند. این گارانتی شامل مواردی مانند خرابی‌های مکانیکی و مشکلات تولیدی می‌شود. با خرید از فروشگاه میراکو، می‌توانید از خدمات پس از فروش و پشتیبانی قوی این فروشگاه بهره‌مند شوید.",
  },
  {
    title: "آیا امکان خرید اقساطی ساعت وجود دارد؟",
    content:
      "بله. فروشگاه با همکاری اسنپ پی امکان خرید اقساطی ساعت مچی را برای مشتریان خود فراهم کرده است. با استفاده از این سرویس، شما می‌توانید ساعت مچی مورد نظر خود را به صورت اقساطی و بدون نیاز به ضامن یا کارمزد خریداری کنید.",
  },
];

export const productsReview = [
  {
    title: "جدید ترین محصولات",
    url: newestProductsUrl,
  },
  {
    title: "ارزان ترین محصولات",
    url: cheapestProductsUrl,
  },
  {
    title: "پر بازدید ترین محصولات",
    url: mostViewedProductsUrl,
  },
  {
    title: "گران ترین محصولات",
    url: mostExpensiveProductsUrl,
  },
];
