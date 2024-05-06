document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.querySelector('a[href="#about"]');
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});

    // انتظر حتى تحميل الصفحة
    window.addEventListener('DOMContentLoaded', function () {
        // احصل على جميع العناصر التي تحتوي على الفئة num
        var counters = document.querySelectorAll('.num');
        
        // لكل عنصر في العدادات
        counters.forEach(function (counter) {
            var target = +counter.getAttribute('data-count'); // القيمة المستهدفة للعداد
            var count = 0; // القيمة الحالية للعداد
            var step = Math.ceil(target / 100); // المرحلة التي ستزيد بها القيمة
            var interval = setInterval(function () {
                count += step; // زيادة القيمة
                if (count >= target) { // تحقق مما إذا كانت القيمة تجاوزت الهدف
                    clearInterval(interval); // إيقاف العداد
                    count = target; // تعيين القيمة النهائية
                }
                counter.textContent = count; // عرض القيمة في العنصر
            }, 1000); // كل 10 مللي ثانية
        });
    });

