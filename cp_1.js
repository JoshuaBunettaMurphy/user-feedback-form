let form = document.getElementById('feedbackForm');
let feedbackDisplay = document.getElementById('feedbackDisplay');
let inputs = form.querySelectorAll('input, textarea');
let comments = document.getElementById('comments');
let charcount = document.getElementById('charCount');

let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

comments.addEventListener('input', () => {
    charcount.textContent = `Character count: ${comments.value.length}`;
});

form.addEventListener('mouseover', (e) => {
    if (e.target.dataset.tooltip) {
        tooltip.textContent = e.target.dataset.tooltip;
        tooltip.style.display = 'block';

    let rect = e.target.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX + 10}px`;
        tooltip.style.top = `${rect.top + window.scrollY + 10}px`;
    }
});

form.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '2px solid red';
            valid = false;
        } else {
            input.style.border = '';
        }
    });

if (!valid) return;

 let name = document.getElementById('Username').value;
 let email = document.getElementById('Email').value;
 let comment = comments.value;

let feedbackItem = document.createElement('div');
feedbackItem.innerHTML = `<p><strong>${name}</strong> (${email}): ${comment}</p>`;
feedbackDisplay.appendChild(feedbackItem);
form.reset();

charcount.textContent = 'Character count: 0';
});

form.addEventListener('focus', (e) => {
    console.log(`Focus is on: ${e.target.name}`);
});

document.body.addEventListener('click', () => {
    console.log('Body clicked');
});

form.addEventListener('click', (e) => {
    e.stopPropagation();
});
