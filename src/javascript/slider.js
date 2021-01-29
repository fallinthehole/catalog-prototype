import { meta as mockedMeta } from './constants/mocked-meta';
import { createOverlay } from './utils/create-overlay';
import { mfpInit } from './utils/mfp-init';


const generateOverlays = (slick) => {
  const slides = $(slick.target).find('.slick-slide').find('.slide');

  // Each slide has his own data-page attr and it's being used to map slide with product information from the backend
  slides.each((i, slide) => {
    const htmlSlide = $(slide);
    const dataPage = htmlSlide.attr('data-page');
    const meta = mockedMeta.find(item => item.page === +dataPage);

    // Then create a custom overlay for current slide
    meta && createOverlay(htmlSlide, meta);

    // Initialize popup only if all slides are processed
    (i + 1) == slides.length && mfpInit('.open-modal');
  });
}


export const initSlider = element => {
  const htmlElement = $(element);

  // Initialize overlays after slick slider being initialized
  htmlElement.on('init', generateOverlays);

  // Slider configuration
  htmlElement.slick({
    adaptiveHeight: true,
    slidesToShow: 2,
    lazyLoad: 'ondemand'
  });
};
