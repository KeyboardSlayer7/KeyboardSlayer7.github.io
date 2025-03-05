let current_section_index = 0;
const sections = document.querySelectorAll("section[id]");

console.log(sections);

const observer = new IntersectionObserver((entries) => {    
    entries.forEach((entry) => {    
        if (entry.isIntersecting) 
        {
            if (entry.target.classList.contains('animated'))
            {
                entry.target.classList.add('in-view');
                entry.target.classList.remove('out-view');
            }
            else if (entry.target.classList.contains('hide'))
            {
                entry.target.classList.add('show');
            }
            
            current_section_index = Array.from(sections).indexOf(entry.target);
            updateScrollIndicator();
        } 
        else 
        {
            if (entry.target.classList.contains('animated'))
            {
                entry.target.classList.add('out-view');
                entry.target.classList.remove('in-view');
            }
            else if (entry.target.classList.contains('show'))
            {
                entry.target.classList.remove('show');
            }
        }
    }); 
}, {threshold: 0.5});

const previous_section = document.getElementById('previous');
const current_section = document.getElementById('current');
const next_section = document.getElementById('next');

function updateScrollIndicator()
{
    previous_section.textContent = sections[current_section_index - 1] ? sections[current_section_index - 1].id : '';
    current_section.textContent = sections[current_section_index].id;
    next_section.textContent = sections[current_section_index + 1] ? sections[current_section_index + 1].id : '';
}

updateScrollIndicator();

const hidden = document.querySelectorAll('.animated');
hidden.forEach((element) => {
    observer.observe(element);
});

const other_hidden = document.querySelectorAll('.hide');
other_hidden.forEach((element) => {
    observer.observe(element);
});

sections.forEach((section) => {
    observer.observe(section);
});