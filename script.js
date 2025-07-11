document.addEventListener('DOMContentLoaded', () => {
    const expandAllBtn = document.getElementById('expand-all');
    const collapseAllBtn = document.getElementById('collapse-all');
    const detailsElements = document.querySelectorAll('.lesson-part');

    // 모두 펼치기
    expandAllBtn.addEventListener('click', () => {
        detailsElements.forEach(details => {
            details.open = true;
        });
    });

    // 모두 접기
    collapseAllBtn.addEventListener('click', () => {
        detailsElements.forEach(details => {
            details.open = false;
        });
    });

    // CSS 애니메이션을 위한 로직 (이미 CSS에서 transition으로 처리됨)
    // JS는 버튼 기능만 담당하도록 단순화했습니다.
    // HTML의 <details>와 CSS의 transition만으로도 충분히 좋은 효과를 낼 수 있습니다.
});