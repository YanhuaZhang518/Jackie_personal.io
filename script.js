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

document.addEventListener('keydown', (e) => {
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('.page');
    const sectionCount = sections.length;

    // 找到当前处于视口的section序号
    let currentIndex = 0;
    sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
            currentIndex = i;
        }
    });

    // 根据按键决定翻页方向
    // 空格键（keyCode=32）、向下键（keyCode=40）都触发下一页
    // 向上键（keyCode=38）触发上一页
    if ((e.key === ' ' || e.key === 'ArrowDown') && currentIndex < sectionCount - 1) {
        sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
});

