// 简单示例：根据滚动位置高亮当前导航
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.side-nav a');
    let currentIndex = 0;

    sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        // 当section的顶部在视口内时，高亮相应链接
        if(rect.top >= 0 && rect.top < window.innerHeight) {
            currentIndex = i;
        }
    });

    navLinks.forEach((link, i) => {
        if(i === currentIndex) {
            link.style.color = "red";
        } else {
            link.style.color = "#333";
        }
    });
});
