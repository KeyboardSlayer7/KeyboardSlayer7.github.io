const observer = new IntersectionObserver((entries) => {    
    entries.forEach((entry) => {    
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('animated')){
                entry.target.classList.add('in-view');
                entry.target.classList.remove('out-view');
            }
            else if (entry.target.classList.contains('hide')){
                entry.target.classList.add('show');
            }
        } else {
            if (entry.target.classList.contains('animated')){
                entry.target.classList.add('out-view');
                entry.target.classList.remove('in-view');
            }
            else if (entry.target.classList.contains('show')){
                entry.target.classList.remove('show');
            }
        }
    }); 
}, {threshold: 0.5});

const hidden = document.querySelectorAll('.animated');
hidden.forEach((element) => {
    observer.observe(element);
});

const other_hidden = document.querySelectorAll('.hide');
other_hidden.forEach((element) => {
    observer.observe(element);
});