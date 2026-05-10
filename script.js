const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');
const openHint = document.getElementById('openHint');
const giftBtn = document.getElementById('giftBtn');
const giftModal = document.getElementById('giftModal');
const giftModalClose = document.getElementById('giftModalClose');

const isTouchOnly = window.matchMedia('(hover: none)').matches;

if (isTouchOnly) {
    envelope.addEventListener('click', () => {
        if (!envelope.classList.contains('is-open')) {
            envelope.classList.add('is-open');
            heartSeal.style.opacity = 0;
            heartSeal.style.animationPlayState = 'paused';
            if (openHint) openHint.style.display = 'none';
        }
    });
} else {
    let timeoutId;

    envelope.addEventListener('mouseover', () => {
        clearTimeout(timeoutId);
        heartSeal.style.opacity = 0;
        heartSeal.style.animationPlayState = 'paused';
    });

    envelope.addEventListener('mouseout', () => {
        timeoutId = setTimeout(() => {
            heartSeal.style.opacity = 1;
            heartSeal.style.animationPlayState = 'running';
        }, 1500);
    });
}

function openGiftModal(e) {
    e.stopPropagation();
    e.preventDefault();
    giftModal.classList.add('open');
}

giftBtn.addEventListener('click', openGiftModal);
giftBtn.addEventListener('touchend', openGiftModal);

giftModalClose.addEventListener('click', () => {
    giftModal.classList.remove('open');
});

giftModal.addEventListener('click', (e) => {
    if (e.target === giftModal) giftModal.classList.remove('open');
});
