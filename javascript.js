(function() {
    'use strict';

    // ==========================================
    // 1. تبديل الوضع (Dark / Light)
    // ==========================================
    const toggleBtn = document.getElementById('themeToggle');
    const icon = toggleBtn.querySelector('i');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    toggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        icon.classList.replace(isDark ? 'fa-sun' : 'fa-moon', isDark ? 'fa-moon' : 'fa-sun');
    });

    // ==========================================
    // 2. زر العودة إلى الأعلى
    // ==========================================
    const backBtn = document.getElementById('backTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backBtn.style.display = 'block';
        } else {
            backBtn.style.display = 'none';
        }
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==========================================
    // 3. تأثيرات الظهور عند التمرير (Fade-up)
    // ==========================================
    const fadeElements = document.querySelectorAll('.fade-up');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // ==========================================
    // 4. تحميل السيرة الذاتية (CV)
    // ==========================================
    document.getElementById('downloadCV').addEventListener('click', (e) => {
        e.preventDefault();
        alert('سيتم تحميل السيرة الذاتية (CV) قريباً. يمكنك إضافة ملف PDF في مجلد files/CV.pdf');
    });

    // ==========================================
    // 5. نموذج التواصل
    // ==========================================
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('شكراً لتواصلك! سيتم الرد في أقرب وقت.');
        e.target.reset();
    });

    // ==========================================
    // 6. تفعيل أشرطة التقدم عند التمرير
    // ==========================================
    const progressFills = document.querySelectorAll('.progress-fill');

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const targetWidth = fill.style.width; // حفظ العرض المستهدف
                fill.style.width = '0%'; // إعادة التعيين للصفر
                setTimeout(() => {
                    fill.style.width = targetWidth; // تطبيق العرض المستهدف
                }, 100);
            }
        });
    }, { threshold: 0.3 });

    progressFills.forEach(el => progressObserver.observe(el));

})();