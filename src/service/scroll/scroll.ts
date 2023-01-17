export function scrollIntoView(anchorId: string) {
  const element = document.querySelector(`[data-anchor=${anchorId}]`);
  element && element.scrollIntoView({ behavior: 'smooth' });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
