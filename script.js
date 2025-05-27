document.querySelectorAll('.faq__items').forEach((element) => {
    element.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('opener');
    });
});