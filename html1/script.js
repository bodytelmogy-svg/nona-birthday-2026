// تحريك وإخفاء العناصر باستخدام مكتبة TweenMax
TweenMax.to("#bow", 0.3, {
    scaleX: 1,
    transformOrigin: "right center"
});

TweenMax.to(".arrow-angle use", 0.3, { opacity: 0 });
TweenMax.to("#arc", 0.2, { opacity: 0 });

// إظهار الكعكة
const cake = document.querySelector('#cake');
cake.style.opacity = '1';
cake.style.animation = 'fade-in 2s forwards';
cake.style.animationDelay = '1s';

// إظهار زر اضغط هنا
const clickBtn = document.querySelector('#clickBtn');
setTimeout(() => {
    clickBtn.classList.add('show-btn');
}, 3000);

// العناصر الخاصة بالجواب والرسالة
const cardScreen = document.querySelector('#cardScreen');
const envelopeScreen = document.querySelector('#envelopeScreen');
const envelope = document.querySelector('#envelope');
const letter = document.querySelector('#letter');

// عند الضغط على "اضغط هنا" -> ننسحب للشاشة الثانية ونظهر الجواب المقفول
clickBtn.addEventListener('click', () => {
    cardScreen.classList.add('hidden');
    envelopeScreen.classList.remove('hidden');
});

// عند الضغط على الجواب المقفول -> يختفي الجواب وتظهر الرسالة (الـ p)
envelope.addEventListener('click', () => {
    envelope.classList.add('hidden');
    letter.classList.remove('hidden');
});