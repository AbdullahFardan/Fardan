// تفعيل التحريك باستخدام مكتبة AOS
AOS.init({
    duration: 1000, // مدة التحريك (بالمللي ثانية)
    once: true, // التحريك يحدث مرة واحدة فقط
});

// اختيار اللغة وتبديل المحتوى
function setLanguage(lang) {
    if (lang === 'ar') {
        document.getElementById('content-ar').style.display = 'block';
        document.getElementById('content-en').style.display = 'none';
        document.getElementById('language-selection').style.display = 'none';
    } else if (lang === 'en') {
        document.getElementById('content-en').style.display = 'block';
        document.getElementById('content-ar').style.display = 'none';
        document.getElementById('language-selection').style.display = 'none';
    }
}

// تفعيل تحميل الصور والعناصر بشكل كسول (Lazy Loading)
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = [].slice.call(document.querySelectorAll("img[loading='lazy'], iframe[loading='lazy']"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src || lazyImage.src;
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // إذا لم تكن المتصفح يدعم IntersectionObserver، نقوم بتحميل الصور فورًا
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src || lazyImage.src;
        });
    }
});

// تحسين أداء التمرير (Debouncing Scroll Event)
let isScrolling;
window.addEventListener('scroll', function () {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
        // قم بإضافة الأكواد هنا إذا كنت ترغب في تفعيل حدث معين بعد انتهاء التمرير
    }, 200);
});
