const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');
const giftBtn = document.getElementById('giftBtn');
const giftModal = document.getElementById('giftModal');
const giftModalClose = document.getElementById('giftModalClose');

let timeoutId;

envelope.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
    heartSeal.style.opacity = 0;
});

envelope.addEventListener('mouseout', () => {
    timeoutId = setTimeout(() => {
        heartSeal.style.opacity = 1;
    }, 1500);
});

giftBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    giftModal.classList.add('open');
});

giftModalClose.addEventListener('click', () => {
    giftModal.classList.remove('open');
});

giftModal.addEventListener('click', (e) => {
    if (e.target === giftModal) giftModal.classList.remove('open');
});
