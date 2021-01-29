export const mfpInit = (selector) => {
  const element = $(selector);
  element.length && element.magnificPopup();
}
