let question=document.querySelectorAll('.question')
let answer=document.querySelectorAll('.answer')


question.forEach((button, index) => {
    button.addEventListener('click', () => {
        const content = answer[index];
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});