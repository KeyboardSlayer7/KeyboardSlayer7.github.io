const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add('showing');
        } else {
        entry.target.classList.remove('showing');
        }
    });
});

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((element) => {
    observer.observe(element);
});