document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.side-nav a');

    let currentSectionId = '';
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // 判断当前section是否在视口中间（0 到窗口高度之间）
        if (rect.top >= 0 && rect.top < window.innerHeight) {
            currentSectionId = section.id;
        }
    });

    navLinks.forEach((link) => {
        // 移除所有链接的active状态
        link.classList.remove('active');
        // 如果链接的data-section与当前section的id相同，则高亮
        if (link.dataset.section === currentSectionId) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('keydown', (e) => {
    const sections = document.querySelectorAll('.page');
    const sectionCount = sections.length;
    let currentIndex = 0;

    sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
            currentIndex = i;
        }
    });

    // 按键: 空格或下方向键滚动下一页，上方向键滚动上一页
    if ((e.key === ' ' || e.key === 'ArrowDown') && currentIndex < sectionCount - 1) {
        sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
});
