import swiper from 'swiper';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

document.addEventListener("DOMContentLoaded", () => {
  const keyswiper = new swiper(".js-swiper", {
    modules: [Navigation, EffectCoverflow],
    direction: "vertical",
    slidesPerView: 3,
    slidesPerGroup: 1,
     resistanceRatio: 0,      
    spaceBetween: 14,

    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 14,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 14,
      },
    },
  });

  document.querySelector('.key-btn-up').addEventListener('click', () => {
    keyjs-swiper.slidePrev();
  });

  document.querySelector('.key-btn-down').addEventListener('click', () => {
    keyjs-swiper.slideNext();
  });
});
