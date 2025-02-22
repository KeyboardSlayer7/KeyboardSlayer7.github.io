const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('hidden')){
                entry.target.classList.add('showing');
            }
            else if (entry.target.classList.contains('hide')){
                entry.target.classList.add('show');
            }
        } else {
            if (entry.target.classList.contains('showing')){
                entry.target.classList.remove('showing');
            }
            else if (entry.target.classList.contains('show')){
                entry.target.classList.remove('show');
            }
        }
    });
});

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((element) => {
    observer.observe(element);
});

const other_hidden = document.querySelectorAll('.hide');
other_hidden.forEach((element) => {
    observer.observe(element);
});