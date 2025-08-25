import Swiper from 'swiper';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

document.addEventListener("DOMContentLoaded", () => {
  const keySwiper = new Swiper(".js-swiper", {
    modules: [Navigation, EffectCoverflow],
    direction: "vertical",
    slidesPerView: 3,
    slidesPerGroup: 1,
     resistanceRatio: 0,      
    spaceBetween: 14,
 loop:true,

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
    keySwiper.slidePrev();
  });

  document.querySelector('.key-btn-down').addEventListener('click', () => {
    keySwiper.slideNext();
  });
});
