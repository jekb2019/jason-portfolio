const SCROLL_TO_VIEW_OFFSET = 100;

export function scrollIntoView(anchorId: string) {
  const element = document.querySelector(`[data-anchor=${anchorId}]`);
  if (element) {
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      SCROLL_TO_VIEW_OFFSET * -1;
    console.log(y);
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
