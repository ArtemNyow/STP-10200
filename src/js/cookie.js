document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('js-cookie-banner');
  const choice = localStorage.getItem('cookieChoice');

  if (!choice) {
    banner.classList.add('show');
  }

  document.getElementById('js-accept-cookies').addEventListener('click', () => {
    localStorage.setItem('cookieChoice', 'accepted');
    banner.classList.remove('show');
  });

  document
    .getElementById('js-decline-cookies')
    .addEventListener('click', () => {
      localStorage.setItem('cookieChoice', 'declined');
      banner.classList.remove('show');
    });
});
