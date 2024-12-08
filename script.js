// 简单示例：根据滚动位置高亮当前导航
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.side-nav a');

    let currentSectionId = '';
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // 检测此Section的顶部是否在当前视口中（如rect.top位于0到一屏高度内）
        if(rect.top >= 0 && rect.top < window.innerHeight) {
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
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('.page');
    const sectionCount = sections.length;

    // find the section
    let currentIndex = 0;
    sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
            currentIndex = i;
        }
    });

    //Keyborad event: space and up and down
    if ((e.key === ' ' || e.key === 'ArrowDown') && currentIndex < sectionCount - 1) {
        sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
});

