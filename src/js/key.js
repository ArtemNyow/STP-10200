import Swiper from 'swiper';
import { Navigation, Mousewheel, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

document.addEventListener("DOMContentLoaded", () => {
  const keySwiper = new Swiper(".swiper", {
    modules: [Navigation, Mousewheel, EffectCoverflow],
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 20,
    // centeredSlides: true, 
    mousewheel: true,
    // loop: true, 
    // effect: 'coverflow', // дає ефект «розмитих» країв
    // coverflowEffect: {
    //   rotate: 0,      // поворот слайдів
    //   stretch: 0,     // відстань між слайдами
    //   depth: 100,     // ефект глибини
    //   modifier: 1,
    //   slideShadows: false,
    // },

    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 14,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  document.querySelector('.key-btn-up').addEventListener('click', () => {
    keySwiper.slidePrev();
  });

  document.querySelector('.key-btn-down').addEventListener('click', () => {
    keySwiper.slideNext();
  });
});
