document.addEventListener("DOMContentLoaded", (event) => {
  let shareBtn = document.querySelector('.shareBtn');

  shareBtn.addEventListener('click', function() {
    let shareLinkWrap = document.querySelector('.shareLinkWrap');
    this.classList.toggle('active');
    shareLinkWrap.classList.toggle('show');
  });
});