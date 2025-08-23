import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener("DOMContentLoaded", () => {
  const keySwiper = new Swiper(".swiper", {
    modules: [Navigation, Mousewheel],
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 14,
    navigation: false, 
      mousewheel: true,
   


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
