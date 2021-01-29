import { constructHTML } from './construct-html';
import { v4 as uuid } from 'uuid';

// Be sure that parent of element to which you applies an overlay has position: relative
export const createOverlay = (element, meta) => {
  // Loop through products array (each item has position and content data)
  meta.products.forEach(product => {
    const { top, left, width, height, content, modalContent, tooltipText } = product;

    const styles = {
      position: 'absolute',
      top,
      left,
      width,
      height
    }

    const id = uuid(); // Generate custom id for modals
    const subElements = [];

    // Construct an opener for a modal window
    const modalOpener = constructHTML({
      tag: 'a',
      className: 'open-modal',
      attrs: `href=#${id}`,
      styles: { position: 'absolute', height: '100%', width: '100%', top: 0, left: 0 }
    });
    subElements.push(modalOpener);

    // Construct a modal window content
    const modalWindow = constructHTML({
      tag: 'div',
      className: 'modal-content',
      attrs: `id=${id}`,
      content: modalContent
    });
    subElements.push(modalWindow);


    // Construct a tooltip element if exists
    if (tooltipText) {
      const tooltip = constructHTML({
        tag: 'div',
        className: 'tooltip',
        attrs: `id=tooltip-${id}`,
        content: tooltipText
      });
      subElements.push(tooltip);
    }


    // Use constructHTML to combine modal opener and window
    const overlayWrapper = constructHTML({
      tag: 'div',
      content, styles,
      attrs: `id=popcorn-${id}`,
      className: 'overlay-item',
      subContent: subElements
    });

    element.append(overlayWrapper);
  });
};
