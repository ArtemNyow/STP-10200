import Swiper from 'swiper';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

document.addEventListener('DOMContentLoaded', () => {
  const levelSwiper = new Swiper('.js-swiper-level', {
    modules: [Navigation, EffectCoverflow],
    direction: 'vertical',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,

    loop: true,

    navigation: {
      nextEl: '.js-user-swiper-button-next',
      prevEl: '.js-user-swiper-button-prev',
    },

    breakpoints: {
      1200: {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 26,
      },
    },
  });
});
